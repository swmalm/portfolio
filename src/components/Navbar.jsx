import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-15">
                    <a href="#home" className="font-mono text-xl font-bold text-white"> 
                        Simon <span className="text-blue-400">Malmström</span>
                    </a>
                    {!menuOpen && (
                        <div className="w-6 h-3 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                            &#9776;
                        </div>
                    )}
                    
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" onClick={() => setMenuOpen(false)} className="text-gray-300 hove:text-white transition-colors">
                            Home
                        </a>
                        <a href="#about" onClick={() => setMenuOpen(false)}  className="text-gray-300 hove:text-white transition-colors">
                            About
                        </a>
                        <a href="#projects" onClick={() => setMenuOpen(false)}  className="text-gray-300 hove:text-white transition-colors">
                            Projects
                        </a>
                        <a href="#contact" onClick={() => setMenuOpen(false)}  className="text-gray-300 hove:text-white transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};