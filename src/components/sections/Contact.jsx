import { useState } from 'react';
import Section from '../ui/Section';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xpqrrjky", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ name: '', email: '', message: '' }); // Clear inputs
                setTimeout(() => setIsSuccess(false), 5000); // Reset success message after 5 seconds
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Error sending message. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id="contact" className="backdrop-blur-sm bg-white/50 dark:bg-transparent">
            <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800">
                <div className="grid md:grid-cols-2">
                    {/* Info Side */}
                    <div className="p-10 bg-blue-600 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Let's work together!</h2>
                            <p className="text-blue-100 mb-12 leading-relaxed">
                                I'm currently available for freelance projects and open to full-time opportunities.
                                If you have a project that needs some creative touch, I'd love to hear about it.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-100">Email</p>
                                        <p className="font-medium">cedrickrwa@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-100">Phone</p>
                                        <p className="font-medium">+25(071)801-839</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-blue-100">Location</p>
                                        <p className="font-medium">Kigali, NY</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            {/* Decorative circles */}
                            <div className="opacity-20 flex gap-4">
                                <div className="w-12 h-12 rounded-full border-2 border-white"></div>
                                <div className="w-12 h-12 rounded-full bg-white"></div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="p-10">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 dark:text-white"
                                    placeholder="John Doe"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 dark:text-white"
                                    placeholder="john@example.com"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 dark:text-white resize-none"
                                    placeholder="Tell me about your project..."
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 ${isSuccess
                                        ? 'bg-green-600 hover:bg-green-700'
                                        : 'bg-blue-600 hover:bg-blue-700'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : isSuccess ? (
                                    <>
                                        <CheckCircle size={18} />
                                        Message Sent Successfully!
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
