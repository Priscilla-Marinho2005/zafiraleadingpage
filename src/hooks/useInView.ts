import { useEffect, useState, type RefObject } from "react";

type Options = {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
};

export function useInView<T extends Element>(
    ref: RefObject<T | null>,
    { threshold = 0.12, rootMargin = "0px 0px -8% 0px", once = true }: Options = {},
) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setInView(false);
                }
            },
            { threshold, rootMargin },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [ref, threshold, rootMargin, once]);

    return inView;
}
