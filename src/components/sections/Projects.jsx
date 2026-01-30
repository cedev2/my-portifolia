import Section from '../ui/Section';
import Card from '../ui/Card';
import { PROJECTS } from '../../constants/data';

const Projects = () => {
    return (
        <Section id="projects" className="backdrop-blur-sm bg-gray-50/50 dark:bg-transparent">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    A collection of projects that demonstrate my skills and passion for building things.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, idx) => (
                    <Card key={idx} {...project} />
                ))}
            </div>

            <div className="text-center mt-12">
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                    View More on GitHub
                </a>
            </div>
        </Section>
    );
};

export default Projects;
