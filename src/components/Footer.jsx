import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#062A0D] text-white py-12 px-6 sm:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Top - Logo, name & slogan */}
                <div className="flex flex-col items-center text-center gap-3 mb-10">
                    <Link to="/" className="flex items-center gap-3">
                        <svg className="h-10" viewBox="0 0 106 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path 
                                d="M26.4818 74C31.3653 38.8875 33.2531 -24.9829 47.969 14.4152C61.7465 51.301 69.5188 87.0269 54.6811 68.3235C22.8868 28.2457 -68.3957 27.8893 104 27.8893" 
                                stroke="currentColor" 
                                strokeWidth="4" 
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="text-2xl font-bold tracking-tight">Acauã Rangel Brazil</span>
                    </Link>
                    <p className="text-white/50 text-sm max-w-xs">
                        Building intelligent systems, one agent at a time.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
                    {/* Left - Navigation */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-semibold tracking-widest uppercase text-white/40">Navigation</h4>
                        <div className="flex flex-col gap-2 text-sm text-white/70">
                            <Link to="/" className="hover:text-[#71C829] transition-colors">Home</Link>
                            <Link to="/#skills" className="hover:text-[#71C829] transition-colors">Skills</Link>
                            <Link to="/curriculum" className="hover:text-[#71C829] transition-colors">Curriculum</Link>
                            <Link to="/contact" className="hover:text-[#71C829] transition-colors">Contact</Link>
                        </div>
                    </div>

                    {/* Right - Socials */}
                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-semibold tracking-widest uppercase text-white/40">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/Acaua-Rangel/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#71C829] transition-colors">
                                <FaGithub className="text-xl" />
                            </a>
                            <a href="https://www.linkedin.com/in/acauã-rangel" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#71C829] transition-colors">
                                <FaLinkedin className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 my-8" />

                {/* Bottom */}
                <p className="text-white/30 text-xs text-center">
                    © {new Date().getFullYear()} Acauã Rangel. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
