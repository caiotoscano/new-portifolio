import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedSection = ({ children }) => {
    const ref = useRef(null);


const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
});

const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0, 1, 1, 0]);
const y = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -200]);
const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

return (
    <motion.div ref = {ref} style = {{opacity, y, scale}}>
        {children}
    </motion.div>
);
};

export default AnimatedSection;