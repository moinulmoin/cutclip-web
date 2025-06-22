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
                <h3 className="text-lg font-medium">2.1 Personal Information</h3>
                <p>We collect minimal personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email address (for Pro license purchases and support)</li>
                  <li>Payment information (processed securely by our payment processor)</li>
                </ul>

                <h3 className="text-lg font-medium">2.2 Usage Information</h3>
                <p>We may collect basic usage analytics:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>App launch and usage frequency</li>
                  <li>Feature usage statistics</li>
                  <li>Error reports and crash logs</li>
                  <li>macOS version and system specifications</li>
                </ul>

                <h3 className="text-lg font-medium">2.3 Video Content</h3>
                <p><strong>Important:</strong> We do NOT collect, store, or have access to your video content. All video processing happens locally on your device.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <div className="text-muted-foreground">
                <p className="mb-4">We use collected information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process Pro license purchases and provide customer support</li>
                  <li>Improve app functionality and user experience</li>
                  <li>Send important updates about the app (security updates, new features)</li>
                  <li>Analyze usage patterns to enhance our services</li>
                  <li>Troubleshoot technical issues</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Processing and Storage</h2>
              <div className="text-muted-foreground space-y-4">
                <h3 className="text-lg font-medium">4.1 Local Processing</h3>
                <p>CutClip processes all video content locally on your Mac using WebCodecs technology. Your videos never leave your device.</p>

                <h3 className="text-lg font-medium">4.2 YouTube Integration</h3>
                <p>We use Edge Functions to proxy YouTube streams for compatibility. This proxy does not store or log video content.</p>

                <h3 className="text-lg font-medium">4.3 Data Storage</h3>
                <p>Personal information is stored securely using industry-standard encryption. Usage analytics are anonymized and aggregated.</p>
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

                <h3 className="text-lg font-medium">6.2 YouTube API</h3>
                <p>CutClip interacts with YouTube's services. Your use of YouTube content is subject to YouTube's Terms of Service and Privacy Policy.</p>

                <h3 className="text-lg font-medium">6.3 Analytics</h3>
                <p>We may use analytics services to understand app usage. These services collect anonymized data only.</p>
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
                <p>To exercise these rights, contact us at privacy@cutclip.app.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Data Retention</h2>
              <div className="text-muted-foreground space-y-4">
                <p>We retain your information only as long as necessary:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account information: Until you request deletion</li>
                  <li>Payment records: As required by law (typically 7 years)</li>
                  <li>Usage analytics: Anonymized data may be retained indefinitely</li>
                  <li>Support communications: 2 years after resolution</li>
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
                <p>For questions about this Privacy Policy or to exercise your privacy rights, contact us:</p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> privacy@cutclip.app</li>
                  <li><strong>Support:</strong> support@cutclip.app</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}