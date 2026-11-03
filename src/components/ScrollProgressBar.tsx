import { usePageScrollProgress } from "../hooks/usePageScrollProgress";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function ScrollProgressBar() {
    const progress = usePageScrollProgress();
    const reduced = usePrefersReducedMotion();

    if (reduced) return null;

    return (
        <div
            className="pointer-events-none fixed top-16 right-0 left-0 z-50 h-px bg-white/10"
            aria-hidden
        >
            <div
                className="h-0.5 bg-linear-to-r from-secondary via-tertiary to-secondary"
                style={{ width: `${progress * 100}%` }}
            />
        </div>
    );
}
