
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 lg:px-16 bg-white shadow-sm fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-brand-purple">
          FitRecruit
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link to="#how-it-works" className="text-gray-700 hover:text-brand-purple transition-colors">
            How It Works
          </Link>
          <Link to="#testimonials" className="text-gray-700 hover:text-brand-purple transition-colors">
            Testimonials
          </Link>
          <Link to="#signup">
            <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white">
              Become an Affiliate
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" className="text-gray-700">
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
