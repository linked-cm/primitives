import * as React from 'react';
import style from './SkeletonLoader.module.css';

interface SkeletonLoaderProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
  lines?: number;
  animated?: boolean;
}

export function SkeletonLoader({
  width = '100%',
  height = 18,
  borderRadius = 4,
  className = '',
  lines = 1,
  animated = true,
}: SkeletonLoaderProps) {
  if (lines === 1) {
    return (
      <div
        className={`${style.skeleton} ${animated ? style.animated : ''} ${className}`}
        style={{
          width,
          height,
          borderRadius,
        }}
      />
    );
  }

  return (
    <div className={className}>
      {Array.from({ length: lines }, (_, index) => (
        <div
          key={index}
          className={`${style.skeleton} ${animated ? style.animated : ''} ${index < lines - 1 ? style.marginBottom : ''}`}
          style={{
            width: index === lines - 1 ? '60%' : '100%',
            height,
            borderRadius,
          }}
        />
      ))}
    </div>
  );
}

// Table row skeleton component
export function TableRowSkeleton({ columns = 5 }: { columns?: number }) {
  return (
    <tr className={style.tableRow}>
      <td className={style.tableCell} style={{ width: '48px' }}>
        <SkeletonLoader width={18} height={18} borderRadius={6} />
      </td>
      {Array.from({ length: columns }, (_, index) => (
        <td key={index} className={style.tableCell}>
          <SkeletonLoader width="18vw" height={18} />
        </td>
      ))}
      <td className={style.tableCell}>
        <div className={style.actionButtons}>
          <SkeletonLoader width={22} height={18} borderRadius={6} />
          <SkeletonLoader width={22} height={18} borderRadius={6} />
          <SkeletonLoader width={22} height={18} borderRadius={6} />
        </div>
      </td>
    </tr>
  );
}

export default SkeletonLoader;
