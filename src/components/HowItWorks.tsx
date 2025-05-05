
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserPlus, Share, Link as LinkIcon, DollarSign } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="h-7 w-7 text-white" />,
      color: "bg-brand-purple",
      title: "1. Sign Up",
      description: "Register as an affiliate through our simple online form. We'll review your application and get you onboarded."
    },
    {
      icon: <Share className="h-7 w-7 text-white" />,
      color: "bg-brand-blue",
      title: "2. Refer",
      description: "Refer companies who need recruitment help. Send them your unique referral link or introduce them directly."
    },
    {
      icon: <LinkIcon className="h-7 w-7 text-white" />,
      color: "bg-brand-teal",
      title: "3. We Connect",
      description: "Our team reaches out to the referred company, explaining how we can solve their recruitment challenges."
    },
    {
      icon: <DollarSign className="h-7 w-7 text-white" />,
      color: "bg-brand-green",
      title: "4. Get Paid",
      description: "Earn $500 for each company that signs up through your referral. Payments are made within 30 days."
    }
  ];

  return (
    <div className="py-16 bg-gray-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our affiliate program is designed to be simple and rewarding. Follow these steps to start earning $500 for each successful referral.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${step.color} rounded-full h-14 w-14 flex items-center justify-center mb-5`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <Link to="#signup">
            <Button className="bg-brand-purple hover:bg-brand-purple-dark text-white text-lg px-8 py-6">
              Become an Affiliate
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
