import { cn } from '@/lib/utils';

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={cn('brand-mark', className)} viewBox="0 0 32 32" fill="none">
      <path d="M3 27 15 3h5L8 27Zm16-17 11 17h-6L16 15Zm-8 10h12v4H9Z" fill="currentColor" />
    </svg>
  );
}

export function Brand({ className }: { className?: string }) {
  return (
    <a href="#top" aria-label="Avenlyo home" className={cn('brand', className)}>
      <BrandMark />
      <span>avenlyo</span>
    </a>
  );
}
