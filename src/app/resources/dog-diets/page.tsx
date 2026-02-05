import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LegalDisclaimer from '../../../components/LegalDisclaimer';
import { AFFILIATE_TAG } from '../../../lib/affiliate';

export default function DogDietsPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-[#128CED] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-b-[3rem]">
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <Link href="/resources" className="inline-block text-blue-100 font-bold mb-6 hover:text-white transition-colors">
                        &larr; Back to Resources
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                        The Ultimate Guide to <br /> Dog Diets by Size
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        From Teacup Yorkies to Great Danes, every dog has unique nutritional needs. Here's how to feed them right.
                    </p>
                </div>
                {/* Decorative Circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
                
                {/* Introduction */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
                     <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        One size does <strong>not</strong> fit all when it comes to dog food. A Chihuahua burns energy differently than a Mastiff, 
                        and feeding the wrong formula can lead to growth issues, obesity, or malnutrition.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        We've broken down the nutritional requirements for every size category to help you choose the best fuel for your best friend.
                    </p>
                </div>

                {/* Size Categories */}
                <div className="space-y-12">

                    {/* Toy & Small Breeds */}
                    <DietSection 
                        title="Toy & Small Breeds"
                        subtitle="(Under 20 lbs / 9 kg)"
                        icon="🐕"
                        color="bg-pink-50"
                        borderColor="border-pink-100"
                        description="Small dogs have fast metabolisms and tiny stomachs. They need calorie-dense food that they can actually chew."
                        needs={[
                            "High Calorie Density: They burn energy fast!",
                            "Small Kibble Size: To prevent choking and aid digestion.",
                            "More Frequent Meals: 3-4 times a day to prevent hypoglycemia."
                        ]}
                        recommendation="Look for 'Small Breed' formulas rich in protein and healthy fats."
                    />

                    {/* Medium Breeds */}
                    <DietSection 
                        title="Medium Breeds"
                        subtitle="(20-60 lbs / 9-27 kg)"
                        icon="🐩"
                        color="bg-blue-50"
                        borderColor="border-blue-100"
                        description="The 'Goldilocks' zone. These active dogs need a balanced diet to support their energy levels without packing on excess weight."
                        needs={[
                            "Balanced Macronutrients: Moderate protein and fat.",
                            "Portion Control: They love to eat, so measure carefully.",
                            "Activity Matching: Working dogs need 'Performance' blends; couch potatoes need 'Weight Management'."
                        ]}
                        recommendation="Standard 'Adult' formulas work well, but rotate proteins to prevent allergies."
                    />

                    {/* Large & Giant Breeds */}
                    <DietSection 
                        title="Large & Giant Breeds"
                        subtitle="(Over 60 lbs / 27 kg)"
                        icon="🐘"
                        color="bg-orange-50"
                        borderColor="border-orange-100"
                        description="Big dogs grow fast and age faster. Their primary concern is joint health and controlling growth rates to prevent skeletal issues."
                        needs={[
                            "Controlled Calcium/Phosphorus: Crucial for puppies to prevent bone deformities.",
                            "Lower Calorie Density: To prevent rapid growth and obesity.",
                            "Joint Support: Look for Glucosamine and Chondroitin."
                        ]}
                        recommendation="ALWAYS choose 'Large Breed' specific formulas. This is non-negotiable for puppies."
                    />

                </div>

                {/* Life Stages */}
                <div className="mt-20">
                     <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Don't Forget Life Stages!</h2>
                     <div className="grid md:grid-cols-3 gap-6">
                        <LifeStageCard 
                            stage="Puppy"
                            desc="Needs 2x the calories of adults for growth. High protein & fat."
                        />
                        <LifeStageCard 
                            stage="Adult"
                            desc="Maintenance mode. Focus on weight control and digestive health."
                        />
                        <LifeStageCard 
                            stage="Senior"
                            desc="Lower calories, higher fiber, and probiotics for aging guts."
                        />
                     </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-16">
                    <LegalDisclaimer />
                </div>
            </div>
        </div>
    );
}

function DietSection({ title, subtitle, icon, color, borderColor, description, needs, recommendation }: any) {
    return (
        <section className={`rounded-[2rem] p-8 md:p-10 ${color} border ${borderColor}`}>
            <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{icon}</div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
                    <p className="text-gray-600 font-bold">{subtitle}</p>
                </div>
            </div>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed font-medium">
                {description}
            </p>
            
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-6">
                <h3 className="font-bold text-gray-900 uppercase tracking-wide text-sm mb-4">Key Nutritional Needs</h3>
                <ul className="space-y-3">
                    {needs.map((need: string, i: number) => (
                        <li key={i} className="flex gap-3 items-start text-gray-700">
                            <span className="text-green-500 font-bold">✓</span>
                            {need}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-start gap-3 text-gray-800 italic bg-black/5 p-4 rounded-xl">
                <span className="text-2xl">💡</span>
                <p><strong>Pro Tip:</strong> {recommendation}</p>
            </div>
        </section>
    )
}

function LifeStageCard({ stage, desc }: any) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <h3 className="text-xl font-black text-blue-600 mb-2">{stage}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}
