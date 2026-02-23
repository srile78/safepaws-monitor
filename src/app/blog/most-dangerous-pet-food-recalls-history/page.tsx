import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

const recalls = [
    {
        rank: 1,
        title: 'The 2007 Melamine Crisis — The Recall That Changed Everything',
        meta: 'Year: 2007 | Cause: Melamine and cyanuric acid contamination from Chinese-sourced wheat gluten and rice protein | Animals Affected: Estimated 1,000–8,500+ deaths; tens of thousands sickened',
        body: 'No pet food recall before or since has come close to the scale of the 2007 melamine crisis. It began in March 2007 when Menu Foods, a major contract manufacturer that produced food for over 100 brands, received reports of cats and dogs dying after eating certain wet food products. The culprit was melamine — an industrial chemical used in plastics and fertilizers — deliberately added to artificially inflate apparent protein content during testing. When combined with cyanuric acid, melamine forms crystals that block the kidneys, causing acute renal failure. The recall ultimately grew to include over 150 brands and more than 60 million containers of pet food, triggering the Food Safety Modernization Act (FSMA).',
        severity: 'high',
    },
    {
        rank: 2,
        title: 'Diamond Pet Foods Salmonella Outbreak — 2012',
        meta: 'Year: 2012 | Cause: Salmonella Infantis contamination at a manufacturing plant in Gaston, South Carolina | Animals Affected: At least 49 people in 20 states became ill; an undetermined number of pets sickened or killed',
        body: 'The 2012 Diamond Pet Foods recall affected over 30 brands manufactured at the same facility, demonstrating how contract manufacturing concentrates risk. A single contaminated production line impacted brands including Diamond Naturals, Chicken Soup for the Soul, and Kirkland Signature. The Salmonella was spreading to humans — making this a dual public health risk.',
        severity: 'high',
    },
    {
        rank: 3,
        title: "Hill's Science Diet Vitamin D Recall — 2019",
        meta: "Year: 2019 | Cause: Abnormally high levels of Vitamin D from a supplier error | Animals Affected: Hundreds of confirmed cases; dozens of reported deaths",
        body: "Hill's Pet Nutrition issued one of the largest single-brand recalls in history after affected products were found to contain dangerous levels of Vitamin D due to a mix-up at a supplier's facility. The recall was expanded multiple times, ultimately spanning 33 canned dog food varieties. Hill's ultimately paid out over $12 million in a class-action settlement. Vitamin D toxicosis causes vomiting, loss of appetite, excessive thirst and urination, and eventually kidney failure.",
        severity: 'high',
    },
    {
        rank: 4,
        title: "Evanger's Pet Food Pentobarbital Contamination — 2017",
        meta: 'Year: 2017 | Cause: Pentobarbital contamination — a euthanasia drug — found in canned food | Animals Affected: At least one dog death and four additional dogs seriously ill from a single household',
        body: "The discovery of pentobarbital in Evanger's canned pet food was one of the most disturbing recalls in the industry's history. A family in Washington state fed their five dogs Evanger's Hunk of Beef Au Jus, and within hours, all five were ill. One died. The FDA investigation determined that pentobarbital entered the food through contaminated beef from rendered animals that had been euthanized.",
        severity: 'high',
    },
    {
        rank: 5,
        title: 'Blue Buffalo Treats Salmonella Recall — 2010–2011',
        meta: 'Year: 2010–2011 | Cause: Salmonella contamination; part of a broader FDA investigation into jerky treats | Animals Affected: Multiple reported illnesses',
        body: "Blue Buffalo's treat recalls were part of a broader FDA investigation into jerky pet treats that began in 2007 and became one of the FDA's longest-running unresolved investigations. Over several years, thousands of dogs became ill and hundreds died after consuming jerky treats, predominantly those made in China. The FDA never definitively identified the cause.",
        severity: 'medium',
    },
    {
        rank: 6,
        title: 'Natura Pet Products Salmonella Recall — 2013',
        meta: 'Year: 2013 | Brands: EVO, Innova, Healthwise, California Natural, Karma | Cause: Salmonella contamination',
        body: 'Natura Pet Products built its reputation on "natural" and "holistic" pet food. The 2013 Salmonella recall demonstrated that "premium" or "natural" labeling offers no protection against bacterial contamination — a lesson that remains relevant today.',
        severity: 'medium',
    },
    {
        rank: 7,
        title: 'Pedigree Dry Dog Food Metal Contamination — 2012',
        meta: 'Year: 2012 | Cause: Possible metal fragment contamination | Animals Affected: Several injury reports',
        body: 'Mars Petcare issued a voluntary recall of certain Pedigree dry dog food after receiving reports that the food might contain metal fragments. Metal shards can cause lacerations to a pet\'s mouth, throat, stomach, and intestines.',
        severity: 'medium',
    },
    {
        rank: 8,
        title: 'Sunshine Mills Aflatoxin Recall — 2020–2021',
        meta: 'Year: 2020–2021 | Cause: Aflatoxin contamination from mold in corn ingredients | Animals Affected: At least 70 dogs died; 80+ reported illnesses',
        body: 'Aflatoxin is a naturally occurring toxin produced by Aspergillus mold, which grows on corn under the right conditions. The affected brands were budget, store-brand products sold at discount retailers like Dollar General — meaning the pets affected were disproportionately owned by lower-income families who may have had less access to veterinary care.',
        severity: 'high',
    },
    {
        rank: 9,
        title: 'Sportmix (Midwestern Pet Foods) Aflatoxin Recall — 2020–2021',
        meta: 'Year: 2020–2021 | Cause: Extremely high aflatoxin levels | Animals Affected: At least 110 dogs died; 210+ reported illnesses — one of the deadliest aflatoxin events in U.S. history',
        body: 'The FDA found aflatoxin levels as high as 558 ppb in some samples — the legal limit for pet food is 20 ppb, meaning some bags contained nearly 28 times the legal maximum. The recall was eventually expanded to cover a staggering range of brand names and put intense pressure on the FDA to increase mandatory testing frequency.',
        severity: 'high',
    },
    {
        rank: 10,
        title: 'Bravo Packing Raw Pet Food Recall — 2018 and Ongoing',
        meta: 'Year: 2018 (with ongoing related recalls) | Cause: Salmonella and Listeria monocytogenes contamination | Animals Affected: Multiple illness reports; significant concern in the raw feeding community',
        body: "Raw meat carries inherent bacterial risks, and Bravo Packing's repeated recalls illustrate this vividly. The FDA found both Salmonella and Listeria in Bravo products — pathogens that pose serious risk not just to the pet but to anyone in the household who handles the food.",
        severity: 'medium',
    },
];

