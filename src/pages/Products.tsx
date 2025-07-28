import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, ShoppingCart, Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const products = [
    {
      id: 1,
      name: "Whey Protein Isolate",
      category: "protein",
      price: "₹2,999",
      originalPrice: "₹3,499",
      rating: 4.8,
      reviews: 245,
      badge: "Best Seller",
      description: "25g protein per serving with all essential amino acids",
      features: ["Zero Sugar", "Fast Absorption", "Lab Tested"]
    },
    {
      id: 2,
      name: "Creatine Monohydrate",
      category: "creatine",
      price: "₹1,299",
      originalPrice: "₹1,599",
      rating: 4.9,
      reviews: 189,
      badge: "New",
      description: "Increases strength and muscle mass naturally",
      features: ["Pure Formula", "Micronized", "Unflavored"]
    },
    {
      id: 3,
      name: "Pre-Workout Beast",
      category: "pre-workout",
      price: "₹1,899",
      originalPrice: "₹2,299",
      rating: 4.7,
      reviews: 156,
      badge: "Popular",
      description: "Energy boost for intense training sessions",
      features: ["High Caffeine", "Beta-Alanine", "Citrulline"]
    },
    {
      id: 4,
      name: "BCAA Recovery",
      category: "bcaa",
      price: "₹1,599",
      originalPrice: "₹1,899",
      rating: 4.6,
      reviews: 98,
      badge: "Sale",
      description: "Fast muscle recovery and reduced fatigue",
      features: ["2:1:1 Ratio", "Instant Mix", "Tropical Flavor"]
    },
    {
      id: 5,
      name: "Mass Gainer Pro",
      category: "protein",
      price: "₹3,599",
      originalPrice: "₹4,199",
      rating: 4.5,
      reviews: 134,
      badge: "High Calorie",
      description: "High-calorie protein for muscle mass gain",
      features: ["1000+ Calories", "Complex Carbs", "Digestive Enzymes"]
    },
    {
      id: 6,
      name: "Multivitamin Elite",
      category: "vitamins",
      price: "₹899",
      originalPrice: "₹1,199",
      rating: 4.4,
      reviews: 87,
      badge: "Essential",
      description: "Complete daily nutrition support",
      features: ["25 Vitamins", "Daily Support", "Easy Absorption"]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'protein', label: 'Protein' },
    { value: 'pre-workout', label: 'Pre-Workout' },
    { value: 'bcaa', label: 'BCAA' },
    { value: 'creatine', label: 'Creatine' },
    { value: 'vitamins', label: 'Vitamins' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete range of premium supplements designed to fuel your fitness journey
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-card transition-smooth border-border/50 hover:border-primary/20">
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="aspect-square bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                        <ShoppingCart className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <Badge 
                      className={`absolute top-3 left-3 ${getBadgeVariant(product.badge)}`}
                    >
                      {product.badge}
                    </Badge>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) 
                                ? 'text-orange fill-current' 
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    </div>

                    {/* Add to Cart Button */}
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-lg font-semibold text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;