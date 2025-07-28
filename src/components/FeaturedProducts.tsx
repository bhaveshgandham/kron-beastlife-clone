import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Whey Protein Isolate",
      price: "₹2,999",
      originalPrice: "₹3,499",
      rating: 4.8,
      reviews: 245,
      image: "/api/placeholder/300/300",
      badge: "Best Seller",
      description: "25g protein per serving with all essential amino acids"
    },
    {
      id: 2,
      name: "Creatine Monohydrate",
      price: "₹1,299",
      originalPrice: "₹1,599",
      rating: 4.9,
      reviews: 189,
      image: "/api/placeholder/300/300",
      badge: "New",
      description: "Increases strength and muscle mass naturally"
    },
    {
      id: 3,
      name: "Pre-Workout Beast",
      price: "₹1,899",
      originalPrice: "₹2,299",
      rating: 4.7,
      reviews: 156,
      image: "/api/placeholder/300/300",
      badge: "Popular",
      description: "Energy boost for intense training sessions"
    },
    {
      id: 4,
      name: "BCAA Recovery",
      price: "₹1,599",
      originalPrice: "₹1,899",
      rating: 4.6,
      reviews: 98,
      image: "/api/placeholder/300/300",
      badge: "Sale",
      description: "Fast muscle recovery and reduced fatigue"
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'Best Seller':
        return 'bg-orange text-orange-foreground';
      case 'New':
        return 'bg-accent text-accent-foreground';
      case 'Popular':
        return 'bg-primary text-primary-foreground';
      case 'Sale':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular supplements trusted by athletes and fitness enthusiasts worldwide
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-card transition-smooth border-border/50 hover:border-primary/20">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-square bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                      <ShoppingCart className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <Badge 
                    className={`absolute top-3 left-3 ${getBadgeVariant(product.badge)}`}
                  >
                    {product.badge}
                  </Badge>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating) 
                              ? 'text-orange fill-current' 
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:variant-hero group-hover:text-primary-foreground transition-smooth"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;