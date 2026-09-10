import * as React from 'react';
import {cl} from '@_linked/react/utils/ClassNames';
import {AlertDialog} from './AlertDialog.js';
import {Button} from './Button.js';
import style from './ConfirmDialog.module.css';

export interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  title: string;
  message: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  /**
   * `danger` for a destructive action. Not a colour — a statement about consequence, which
   * is what `--intent-danger-*` exists to express.
   */
  tone?: 'default' | 'danger';
  /** The confirm action is in flight: both buttons lock. */
  isLoading?: boolean;
  /** Withhold confirmation until the caller has something complete to confirm. */
  confirmDisabled?: boolean;
  /** Replaces the confirm label while loading. */
  loadingContent?: React.ReactNode;
  /** Wider layout, for multi-column content such as an impact preview. */
  wide?: boolean;
  className?: string;
}

/**
 * "Are you sure?" — a title, a message, and two buttons.
 *
 * A composition over `AlertDialog` rather than its own dialog. The hand-rolled version this
 * replaces built its own portal and its own backdrop, and in doing so had no focus trap, no
 * escape handling, no `aria-modal` and no restoration of focus on close — a confirmation
 * step that a keyboard or screen-reader user could not reliably complete, which is the worst
 * possible component to get wrong, since the whole point is guarding a destructive action.
 *
 * `alertdialog` semantics are the right ones here, not `dialog`: it interrupts, and it must
 * not be dismissed by clicking away.
 */
export function ConfirmDialog({
  open,
  onOpenChange,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  tone = 'default',
  isLoading = false,
  confirmDisabled = false,
  loadingContent,
  wide = false,
  className,
}: ConfirmDialogProps) {
  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialog.Content
        className={cl(style.Content, wide && style.wide, className)}
      >
        <AlertDialog.Header>
          <AlertDialog.Title>{title}</AlertDialog.Title>
          {/* A node, not only a string: callers pass a table of what is about to be
              deleted. Wrapping a string keeps typography consistent without forcing a
              caller with real content into a paragraph. */}
          <AlertDialog.Description asChild={typeof message !== 'string'}>
            {typeof message === 'string' ? message : <div>{message}</div>}
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel asChild>
            <Button variant="ghost" disabled={isLoading}>
              {cancelText}
            </Button>
          </AlertDialog.Cancel>
          {/* Not `AlertDialog.Action`: that closes on click, and a confirm which is still
              in flight — or which the caller has disabled — must not. The caller closes it
              by setting `open`. */}
          <Button
            className={cl(tone === 'danger' && style.danger)}
            onClick={onConfirm}
            disabled={isLoading || confirmDisabled}
          >
            {isLoading && loadingContent ? loadingContent : confirmText}
          </Button>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
