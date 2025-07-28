import { Shield, Award, Truck, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Pure & Safe",
      description: "All products are lab-tested and certified for purity. No harmful additives or fillers.",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Manufactured in GMP-certified facilities with the highest quality standards.",
      color: "text-primary"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Free shipping on orders above ₹999. Quick delivery across India.",
      color: "text-orange"
    },
    {
      icon: Heart,
      title: "Customer Love",
      description: "Trusted by 50,000+ satisfied customers with 5-star reviews.",
      color: "text-destructive"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Kron Nutrition?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the highest quality supplements to fuel your fitness journey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-smooth"
              >
                {/* Icon Container */}
                <div className="mx-auto w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-sm text-muted-foreground">Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              99%
            </div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;