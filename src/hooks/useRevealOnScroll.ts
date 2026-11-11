import { useEffect } from 'react';

export function useRevealOnScroll() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    );
    if (!targets.length) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.setAttribute('data-reveal', 'visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-reveal', 'visible');
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -48px 0px',
      }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
