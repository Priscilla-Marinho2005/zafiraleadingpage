import { useRef, type ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type Props = {
    label?: string;
    className?: string;
    children: ReactNode;
};

export default function SectionLead({ label, className = "", children }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
    const reduced = usePrefersReducedMotion();
    const visible = reduced || inView;

    return (
        <div ref={ref} className={`section-lead${visible ? " section-lead--visible" : ""} ${className}`.trim()}>
            {label ? (
                <p className="text-sm font-medium tracking-[0.28em] text-secondary">{label}</p>
            ) : null}
            <span className="section-lead__rule" aria-hidden />
            <div className="section-lead__body">{children}</div>
        </div>
    );
}