export default function MostDangerousRecallsPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Header */}
                <div className="mb-12">
                    <Link href="/blog" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Blog</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        The 10 Most Dangerous Pet Food Recalls in History
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        From the 2007 melamine crisis to deadly aflatoxin outbreaks — these are the cases that changed pet food safety forever.
                    </p>
                </div>

                <div className="space-y-8">
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Pet food safety has come a long way over the past two decades — but not without paying a steep price. Some of the most significant recalls in the industry&apos;s history have resulted in the deaths of thousands of animals, massive lawsuits, and sweeping changes to how pet food is regulated and manufactured.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Understanding these cases isn&apos;t just historical trivia. The same types of contamination — melamine, aflatoxin, Salmonella, excessive Vitamin D — continue to appear in recalls today. Knowing what went wrong in the past can help you spot warning signs before they affect your pet.
                        </p>
                    </section>

                    {recalls.map((recall) => (
                        <section key={recall.rank} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <div className="flex items-start gap-4 mb-4">
                                <span className={`text-white font-black rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-lg ${recall.severity === 'high' ? 'bg-red-600' : 'bg-orange-500'}`}>
                                    {recall.rank}
                                </span>
                                <h2 className="text-xl font-bold text-gray-900 leading-snug">{recall.title}</h2>
                            </div>
                            <p className="text-sm text-gray-500 italic mb-4 ml-14">{recall.meta}</p>
                            <p className="text-gray-700 leading-relaxed ml-14">{recall.body}</p>
                        </section>
                    ))}

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What These Recalls Have in Common</h2>
                        <div className="space-y-4">
                            {[
                                { heading: 'Ingredient sourcing is the weakest link.', text: 'Most contamination events trace back to ingredient suppliers, not the brand\'s own manufacturing process.' },
                                { heading: 'Premium price doesn\'t mean premium safety.', text: "Hill's, Blue Buffalo, and Natura were all premium brands when their recalls occurred." },
                                { heading: 'Contract manufacturing concentrates risk.', text: 'When one facility produces food for 100+ brands, a single contamination event affects all of them simultaneously.' },
                                { heading: 'Aflatoxin keeps coming back.', text: 'Corn-based pet foods continue to be vulnerable to aflatoxin contamination.' },
                                { heading: "The FDA's testing infrastructure is reactive, not proactive.", text: 'In most cases, the FDA began its investigation after animals started dying.' },
                            ].map(({ heading, text }) => (
                                <div key={heading} className="flex gap-3">
                                    <span className="text-red-500 mt-1 flex-shrink-0">▸</span>
                                    <p className="text-gray-700"><strong>{heading}</strong> {text}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-700 mt-6">
                            Staying informed, checking lot numbers against current recall notices, and monitoring your pet after any diet change remain your best defenses.
                        </p>
                    </section>

                    <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] text-center">
                        <h2 className="text-3xl font-bold mb-4">Never Miss a Recall Warning</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">
                            SafePaws Monitor tracks all active FDA pet food recall alerts. Set up free instant notifications so you never miss a warning.
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
