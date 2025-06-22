import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for CutClip - YouTube Video Clipper for macOS",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By downloading, installing, or using CutClip ("the Software"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, do not use the Software.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. License Grant</h2>
              <div className="text-muted-foreground space-y-4">
                <p><strong>Free License:</strong> We grant you a limited, non-exclusive, non-transferable license to use CutClip for personal use with up to 3 video clips total.</p>
                <p><strong>Pro License:</strong> Upon payment of the Pro license fee, we grant you a limited, non-exclusive, non-transferable license for unlimited personal use of CutClip.</p>
                <p>All licenses are subject to these Terms and applicable laws.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Permitted Use</h2>
              <div className="text-muted-foreground">
                <p className="mb-4">You may use CutClip to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create clips from YouTube videos for personal use</li>
                  <li>Edit and process videos locally on your device</li>
                  <li>Use the Software in accordance with YouTube's Terms of Service</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Prohibited Use</h2>
              <div className="text-muted-foreground">
                <p className="mb-4">You may NOT:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Software for commercial purposes without explicit permission</li>
                  <li>Redistribute, sell, or sublicense the Software</li>
                  <li>Reverse engineer, decompile, or disassemble the Software</li>
                  <li>Use the Software to infringe on copyrighted content</li>
                  <li>Violate YouTube's Terms of Service or any applicable laws</li>
                  <li>Use the Software to create content that is illegal, harmful, or offensive</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
              <div className="text-muted-foreground space-y-4">
                <p>The Pro license is available for a one-time payment of $4.99 USD. All sales are final.</p>
                <p><strong>Refund Policy:</strong> We offer a 30-day money-back guarantee. If you're not satisfied with CutClip Pro, contact us within 30 days of purchase for a full refund.</p>
                <p>Prices may change at any time, but existing licenses remain valid.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. System Requirements</h2>
              <div className="text-muted-foreground">
                <p>CutClip requires macOS 14 or later. We do not guarantee compatibility with older versions or provide support for unsupported systems.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Privacy and Data</h2>
              <div className="text-muted-foreground space-y-4">
                <p>CutClip processes all videos locally on your device. We do not upload, store, or have access to your video content.</p>
                <p>For detailed information about data collection and privacy, see our Privacy Policy.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
              <div className="text-muted-foreground space-y-4">
                <p>CutClip and all related intellectual property rights remain our exclusive property. You are responsible for ensuring you have the right to use any content you process with the Software.</p>
                <p>Respect copyright laws and YouTube's Terms of Service when using content from their platform.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Disclaimers</h2>
              <div className="text-muted-foreground space-y-4">
                <p>THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
                <p>We do not guarantee uninterrupted or error-free operation of the Software.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
              <div className="text-muted-foreground">
                <p>IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATING TO YOUR USE OF THE SOFTWARE.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Updates and Support</h2>
              <div className="text-muted-foreground space-y-4">
                <p>We may release updates to improve the Software. Updates may be automatic or require manual installation.</p>
                <p>Pro license holders receive priority support. Free users receive limited community support.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
              <div className="text-muted-foreground">
                <p>These Terms remain in effect until terminated. We may terminate your license if you violate these Terms. Upon termination, you must stop using the Software and delete all copies.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
              <div className="text-muted-foreground">
                <p>We may update these Terms from time to time. Continued use of the Software after changes constitutes acceptance of the new Terms.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
              <div className="text-muted-foreground">
                <p>For questions about these Terms, contact us at: support@cutclip.app</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}