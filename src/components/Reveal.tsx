import { useRef, type CSSProperties, type ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export type RevealVariant = "up" | "left" | "right" | "scale";

type Props = {
    children: ReactNode;
    className?: string;
    variant?: RevealVariant;
    /** Atraso em ms (útil para stagger em listas) */
    delay?: number;
    /** Visível imediatamente (ex.: hero acima da dobra) */
    eager?: boolean;
};

export default function Reveal({
    children,
    className = "",
    variant = "up",
    delay = 0,
    eager = false,
}: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    const reduced = usePrefersReducedMotion();
    const visible = eager || reduced || inView;

    const style =
        delay > 0 ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined;

    return (
        <div
            ref={ref}
            className={`reveal reveal--${variant}${visible ? " reveal--visible" : ""}${className ? ` ${className}` : ""}`}
            style={style}
        >
            {children}
        </div>
    );
}
