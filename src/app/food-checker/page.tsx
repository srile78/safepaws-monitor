import type { Metadata } from "next";
import FoodSafetyChecker from './FoodSafetyChecker';

export const metadata: Metadata = {
  title: "Can My Pet Eat This? | Food Safety Guide for Dogs & Cats | SafePaws",
  description: "Instant food safety checker for dogs and cats. Search any human food to see if it's safe, toxic, or deadly for your pet. Backed by veterinary guidelines.",
  openGraph: {
    title: "Can My Pet Eat This? | SafePaws Food Safety Checker",
    description: "Search 50+ common foods to instantly see if they're safe for your dog or cat.",
    type: "website",
  },
};

export default function FoodCheckerPage() {
  return <FoodSafetyChecker />;
}
