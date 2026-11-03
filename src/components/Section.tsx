import { useRef, type CSSProperties, type ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type Props = {
    id?: string;
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
    /** Hero e blocos acima da dobra: sem esperar o observer */
    eager?: boolean;
};

export default function Section({ id, className = "", style, children, eager = false }: Props) {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    const reduced = usePrefersReducedMotion();
    const visible = eager || reduced || inView;

    return (
        <section
            ref={ref}
            id={id}
            className={`section-enter scroll-mt-20${visible ? " section-enter--visible" : ""}${className ? ` ${className}` : ""}`}
            style={style}
        >
            {children}
        </section>
    );
}
