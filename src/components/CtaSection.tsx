
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-accent to-primary/90 rounded-2xl p-8 md:p-12 shadow-xl text-white text-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
              alt="" 
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          
          <div className="relative z-10">
            <div className="inline-block py-2 px-4 bg-white/20 rounded-full text-sm font-bold mb-4 backdrop-blur-sm">
              Limited Time Offer: 20% Off Your First Month
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of businesses already saving time and boosting productivity with FlowZen
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" className="bg-white hover:bg-white/90 text-accent px-8 py-6 text-lg">
                Start Your Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Schedule a Demo
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-80">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
