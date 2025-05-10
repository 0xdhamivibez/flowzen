
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    per: "forever",
    description: "Perfect for individuals getting started with automation",
    features: [
      "5 automated workflows",
      "100 monthly executions",
      "Standard integrations",
      "Email support",
      "Basic templates",
    ],
    cta: "Start for Free",
    highlight: false,
  },
  {
    name: "Basic",
    price: "$29",
    per: "month",
    description: "Ideal for small teams and growing businesses",
    features: [
      "Unlimited workflows",
      "1,000 monthly executions",
      "Advanced integrations",
      "Priority email support",
      "Premium templates",
      "Team collaboration tools",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Pro",
    price: "$79",
    per: "month",
    description: "For businesses requiring advanced features and support",
    features: [
      "Everything in Basic",
      "10,000 monthly executions",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced analytics",
      "SSO authentication",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
];

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that works best for your business needs
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={cn("text-base font-medium", !annual ? "text-primary" : "text-gray-500")}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                annual ? "bg-accent" : "bg-gray-300"
              )}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  annual ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn("text-base font-medium", annual ? "text-primary" : "text-gray-500")}>
              Annual <span className="text-sm text-accent font-bold">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-xl overflow-hidden border transition-all opacity-0 animate-fade-in",
                plan.highlight 
                  ? "border-accent shadow-lg shadow-accent/10 scale-105 md:scale-110 z-10" 
                  : "border-gray-200 shadow-sm",
              )}
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              {plan.highlight && (
                <div className="bg-accent text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    {annual ? (
                      plan.price !== "$0" 
                        ? `$${parseInt(plan.price.substring(1)) * 0.8 * 12}` 
                        : plan.price
                    ) : (
                      plan.price
                    )}
                  </span>
                  <span className="text-gray-600 ml-1">
                    {plan.price !== "$0" ? (annual ? "/year" : "/month") : plan.per}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Button 
                  className={cn(
                    "w-full mb-6",
                    plan.highlight 
                      ? "bg-accent hover:bg-accent/90" 
                      : "bg-primary hover:bg-primary/90"
                  )}
                >
                  {plan.cta}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
