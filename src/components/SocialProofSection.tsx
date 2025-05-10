
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "FlowZen has transformed how we handle our operations. What used to take us hours now happens automatically in the background while we focus on strategic initiatives.",
    author: "Sarah Johnson",
    position: "Operations Director, TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The ROI on FlowZen was almost immediate. Within weeks, we recovered the time investment in setup and started seeing real productivity gains across all departments.",
    author: "Michael Chen",
    position: "CTO, InnovateLab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "As a small business owner, I was skeptical about automation tools. FlowZen changed my mind completely. It's intuitive, powerful, and has literally given me my weekends back.",
    author: "Emily Rodriguez",
    position: "Founder, Craft Collective",
    avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  }
];

const SocialProofSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          </div>

          <div className="relative">
            <div className="flex overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`w-full flex-shrink-0 transition-all duration-500 ease-in-out transform ${
                    index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full absolute"
                  }`}
                  style={{ left: index === activeIndex ? 0 : '100%' }}
                >
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full overflow-hidden">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.author} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <blockquote>
                            <p className="text-lg md:text-xl text-gray-700 mb-4 italic">
                              "{testimonial.quote}"
                            </p>
                            <footer>
                              <p className="font-semibold text-primary">{testimonial.author}</p>
                              <p className="text-sm text-gray-600">{testimonial.position}</p>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-accent" : "bg-gray-300"
                  } transition-all`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
