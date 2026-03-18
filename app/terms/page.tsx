import { ROUTE_MAP } from "@/app/lib/route-map"
import { SectionHeading } from "@/app/components/section-heading"
import { FadeIn } from "@/app/components/fade-in"
import { generatePageMetadata } from "@/app/lib/seo"
import Link from "next/link"

export const metadata = generatePageMetadata({
  title: "Terms of Service",
  description: "The rules and expectations for using AI Learning Hub resources and services.",
  path: ROUTE_MAP.terms,
})

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing and using AI Learning Hub, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this platform.",
      "We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the platform following any changes constitutes acceptance of the revised terms. We recommend reviewing this page periodically.",
    ],
  },
  {
    title: "User Accounts",
    content: [
      "To access certain features of the platform, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      "You agree to provide accurate, current, and complete information during registration and to update your information as necessary. We reserve the right to suspend or terminate accounts that contain inaccurate or misleading information.",
      "You must be at least 13 years of age to create an account. If you are under 18, you represent that your parent or legal guardian has reviewed and agreed to these terms on your behalf.",
    ],
  },
  {
    title: "Content & Usage",
    content: [
      "All educational content on AI Learning Hub, including tutorials, articles, glossary entries, and interactive exercises, is provided for informational and educational purposes only. While we strive for accuracy, we make no guarantees about the completeness or timeliness of the information provided.",
      "You may access and use our content for personal, non-commercial learning purposes. You may not reproduce, distribute, modify, or create derivative works from our content without explicit written permission.",
      "User-generated content, including discussion comments and forum posts, must be respectful, relevant, and free from harmful, abusive, or illegal material. We reserve the right to remove any content that violates these guidelines.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content, design elements, logos, and trademarks on AI Learning Hub are the property of AI Learning Hub or its content partners and are protected by intellectual property laws.",
      "Any feedback, suggestions, or ideas you submit regarding the platform may be used by us without any obligation to compensate you. By submitting feedback, you grant us a non-exclusive, perpetual, royalty-free license to use it.",
      "If you believe any content on our platform infringes on your intellectual property rights, please contact us with the relevant details so we can investigate and take appropriate action.",
    ],
  },
  {
    title: "Limitations of Liability",
    content: [
      "AI Learning Hub is provided on an \"as is\" and \"as available\" basis. We make no warranties, express or implied, regarding the platform's availability, reliability, or suitability for any particular purpose.",
      "We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform, including but not limited to loss of data, revenue, or profits.",
      "Our total liability for any claim arising from your use of the platform shall not exceed the amount you paid, if any, for access to premium features during the twelve months preceding the claim.",
    ],
  },
  {
    title: "Changes to Terms",
    content: [
      "We may revise these Terms of Service at any time by updating this page. Changes will be effective immediately upon posting. Material changes will be communicated through a notice on the platform or via email to registered users.",
      "Your continued use of AI Learning Hub after any modifications to these terms constitutes acceptance of the updated terms. If you do not agree to the revised terms, please discontinue your use of the platform.",
    ],
  },
]

export default function TermsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <SectionHeading
            label="Legal"
            title="Terms of Service"
            description="The rules and expectations for using AI Learning Hub resources and services."
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
                Questions about these terms?{" "}
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
