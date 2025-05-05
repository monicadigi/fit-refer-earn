
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign, UserPlus } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-white via-purple-50 to-blue-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-brand-purple">Refer</span> & Earn <span className="text-brand-purple">$500</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-lg">
            Refer companies who need recruitment help and earn $500 for each successful client.
            It's that simple.
          </p>
          <div className="flex gap-4">
            <Link to="#signup">
              <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white text-lg px-8 py-6">
                <UserPlus className="mr-2 h-5 w-5" />
                Sign up now
              </Button>
            </Link>
            <Link to="#how-it-works">
              <Button variant="outline" className="text-brand-purple border-brand-purple hover:bg-brand-purple/10 text-lg px-8 py-6">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute -top-6 -right-6 bg-brand-purple text-white font-bold rounded-full p-4 flex items-center justify-center shadow-lg transform rotate-6 z-10">
              <DollarSign className="h-6 w-6 mr-1" />
              <span className="text-2xl">$500</span>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="flex flex-col gap-4 mb-4 max-w-sm">
                <div className="flex items-center gap-3 bg-brand-purple/10 p-3 rounded-lg">
                  <div className="bg-brand-purple text-white p-2 rounded-full">
                    <UserPlus className="h-5 w-5" />
                  </div>
                  <span className="font-medium">Sign up as an affiliate</span>
                </div>
                <div className="flex items-center gap-3 bg-brand-purple/10 p-3 rounded-lg">
                  <div className="bg-brand-blue text-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <span className="font-medium">Refer a company</span>
                </div>
                <div className="flex items-center gap-3 bg-brand-purple/10 p-3 rounded-lg">
                  <div className="bg-brand-green text-white p-2 rounded-full">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <span className="font-medium">Earn $500 when they sign</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
