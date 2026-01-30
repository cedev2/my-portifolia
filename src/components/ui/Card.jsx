import { Github, ExternalLink } from 'lucide-react';

const Card = ({ title, description, tags, links, image }) => {
    return (
        <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400 flex flex-col h-full">
            <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 text-sm flex-grow">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                    <a
                        href={links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <Github size={18} />
                        Code
                    </a>
                    <a
                        href={links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors ml-auto"
                    >
                        Live Demo
                        <ExternalLink size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
