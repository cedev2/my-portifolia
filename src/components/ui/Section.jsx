import { motion } from 'framer-motion';

const Section = ({ id, className, children, delay = 0 }) => {
    return (
        <section
            id={id}
            className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden ${className || ''}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
