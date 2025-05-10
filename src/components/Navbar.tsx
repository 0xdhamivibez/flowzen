
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-primary">
            <span className="text-accent">Flow</span>Zen
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li>
              <a href="#features" className="text-gray-600 hover:text-primary font-medium">Features</a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-600 hover:text-primary font-medium">Pricing</a>
            </li>
            <li>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary font-medium">How It Works</a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-primary hover:text-primary/80 font-medium">Login</a>
            <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 absolute w-full shadow-md animate-fade-in">
          <ul className="flex flex-col space-y-4">
            <li>
              <a 
                href="#features" 
                className="text-gray-600 hover:text-primary block py-2" 
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
            </li>
            <li>
              <a 
                href="#pricing" 
                className="text-gray-600 hover:text-primary block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
            </li>
            <li>
              <a 
                href="#how-it-works" 
                className="text-gray-600 hover:text-primary block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
            </li>
            <li className="pt-2 border-t border-gray-100">
              <a 
                href="#" 
                className="text-primary hover:text-primary/80 block py-2"
              >
                Login
              </a>
            </li>
            <li>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Sign Up
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
