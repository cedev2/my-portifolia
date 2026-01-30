import Section from '../ui/Section';
import profileImg from '../../assets/tone.jpeg';

const About = () => {
    return (
        <Section id="about" className="backdrop-blur-sm bg-white/50 dark:bg-transparent">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative group">
                    <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-20 group-hover:rotate-3 transition-transform duration-300"></div>
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] ring-2 ring-transparent hover:ring-blue-400 dark:hover:ring-blue-400"
                    />
                </div>

                <div className="order-1 md:order-2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        I've always been fascinated by how things work, which led me to the world of software development.
                        With over 3 years of experience, I've had the privilege of building software for a
                        <span className="text-blue-600 dark:text-blue-400 font-medium"> creative agency</span>, a
                        <span className="text-blue-600 dark:text-blue-400 font-medium"> start-up</span>, and a
                        <span className="text-blue-600 dark:text-blue-400 font-medium"> huge corporation</span>.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                        I also like sharing what I've learned through mentoring and writing technical articles.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700/50">
                            <h3 className="font-bold text-xl text-blue-600 dark:text-blue-400 mb-1">3+</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700/50">
                            <h3 className="font-bold text-xl text-blue-600 dark:text-blue-400 mb-1">20+</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
