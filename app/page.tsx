"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Zap, Shield, Palette, Globe, Github, BookOpen, Play, Star, Users, Clock, CheckCircle, Copy } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { animate, motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import ProfitablerateAd from "@/components/profielareaad";
import BannerAd from "@/components/bannerad";
import Image from "next/image";
import logo from "@/public/favicon.ico";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

const fadeCount = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Counter = ({ from = 0, to, duration = 1 }: { from?: number; to: number; duration?: number }) => {
  const [value, setValue] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      onUpdate(latest) {
        setValue(Math.floor(latest));
      },
    });
    return () => controls.stop();
  }, [from, to, duration]);

  return <span>{value}</span>;
};

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [responseTime, setResponseTime] = useState<number | null>(null);
  const { toast } = useToast();

  const runApiDemo = async () => {
    setIsLoading(true);
    const startTime = Date.now();

    try {
      // Simulate API call to random user endpoint
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();

      // Replace with osib details
      const customResponse = {
        ...data,
        results: [
          {
            ...data.results[0],
            name: {
              title: "Mr",
              first: "Osib",
              last: "Developer",
            },
            email: "osib@learnapi.com",
            location: {
              ...data.results[0].location,
              city: "Karachi",
              country: "Pakistan",
            },
            phone: "+92 300 1234567",
          },
        ],
      };

      const endTime = Date.now();
      setResponseTime(endTime - startTime);
      setApiResponse(customResponse);

      toast({
        title: "API Call Successful! 🎉",
        description: `Response received in ${endTime - startTime}ms`,
      });
    } catch (error) {
      toast({
        title: "API Call Failed",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyResponse = () => {
    if (apiResponse) {
      navigator.clipboard.writeText(JSON.stringify(apiResponse, null, 2));
      toast({
        title: "Copied! 📋",
        description: "API response copied to clipboard",
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container mx-auto px-3 sm:px-4 flex h-14 sm:h-16 items-center justify-between">
          <Link href="/">
            <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
              <Image src={logo} alt="logo" width={65} objectFit="contain" />
            </motion.div>
          </Link>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/explore" className="text-sm font-medium hover:text-primary transition-colors">
                Explore
              </Link>
              <Link href="/docs" className="text-sm font-medium hover:text-primary transition-colors">
                Docs
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="sm" className="text-xs sm:text-sm">
                <Link href="/explore">
                  <span className="hidden xs:inline">Get Started</span>
                  <span className="xs:hidden">Start</span>
                  <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>
      {/* Hero Section */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <motion.div className="mx-auto max-w-4xl text-center" variants={staggerContainer} initial="initial" animate="animate">
          <motion.div variants={fadeInUp}>
            <Badge variant="secondary" className="mb-3 sm:mb-4 text-xs sm:text-sm">
              🚀 Interactive API Playground
            </Badge>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="mb-3 sm:mb-4 md:mb-6 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Explore & Learn <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Real APIs</span> Instantly
          </motion.h1>

          <motion.p variants={fadeInUp} className="mb-4 sm:mb-6 md:mb-8 text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4">
            Interactive API playground with real-time response, code snippets & more. Perfect for developers to discover, test, and learn about public APIs.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-4">
            <motion.div {...scaleOnHover} className="w-full xs:w-auto">
              <Button size="lg" asChild className="w-full xs:w-auto text-sm sm:text-base">
                <Link href="/explore">
                  <Play className="mr-2 h-4 w-4" />
                  <span className="hidden xs:inline">Start Exploring APIs</span>
                  <span className="xs:hidden">Explore APIs</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div {...scaleOnHover} className="w-full xs:w-auto">
              <Button size="lg" variant="outline" asChild className="w-full xs:w-auto text-sm sm:text-base">
                <Link href="https://github.com/Osib06/learnapi" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  <span className="hidden xs:inline">View on GitHub</span>
                  <span className="xs:hidden">GitHub</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div {...scaleOnHover} className="w-full xs:w-auto">
              <Button
                size="lg"
                asChild
                className="w-full xs:w-auto text-sm sm:text-base bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white hover:brightness-110 animate-pulse"
              >
                <Link href="https://retortmansion.com/v9kr6nrvf2?key=b7de76c8576335613d82929fa8636bcd" target="_blank">
                  🔥 Boost Your Dev Toolkit
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeCount} initial="initial" animate="animate" className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-primary">
              <Counter to={10} />+
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">API Endpoints</div>
          </motion.div>

          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-primary">
              <Counter to={5} />
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Languages</div>
          </motion.div>

          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-primary">
              <Counter to={100} />%
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Free</div>
          </motion.div>

          <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
            <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-primary">
              <Counter to={24} />
              /7
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Available</div>
          </motion.div>
        </motion.div>
      </section>
      <BannerAd />

      {/* Live API Demo Section */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <motion.div className="mx-auto max-w-6xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="mb-3 sm:mb-4 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold">Try It Live!</h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
              See LearnAPI in action. Click the button below to make a real API call and see the response instantly.
            </p>
          </div>

          <motion.div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            {/* API Call Panel */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    Random User API Demo
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Click the button to fetch a random user profile from the RandomUser API</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="p-2 sm:p-3 bg-muted rounded-lg font-mono text-xs sm:text-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-100 text-green-800 text-xs">GET</Badge>
                      <span className="text-muted-foreground text-xs">API Endpoint</span>
                    </div>
                    <code className="break-all">https://randomuser.me/api/</code>
                  </div>

                  <motion.div {...scaleOnHover}>
                    <Button onClick={runApiDemo} disabled={isLoading} className="w-full" size="lg">
                      {isLoading ? (
                        <>
                          <motion.div
                            className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          />
                          <span className="text-sm">Making API Call...</span>
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          <span className="text-sm sm:text-base">Run API Call</span>
                          <Zap className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>

                  {responseTime && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-center gap-2 text-xs sm:text-sm text-green-600"
                    >
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      Response time: {responseTime}ms
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Response Panel */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                      <Code className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      API Response
                    </CardTitle>
                    {apiResponse && (
                      <Button variant="ghost" size="sm" onClick={copyResponse}>
                        <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    )}
                  </div>
                  <CardDescription className="text-xs sm:text-sm">Live response from the API call will appear here</CardDescription>
                </CardHeader>
                <CardContent>
                  {apiResponse ? (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-4">
                      {/* User Info Display */}
                      {apiResponse.results && apiResponse.results[0] && (
                        <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border shadow-sm">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <Users className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-base truncate">
                                {apiResponse.results[0].name.first} {apiResponse.results[0].name.last}
                              </h4>
                              <p className="text-sm text-muted-foreground truncate">{apiResponse.results[0].email}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            <div>
                              <span className="font-medium">Location:</span>
                              <p className="text-muted-foreground truncate">
                                {apiResponse.results[0].location.city}, {apiResponse.results[0].location.country}
                              </p>
                            </div>
                            <div>
                              <span className="font-medium">Phone:</span>
                              <p className="text-muted-foreground truncate">{apiResponse.results[0].phone}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Raw JSON Response */}
                      <div className="relative max-h-60 sm:max-h-80 w-full overflow-auto json-data-show">
                        <pre className="p-4 bg-muted rounded-lg text-xs leading-relaxed whitespace-pre text-left overflow-x-auto max-h-60 sm:max-h-80 json-data-show">
                          <code>{JSON.stringify(apiResponse, null, 2)}</code>
                        </pre>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Code className="h-10 w-10 text-muted-foreground/50 mb-4" />
                      </motion.div>
                      <p className="text-muted-foreground text-sm">Click "Run API Call" to see the response here</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <ProfitablerateAd />
      {/* Features Section */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <motion.div className="mx-auto max-w-6xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="mb-3 sm:mb-4 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold">Why Choose LearnAPI?</h2>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">Everything you need to explore, test, and learn APIs in one place</p>
          </div>

          <motion.div
            className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Zap,
                title: "Real-time Testing",
                description: "Make live API calls and see responses instantly with detailed status codes and timing information.",
                color: "text-blue-600",
              },
              {
                icon: Code,
                title: "Code Snippets",
                description: "Get ready-to-use code examples in Node.js, Python, Shell, PHP, and more programming languages.",
                color: "text-green-600",
              },
              {
                icon: Palette,
                title: "Beautiful UI",
                description: "Clean, modern interface with dark/light mode support and responsive design for all devices.",
                color: "text-purple-600",
              },
              {
                icon: Shield,
                title: "Secure & Fast",
                description: "Built with security in mind and optimized for performance with caching and efficient data handling.",
                color: "text-red-600",
              },
              {
                icon: Globe,
                title: "Multiple APIs",
                description: "Explore various public APIs including users, quotes, products, and more with comprehensive documentation.",
                color: "text-indigo-600",
              },
              {
                icon: ArrowRight,
                title: "Easy to Use",
                description: "Intuitive interface designed for developers of all levels, from beginners to experts.",
                color: "text-orange-600",
              },
            ].map((feature, index) => (
              <motion.div key={feature.title} variants={fadeInUp} whileHover={{ scale: 1.05, rotateY: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader className="text-center pb-2 sm:pb-4">
                    <feature.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${feature.color} mx-auto`} />
                    <CardTitle className="text-base sm:text-lg md:text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-center text-xs sm:text-sm">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      {/* CTA Section */}
      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r border-2 border-primary/20">
            <CardHeader className="text-center pb-3 sm:pb-4">
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}>
                <Star className="h-8 w-8 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
              </motion.div>
              <CardTitle className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Start Exploring?</CardTitle>
              <CardDescription className="text-sm xs:text-base sm:text-lg max-w-2xl mx-auto px-2">
                Join thousands of developers who are already using LearnAPI to master API integration. Start your journey today - it's completely free!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center flex-wrap">
                <motion.div {...scaleOnHover} className="w-full xs:w-auto">
                  <Button size="lg" asChild className="w-full xs:w-auto text-sm sm:text-base">
                    <Link href="/explore">
                      <Play className="mr-2 h-4 w-4" />
                      <span className="hidden xs:inline">Explore APIs Now</span>
                      <span className="xs:hidden">Explore Now</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div {...scaleOnHover} className="w-full xs:w-auto">
                  <Button size="lg" variant="outline" asChild className="w-full xs:w-auto text-sm sm:text-base">
                    <Link href="/docs">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <span className="hidden xs:inline">Read Documentation</span>
                      <span className="xs:hidden">Read Docs</span>
                    </Link>
                  </Button>
                </motion.div>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>1000+ Developers</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>5-Star Experience</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>100% Secure</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
      {/* Footer */}
      <motion.footer className="border-t bg-background" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 sm:grid-cols-4">
            <div className="col-span-2 sm:col-span-1 text-center sm:text-left">
              <Link href="/">
                <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
                  <Image src={logo} alt="logo" width={65} objectFit="contain" />
                </motion.div>
              </Link>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Interactive API playground for developers</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold">Learn</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  <Link href="/explore" className="hover:text-foreground transition-colors">
                    Explore APIs
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold">Support</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="mb-2 sm:mb-3 text-xs sm:text-sm font-semibold">Connect</h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>
                  <Link href="https://github.com/Osib06/learnapi" className="hover:text-foreground transition-colors">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <motion.div
            className="mt-6 sm:mt-8 border-t pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2025 LearnAPI. Built with ❤️ for developers.</p>
            <motion.p className="mt-1 sm:mt-2 text-xs" whileHover={{ scale: 1.05 }}>
              Developed by <span className="font-semibold text-primary">Osib</span>
            </motion.p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
