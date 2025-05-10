
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sign Up & Connect",
    description: "Create your account and connect your existing tools and platforms in just a few clicks.",
    image: "/placeholder.svg"
  },
  {
    number: "02",
    title: "Design Your Workflow",
    description: "Use our intuitive drag-and-drop editor to create custom automation workflows that match your needs.",
    image: "/placeholder.svg"
  },
  {
    number: "03",
    title: "Automate & Scale",
    description: "Set your workflows live and watch as your business processes run automatically, 24/7.",
    image: "/placeholder.svg"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How FlowZen Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with these simple steps
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-8 lg:gap-16`}
            >
              <div className="md:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/30 to-primary/30 rounded-lg blur opacity-30"></div>
                  <div className="relative bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-accent font-bold">{step.number}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block">
                    <ArrowRight className={`text-accent h-8 w-8 ${
                      index % 2 === 1 ? 'transform -scale-x-100' : ''
                    }`} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
