import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function CatFoodIngredientsPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="mb-12">
                    <Link href="/blog" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Blog</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Complete Guide to Cat Food Ingredients: What Your Cat Actually Needs
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        Cats are obligate carnivores. Their metabolism is fundamentally different from dogs — and their food must reflect that.
                    </p>
                </div>

                <div className="space-y-8">

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Cats are not small dogs. This sounds obvious, but it&apos;s a fact that the pet food industry has occasionally lost sight of — and one that has real consequences for feline health. Cats are obligate carnivores. Unlike dogs or humans, cats have evolved a metabolism that is fundamentally dependent on animal-sourced nutrition. They cannot synthesize certain essential nutrients that other animals produce internally, which means those nutrients <em>must</em> come from meat in their diet.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Fundamental Nutritional Needs of Cats</h2>

                        <div className="space-y-6">
                            <div className="border-l-4 border-blue-500 pl-5">
                                <h3 className="font-bold text-gray-900 mb-1">Protein: Non-Negotiable and Abundant</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">Cats require a significantly higher percentage of protein than dogs or humans. A cat&apos;s liver continuously breaks down protein for energy — even when intake is low — meaning cats cannot &ldquo;turn off&rdquo; protein metabolism the way other animals can. AAFCO guidelines require a minimum of 26% protein in adult cat food (dry matter basis). Quality cat foods typically contain 30–40%+.</p>
                            </div>
                            <div className="border-l-4 border-red-500 pl-5">
                                <h3 className="font-bold text-gray-900 mb-1">Taurine: A Critical Amino Acid</h3>
                                <p className="text-gray-700 text-sm leading-relaxed mb-2">Taurine is an amino acid that most animals can synthesize from other amino acids. Cats cannot — they must get it from their diet, and it&apos;s found almost exclusively in animal tissue. Taurine deficiency causes:</p>
                                <ul className="text-sm text-red-700 space-y-1 list-disc pl-4">
                                    <li>Dilated cardiomyopathy (DCM) — a life-threatening heart condition</li>
                                    <li>Central retinal degeneration leading to progressive blindness</li>
                                    <li>Reproductive failure in breeding cats</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">If you don&apos;t see taurine listed in a cat food&apos;s ingredients, that&apos;s a serious concern.</p>
                            </div>
                            <div className="border-l-4 border-orange-500 pl-5">
                                <h3 className="font-bold text-gray-900 mb-1">Arachidonic Acid</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">Cats cannot synthesize arachidonic acid (an omega-6 fatty acid) from linoleic acid the way dogs can. They must obtain it directly from animal fat. Diets based heavily on plant fats will not meet this need.</p>
                            </div>
                            <div className="border-l-4 border-yellow-500 pl-5">
                                <h3 className="font-bold text-gray-900 mb-1">Vitamin A</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">Dogs and humans can convert beta-carotene (found in plants) to Vitamin A. Cats cannot. They require preformed Vitamin A, which is found in animal liver and organ meats.</p>
                            </div>
                            <div className="border-l-4 border-purple-500 pl-5">
                                <h3 className="font-bold text-gray-900 mb-1">Niacin (Vitamin B3)</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">Cats cannot synthesize niacin from tryptophan the way other animals can. They need preformed niacin from animal tissue.</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Reading a Cat Food Ingredient Label</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    badge: 'Excellent',
                                    color: 'green',
                                    label: 'Named Animal Proteins',
                                    text: 'Chicken, turkey, duck, beef, rabbit, salmon, tuna, sardines, herring — these should be among the first ingredients. They provide the full amino acid profile cats require, including taurine precursors.',
                                },
                                {
                                    badge: 'Good',
                                    color: 'green',
                                    label: 'Named Meat Meals',
                                    text: 'Chicken meal, turkey meal, salmon meal — high-quality, concentrated protein sources. More protein-dense than whole-meat equivalents on the label.',
                                },
                                {
                                    badge: 'Nutritionally Valuable',
                                    color: 'blue',
                                    label: 'Organ Meats',
                                    text: 'Chicken liver, beef liver, chicken heart — nutrient-dense foods that are a natural part of a cat\'s prey diet. Liver is high in Vitamin A, B vitamins, and taurine. Heart is excellent for taurine content.',
                                },
                                {
                                    badge: 'Acceptable',
                                    color: 'yellow',
                                    label: 'By-Products',
                                    text: 'Organs, necks, and non-muscle-meat parts. For cats, these are actually highly appropriate — they\'re a natural part of a cat\'s prey diet. Named by-products (chicken by-products) are better than generic "poultry by-products."',
                                },
                            ].map(({ badge, color, label, text }) => (
                                <div key={label} className={`p-5 rounded-2xl border ${color === 'green' ? 'bg-green-50 border-green-100' : color === 'blue' ? 'bg-blue-50 border-blue-100' : 'bg-yellow-50 border-yellow-100'}`}>
                                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                                        <span className="font-bold text-gray-900">{label}</span>
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${color === 'green' ? 'bg-green-200 text-green-800' : color === 'blue' ? 'bg-blue-200 text-blue-800' : 'bg-yellow-200 text-yellow-800'}`}>{badge}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-orange-50 p-8 rounded-3xl border border-orange-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-orange-900 mb-4">⚠️ Carbohydrates in Cat Food: Use Extreme Caution</h2>
                        <p className="text-orange-800 leading-relaxed mb-4">
                            Cats have a very limited ability to metabolize carbohydrates. Their digestive systems produce minimal amylase, and their insulin response to carbohydrates is significantly blunted. In the wild, a cat&apos;s diet contains less than 5% carbohydrates. Most dry cat foods contain 25–50%.
                        </p>
                        <p className="text-orange-800 text-sm mb-4">This mismatch is believed to contribute to feline diabetes, obesity, and chronic kidney disease.</p>
                        <div className="space-y-2">
                            <p className="text-sm text-orange-900"><strong>Better options:</strong> Sweet potato, green peas, tapioca — digestible, but still carbs; acceptable in modest amounts.</p>
                            <p className="text-sm text-orange-900"><strong>Less ideal:</strong> Corn, wheat, rice, soy — cats can digest them, but they should not be primary ingredients.</p>
                            <p className="text-sm text-orange-900"><strong>Grain-free caveat:</strong> Many grain-free cat foods swap grains for legumes (peas, lentils, chickpeas, potatoes). These are still carbohydrates. &ldquo;Grain-free&rdquo; does not automatically mean &ldquo;low-carbohydrate.&rdquo;</p>
                            <p className="text-sm font-bold text-orange-900">💡 The ideal approach: For cats, wet food is generally preferable to dry food — typically 70–80% moisture and almost always lower in carbohydrates.</p>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Moisture Content: Why It Matters So Much for Cats</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Cats evolved in arid environments and have a naturally low thirst drive. In nature, they obtain 70–75% of their water from prey. Most domestic cats do not compensate adequately for the low moisture content of dry food.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Chronic mild dehydration in cats is associated with feline lower urinary tract disease (FLUTD), chronic kidney disease (the leading cause of death in older cats), and constipation.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preservatives & Ingredients Specifically Harmful to Cats</h2>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
                                <h3 className="font-bold text-green-900 mb-2 text-sm">✓ Natural (Preferred)</h3>
                                <ul className="text-green-800 text-sm space-y-1">
                                    <li>Mixed tocopherols (Vitamin E)</li>
                                    <li>Ascorbic acid (Vitamin C)</li>
                                    <li>Rosemary extract</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-4 rounded-2xl border border-red-100">
                                <h3 className="font-bold text-red-900 mb-2 text-sm">✗ Avoid</h3>
                                <ul className="text-red-800 text-sm space-y-1">
                                    <li>BHA, BHT</li>
                                    <li>Propylene glycol — <strong>FDA-banned in cat food</strong> due to toxicity to cats (still legal in dog food — never share)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-2 text-sm">Ingredients specifically harmful to cats:</h3>
                            <ul className="text-gray-700 text-sm space-y-1 list-disc pl-4">
                                <li>Onion and garlic (any form) — cause hemolytic anemia; cats are more susceptible than dogs</li>
                                <li>Xylitol — extremely toxic</li>
                                <li>Excessive raw fish — contains thiaminase, an enzyme that destroys Vitamin B1</li>
                            </ul>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Evaluate a Cat Food in 60 Seconds</h2>
                        <ol className="space-y-3">
                            {[
                                { q: 'Is a named animal protein the first ingredient?', a: 'Chicken, turkey, salmon — not "poultry" or "fish."' },
                                { q: 'Is taurine listed in the ingredients?', a: 'If absent, this is a serious red flag.' },
                                { q: 'Is the primary fat source named and animal- or fish-derived?', a: 'Chicken fat, salmon oil, herring oil.' },
                                { q: 'Are grain-based or legume-based carbohydrates dominating the first five ingredients?', a: 'If so, consider a different option.' },
                                { q: 'Any artificial colors, flavors, or synthetic preservatives?', a: 'These have zero nutritional benefit.' },
                            ].map(({ q, a }, i) => (
                                <li key={q} className="flex gap-4">
                                    <span className="bg-gray-900 text-white font-black rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</span>
                                    <div>
                                        <span className="font-bold text-gray-900">{q} </span>
                                        <span className="text-gray-600">{a}</span>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] text-center">
                        <h2 className="text-3xl font-bold mb-4">Know If Your Cat&apos;s Food Has Been Recalled</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">
                            SafePaws Monitor tracks FDA cat food recall alerts in real time. Always know if your cat&apos;s food is on the recall list.
                        </p>
                        <Link href="/#signup" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">
                            Get Free Recall Alerts
                        </Link>
                    </section>

                    <div className="mt-8">
                        <LegalDisclaimer />
                    </div>
                </div>
            </div>
        </div>
    );
}
