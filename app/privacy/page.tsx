import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, Lock, Users, Database, Mail } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Ads from "@/components/ads";

export const metadata = {
  title: "Privacy Policy - LearnAPI",
  description: "Learn how LearnAPI protects your privacy and handles your data with transparency and security.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 bg-primary/10 rounded-full">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Privacy Policy</h1>
          <p className="text-sm xs:text-base sm:text-xl text-muted-foreground mb-3 sm:mb-4">Your privacy is important to us. Learn how we protect and handle your data.</p>
          <Badge variant="secondary" className="mb-4 sm:mb-6 text-xs sm:text-sm">
            Last updated: December 2025
          </Badge>
        </div>
        <Ads />

        {/* Quick Overview */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
              Quick Overview
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">Here's what you need to know about how we handle your information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-green-100 rounded-lg">
                  <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm">Data Security</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">We use industry-standard encryption and security measures</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm">No Data Selling</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">We never sell your personal information to third parties</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-purple-100 rounded-lg">
                  <Database className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm">Minimal Data</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">We only collect data necessary for service functionality</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-orange-100 rounded-lg">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm">Transparent Communication</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Clear notifications about any policy changes</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-6 sm:space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Information You Provide</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs sm:text-sm">
                  <li>Account information (email, username) when you create an account</li>
                  <li>API requests and parameters you test through our platform</li>
                  <li>Feedback and support communications</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Information We Collect Automatically</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs sm:text-sm">
                  <li>Usage data (pages visited, features used, time spent)</li>
                  <li>Device information (browser type, operating system)</li>
                  <li>IP address and general location information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Badge variant="outline" className="mt-1 text-xs">
                    Service
                  </Badge>
                  <p className="text-xs sm:text-sm">Provide and maintain the LearnAPI platform functionality</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Badge variant="outline" className="mt-1 text-xs">
                    Improvement
                  </Badge>
                  <p className="text-xs sm:text-sm">Analyze usage patterns to improve our services and user experience</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Badge variant="outline" className="mt-1 text-xs">
                    Communication
                  </Badge>
                  <p className="text-xs sm:text-sm">Send important updates, security alerts, and support messages</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Badge variant="outline" className="mt-1 text-xs">
                    Security
                  </Badge>
                  <p className="text-xs sm:text-sm">Detect and prevent fraud, abuse, and security incidents</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Badge variant="outline" className="mt-1 text-xs">
                    Legal
                  </Badge>
                  <p className="text-xs sm:text-sm">Comply with legal obligations and enforce our terms of service</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">3. Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2 text-sm sm:text-base">We do not sell your personal information</h4>
                <p className="text-xs sm:text-sm text-green-700">LearnAPI never sells, rents, or trades your personal information to third parties for marketing purposes.</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">We may share information in these limited circumstances:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs sm:text-sm">
                  <li>
                    <strong>Service Providers:</strong> Trusted partners who help us operate our platform
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or to protect rights and safety
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales
                  </li>
                  <li>
                    <strong>With Consent:</strong> When you explicitly agree to share information
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <p className="text-muted-foreground text-xs sm:text-sm">We implement appropriate technical and organizational measures to protect your information:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Technical Measures</h4>
                  <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                    <li>• End-to-end encryption</li>
                    <li>• Secure data transmission (HTTPS)</li>
                    <li>• Regular security audits</li>
                    <li>• Access controls and monitoring</li>
                  </ul>
                </div>
                <div className="p-3 sm:p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Organizational Measures</h4>
                  <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                    <li>• Employee training programs</li>
                    <li>• Data access limitations</li>
                    <li>• Incident response procedures</li>
                    <li>• Regular policy reviews</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">5. Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">You have several rights regarding your personal information:</p>

              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Badge variant="secondary" className="text-xs">
                    Access
                  </Badge>
                  <p className="text-xs sm:text-sm">Request a copy of the personal information we have about you</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Badge variant="secondary" className="text-xs">
                    Correction
                  </Badge>
                  <p className="text-xs sm:text-sm">Update or correct inaccurate personal information</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Badge variant="secondary" className="text-xs">
                    Deletion
                  </Badge>
                  <p className="text-xs sm:text-sm">Request deletion of your personal information (subject to legal requirements)</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Badge variant="secondary" className="text-xs">
                    Portability
                  </Badge>
                  <p className="text-xs sm:text-sm">Receive your data in a structured, machine-readable format</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Badge variant="secondary" className="text-xs">
                    Objection
                  </Badge>
                  <p className="text-xs sm:text-sm">Object to certain processing of your personal information</p>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs sm:text-sm text-blue-800">
                  <strong>To exercise these rights,</strong> please contact us at{" "}
                  <a href="mailto:privacy@learnapi.com" className="underline">
                    privacy@learnapi.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">6. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">If you have questions about this privacy policy or our data practices, please contact us:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">General Inquiries</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Email:{" "}
                    <a href="mailto:privacy@learnapi.com" className="text-primary hover:underline">
                      privacy@learnapi.com
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Data Protection Officer</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Email:{" "}
                    <a href="mailto:dpo@learnapi.com" className="text-primary hover:underline">
                      dpo@learnapi.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 border rounded-lg">
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Response Time</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  We aim to respond to all privacy-related inquiries within 30 days. For urgent matters, please indicate "URGENT" in your subject line.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
