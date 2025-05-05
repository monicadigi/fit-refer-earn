
import { Card } from "@/components/ui/card";
import { ThumbsUp } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  company?: string;
  testimonial: string;
  image: string;
}

const TestimonialCard = ({ name, role, company, testimonial, image }: TestimonialProps) => {
  return (
    <Card className="p-6 h-full flex flex-col bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-6 flex-grow">
        <div className="text-brand-purple mb-4">
          <ThumbsUp className="h-6 w-6" />
        </div>
        <p className="text-gray-700 italic mb-4">{`"${testimonial}"`}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <img 
            src={image} 
            alt={name} 
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">
            {role}{company ? `, ${company}` : ''}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
