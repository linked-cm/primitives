import React, { useCallback, useRef, useState } from 'react';
import { cl } from '@_linked/react/utils/ClassNames';
import style from './ImageThumb.module.css';

interface ImageThumbProps {
  src: string;
  size?: number;
  hoverSize?: number;
  alt?: string;
  className?: string;
  /** If true, clicking opens a full-screen lightbox preview */
  clickToEnlarge?: boolean;
}

const ImageThumb: React.FC<ImageThumbProps> = ({
  src,
  size = 36,
  hoverSize = 280,
  alt = '',
  className = '',
  clickToEnlarge = true,
}) => {
  const [hover, setHover] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [hoverPos, setHoverPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const thumbRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (thumbRef.current) {
      const rect = thumbRef.current.getBoundingClientRect();
      // Position the hover preview to the right of the thumbnail,
      // but clamp so it doesn't overflow the viewport
      const left = Math.min(rect.right + 8, window.innerWidth - hoverSize - 16);
      const top = Math.max(
        8,
        Math.min(rect.top - hoverSize / 2 + size / 2, window.innerHeight - hoverSize - 16)
      );
      setHoverPos({ top, left });
    }
    setHover(true);
  }, [hoverSize, size]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (clickToEnlarge) {
        e.stopPropagation();
        setHover(false);
        setLightbox(true);
      }
    },
    [clickToEnlarge]
  );

  const closeLightbox = useCallback(() => {
    setLightbox(false);
  }, []);

  return (
    <>
      <span
        className={cl(style.root, className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setHover(false)}
      >
        <img
          ref={thumbRef}
          src={src}
          alt={alt}
          className={style.thumb}
          style={{ width: size, height: size }}
          onClick={handleClick}
          loading="lazy"
        />

        {/* Hover tooltip preview */}
        {hover && !lightbox && (
          <div
            className={cl(style.hoverPreview, hover && style.visible)}
            style={{
              top: hoverPos.top,
              left: hoverPos.left,
              width: hoverSize,
              height: hoverSize,
            }}
          >
            <img
              src={src}
              alt={alt}
              className={style.hoverPreviewImage}
              style={{ width: hoverSize, height: hoverSize }}
            />
          </div>
        )}
      </span>

      {/* Full-screen lightbox */}
      {lightbox && (
        <div className={style.previewOverlay} onClick={closeLightbox}>
          <div className={cl(style.previewBackdrop, style.visible)} />
          <img
            src={src}
            alt={alt}
            className={cl(style.previewImage, style.visible)}
          />
        </div>
      )}
    </>
  );
};

/** Small inline thumbnail for use inside chips, badges, and dropdown options */
export const InlineImageThumb: React.FC<{ src: string; alt?: string }> = ({
  src,
  alt = '',
}) => (
  <img src={src} alt={alt} className={style.inlineThumb} loading="lazy" />
);

export default ImageThumb;
