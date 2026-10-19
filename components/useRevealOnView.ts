'use client'

import { useEffect, useRef, useState } from "react";

type RevealOptions = {
    threshold?: number;
    rootMargin?: string;
};

export function useRevealOnView({ threshold = 0.18, rootMargin = "0px 0px -8% 0px" }: RevealOptions = {}) {
    const ref = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element || isVisible) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [isVisible, rootMargin, threshold]);

    return { ref, isVisible };
}