import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';

const AnimatedSection = ({ children }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.16, 0.78, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.16, 0.78, 1], [0.98, 1, 1, 0.98]);

    return (
        <Motion.div
            ref={ref}
            style={{ opacity, scale }}
        >
            {children}
        </Motion.div>
    );
};

export default AnimatedSection;
