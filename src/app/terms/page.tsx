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
              <h2 className="text-2xl font-semibold mb-4">2. License Grant and Usage Model</h2>
              <div className="text-muted-foreground space-y-4">
                <p><strong>Free Usage:</strong> We grant you a limited, non-exclusive, non-transferable license to use CutClip for personal use with up to 3 free credits per device. Each video clip processing consumes one credit.</p>
                <p><strong>Pro License:</strong> Upon payment of the Pro license fee and activation with a valid license key, we grant you a limited, non-exclusive, non-transferable license for unlimited personal use of CutClip on the licensed device.</p>
                <p><strong>Device-Based Licensing:</strong> Licenses are tied to your specific Mac device through hardware identification. Each license key can only be activated on one device.</p>
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
                <p>The Pro license is available for a one-time payment of $4.99 USD. All sales are final and non-refundable.</p>
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
              <h2 className="text-2xl font-semibold mb-4">7. Privacy and Data Collection</h2>
              <div className="text-muted-foreground space-y-4">
                <p><strong>Video Processing:</strong> CutClip processes all videos locally on your device using downloaded yt-dlp and FFmpeg binaries. We do not upload, store, or have access to your video content.</p>
                <p><strong>Device Identification:</strong> The app collects hardware identifiers (system UUID, serial number, MAC address) to create a unique device ID for license management and usage tracking.</p>
                <p><strong>Backend Communication:</strong> The app communicates with our servers to validate licenses, track usage credits, and register devices. This includes sending your device ID and system information.</p>
                <p><strong>Binary Downloads:</strong> The app automatically downloads required third-party binaries (yt-dlp from GitHub, FFmpeg from evermeet.cx) for video processing functionality.</p>
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
              <h2 className="text-2xl font-semibold mb-4">11. Third-Party Dependencies</h2>
              <div className="text-muted-foreground space-y-4">
                <p><strong>External Binaries:</strong> CutClip automatically downloads and uses third-party software including yt-dlp (from GitHub) and FFmpeg (from evermeet.cx). These tools are subject to their respective licenses and terms.</p>
                <p><strong>YouTube Integration:</strong> The app uses yt-dlp to download content from YouTube. Your use of YouTube content must comply with YouTube's Terms of Service.</p>
                <p><strong>Network Requirements:</strong> The app requires internet connectivity for initial setup, license validation, and accessing YouTube content.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Updates and Support</h2>
              <div className="text-muted-foreground space-y-4">
                <p>We may release updates to improve the Software. Updates may be automatic or require manual installation.</p>
                <p>Pro license holders receive priority support. Free users receive limited community support.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Service Modifications and Discontinuation</h2>
              <div className="text-muted-foreground space-y-4">
                <p>We reserve the right, at our sole discretion, to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify, suspend, or discontinue any aspect of the Software at any time</li>
                  <li>Add, remove, or change features, functionality, or capabilities</li>
                  <li>Cease development, support, or maintenance of the Software</li>
                  <li>Alter the Software's operation, availability, or access requirements</li>
                </ul>
                <p>We may exercise these rights without prior notice and without liability to you. Your continued use of the Software after any such changes constitutes acceptance of the modifications.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Termination</h2>
              <div className="text-muted-foreground">
                <p>These Terms remain in effect until terminated. We may terminate your license if you violate these Terms. Upon termination, you must stop using the Software and delete all copies.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">15. Changes to Terms</h2>
              <div className="text-muted-foreground">
                <p>We may update these Terms from time to time. Continued use of the Software after changes constitutes acceptance of the new Terms.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">16. Contact Information</h2>
              <div className="text-muted-foreground">
                <p>For questions about these Terms, contact us at: contact@moinulmoin.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}