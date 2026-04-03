'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { FOOD_DATABASE, CATEGORIES, type FoodItem, type SafetyLevel } from './food-safety-data';

const SAFETY_CONFIG: Record<SafetyLevel, { label: string; color: string; bg: string; border: string; icon: string; ring: string }> = {
  safe:    { label: "Safe",    color: "text-emerald-700", bg: "bg-emerald-50",  border: "border-emerald-200", icon: "✅", ring: "ring-emerald-400" },
  caution: { label: "Caution", color: "text-amber-700",   bg: "bg-amber-50",    border: "border-amber-200",   icon: "⚠️", ring: "ring-amber-400" },
  toxic:   { label: "Toxic",   color: "text-orange-700",  bg: "bg-orange-50",   border: "border-orange-200",  icon: "🚫", ring: "ring-orange-400" },
  deadly:  { label: "Deadly",  color: "text-red-700",     bg: "bg-red-50",      border: "border-red-300",     icon: "☠️", ring: "ring-red-500" },
};

const SAFETY_ORDER: SafetyLevel[] = ['deadly', 'toxic', 'caution', 'safe'];

type PetFilter = 'dog' | 'cat';
type SafetyFilter = 'all' | SafetyLevel;

export default function FoodSafetyChecker() {
  const [search, setSearch] = useState('');
  const [pet, setPet] = useState<PetFilter>('dog');
  const [category, setCategory] = useState<string>('All');
  const [safetyFilter, setSafetyFilter] = useState<SafetyFilter>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let items = FOOD_DATABASE;

    if (search) {
      const q = search.toLowerCase();
      items = items.filter(f => f.name.toLowerCase().includes(q));
    }
    if (category !== 'All') {
      items = items.filter(f => f.category === category);
    }
    if (safetyFilter !== 'all') {
      items = items.filter(f => f[pet].safety === safetyFilter);
    }

    // Sort: deadly first, then toxic, caution, safe
    items = [...items].sort((a, b) => {
      return SAFETY_ORDER.indexOf(a[pet].safety) - SAFETY_ORDER.indexOf(b[pet].safety);
    });

    return items;
  }, [search, pet, category, safetyFilter]);

  const counts = useMemo(() => {
    const c = { safe: 0, caution: 0, toxic: 0, deadly: 0 };
    let items = FOOD_DATABASE;
    if (search) {
      const q = search.toLowerCase();
      items = items.filter(f => f.name.toLowerCase().includes(q));
    }
    if (category !== 'All') {
      items = items.filter(f => f.category === category);
    }
    items.forEach(f => c[f[pet].safety]++);
    return c;
  }, [search, pet, category]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-[#128CED] sticky top-0 z-50 shadow-md">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-black text-white tracking-tight">
            SafePaws
          </Link>
          <Link href="/" className="text-white/80 hover:text-white text-sm font-bold">
            ← Back to Recalls
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          <div className="text-5xl mb-4">🍎🐕 🐈🥦</div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Can My Pet Eat This?
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Search any human food to instantly see if it&apos;s safe for your dog or cat.
            Backed by veterinary guidelines.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">

        {/* Pet Toggle */}
        <div className="flex justify-center">
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-md border border-gray-200">
            <button
              onClick={() => { setPet('dog'); setExpanded(null); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${
                pet === 'dog'
                  ? 'bg-[#128CED] text-white shadow-lg scale-105'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="text-lg">🐕</span> Dog
            </button>
            <button
              onClick={() => { setPet('cat'); setExpanded(null); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${
                pet === 'cat'
                  ? 'bg-[#128CED] text-white shadow-lg scale-105'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="text-lg">🐈</span> Cat
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search foods (e.g. "chocolate", "chicken", "grapes")...`}
            className="w-full pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-[#128CED] focus:ring-4 focus:ring-blue-500/10 outline-none shadow-sm bg-white text-gray-900 placeholder-gray-400 transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category + Safety Filters */}
        <div className="space-y-3">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                category === 'All'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
              }`}
            >
              All Foods
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  category === cat
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Safety Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSafetyFilter('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                safetyFilter === 'all' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              Show All
            </button>
            {(['safe', 'caution', 'toxic', 'deadly'] as SafetyLevel[]).map(level => (
              <button
                key={level}
                onClick={() => setSafetyFilter(safetyFilter === level ? 'all' : level)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                  safetyFilter === level
                    ? `${SAFETY_CONFIG[level].bg} ${SAFETY_CONFIG[level].color} ring-2 ${SAFETY_CONFIG[level].ring}`
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {SAFETY_CONFIG[level].icon} {SAFETY_CONFIG[level].label} ({counts[level]})
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center text-sm text-gray-500">
          Showing {filtered.length} food{filtered.length !== 1 ? 's' : ''} for <span className="font-bold text-gray-700">{pet === 'dog' ? '🐕 Dogs' : '🐈 Cats'}</span>
        </div>

        {/* Food Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No foods found</h3>
            <p className="text-gray-500">Try a different search term or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filtered.map((food) => (
              <FoodCard
                key={food.name}
                food={food}
                pet={pet}
                isExpanded={expanded === food.name}
                onToggle={() => setExpanded(expanded === food.name ? null : food.name)}
              />
            ))}
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
          <p className="text-sm text-gray-600">
            <strong className="text-gray-800">Disclaimer:</strong> This guide is for general reference only and is not veterinary advice.
            Individual pets may have specific allergies or conditions. When in doubt, always consult your veterinarian before
            introducing new foods. If your pet has eaten something toxic, contact your vet or the{' '}
            <a href="https://www.aspca.org/pet-care/animal-poison-control" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">
              ASPCA Poison Control Hotline (888-426-4435)
            </a> immediately.
          </p>
        </div>
      </div>
    </div>
  );
}


function FoodCard({ food, pet, isExpanded, onToggle }: {
  food: FoodItem;
  pet: PetFilter;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const info = food[pet];
  const config = SAFETY_CONFIG[info.safety];

  return (
    <button
      onClick={onToggle}
      className={`text-left w-full rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
        isExpanded
          ? `${config.bg} ${config.border} shadow-lg scale-[1.02]`
          : `bg-white border-gray-100 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5`
      }`}
    >
      {/* Compact View */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl">{food.emoji}</span>
          <span className={`text-xs font-black uppercase px-2 py-1 rounded-full ${config.bg} ${config.color}`}>
            {config.icon} {config.label}
          </span>
        </div>
        <h3 className="font-bold text-gray-900 text-sm leading-tight">{food.name}</h3>
        <p className="text-[11px] text-gray-400 mt-1">{food.category}</p>
      </div>

      {/* Expanded Detail */}
      {isExpanded && (
        <div className={`px-4 pb-4 border-t ${config.border}`}>
          <div className="mt-3 space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-sm mt-0.5">{pet === 'dog' ? '🐕' : '🐈'}</span>
              <p className="text-sm text-gray-700 leading-relaxed">{info.note}</p>
            </div>

            {/* Show the other pet's info too */}
            <div className="pt-2 border-t border-dashed border-gray-200">
              <div className="flex items-start gap-2">
                <span className="text-sm mt-0.5">{pet === 'dog' ? '🐈' : '🐕'}</span>
                <div>
                  <span className={`text-xs font-bold ${SAFETY_CONFIG[food[pet === 'dog' ? 'cat' : 'dog'].safety].color}`}>
                    {SAFETY_CONFIG[food[pet === 'dog' ? 'cat' : 'dog'].safety].icon}{' '}
                    {SAFETY_CONFIG[food[pet === 'dog' ? 'cat' : 'dog'].safety].label} for {pet === 'dog' ? 'cats' : 'dogs'}
                  </span>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                    {food[pet === 'dog' ? 'cat' : 'dog'].note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </button>
  );
}
