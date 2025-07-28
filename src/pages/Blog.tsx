import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "The Ultimate Guide to Protein Timing for Maximum Muscle Growth",
    excerpt: "Discover the science behind protein timing and how to optimize your protein intake for better muscle protein synthesis and recovery.",
    author: "Dr. Priya Sharma",
    date: "March 15, 2024",
    category: "Nutrition",
    readTime: "8 min read",
    image: "/api/placeholder/800/400",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "Pre-Workout vs Post-Workout: When to Take Your Supplements",
      excerpt: "Learn the optimal timing for different supplements to maximize your workout performance and recovery.",
      author: "Rajesh Kumar",
      date: "March 12, 2024",
      category: "Supplements",
      readTime: "6 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 3,
      title: "Creatine Myths Debunked: What Science Really Says",
      excerpt: "Separating fact from fiction about one of the most researched and effective supplements in sports nutrition.",
      author: "Dr. Priya Sharma",
      date: "March 10, 2024",
      category: "Science",
      readTime: "7 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 4,
      title: "Building a Sustainable Workout Routine for Beginners",
      excerpt: "A step-by-step guide to creating a workout routine that you can stick to long-term, plus nutrition tips.",
      author: "Amit Singh",
      date: "March 8, 2024",
      category: "Fitness",
      readTime: "5 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 5,
      title: "The Role of BCAAs in Muscle Recovery and Performance",
      excerpt: "Understanding how branched-chain amino acids can enhance your recovery and support your training goals.",
      author: "Dr. Priya Sharma",
      date: "March 5, 2024",
      category: "Nutrition",
      readTime: "6 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 6,
      title: "Meal Prep Strategies for Busy Athletes",
      excerpt: "Time-saving meal prep techniques and recipes to support your training and nutrition goals.",
      author: "Rajesh Kumar",
      date: "March 3, 2024",
      category: "Lifestyle",
      readTime: "9 min read",
      image: "/api/placeholder/600/300"
    },
    {
      id: 7,
      title: "Understanding Macronutrients: A Complete Guide",
      excerpt: "Everything you need to know about proteins, carbohydrates, and fats for optimal body composition.",
      author: "Dr. Priya Sharma",
      date: "March 1, 2024",
      category: "Nutrition",
      readTime: "10 min read",
      image: "/api/placeholder/600/300"
    }
  ];

  const categories = [
    { name: "All", count: 25 },
    { name: "Nutrition", count: 12 },
    { name: "Supplements", count: 8 },
    { name: "Fitness", count: 6 },
    { name: "Science", count: 4 },
    { name: "Lifestyle", count: 3 }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Nutrition':
        return 'bg-accent text-accent-foreground';
      case 'Supplements':
        return 'bg-primary text-primary-foreground';
      case 'Fitness':
        return 'bg-orange text-orange-foreground';
      case 'Science':
        return 'bg-secondary text-secondary-foreground';
      case 'Lifestyle':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kron Nutrition Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights, science-backed advice, and practical tips to fuel your fitness journey
            </p>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant="outline"
                  size="sm"
                  className="text-sm"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Our most popular and impactful content</p>
          </div>

          <Card className="overflow-hidden hover:shadow-card transition-smooth">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-primary font-semibold">Featured Article</p>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge className={getCategoryColor(featuredPost.category)}>
                    {featuredPost.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {featuredPost.readTime}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-2" />
                    {featuredPost.author}
                  </div>
                  <Button variant="hero" className="group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">Latest Articles</h2>
            <p className="text-muted-foreground">Stay updated with our latest insights and tips</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-card transition-smooth">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <User className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-primary font-semibold text-sm">Blog Post</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Never Miss an Article
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest fitness and nutrition insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button variant="hero">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;