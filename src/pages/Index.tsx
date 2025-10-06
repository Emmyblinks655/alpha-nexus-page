import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Cpu, 
  GraduationCap, 
  Heart, 
  Briefcase,
  Target,
  Eye,
  Users,
  Lightbulb,
  Shield,
  TrendingUp,
  MessageCircle
} from "lucide-react";

const Index = () => {
  const sectors = [
    {
      icon: Cpu,
      title: "Technology",
      description: "Innovative tech solutions driving digital transformation",
      color: "text-[hsl(var(--tech))]",
      bgColor: "bg-[hsl(var(--tech)/0.1)]"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Empowering minds through quality learning experiences",
      color: "text-[hsl(var(--education))]",
      bgColor: "bg-[hsl(var(--education)/0.1)]"
    },
    {
      icon: Heart,
      title: "Health",
      description: "Comprehensive healthcare solutions for better living",
      color: "text-[hsl(var(--health))]",
      bgColor: "bg-[hsl(var(--health)/0.1)]"
    },
    {
      icon: Briefcase,
      title: "Business",
      description: "Strategic business consulting and growth solutions",
      color: "text-[hsl(var(--business))]",
      bgColor: "bg-[hsl(var(--business)/0.1)]"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Trust and transparency form the foundation of everything we do"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of partnership and teamwork"
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "We strive for excellence in every project we undertake"
    }
  ];

  const work = [
    {
      title: "Tech Solutions",
      description: "Developing custom software, mobile apps, and digital platforms that transform businesses."
    },
    {
      title: "Educational Programs",
      description: "Creating accessible learning opportunities and training programs for diverse communities."
    },
    {
      title: "Healthcare Initiatives",
      description: "Implementing health awareness campaigns and accessible medical support systems."
    },
    {
      title: "Business Consulting",
      description: "Providing strategic guidance to help businesses scale and achieve sustainable growth."
    }
  ];

  const telegramHotline = "https://t.me/your_hotline"; // Replace with actual Telegram link
  const telegramCommunity = "https://t.me/your_community"; // Replace with actual Telegram link

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
              Alpha
            </h1>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-smooth">About</a>
              <a href="#vision" className="text-sm font-medium hover:text-primary transition-smooth">Vision & Mission</a>
              <a href="#values" className="text-sm font-medium hover:text-primary transition-smooth">Values</a>
              <a href="#work" className="text-sm font-medium hover:text-primary transition-smooth">Our Work</a>
            </div>
            <Button asChild className="shadow-soft">
              <a href={telegramCommunity} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Join Community
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-hero">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--primary))] bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Your Hub of Solutions
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-150">
            Empowering communities through Technology, Education, Health, and Business solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Button asChild size="lg" className="shadow-medium">
              <a href={telegramHotline} target="_blank" rel="noopener noreferrer">
                Partner with Us
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-soft">
              <a href={telegramHotline} target="_blank" rel="noopener noreferrer">
                Sponsor Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Card 
                  key={sector.title} 
                  className="border-2 hover:border-primary transition-smooth shadow-soft hover:shadow-medium hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className={`${sector.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className={`h-8 w-8 ${sector.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">{sector.title}</h3>
                    <p className="text-muted-foreground text-center text-sm">{sector.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-4 gradient-section">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">About Alpha</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Alpha is a dynamic organization dedicated to creating meaningful impact across multiple sectors. 
            We bring together expertise, innovation, and passion to deliver comprehensive solutions that 
            address the evolving needs of our communities.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through our integrated approach spanning Technology, Education, Health, and Business, we create 
            synergies that drive sustainable growth and positive change. Our diverse team of professionals 
            works collaboratively to transform challenges into opportunities.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-medium border-2 hover:border-primary transition-smooth">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[hsl(var(--primary)/0.1)] p-3 rounded-xl">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading catalyst for holistic development, creating a world where technology, 
                  education, health, and business converge to build thriving, empowered communities that 
                  drive innovation and sustainable progress.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-2 hover:border-accent transition-smooth">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[hsl(var(--accent)/0.1)] p-3 rounded-xl">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver innovative, accessible, and high-quality solutions across technology, education, 
                  health, and business sectors. We are committed to fostering collaboration, driving excellence, 
                  and creating lasting positive impact in every community we serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-20 px-4 gradient-section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6 text-center">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section id="work" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {work.map((item, index) => (
              <Card 
                key={item.title}
                className="shadow-soft hover:shadow-medium transition-smooth hover:border-primary border-2 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Great Together</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Whether you want to partner with us, support our mission, or join our growing community, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="shadow-medium">
              <a href={telegramHotline} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Partner with Us
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-soft">
              <a href={telegramHotline} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Sponsor Us
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="shadow-soft">
              <a href={telegramCommunity} target="_blank" rel="noopener noreferrer">
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent mb-4">
            Alpha
          </h3>
          <p className="text-muted-foreground mb-6">
            Your Hub of Solutions in Tech, Education, Health & Business
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">About</a>
            <a href="#vision" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Vision & Mission</a>
            <a href="#values" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Values</a>
            <a href="#work" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Our Work</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alpha. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
