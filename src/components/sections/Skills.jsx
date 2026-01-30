import Section from '../ui/Section';
import { SKILLS } from '../../constants/data';
import { CheckCircle2 } from 'lucide-react';

const Skills = () => {
    return (
        <Section id="skills">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Technical Skills</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    The technologies and tools I use to bring ideas to life.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {SKILLS.map((category, idx) => (
                    <div
                        key={idx}
                        className="backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400"
                    >
                        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-4">
                            {category.category}
                        </h3>
                        <ul className="space-y-3">
                            {category.items.map((skill) => (
                                <li key={skill} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <CheckCircle2 size={18} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                                    <span>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
