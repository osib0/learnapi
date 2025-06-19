import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - LearAPI | Get Help with API Integration",
  description:
    "Contact LearAPI team for support, feature requests, or partnership opportunities. We're here to help you succeed with API integration.",
  keywords: "contact LearAPI, API support, technical help, API integration support, developer support",
  openGraph: {
    title: "Contact Us - LearAPI",
    description: "Get help with API integration and learning. Contact our support team.",
    type: "website",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
