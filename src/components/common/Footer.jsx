import { SOCIAL_LINKS } from '../../constants/data';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            CeDev
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 max-w-xs">
                            Building digital experiences with code and creativity.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            {SOCIAL_LINKS.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    download={social.download}
                                    target={social.download ? undefined : "_blank"}
                                    rel={social.download ? undefined : "noopener noreferrer"}
                                    className="relative group p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />

                                    {/* Text-only Tooltip */}
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm font-bold text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50 drop-shadow-md">
                                        {social.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} CeDev. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
