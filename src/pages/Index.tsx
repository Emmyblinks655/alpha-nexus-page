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
  MessageCircle,
  ArrowRight
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import techIllustration from "@/assets/tech-illustration.jpg";
import educationIllustration from "@/assets/education-illustration.jpg";
import healthIllustration from "@/assets/health-illustration.jpg";
import businessIllustration from "@/assets/business-illustration.jpg";

const Index = () => {
  const sectors = [
    {
      icon: Cpu,
      title: "Technology",
      description: "Innovative tech solutions driving digital transformation and creating smart solutions for tomorrow",
      color: "text-[hsl(var(--tech))]",
      bgColor: "bg-[hsl(var(--tech)/0.1)]",
      illustration: techIllustration
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Empowering minds through quality learning experiences and accessible educational programs",
      color: "text-[hsl(var(--education))]",
      bgColor: "bg-[hsl(var(--education)/0.1)]",
      illustration: educationIllustration
    },
    {
      icon: Heart,
      title: "Health",
      description: "Comprehensive healthcare solutions for better living and community wellness initiatives",
      color: "text-[hsl(var(--health))]",
      bgColor: "bg-[hsl(var(--health)/0.1)]",
      illustration: healthIllustration
    },
    {
      icon: Briefcase,
      title: "Business",
      description: "Strategic business consulting and growth solutions that drive sustainable success",
      color: "text-[hsl(var(--business))]",
      bgColor: "bg-[hsl(var(--business)/0.1)]",
      illustration: businessIllustration
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve more than we could alone"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Trust and transparency in everything we do"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing boundaries to deliver cutting-edge solutions"
    }
  ];

  const work = [
    {
      title: "Education",
      description: "Automated admissions — exam scoring, admission processing, and student onboarding for schools in Nigeria."
    },
    {
      title: "Tech & Business",
      description: "Training and client-matching support for learners and members."
    },
    {
      title: "Health",
      description: "R&D for breakthrough treatments to tackle major illnesses."
    }
  ];

  const telegramHotline = "https://t.me/Alphahotline";
  const telegramCommunity = "https://t.me/alphalimited";
  const emailContact = "alphalhubimited@gmail.com";

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
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
            <Button asChild variant="cta" size="sm">
              <a href={telegramCommunity} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Join Community
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-24 px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.95) 0%, hsl(var(--accent) / 0.9) 100%), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Your Hub of Solutions
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 drop-shadow animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-150">
            Empowering communities through Technology, Education, Health, and Business solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Button asChild size="lg" variant="cta" className="bg-white text-primary hover:bg-white/90">
              <a href={telegramHotline} target="_blank" rel="noopener noreferrer">
                Partner with Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ctaOutline" className="border-white text-white hover:bg-white hover:text-primary">
              <a href={telegramHotline} target="_blank" rel="noopener noreferrer">
                Sponsor Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sectors with Illustrations */}
      <section className="py-20 px-4 bg-gradient-section">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive solutions across four key sectors to drive positive change
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Card 
                  key={sector.title} 
                  className="group border-2 hover:border-primary transition-all duration-300 shadow-soft hover:shadow-medium hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={sector.illustration} 
                      alt={sector.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 ${sector.bgColor} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  </div>
                  <CardContent className="pt-6">
                    <div className={`${sector.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`h-7 w-7 ${sector.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-3">{sector.title}</h3>
                    <p className="text-muted-foreground text-center text-sm leading-relaxed">{sector.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Initial Brief Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[hsl(var(--primary)/0.05)] to-[hsl(var(--accent)/0.05)] border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <Card className="shadow-medium border-2 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-primary">About This Website</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    This website was built based on Alpha's initial vision — a simple, polished one-page site with 
                    professional UI, clear CTAs that redirect to Telegram, and no database. Our goal is to show the world 
                    that we don't just talk — we solve.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">About Alpha</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="font-medium text-foreground text-xl">
              Alpha is a hub of solutions transforming lives and businesses across Tech, Education, Health, and Business. 
              We don't just talk — we solve problems.
            </p>
            <p>
              From automating school admissions in Nigeria to teaching and supporting learners, helping members get clients, 
              and developing groundbreaking healthcare solutions — Alpha makes real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 px-4 gradient-section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-medium border-2 hover:border-primary transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[hsl(var(--primary)/0.1)] p-3 rounded-xl transition-transform duration-300 group-hover:scale-110">
                    <Eye className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To become a central hub of solutions, helping individuals and companies across multiple sectors — 
                  not just a company, but a place where real problems are solved.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-2 hover:border-accent transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[hsl(var(--accent)/0.1)] p-3 rounded-xl transition-transform duration-300 group-hover:scale-110">
                    <Target className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Innovating across Tech, Education & Health | Building solutions that solve real problems | 
                  Partnering with schools & businesses to shape the future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and action we take
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="group shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section id="work" className="py-20 px-4 gradient-section">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering impactful solutions that make a real difference
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {work.map((item, index) => (
              <Card 
                key={item.title}
                className="group shadow-soft hover:shadow-medium transition-all duration-300 hover:border-primary border-2 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Whether you want to partner with us, support our mission, or join our growing community, 
            we'd love to hear from you.
          </p>
          
          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild size="lg" variant="cta" className="bg-white text-primary hover:bg-white/90 shadow-xl">
              <a href={telegramHotline} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Telegram Hotline
              </a>
            </Button>
            <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <a href={telegramCommunity} target="_blank" rel="noopener noreferrer">
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </a>
            </Button>
            <Button asChild size="lg" variant="ctaOutline" className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg">
              <a href={`mailto:${emailContact}`}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
          </div>

          {/* Contact Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/20 p-4 rounded-xl mb-3">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Telegram Hotline</h4>
                <a href={telegramHotline} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors">
                  @Alphahotline
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/20 p-4 rounded-xl mb-3">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Community</h4>
                <a href={telegramCommunity} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors break-all">
                  t.me/alphalimited
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/20 p-4 rounded-xl mb-3">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Email</h4>
                <a href={`mailto:${emailContact}`} className="text-white/90 hover:text-white transition-colors break-all">
                  {emailContact}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-background">
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
