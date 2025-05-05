
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { BadgeDollarSign } from "lucide-react";

const SignUpForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    connection: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Application submitted!",
        description: "Thank you for your interest in our affiliate program. We'll be in touch shortly.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        connection: ""
      });
    }, 1500);
  };

  return (
    <div className="py-16 bg-gray-50" id="signup">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Become an Affiliate</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sign up to start referring companies and earn $500 per successful referral.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 md:p-10 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          <div className="flex justify-center mb-8">
            <div className="bg-brand-purple text-white rounded-full p-3">
              <BadgeDollarSign className="h-8 w-8" />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  name="name"
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  placeholder="(123) 456-7890" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company/Organization (if applicable)</Label>
                <Input 
                  id="company" 
                  name="company"
                  placeholder="Your Company" 
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="connection">How are you connected to businesses that might need recruitment help?</Label>
              <Textarea 
                id="connection" 
                name="connection"
                placeholder="Tell us about your network and how you can refer companies to us."
                value={formData.connection}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
