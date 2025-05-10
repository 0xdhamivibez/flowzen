
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Automate Your Business Workflow <span className="text-accent">in Minutes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-delay-1">
              Streamline operations, reduce manual tasks, and boost your team's productivity with our intuitive workflow automation platform.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6">
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-500 animate-fade-in-delay-3">
              <p>✓ No credit card required &nbsp; ✓ 14-day free trial &nbsp; ✓ Cancel anytime</p>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in-delay-2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-lg blur opacity-30"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="FlowZen Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
