import React from 'react';
import Link from 'next/link';
import { Nunito } from "next/font/google";
import LegalDisclaimer from '../../components/LegalDisclaimer';

const nunito = Nunito({ subsets: ["latin"] });

const blogArticles = [
    {
        href: '/blog/how-to-read-pet-food-recall-notice',
        emoji: '📋',
        color: 'blue',
        title: 'How to Read a Pet Food Recall Notice: A Complete Guide for Pet Owners',
        description: 'Recall notices follow a predictable format — learn what every section means so you can act quickly and confidently when one affects your pet.',
    },
    {
        href: '/blog/most-dangerous-pet-food-recalls-history',
        emoji: '⚠️',
        color: 'red',
        title: 'The 10 Most Dangerous Pet Food Recalls in History',
        description: 'From the 2007 melamine crisis to deadly aflatoxin outbreaks, these are the cases that changed pet food safety forever.',
    },
    {
        href: '/blog/what-to-do-pet-ate-recalled-food',
        emoji: '🐾',
        color: 'orange',
        title: 'What to Do If Your Pet Ate Recalled Food: A Step-by-Step Action Guide',
        description: 'A clear, step-by-step guide covering exactly what to do the moment you discover your pet has been eating recalled food.',
    },
    {
        href: '/blog/how-fda-pet-food-recall-process-works',
        emoji: '🏛️',
        color: 'purple',
        title: 'How the FDA Pet Food Recall Process Works: What Happens Behind the Scenes',
        description: 'Understand who initiates recalls, how contamination is detected, and what the FDA does — and doesn\'t do — to protect your pet.',
    },
    {
        href: '/blog/complete-guide-dog-food-ingredients',
        emoji: '🐕',
        color: 'green',
        title: 'Complete Guide to Dog Food Ingredients: What to Look For and What to Avoid',
        description: 'Decode the ingredient list on your dog\'s food bag — from named meat meals to synthetic preservatives — and make a safer choice.',
    },
    {
        href: '/blog/complete-guide-cat-food-ingredients',
        emoji: '🐈',
        color: 'teal',
        title: 'Complete Guide to Cat Food Ingredients: What Your Cat Actually Needs',
        description: 'Cats are obligate carnivores with unique nutritional requirements. Learn what the ingredient label on your cat\'s food actually means.',
    },
    {
        href: '/blog/how-to-transition-pet-new-food',
        emoji: '🔄',
        color: 'blue',
        title: 'How to Transition Your Pet to a New Food Safely',
        description: 'Switch food too quickly and you get vomiting and diarrhea. Here\'s the 7-day schedule, 14-day sensitive schedule, and how to handle an emergency recall transition.',
    },
    {
        href: '/blog/understanding-aafco-pet-food-standards',
        emoji: '📜',
        color: 'purple',
        title: 'Understanding AAFCO Pet Food Standards: What "Complete and Balanced" Actually Means',
        description: 'Those nutritional adequacy statements on pet food bags are federally regulated. Learn what they mean — and what they don\'t tell you.',
    },
    {
        href: '/blog/signs-pet-food-poisoning',
        emoji: '🩺',
        color: 'red',
        title: 'Signs Your Pet May Have Food Poisoning: What to Watch For and When to Act',
        description: 'From mild GI upset to life-threatening emergencies — know the symptoms by contamination type and the 3-level urgency guide for when to act.',
    },
    {
        href: '/blog/common-pet-food-allergies',
        emoji: '🤧',
        color: 'orange',
        title: 'Common Pet Food Allergies: Symptoms, Diagnosis, and Solutions',
        description: 'Chronic scratching, recurrent ear infections, year-round itching — how to identify food allergies in pets, run an elimination diet, and manage them long-term.',
    },
    {
        href: '/blog/senior-dog-nutrition-guide',
        emoji: '🐾',
        color: 'amber',
        title: 'Senior Dog Nutrition: What Changes as Your Dog Ages',
        description: 'When your dog crosses into their senior years, their nutritional needs shift significantly. Protein, omega-3s, joint support, and cognition all deserve a second look.',
    },
    {
        href: '/blog/puppy-vs-adult-dog-food',
        emoji: '🐶',
        color: 'green',
        title: 'Puppy vs. Adult Dog Food: What\'s the Difference and When to Switch',
        description: 'The nutritional differences between life stage formulas are real and meaningful — especially for large breed puppies where getting it wrong can have lasting consequences.',
    },
    {
        href: '/blog/best-pet-food-brands-clean-ingredients',
        emoji: '🏆',
        color: 'indigo',
        title: 'Pet Food Brands with the Cleanest Ingredient Lists: What to Look For in 2024',
        description: 'Terms like "natural" and "holistic" have no legal meaning. Here\'s how to evaluate brands using an 8-question framework that goes beyond the label.',
    },
    {
        href: '/blog/how-to-store-pet-food-safely',
        emoji: '📦',
        color: 'blue',
        title: 'How to Store Pet Food Safely: The Complete Guide',
        description: 'Improper storage degrades nutrition, causes spoilage, and — critically — can make it impossible to check lot numbers when a recall is announced.',
    },
    {
        href: '/blog/grain-free-dog-food-science-controversy',
        emoji: '🌾',
        color: 'red',
        title: 'Grain-Free Dog Food: The Science Behind the Controversy',
        description: 'The FDA investigated a possible link between grain-free diets and DCM. Here\'s what the evidence shows, what it doesn\'t, and what it means for your dog.',
    },
];

