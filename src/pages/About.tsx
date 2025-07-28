import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide premium quality supplements that empower athletes and fitness enthusiasts to achieve their goals without compromise on purity or effectiveness."
    },
    {
      icon: Users,
      title: "Our Community",
      description: "Building a community of 50,000+ fitness enthusiasts who trust our products for their daily nutrition and performance needs."
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "Every product is manufactured in GMP-certified facilities and undergoes rigorous third-party testing to ensure the highest quality standards."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize customer satisfaction with 24/7 support, transparent ingredients, and a commitment to helping you achieve your fitness goals."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      description: "Former national athlete with 15+ years in sports nutrition",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Chief Nutritionist",
      description: "PhD in Sports Nutrition, certified sports dietitian",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Amit Singh",
      role: "Head of Quality",
      description: "10+ years ensuring product quality and safety standards",
      image: "/api/placeholder/300/300"
    }
  ];

  const milestones = [
    { year: "2019", title: "Company Founded", description: "Started with a vision to create pure supplements" },
    { year: "2020", title: "First Product Launch", description: "Launched our premium whey protein isolate" },
    { year: "2021", title: "GMP Certification", description: "Achieved GMP certification for manufacturing" },
    { year: "2022", title: "50K+ Customers", description: "Reached milestone of 50,000 satisfied customers" },
    { year: "2023", title: "Product Range Expansion", description: "Expanded to 50+ premium supplement products" },
    { year: "2024", title: "Innovation Lab", description: "Opened our state-of-the-art R&D facility" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Kron Nutrition
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Founded with a passion for fitness and a commitment to purity, Kron Nutrition has been 
              empowering athletes and fitness enthusiasts with premium quality supplements since 2019.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Kron Nutrition was born from a simple belief: every athlete deserves access to pure, 
                  effective supplements without harmful additives or unnecessary fillers. Our founder, 
                  a former national athlete, experienced firsthand the challenges of finding trustworthy 
                  supplements in the market.
                </p>
                <p>
                  After years of research and development, we launched our first product - a premium 
                  whey protein isolate that set new standards for purity and effectiveness. Today, 
                  we're proud to serve over 50,000 customers across India with our expanding range 
                  of scientifically-backed supplements.
                </p>
                <p>
                  Every product we create undergoes rigorous testing and quality control measures. 
                  We believe in transparency, which is why all our products come with detailed 
                  ingredient lists and third-party lab reports.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Heart className="h-16 w-16 text-primary" />
                </div>
                <p className="text-primary font-semibold">Built with Passion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do, from product development to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-card transition-smooth">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team of experts brings together decades of experience in nutrition, 
              sports science, and quality assurance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-smooth">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones that have shaped Kron Nutrition into what it is today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-card transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Become part of a community that's passionate about fitness, health, and achieving goals together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Shop Products
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;