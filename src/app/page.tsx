import demo from "@/assets/demo.png";
import logo from "@/assets/logo.png";
import { AppleIcon } from "@/components/ui/apple-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";
import { Check, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  applicationCategory: "MultimediaApplication",
  applicationSubCategory: "Video Editor",
  operatingSystem: "macOS",
  description: siteConfig.description,
  url: siteConfig.url,
  downloadUrl: `${siteConfig.url}/download`,
  softwareVersion: "1.0",
  datePublished: "2024",
  author: {
    "@type": "Person",
    name: siteConfig.author
  },
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      category: "Free Trial",
      description: "3 uses total with all features included"
    },
    {
      "@type": "Offer",
      price: "4.99",
      priceCurrency: "USD",
      category: "Pro License",
      description: "Unlimited clips with priority support"
    }
  ],
  featureList: [
    "One-Click Setup",
    "Native Performance",
    "100% Private",
    "Unlimited clips (Pro)",
    "Priority support (Pro)",
    "Future updates included (Pro)"
  ],
  screenshot: `${siteConfig.url}/demo.png`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "5000"
  }
};

const product = {
  id: process.env.POLAR_PRODUCT_ID!,
  name: "Lifetime License (Personal Use)",
  price: 4.99
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image src={logo} alt="CutClip" width={60} height={60} />
            <h1 className="text-4xl font-bold tracking-tight">CutClip</h1>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent text-balance">
            CREATE CLIPS INSTANTLY
          </h2>

          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-balance">
            The native macOS app that turns any YouTube video into perfect clips in seconds. No more
            wrestling with complex video editors.
          </p>

          {/* Social Proof Numbers */}
          {/* <div className="flex items-center justify-center gap-8 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-medium">5,000+ users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-primary" />
              <span className="font-medium">4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Play className="h-4 w-4 text-primary" />
              <span className="font-medium">50,000+ clips made</span>
            </div>
          </div> */}

          <div className="flex gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 flex items-center gap-2" variant="outline">
              <AppleIcon className="h-5 w-5" />
              Download Free
            </Button>
            <Link href={`/api/checkout?products=${product.id}`} passHref>
              <Button size="lg" className="text-lg px-8 flex items-center gap-2">
                <AppleIcon className="h-5 w-5" />
                Buy Pro - ${product.price.toFixed(2)}
              </Button>
            </Link>
          </div>

          {/* Demo Preview */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="flex flex-col items-center justify-center">
              <Image
                src={demo}
                alt="CutClip Demo"
                width={500}
                height={500}
                className="rounded-lg"
                priority
              />
              <p className="text-center text-sm text-muted-foreground mt-2">
                Paste a YouTube link, set the start and end times, and click &quot;Clip Video&quot;.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          {/* <div className="max-w-6xl mx-auto mb-20">
            <h3 className="text-2xl font-semibold mb-12">Loved by creators everywhere</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-none bg-muted/30">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">
                    "Finally! A tool that just works. No more 20-minute renders for a 30-second clip."
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <strong>Sarah M.</strong> - Content Creator
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none bg-muted/30">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">
                    "Saves me hours every week. The auto-setup is genius - everything just works."
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <strong>Mike R.</strong> - YouTuber
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none bg-muted/30">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">
                    "Best $5 I've spent this year. Pays for itself after the first video."
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <strong>Alex K.</strong> - Video Editor
                  </div>
                </CardContent>
              </Card>
            </div>
          </div> */}

          {/* Features Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <h3 className="text-2xl font-semibold mb-4">Everything you need, nothing you don't</h3>
            <p className="text-muted-foreground mb-12">Built for speed and simplicity</p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">One-Click Setup</h4>
                <p className="text-sm text-muted-foreground">
                  Downloads and configures everything automatically. Just install and go.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <AppleIcon className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Native Performance</h4>
                <p className="text-sm text-muted-foreground">
                  Built specifically for Mac. Fast, reliable, and integrates perfectly.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">100% Private</h4>
                <p className="text-sm text-muted-foreground">
                  All processing happens on your Mac. Your videos never leave your computer.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold mb-4">Start free, upgrade when ready</h2>
            <p className="text-muted-foreground mb-12">
              Most people upgrade after their first 3 clips
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Free Tier */}
              <Card className="relative">
                <CardHeader className="text-center pb-4">
                  <Badge variant="secondary" className="w-fit mx-auto mb-2">
                    Free
                  </Badge>
                  <CardTitle className="text-3xl">$0</CardTitle>
                  <CardDescription>Try it risk-free</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">3 uses total</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">All features included</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Full quality exports</span>
                    </div>
                  </div>
                  <Button variant="outline" size="lg">
                    <AppleIcon />
                    Download Free
                  </Button>
                </CardContent>
              </Card>

              {/* Personal License */}
              <Card className="relative border-primary border-2">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pb-4 pt-6">
                  <Badge variant="default" className="w-fit mx-auto mb-2">
                    Pro
                  </Badge>
                  <CardTitle className="text-3xl">$4.99</CardTitle>
                  <CardDescription>One-time purchase, yours forever</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Unlimited clips</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Priority support</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">Future updates included</span>
                    </div>
                  </div>
                  <Link href={`/api/checkout?products=${product.id}`} passHref>
                    <Button size="lg">
                      <AppleIcon />
                      Buy Pro - ${product.price}
                    </Button>
                  </Link>
                  <p className="text-xs text-muted-foreground mt-2">30-day money-back guarantee</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Join thousands of creators</h3>
            <p className="text-muted-foreground mb-6">
              Stop wasting time with complicated video editors. Get perfect clips in seconds.
            </p>
            <Button size="lg">
              <AppleIcon className="h-5 w-5" />
              Download CutClip Now
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              macOS 14 or later • Free to try • No subscription required
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Brand */}
              <div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Image src={logo} alt="CutClip" width={40} height={40} />
                  <h3 className="text-xl font-bold">CutClip</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 max-w-md">
                  The native macOS app that turns any YouTube video into perfect clips in seconds.
                  Built for creators who value speed and simplicity.
                </p>
              </div>

              {/* Support Links */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Button
                  variant="link"
                  size="sm"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground"
                >
                  Support
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground"
                  asChild
                >
                  <Link href="/privacy">Privacy Policy</Link>
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  className="h-auto p-0 text-muted-foreground hover:text-foreground"
                  asChild
                >
                  <Link href="/terms">Terms of Service</Link>
                </Button>
              </div>

              {/* Copyright */}
              <div className="text-xs text-muted-foreground">
                © 2025 CutClip. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
