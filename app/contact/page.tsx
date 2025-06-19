"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useToast } from "@/hooks/use-toast"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Github,
  Twitter,
  Linkedin,
  HelpCircle,
  Bug,
  Lightbulb,
  Users,
  Shield,
  Zap,
  CheckCircle,
  ExternalLink,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    category: "",
    message: "",
    newsletter: false,
    priority: "normal",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    })

    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      category: "",
      message: "",
      newsletter: false,
      priority: "normal",
    })
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 bg-primary/10 rounded-full">
              <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Get in Touch</h1>
          <p className="text-sm xs:text-base sm:text-xl text-muted-foreground mb-4 sm:mb-6 max-w-3xl mx-auto">
            Have questions about LearAPI? Need help with integration? Want to suggest a feature? We're here to help!
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs sm:text-sm">
              ⚡ Quick Response
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs sm:text-sm">
              🛡️ Secure Communication
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-xs sm:text-sm">
              🌍 Global Support
            </Badge>
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Send us a message</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs sm:text-sm">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Doe"
                        required
                        className="text-xs sm:text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs sm:text-sm">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@example.com"
                        required
                        className="text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-xs sm:text-sm">
                        Company (Optional)
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your Company"
                        className="text-xs sm:text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-xs sm:text-sm">
                        Category <span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger className="text-xs sm:text-sm">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="feature">Feature Request</SelectItem>
                          <SelectItem value="bug">Bug Report</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-xs sm:text-sm">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Brief description of your inquiry"
                      required
                      className="text-xs sm:text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priority" className="text-xs sm:text-sm">
                      Priority Level
                    </Label>
                    <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                      <SelectTrigger className="text-xs sm:text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - General question</SelectItem>
                        <SelectItem value="normal">Normal - Standard inquiry</SelectItem>
                        <SelectItem value="high">High - Urgent issue</SelectItem>
                        <SelectItem value="critical">Critical - System down</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs sm:text-sm">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please provide as much detail as possible..."
                      className="min-h-[100px] sm:min-h-[120px] text-xs sm:text-sm"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                    />
                    <Label htmlFor="newsletter" className="text-xs sm:text-sm">
                      Subscribe to our newsletter for updates and API tips
                    </Label>
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full text-xs sm:text-sm">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Quick Help */}
          <div className="space-y-4 sm:space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Contact Information</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Get in touch through multiple channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Email</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">support@learapi.com</p>
                    <p className="text-xs text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Phone</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-xs text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Office</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      123 API Street
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Business Hours</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                      <br />
                      Weekend: Emergency support only
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Follow Us</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Stay connected on social media</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <Button variant="outline" size="sm" asChild className="text-xs">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      GitHub
                      <ExternalLink className="h-2 w-2 sm:h-3 sm:w-3 ml-1" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="text-xs">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Twitter
                      <ExternalLink className="h-2 w-2 sm:h-3 sm:w-3 ml-1" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="text-xs">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      LinkedIn
                      <ExternalLink className="h-2 w-2 sm:h-3 sm:w-3 ml-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Help */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Quick Help</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Common questions and resources</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm" asChild>
                  <a href="/docs">
                    <HelpCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    Documentation
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm" asChild>
                  <a href="/explore">
                    <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    API Explorer
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm">
                  <Bug className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Report a Bug
                </Button>
                <Button variant="ghost" className="w-full justify-start text-xs sm:text-sm">
                  <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Feature Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">How do I get started with LearAPI?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Simply visit our API Explorer, choose a category, and start testing endpoints immediately. No
                  registration required for basic usage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Is LearAPI free to use?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Yes! LearAPI is completely free for learning and testing purposes. We provide access to multiple
                  public APIs without any cost.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Can I use this for commercial projects?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  LearAPI is for educational purposes. For commercial use, please refer to the individual API providers'
                  terms of service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">How do I report a bug or request a feature?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Use the contact form above with the "Bug Report" or "Feature Request" category, or reach out to us
                  directly via email.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <Card className="text-center">
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex justify-center mb-2">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base">24h Response</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Average email response time</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex justify-center mb-2">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base">10k+ Developers</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Trust LearAPI for learning</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex justify-center mb-2">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base">99.9% Uptime</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Reliable service availability</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex justify-center mb-2">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base">Fast Support</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Quick issue resolution</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
