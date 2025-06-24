import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for CutClip - YouTube Video Clipper for macOS",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                At CutClip, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our macOS application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <div className="text-muted-foreground space-y-4">
                <h3 className="text-lg font-medium">2.1 Device Identification</h3>
                <p>To manage licensing and usage tracking, we collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hardware UUID from your Mac's system</li>
                  <li>Mac serial number</li>
                  <li>Primary network interface MAC address</li>
                  <li>macOS version and system specifications</li>
                  <li>Device model and CPU architecture</li>
                </ul>
                <p>These identifiers are combined and hashed to create a unique device ID for license management.</p>

                <h3 className="text-lg font-medium">2.2 Personal Information</h3>
                <p>We collect minimal personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email address (for Pro license purchases and support)</li>
                  <li>Payment information (processed securely by our payment processor)</li>
                </ul>

                <h3 className="text-lg font-medium">2.3 Usage and Service Data</h3>
                <p>For service functionality, we track:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Free credit usage and remaining credits</li>
                  <li>License activation status and device linking</li>
                  <li>Device registration timestamps</li>
                  <li>App error occurrences and network connectivity issues</li>
                </ul>

                <h3 className="text-lg font-medium">2.4 Video Content</h3>
                <p><strong>Important:</strong> We do NOT collect, store, or have access to your video content. All video processing happens locally on your device using downloaded yt-dlp and FFmpeg binaries.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <div className="text-muted-foreground">
                <p className="mb-4">We use collected information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create and manage unique device identifications for licensing</li>
                  <li>Track free credit usage and enforce the 3-credit limit per device</li>
                  <li>Validate and activate Pro license keys</li>
                  <li>Register devices and link them to user accounts</li>
                  <li>Process Pro license purchases and provide customer support</li>
                  <li>Monitor app functionality and troubleshoot technical issues</li>
                  <li>Ensure license compliance and prevent unauthorized usage</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Processing and Storage</h2>
              <div className="text-muted-foreground space-y-4">
                <h3 className="text-lg font-medium">4.1 Local Video Processing</h3>
                <p>CutClip processes all video content locally on your Mac using downloaded yt-dlp and FFmpeg binaries. Your videos never leave your device and are temporarily stored in your system's temp directory during processing.</p>

                <h3 className="text-lg font-medium">4.2 Device Data Transmission</h3>
                <p>Device identification data, usage information, and license validation requests are transmitted to our backend API servers for processing. We use HTTPS encryption for all communications.</p>

                <h3 className="text-lg font-medium">4.3 Local Secure Storage</h3>
                <p>License keys and device registration data are stored locally on your Mac using the system keychain with "when unlocked this device only" security access. Device IDs are cached in UserDefaults for performance.</p>

                <h3 className="text-lg font-medium">4.4 Third-Party Binary Downloads</h3>
                <p>The app automatically downloads yt-dlp from GitHub and FFmpeg from evermeet.cx. These downloads occur over HTTPS and the binaries are stored in your app support directory.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Information Sharing</h2>
              <div className="text-muted-foreground space-y-4">
                <p>We do not sell, trade, or rent your personal information. We may share information only in these limited circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> Payment processors, cloud hosting, and analytics services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger or acquisition</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
              <div className="text-muted-foreground space-y-4">
                <h3 className="text-lg font-medium">6.1 Payment Processing</h3>
                <p>We use secure payment processors for Pro license purchases. They have their own privacy policies and security measures.</p>

                <h3 className="text-lg font-medium">6.2 YouTube Content Access</h3>
                <p>CutClip uses yt-dlp to download content from YouTube. Your use of YouTube content is subject to YouTube's Terms of Service and Privacy Policy. We do not directly interact with YouTube's APIs.</p>

                <h3 className="text-lg font-medium">6.3 Binary Downloads</h3>
                <p>The app downloads required binaries from external sources: yt-dlp from GitHub (github.com) and FFmpeg from evermeet.cx. These downloads are necessary for app functionality.</p>

                <h3 className="text-lg font-medium">6.4 Network Monitoring</h3>
                <p>The app monitors network connectivity by testing against youtube.com to ensure proper functionality. No personal data is transmitted during these tests.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
              <div className="text-muted-foreground space-y-4">
                <p>We implement appropriate security measures to protect your information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information</li>
                  <li>Secure servers and infrastructure</li>
                </ul>
                <p>However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Your Privacy Rights</h2>
              <div className="text-muted-foreground space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correct:</strong> Update or correct inaccurate information</li>
                  <li><strong>Delete:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-out:</strong> Disable analytics and usage tracking</li>
                  <li><strong>Portability:</strong> Receive your data in a portable format</li>
                </ul>
                <p>To exercise these rights, contact us at contact@moinulmoin.com.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Data Retention</h2>
              <div className="text-muted-foreground space-y-4">
                <p>We retain your information only as long as necessary:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Device registration data: Until you request deletion or device deactivation</li>
                  <li>License activation records: For the lifetime of the license</li>
                  <li>Payment records: As required by law (typically 7 years)</li>
                  <li>Usage credit tracking: Until device deregistration</li>
                  <li>Support communications: 2 years after resolution</li>
                  <li>Temporary video files: Automatically deleted after 30 seconds to 1 hour</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
              <div className="text-muted-foreground">
                <p>CutClip is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we discover such information has been collected, we will delete it immediately.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. International Users</h2>
              <div className="text-muted-foreground">
                <p>CutClip is designed for use worldwide. If you're located outside the United States, your information may be transferred to and processed in the United States. By using our app, you consent to this transfer.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Changes to This Policy</h2>
              <div className="text-muted-foreground">
                <p>We may update this Privacy Policy from time to time. We will notify users of significant changes through the app or by email. Your continued use of CutClip after changes constitutes acceptance of the updated policy.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
              <div className="text-muted-foreground space-y-4">
                <p>For questions about this Privacy Policy or to exercise your privacy rights, contact us at: <strong>contact@moinulmoin.com</strong></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}