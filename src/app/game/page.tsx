import type { Metadata } from "next";
import RainingGame from './RainingGame';

export const metadata: Metadata = {
  title: "Raining Cats & Dogs Game | SafePaws",
  description: "Catch safe foods for your pet and dodge the toxic ones! A fun, educational game that teaches you which human foods are safe for dogs and cats.",
  openGraph: {
    title: "Raining Cats & Dogs — The Pet Food Safety Game",
    description: "Can you keep your pet safe? Catch the good foods and dodge the toxic ones!",
  },
};

export default function GamePage() {
  return <RainingGame />;
}
