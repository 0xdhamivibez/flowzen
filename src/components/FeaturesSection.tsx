
import { CheckCircle, Clock, Settings, Zap, TrendingUp, Activity } from "lucide-react";

const featuresList = [
  {
    title: "Automate Tasks",
    description: "Save hours each week by automating repetitive tasks and processes across your business.",
    icon: Clock,
  },
  {
    title: "Seamless Integrations",
    description: "Connect with 100+ tools and apps you already use with just a few clicks.",
    icon: Settings,
  },
  {
    title: "Real-time Analytics",
    description: "Monitor performance metrics and get actionable insights to optimize your workflows.",
    icon: TrendingUp,
  },
  {
    title: "Boost Productivity",
    description: "Increase team efficiency by up to 40% with streamlined processes and reduced manual work.",
    icon: Zap,
  },
  {
    title: "Custom Workflows",
    description: "Create tailored automation sequences that match your unique business needs.",
    icon: Activity,
  },
  {
    title: "No-code Solution",
    description: "Build complex workflows with our intuitive drag-and-drop interface — no coding required.",
    icon: CheckCircle,
  },
];

const FeatureCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm transform-hover">
      <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-accent" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline operations and scale efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.1}s`, animationFillMode: 'forwards' }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
