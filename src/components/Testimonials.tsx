
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Coach",
      testimonial: "I've referred 3 of my clients who were struggling with hiring, and each one signed up with FitRecruit. Not only did I earn $1,500 in referral fees, but my clients were thrilled with the recruitment help they received.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Michael Chen",
      role: "Startup Advisor",
      company: "TechGrowth",
      testimonial: "The affiliate program is a no-brainer for anyone who works with growing businesses. I simply identify companies hitting scaling issues, make an introduction, and earn $500 when they become clients.",
      image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Alex Rodriguez",
      role: "Content Creator",
      testimonial: "Being part of this affiliate program has been amazing. I mention FitRecruit in my content when discussing scaling challenges, and I've earned over $2,500 in just three months from referrals.",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      name: "Emily Thompson",
      role: "Business Owner",
      company: "Growth Partners",
      testimonial: "As someone who networks with other business owners regularly, this program has been a great way to provide additional value to my connections while generating extra income.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="py-16 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Affiliates Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from people who are already earning through our affiliate program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
