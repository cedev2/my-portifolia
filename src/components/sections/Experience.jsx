import Section from '../ui/Section';
import { EXPERIENCES } from '../../constants/data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <Section id="experience">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Experience</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    My professional journey and career milestones.
                </p>
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="space-y-12">
                    {EXPERIENCES.map((exp, idx) => (
                        <div key={idx} className="relative pl-8 md:pl-0">
                            {/* Timeline Line */}
                            <div className="hidden md:block absolute left-1/2 -ml-0.5 w-[1px] h-full bg-gray-200 dark:bg-gray-700 top-0"></div>

                            <div className={`md:flex items-center justify-between gap-8 ${idx % 2 === 0 ? 'flex-row-reverse' : ''
                                }`}>
                                {/* Content */}
                                <div className="md:w-1/2 mb-8 md:mb-0">
                                    <div className={`backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 relative transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] hover:border-blue-400 dark:hover:border-blue-400 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                        }`}>
                                        {/* Mobile Timeline Dot */}
                                        <div className="absolute -left-10 top-6 md:hidden w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900"></div>

                                        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wide text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                                            {exp.year}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 font-medium mb-3">{exp.company}</p>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 items-center justify-center text-white z-10 shadow-lg ring-4 ring-white dark:ring-gray-900">
                                    <Briefcase size={18} />
                                </div>

                                {/* Spacer */}
                                <div className="md:w-1/2"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
