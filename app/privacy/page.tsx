import { ROUTE_MAP } from "@/app/lib/route-map"
import { SectionHeading } from "@/app/components/section-heading"
import { FadeIn } from "@/app/components/fade-in"
import Link from "next/link"

const sections = [
  {
    title: "Information We Collect",
    content: [
      "We collect information you provide directly when you create an account, subscribe to our newsletter, or contact us. This may include your name, email address, and any messages you send.",
      "We automatically collect certain technical information when you visit our platform, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our content. We use cookies and similar technologies to collect this data.",
      "If you choose to track your learning progress, we store data about which tutorials you've completed, quiz scores, and your preferences to provide a personalized experience.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use the information we collect to provide, maintain, and improve our educational platform. This includes personalizing your learning experience, recommending relevant content, and tracking your progress through tutorials and courses.",
      "We may use your email address to send you updates about new content, platform improvements, and educational resources. You can opt out of these communications at any time.",
      "We analyze aggregated, anonymized usage data to understand how our platform is used, identify popular content, and improve the overall learning experience for all users.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption of data in transit and at rest, regular security audits, and access controls.",
      "While we strive to protect your information, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security but are committed to following best practices.",
      "We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to access, correct, or delete the personal information we hold about you. You can update your account information at any time through your dashboard settings.",
      "You may request a copy of all personal data we have associated with your account. We will respond to such requests within 30 days.",
      "You have the right to opt out of marketing communications, withdraw consent for data processing where applicable, and request that we restrict how we use your data. To exercise any of these rights, please contact us using the information below.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "Our platform may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.",
      "We may use third-party analytics and hosting services to operate our platform. These providers are contractually obligated to protect your data and only process it on our behalf.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions or concerns about this Privacy Policy or our data practices, please reach out through our contact page. We take your privacy seriously and will address your inquiry promptly.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <SectionHeading
            label="Legal"
            title="Privacy Policy"
            description="How we collect, use, and protect your data while you use AI Learning Hub."
          />
          <FadeIn direction="up" delay={300}>
            <p className="text-sm text-muted-foreground">Last updated: March 15, 2026</p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 md:pb-32">
        <div className="section-container max-w-3xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <FadeIn key={section.title} direction="up" delay={100 + index * 50}>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">{section.title}</h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={400}>
            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Questions about this policy?{" "}
                <Link
                  href={ROUTE_MAP.contact}
                  className="text-gold hover:text-gold-light transition-colors font-medium"
                >
                  Contact us
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
