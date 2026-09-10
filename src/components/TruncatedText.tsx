import { Dialog } from './Dialog.js';
import { HoverCard } from './HoverCard.js';
import { IconButton } from './IconButton.js';
import React, { useState, useEffect } from 'react';

import style from './TruncatedText.module.css';


/**
 * Two inline glyphs rather than a dependency on an icon set.
 *
 * This component needs exactly two, and a library whose contract is "a behaviour source plus
 * a stylesheet" should not make every consumer install an icon package to draw a tick. They
 * inherit `currentColor`, so they follow the button they sit in.
 */
const CheckGlyph = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CopyGlyph = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
interface TruncatedTextProps {
  /** The full text content */
  text: string;
  /** Maximum number of characters to show before truncating (default: 80) */
  maxLength?: number;
}

/**
 * TruncatedText - Displays truncated text with hover/tap to show full content
 *
 * For long text fields, shows first N characters with ellipsis.
 * On desktop: hover displays full text in a popover with copy button.
 * On mobile: tap opens a dialog with full text and copy button.
 */
function TruncatedText({ text, maxLength = 80 }: TruncatedTextProps) {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for touch device or small screen
    const checkMobile = () => {
      const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
      setIsMobile(hasTouchScreen || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // If text is short enough, just render it directly
  if (!text || text.length <= maxLength) {
    return <span>{text || '-'}</span>;
  }

  const truncatedText = text.slice(0, maxLength) + '...';

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  // Mobile: Use Dialog triggered by tap
  if (isMobile) {
    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <span className={style.truncatedText}>{truncatedText}</span>
        </Dialog.Trigger>
        <Dialog.Content className={style.dialogContent}>
          <Dialog.Header>
            <Dialog.Title>Full Text</Dialog.Title>
          </Dialog.Header>
          <div className={style.dialogBody}>
            <div className={style.scrollArea}>
              <p className={style.fullText}>{text}</p>
            </div>
          </div>
          <div className={style.dialogFooter}>
            <IconButton
              size="small"
              variant="ghost"
              className={style.copyButton}
              onClick={handleCopy}
              aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
            >
              {copied ? (
                <CheckGlyph />
              ) : (
                <CopyGlyph />
              )}
            </IconButton>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    );
  }

  // Desktop: Use HoverCard triggered by hover
  return (
    <HoverCard.Root openDelay={300} closeDelay={200}>
      <HoverCard.Trigger asChild>
        <span className={style.truncatedText}>{truncatedText}</span>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          side="top"
          align="start"
          sideOffset={8}
          className={style.hoverContent}
        >
          <div className={style.contentWrapper}>
            <div className={style.scrollArea}>
              <p className={style.fullText}>{text}</p>
            </div>
            <div className={style.copyButtonWrapper}>
              <IconButton
                size="small"
                variant="ghost"
                className={style.copyButton}
                onClick={handleCopy}
                aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
              >
                {copied ? (
                  <CheckGlyph />
                ) : (
                  <CopyGlyph />
                )}
              </IconButton>
            </div>
          </div>
          <HoverCard.Arrow className={style.arrow} />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}

export { TruncatedText };