const colorMap: Record<string, { blob: string; border: string; card: string; icon: string; badge: string; badgeHover: string; text: string }> = {
    blue: {
        blob: 'bg-blue-100/50',
        border: 'border-blue-100',
        card: 'border-blue-100',
        icon: 'bg-blue-100',
        badge: 'bg-blue-50 text-blue-600',
        badgeHover: 'group-hover:bg-blue-100',
        text: 'group-hover:text-blue-600',
    },
    red: {
        blob: 'bg-red-100/50',
        border: 'border-red-100',
        card: 'border-red-100',
        icon: 'bg-red-100',
        badge: 'bg-red-50 text-red-600',
        badgeHover: 'group-hover:bg-red-100',
        text: 'group-hover:text-red-600',
    },
    orange: {
        blob: 'bg-orange-100/50',
        border: 'border-orange-100',
        card: 'border-orange-100',
        icon: 'bg-orange-100',
        badge: 'bg-orange-50 text-orange-600',
        badgeHover: 'group-hover:bg-orange-100',
        text: 'group-hover:text-orange-600',
    },
    purple: {
        blob: 'bg-purple-100/50',
        border: 'border-purple-100',
        card: 'border-purple-100',
        icon: 'bg-purple-100',
        badge: 'bg-purple-50 text-purple-600',
        badgeHover: 'group-hover:bg-purple-100',
        text: 'group-hover:text-purple-600',
    },
    green: {
        blob: 'bg-green-100/50',
        border: 'border-green-100',
        card: 'border-green-100',
        icon: 'bg-green-100',
        badge: 'bg-green-50 text-green-600',
        badgeHover: 'group-hover:bg-green-100',
        text: 'group-hover:text-green-600',
    },
    teal: {
        blob: 'bg-teal-100/50',
        border: 'border-teal-100',
        card: 'border-teal-100',
        icon: 'bg-teal-100',
        badge: 'bg-teal-50 text-teal-600',
        badgeHover: 'group-hover:bg-teal-100',
        text: 'group-hover:text-teal-600',
    },
    amber: {
        blob: 'bg-amber-100/50',
        border: 'border-amber-100',
        card: 'border-amber-100',
        icon: 'bg-amber-100',
        badge: 'bg-amber-50 text-amber-700',
        badgeHover: 'group-hover:bg-amber-100',
        text: 'group-hover:text-amber-700',
    },
    indigo: {
        blob: 'bg-indigo-100/50',
        border: 'border-indigo-100',
        card: 'border-indigo-100',
        icon: 'bg-indigo-100',
        badge: 'bg-indigo-50 text-indigo-600',
        badgeHover: 'group-hover:bg-indigo-100',
        text: 'group-hover:text-indigo-600',
    },
};

export default function BlogPage() {
    return (
        <div className={`min-h-screen font-sans ${nunito.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Header */}
                <div className="text-center mb-16 bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/50 shadow-sm mx-auto max-w-4xl">
                    <Link href="/" className="inline-flex items-center text-blue-600 font-bold mb-6 hover:underline">
                        &larr; Back to Monitor
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        SafePaws <span className="text-[rgb(var(--primary-blue))]">Blog</span>
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        In-depth guides on pet food safety, recalls, and nutrition to keep your pets protected.
                    </p>
                </div>

                {/* Blog Article Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {blogArticles.map((article) => {
                        const c = colorMap[article.color];
                        return (
                            <Link key={article.href} href={article.href} className="group relative block h-full">
                                <div className={`absolute inset-0 ${c.blob} rounded-[2.5rem] transform rotate-1 group-hover:rotate-2 transition-transform duration-300 backdrop-blur-sm`}></div>
                                <div className={`relative h-full bg-white/80 backdrop-blur-md border ${c.card} rounded-[2.5rem] p-10 shadow-sm group-hover:shadow-lg transition-all duration-300`}>
                                    <div className={`w-16 h-16 ${c.icon} rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-inner`}>
                                        {article.emoji}
                                    </div>
                                    <h3 className={`text-xl font-bold text-gray-900 mb-3 ${c.text} transition-colors leading-snug`}>
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                                        {article.description}
                                    </p>
                                    <span className={`${c.badge} font-bold flex items-center w-fit px-4 py-2 rounded-full ${c.badgeHover} transition-colors`}>
                                        Read More &rarr;
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <LegalDisclaimer />
            </div>
        </div>
    );
}
