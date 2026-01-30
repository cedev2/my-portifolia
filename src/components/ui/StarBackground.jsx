import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        // Generate random stars
        const starCount = 50;
        const newStars = Array.from({ length: starCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute bg-blue-500 dark:bg-white rounded-full opacity-50 dark:opacity-60"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{
                        y: [0, -20, 0], // Gentle floating movement
                        opacity: [0.2, 0.8, 0.2], // Twinkling effect
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

export default StarBackground;
