"use client"
import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 h-screen">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Vyastha Parivartan",
    description: "Commitment to systemic overhaul to ensure real democracy with transparency, accountability, and public involvement in governance.",
    link: "#"  // Placeholder link added
  },
  {
    title: "Good Governance",
    description: "Promoting smart economic policies, effective administration, and a corruption-free environment to achieve national prosperity.",
    link: "#"
  },
  {
    title: "Judicial Reforms",
    description: "Implementing reforms to make the judiciary more efficient and accessible, ensuring justice is timely and impartial.",
    link: "#"
  },
  {
    title: "Electoral Integrity",
    description: "Advocating for reforms like Right to Recall, making NOTA a viable option, and ensuring fair and transparent election processes.",
    link: "#"
  },
  {
    title: "Decentralized Governance",
    description: "Promoting a model of Swarajya to empower local governments and enhance community participation in the political process.",
    link: "#"
  },
  {
    title: "Nationalism and Cultural Integrity",
    description: "Fostering a sense of national unity that respects the diverse cultural heritage of India, inspired by Sanatan Dharma.",
    link: "#"
  },
];
