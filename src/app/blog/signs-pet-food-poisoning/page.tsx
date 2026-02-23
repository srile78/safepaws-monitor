import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function PetFoodPoisoningSignsPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="mb-12">
                    <Link href="/blog" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Blog</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Signs Your Pet May Have Food Poisoning: What to Watch For and When to Act
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        Pet food poisoning can range from mild GI upset to a life-threatening emergency. Knowing the difference can save your pet&apos;s life.
                    </p>
                </div>

                <div className="space-y-8">
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">General Signs of Food Poisoning: Gastrointestinal</h2>
                        <div className="space-y-3">
                            {[
                                { symptom: 'Vomiting', detail: 'Single episodes are common and not necessarily alarming. Repeated vomiting (more than 2–3 times in a few hours), vomiting that continues into the next day, or vomiting containing blood is cause for concern.' },
                                { symptom: 'Diarrhea', detail: 'Loose stool or liquid diarrhea, especially if persistent, watery, or bloody.' },
                                { symptom: 'Bloody stool', detail: 'Bright red blood (hematochezia) indicates lower GI bleeding. Dark, tarry, or black stool (melena) indicates upper GI bleeding. Either is serious.' },
                                { symptom: 'Excessive drooling', detail: 'Can indicate nausea, throat irritation, or toxin ingestion.' },
                                { symptom: 'Loss of appetite', detail: 'Refusing to eat is a general sign that something is wrong. In cats especially, more than 24 hours without eating warrants a vet call.' },
                                { symptom: 'Abdominal pain', detail: 'Signs include hunching, reluctance to move, whimpering when the abdomen is touched, or unusual restlessness.' },
                            ].map(({ symptom, detail }) => (
                                <div key={symptom} className="flex gap-3 text-gray-700">
                                    <span className="font-bold flex-shrink-0 text-gray-400 w-40 text-sm pt-0.5">{symptom}</span>
                                    <span className="text-sm leading-relaxed">{detail}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">General Signs: Systemic</h2>
                        <div className="space-y-3">
                            {[
                                { symptom: 'Lethargy & weakness', detail: 'Significantly less active, responsive, or playful than usual.' },
                                { symptom: 'Fever', detail: 'Dogs\' normal temp: 101–102.5°F; cats\' normal: 100.5–102.5°F. Above 103.5°F in either species warrants a vet call.' },
                                { symptom: 'Dehydration', detail: 'Sunken eyes, dry or tacky gums, slow skin tenting, and reduced urination.' },
                                { symptom: 'Pale/white/gray gums', detail: 'Gums should be pink and moist. Pale or white gums indicate poor circulation — this is a serious emergency.' },
                                { symptom: 'Jaundice', detail: 'Yellow-tinged eyes, skin, or gums indicate liver involvement. Particularly associated with aflatoxin poisoning. This is an emergency.' },
                            ].map(({ symptom, detail }) => (
                                <div key={symptom} className="flex gap-3 text-gray-700">
                                    <span className="font-bold flex-shrink-0 text-gray-400 w-40 text-sm pt-0.5">{symptom}</span>
                                    <span className="text-sm leading-relaxed">{detail}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Symptoms by Contamination Type</h2>
                        <div className="space-y-3">
                            {[
                                { cause: 'Salmonella', timing: '12–72 hrs after ingestion', symptoms: 'Sudden onset vomiting/diarrhea (often watery and foul-smelling), fever, lethargy, possible blood in stool. High human transmission risk — wash hands thoroughly.', color: 'orange' },
                                { cause: 'Aflatoxin', timing: 'Days to weeks to appear', symptoms: 'Lethargy (often first sign), loss of appetite, vomiting, jaundice, unexplained bruising, dark urine. By the time jaundice is visible, liver damage is already severe. Don\'t wait — see a vet immediately.', color: 'yellow' },
                                { cause: 'Vitamin D Toxicosis', timing: 'Days to weeks of exposure', symptoms: 'Excessive thirst, excessive urination, loss of appetite, vomiting, drooling, weakness, weight loss.', color: 'blue' },
                                { cause: 'Listeria', timing: '1–4 weeks after exposure', symptoms: 'Fever, vomiting, diarrhea, muscle stiffness, loss of coordination. High human transmission risk, especially for pregnant women and immunocompromised individuals.', color: 'purple' },
                                { cause: 'Pentobarbital', timing: 'Rapid onset', symptoms: 'Extreme sedation, loss of coordination, difficulty breathing, unconsciousness, death. IMMEDIATE EMERGENCY — go to an emergency vet now. Do not wait.', color: 'red' },
                                { cause: 'Foreign Material', timing: 'Variable', symptoms: 'Sudden reluctance to eat, pawing at mouth, gagging, bloody stool, abdominal pain.', color: 'gray' },
                            ].map(({ cause, timing, symptoms, color }) => (
                                <div key={cause} className={`border-l-4 p-4 rounded-r-xl ${color === 'red' ? 'border-red-600 bg-red-50' : color === 'orange' ? 'border-orange-400 bg-orange-50' : color === 'yellow' ? 'border-yellow-400 bg-yellow-50' : color === 'blue' ? 'border-blue-400 bg-blue-50' : color === 'purple' ? 'border-purple-400 bg-purple-50' : 'border-gray-400 bg-gray-50'}`}>
                                    <p className="font-bold text-gray-900">{cause} <span className="font-normal text-gray-500 text-sm">({timing})</span></p>
                                    <p className="text-gray-700 mt-1 text-sm leading-relaxed">{symptoms}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Act</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-red-50 p-5 rounded-2xl border border-red-200">
                                <h3 className="font-bold text-red-900 mb-3 text-sm">🚨 Emergency Vet Immediately</h3>
                                <ul className="text-red-800 text-xs space-y-1">
                                    <li>Pale, white, or gray gums</li>
                                    <li>Difficulty breathing</li>
                                    <li>Suspected pentobarbital exposure</li>
                                    <li>Bloody diarrhea + vomiting + lethargy</li>
                                    <li>Seizures or loss of consciousness</li>
                                    <li>Jaundice (yellow gums, eyes, or skin)</li>
                                    <li>No urination in 12+ hours</li>
                                    <li>Signs of severe abdominal pain</li>
                                </ul>
                            </div>
                            <div className="bg-orange-50 p-5 rounded-2xl border border-orange-200">
                                <h3 className="font-bold text-orange-900 mb-3 text-sm">📞 Call Vet During Business Hours</h3>
                                <ul className="text-orange-800 text-xs space-y-1">
                                    <li>Vomiting more than 2–3 times</li>
                                    <li>Diarrhea persisting more than 24 hrs</li>
                                    <li>No appetite for &gt;24 hrs (cats) or &gt;48 hrs (dogs)</li>
                                    <li>Unusual lethargy</li>
                                    <li>Pet has been eating recalled food — request bloodwork</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 p-5 rounded-2xl border border-green-200">
                                <h3 className="font-bold text-green-900 mb-3 text-sm">👀 Monitor at Home</h3>
                                <ul className="text-green-800 text-xs space-y-1">
                                    <li>One vomiting episode in an otherwise normal dog</li>
                                    <li>One episode of loose stool, no other symptoms</li>
                                    <li>Mild decrease in appetite for less than 24 hours</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Tell Your Vet</h2>
                        <ul className="space-y-2">
                            {[
                                'What your pet ate and when (brand, product name, lot number if available)',
                                'Whether the food is on an active recall',
                                'Timeline of symptoms',
                                'A full symptom description',
                                'How long your pet has been eating the food',
                                "Your pet's age and weight, and any known health conditions",
                            ].map(item => (
                                <li key={item} className="flex gap-3 text-gray-700 text-sm">
                                    <span className="text-blue-500 flex-shrink-0">▸</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Supportive Care at Home (Mild Cases Only)</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
                                <h3 className="font-bold text-orange-900 mb-2 text-sm">🐕 For Dogs</h3>
                                <ul className="text-orange-800 text-xs space-y-1">
                                    <li>Withhold food 12–24 hours to rest the stomach (not for puppies or diabetic dogs)</li>
                                    <li>Offer small amounts of fresh water frequently</li>
                                    <li>After fasting: bland diet of plain white rice + boiled chicken (no seasoning)</li>
                                    <li>Continue bland diet 2–3 days, then gradually reintroduce normal food</li>
                                </ul>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100">
                                <h3 className="font-bold text-purple-900 mb-2 text-sm">🐈 For Cats</h3>
                                <ul className="text-purple-800 text-xs space-y-1">
                                    <li>Do NOT fast cats more than 24 hours — hepatic lipidosis risk is real</li>
                                    <li>Offer a small amount of bland food</li>
                                    <li>Ensure fresh water is always available</li>
                                    <li>If appetite doesn&apos;t return within 24 hours, call the vet</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] text-center">
                        <h2 className="text-3xl font-bold mb-4">Prevention Is the Best Medicine</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">
                            The best way to handle pet food poisoning is to avoid it. SafePaws Monitor sends real-time FDA recall alerts so you know the moment a recall is announced — before your pet has been eating affected food for weeks.
                        </p>
                        <Link href="/#signup" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">Get Free Recall Alerts</Link>
                    </section>

                    <div className="mt-8"><LegalDisclaimer /></div>
                </div>
            </div>
        </div>
    );
}
