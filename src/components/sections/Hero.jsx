import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../constants/data';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-medium text-sm"
                >
                    👋 Hello, I'm a Cedrick Dev
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
                >
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Digital</span> <br />
                    Experiences
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    I am a passionate Full Stack Developer specializing in more than 5 Stack and modern web technologies. I transform complex problems into beautiful, intuitive, and performant solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors flex items-center gap-2 group"
                    >
                        View My Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] hover:border-blue-400 dark:hover:border-blue-400"
                    >
                        Contact Me
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-16 flex justify-center gap-6 items-center"
                >
                    {SOCIAL_LINKS.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            download={social.download}
                            target={social.download ? undefined : "_blank"}
                            rel={social.download ? undefined : "noopener noreferrer"}
                            className="relative group text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            aria-label={social.label}
                        >
                            <div className="p-2">
                                <social.icon size={28} />
                            </div>

                            {/* Text-only Tooltip */}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm font-bold text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 drop-shadow-md">
                                {social.label}
                            </span>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
