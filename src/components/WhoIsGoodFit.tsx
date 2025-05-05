
import { Check } from "lucide-react";

const WhoIsGoodFit = () => {
  const fits = [
    {
      title: "Solopreneurs & Consultants",
      description: "You guide entrepreneurs on growing their businesses and hear about their scaling challenges.",
      icon: "👨‍💼"
    },
    {
      title: "Small Business Owners",
      description: "You've built a network of other business owners who might need recruitment help.",
      icon: "🏢"
    },
    {
      title: "Content Creators",
      description: "You create content for startups and businesses looking to scale their teams.",
      icon: "🎥"
    },
    {
      title: "Advisors & Mentors",
      description: "You advise companies on growth and know when they're hitting operational bottlenecks.",
      icon: "🧠"
    }
  ];

  return (
    <div className="py-16 bg-white" id="good-fit">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Are You a Good Fit?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our most successful affiliates are people who regularly interact with growing businesses and can spot talent acquisition needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fits.map((fit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{fit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{fit.title}</h3>
              <p className="text-gray-600">{fit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-brand-purple/5 rounded-xl p-8 border border-brand-purple/10 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-bold mb-6 text-gray-800">What Makes Our Affiliates Successful:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "You understand business growth challenges",
              "You have a network of founders or business owners",
              "You regularly discuss operational challenges with clients",
              "You can identify when a company is struggling with hiring",
              "You want to provide value to your network while earning passive income",
              "You're passionate about connecting people with the right opportunities"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 bg-brand-green rounded-full p-1 text-white">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsGoodFit;
