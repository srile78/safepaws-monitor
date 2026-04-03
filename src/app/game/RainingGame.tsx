'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

interface FallingFood {
  id: number;
  emoji: string;
  name: string;
  x: number;
  y: number;
  speed: number;
  isSafe: boolean;
  note: string;
}

interface FoodDef {
  emoji: string;
  name: string;
  isSafe: boolean;
  dogNote: string;
  catNote: string;
}

const FOODS: FoodDef[] = [
  // Safe foods
  { emoji: "🍎", name: "Apple", isSafe: true, dogNote: "Great low-calorie snack!", catNote: "Safe in small amounts!" },
  { emoji: "🥕", name: "Carrot", isSafe: true, dogNote: "Crunchy & great for teeth!", catNote: "Cooked is best!" },
  { emoji: "🍗", name: "Chicken", isSafe: true, dogNote: "Excellent protein source!", catNote: "Cats love plain chicken!" },
  { emoji: "🫐", name: "Blueberry", isSafe: true, dogNote: "Superfood antioxidants!", catNote: "Healthy little treat!" },
  { emoji: "🍉", name: "Watermelon", isSafe: true, dogNote: "Hydrating & vitamin-rich!", catNote: "Refreshing snack!" },
  { emoji: "🥚", name: "Egg", isSafe: true, dogNote: "Great protein when cooked!", catNote: "Nutritious cooked treat!" },
  { emoji: "🍠", name: "Sweet Potato", isSafe: true, dogNote: "Full of fiber & vitamins!", catNote: "Good fiber source!" },
  { emoji: "🐟", name: "Salmon", isSafe: true, dogNote: "Omega-3s for coat health!", catNote: "Cats go crazy for it!" },
  { emoji: "🎃", name: "Pumpkin", isSafe: true, dogNote: "Amazing for digestion!", catNote: "Helps with hairballs!" },
  { emoji: "🍚", name: "Rice", isSafe: true, dogNote: "Gentle on upset tummies!", catNote: "Easy to digest!" },
  { emoji: "🍌", name: "Banana", isSafe: true, dogNote: "Potassium-packed treat!", catNote: "OK in tiny amounts!" },
  { emoji: "🦐", name: "Shrimp", isSafe: true, dogNote: "Tasty protein treat!", catNote: "Cats love seafood!" },
  // Toxic/deadly foods
  { emoji: "🍫", name: "Chocolate", isSafe: false, dogNote: "DEADLY! Theobromine kills!", catNote: "DEADLY for cats too!" },
  { emoji: "🍇", name: "Grapes", isSafe: false, dogNote: "DEADLY! Kidney failure!", catNote: "Toxic — avoid completely!" },
  { emoji: "🧅", name: "Onion", isSafe: false, dogNote: "Destroys red blood cells!", catNote: "EXTREMELY toxic to cats!" },
  { emoji: "🧄", name: "Garlic", isSafe: false, dogNote: "5x worse than onions!", catNote: "DEADLY — even small amounts!" },
  { emoji: "☕", name: "Coffee", isSafe: false, dogNote: "Caffeine is dangerous!", catNote: "Can be life-threatening!" },
  { emoji: "🍺", name: "Alcohol", isSafe: false, dogNote: "EXTREMELY dangerous!", catNote: "Even tiny amounts are toxic!" },
  { emoji: "🥜", name: "Macadamia Nut", isSafe: false, dogNote: "Causes tremors & weakness!", catNote: "Toxic to cats too!" },
  { emoji: "🍒", name: "Cherry", isSafe: false, dogNote: "Pits contain cyanide!", catNote: "Stems & pits are toxic!" },
];

const GAME_WIDTH = 400;
const GAME_HEIGHT = 600;
const BOWL_WIDTH = 80;
const BOWL_Y = GAME_HEIGHT - 60;
const FOOD_SIZE = 44;

type PetChoice = 'dog' | 'cat';
type GameState = 'menu' | 'playing' | 'paused' | 'gameover';

export default function RainingGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<number>(0);
  const keysRef = useRef<Set<string>>(new Set());
  const touchXRef = useRef<number | null>(null);

  const [gameState, setGameState] = useState<GameState>('menu');
  const [pet, setPet] = useState<PetChoice>('dog');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [lastCaught, setLastCaught] = useState<{ name: string; emoji: string; isSafe: boolean; note: string } | null>(null);
  const [highScore, setHighScore] = useState(0);

  const bowlXRef = useRef(GAME_WIDTH / 2 - BOWL_WIDTH / 2);
  const foodsRef = useRef<FallingFood[]>([]);
  const scoreRef = useRef(0);
  const livesRef = useRef(3);
  const levelRef = useRef(1);
  const frameCountRef = useRef(0);
  const nextIdRef = useRef(0);
  const gameStateRef = useRef<GameState>('menu');

  const spawnFood = useCallback(() => {
    // Max 4 foods on screen at once
    if (foodsRef.current.length >= 4) return;
    const food = FOODS[Math.floor(Math.random() * FOODS.length)];
    const baseSpeed = 0.8 + (levelRef.current - 1) * 0.2;
    const speed = baseSpeed + Math.random() * 0.6;
    foodsRef.current.push({
      id: nextIdRef.current++,
      emoji: food.emoji,
      name: food.name,
      x: (() => {
        let x, attempts = 0;
        do {
          x = Math.random() * (GAME_WIDTH - FOOD_SIZE);
          attempts++;
        } while (
          attempts < 10 &&
          foodsRef.current.some(f => Math.abs(f.x - x) < FOOD_SIZE * 1.8 && f.y < FOOD_SIZE * 3)
        );
        return x;
      })(),
      y: -FOOD_SIZE,
      speed,
      isSafe: food.isSafe,
      note: pet === 'dog' ? food.dogNote : food.catNote,
    });
  }, [pet]);

  const startGame = useCallback((chosenPet: PetChoice) => {
    setPet(chosenPet);
    setScore(0);
    setLives(3);
    setLevel(1);
    setLastCaught(null);
    scoreRef.current = 0;
    livesRef.current = 3;
    levelRef.current = 1;
    bowlXRef.current = GAME_WIDTH / 2 - BOWL_WIDTH / 2;
    foodsRef.current = [];
    frameCountRef.current = 0;
    nextIdRef.current = 0;
    setGameState('playing');
    gameStateRef.current = 'playing';
  }, []);

  // Key handlers
  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      keysRef.current.add(e.key);
      if (e.key === ' ' && gameStateRef.current === 'gameover') {
        startGame(pet);
      }
    };
    const onUp = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => { window.removeEventListener('keydown', onDown); window.removeEventListener('keyup', onUp); };
  }, [pet, startGame]);

  // Touch handlers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const scaleX = GAME_WIDTH / rect.width;
      touchXRef.current = (e.touches[0].clientX - rect.left) * scaleX;
    };
    const onTouchEnd = () => { touchXRef.current = null; };
    canvas.addEventListener('touchmove', onTouchMove, { passive: false });
    canvas.addEventListener('touchend', onTouchEnd);
    return () => { canvas.removeEventListener('touchmove', onTouchMove); canvas.removeEventListener('touchend', onTouchEnd); };
  }, []);

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const loop = () => {
      if (gameStateRef.current !== 'playing') return;

      frameCountRef.current++;

      // Spawn foods
      const spawnRate = Math.max(50, 120 - levelRef.current * 7);
      if (frameCountRef.current % spawnRate === 0) {
        spawnFood();
      }

      // Move bowl
      const bowlSpeed = 6;
      if (keysRef.current.has('ArrowLeft') || keysRef.current.has('a')) {
        bowlXRef.current = Math.max(0, bowlXRef.current - bowlSpeed);
      }
      if (keysRef.current.has('ArrowRight') || keysRef.current.has('d')) {
        bowlXRef.current = Math.min(GAME_WIDTH - BOWL_WIDTH, bowlXRef.current + bowlSpeed);
      }
      if (touchXRef.current !== null) {
        const target = touchXRef.current - BOWL_WIDTH / 2;
        const clamped = Math.max(0, Math.min(GAME_WIDTH - BOWL_WIDTH, target));
        bowlXRef.current += (clamped - bowlXRef.current) * 0.15;
      }

      // Update foods
      const remaining: FallingFood[] = [];
      for (const food of foodsRef.current) {
        food.y += food.speed;

        // Check catch
        const foodCenterX = food.x + FOOD_SIZE / 2;
        const bowlLeft = bowlXRef.current;
        const bowlRight = bowlXRef.current + BOWL_WIDTH;
        const caught = food.y + FOOD_SIZE >= BOWL_Y && food.y <= BOWL_Y + 20 &&
          foodCenterX >= bowlLeft && foodCenterX <= bowlRight;

        if (caught) {
          if (food.isSafe) {
            scoreRef.current += 10 * levelRef.current;
            setScore(scoreRef.current);
            setLastCaught({ name: food.name, emoji: food.emoji, isSafe: true, note: food.note });
          } else {
            livesRef.current--;
            setLives(livesRef.current);
            setLastCaught({ name: food.name, emoji: food.emoji, isSafe: false, note: food.note });
            if (livesRef.current <= 0) {
              gameStateRef.current = 'gameover';
              setGameState('gameover');
              setHighScore(prev => Math.max(prev, scoreRef.current));
              return;
            }
          }
          continue;
        }

        // Missed safe food at bottom
        if (food.y > GAME_HEIGHT) {
          continue;
        }

        remaining.push(food);
      }
      foodsRef.current = remaining;

      // Level up every 100 points
      const newLevel = Math.floor(scoreRef.current / 100) + 1;
      if (newLevel !== levelRef.current) {
        levelRef.current = newLevel;
        setLevel(newLevel);
      }

      // Draw
      ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

      // Background gradient
      const grad = ctx.createLinearGradient(0, 0, 0, GAME_HEIGHT);
      grad.addColorStop(0, '#E0F2FE');
      grad.addColorStop(1, '#DBEAFE');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

      // Ground
      ctx.fillStyle = '#86EFAC';
      ctx.fillRect(0, GAME_HEIGHT - 30, GAME_WIDTH, 30);
      ctx.fillStyle = '#4ADE80';
      ctx.fillRect(0, GAME_HEIGHT - 30, GAME_WIDTH, 3);

      // Clouds
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      const cloudOffset = (frameCountRef.current * 0.2) % (GAME_WIDTH + 100);
      ctx.beginPath(); ctx.arc(cloudOffset, 40, 25, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cloudOffset + 20, 35, 30, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cloudOffset + 45, 40, 22, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc((cloudOffset + 200) % (GAME_WIDTH + 100), 60, 20, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc((cloudOffset + 220) % (GAME_WIDTH + 100), 55, 28, 0, Math.PI * 2); ctx.fill();

      // Foods
      ctx.font = `${FOOD_SIZE}px serif`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      for (const food of foodsRef.current) {
        // Glow for toxic foods

        ctx.fillText(food.emoji, food.x, food.y);
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = food.isSafe ? '#166534' : '#991B1B';
        ctx.fillText(food.name, food.x + FOOD_SIZE / 2, food.y + FOOD_SIZE + 12);
        ctx.font = `${FOOD_SIZE}px serif`;
        ctx.textAlign = 'left';
      }

      // Bowl
      const bx = bowlXRef.current;
      ctx.fillStyle = '#8B5E3C';
      ctx.beginPath();
      ctx.moveTo(bx, BOWL_Y);
      ctx.lineTo(bx + BOWL_WIDTH, BOWL_Y);
      ctx.lineTo(bx + BOWL_WIDTH - 10, BOWL_Y + 30);
      ctx.lineTo(bx + 10, BOWL_Y + 30);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#6B4226';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Pet emoji on bowl
      ctx.font = '22px serif';
      ctx.textAlign = 'center';
      ctx.fillText(pet === 'dog' ? '🐕' : '🐈', bx + BOWL_WIDTH / 2, BOWL_Y + 3);

      // HUD
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      ctx.fillRect(0, 0, GAME_WIDTH, 36);
      ctx.font = 'bold 14px sans-serif';
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'left';
      ctx.fillText(`Score: ${scoreRef.current}`, 12, 24);
      ctx.textAlign = 'center';
      ctx.fillText(`Level ${levelRef.current}`, GAME_WIDTH / 2, 24);
      ctx.textAlign = 'right';
      ctx.fillText('❤️'.repeat(livesRef.current) + '🖤'.repeat(3 - livesRef.current), GAME_WIDTH - 12, 24);

      gameLoopRef.current = requestAnimationFrame(loop);
    };

    gameLoopRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(gameLoopRef.current);
  }, [gameState, pet, spawnFood]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-100">
      {/* Header */}
      <header className="bg-[#128CED] shadow-md">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="text-xl font-black text-white">SafePaws</Link>
          <Link href="/" className="text-white/80 hover:text-white text-sm font-bold">← Back to Home</Link>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
            🌧️ Raining Cats & Dogs
          </h1>
          <p className="text-gray-600 text-sm">Catch safe foods. Dodge the toxic ones!</p>
        </div>

        {/* Game Canvas Container */}
        <div className="relative mx-auto rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200"
          style={{ maxWidth: GAME_WIDTH, aspectRatio: `${GAME_WIDTH}/${GAME_HEIGHT}` }}>
          <canvas
            ref={canvasRef}
            width={GAME_WIDTH}
            height={GAME_HEIGHT}
            className="w-full h-full block"
            style={{ touchAction: 'none' }}
          />

          {/* Menu Overlay */}
          {gameState === 'menu' && (
            <div className="absolute inset-0 bg-gradient-to-b from-sky-200/95 to-blue-200/95 flex flex-col items-center justify-center gap-6 p-8">
              <div className="text-5xl">🌧️🐕🐈</div>
              <h2 className="text-2xl font-black text-gray-900 text-center">Raining Cats & Dogs</h2>
              <p className="text-gray-700 text-center text-sm max-w-xs">
                Catch safe foods in your bowl for points!<br />
                Dodge toxic foods or lose a life!
              </p>
              <div className="text-sm text-gray-500 text-center">Choose your pet:</div>
              <div className="flex gap-4">
                <button
                  onClick={() => startGame('dog')}
                  className="px-8 py-4 bg-[#128CED] text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition-all"
                >
                  🐕 Dog
                </button>
                <button
                  onClick={() => startGame('cat')}
                  className="px-8 py-4 bg-[#128CED] text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition-all"
                >
                  🐈 Cat
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Arrow keys or touch to move
              </p>
            </div>
          )}

          {/* Game Over Overlay */}
          {gameState === 'gameover' && (
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-4 p-8">
              <div className="text-4xl">💔</div>
              <h2 className="text-2xl font-black text-white">Game Over!</h2>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-black text-yellow-400">{score}</div>
                <div className="text-white/70 text-sm">points</div>
                {score >= highScore && score > 0 && (
                  <div className="text-yellow-300 text-xs font-bold mt-1">🏆 New High Score!</div>
                )}
              </div>
              <div className="text-white/60 text-sm">Level reached: {level}</div>
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => startGame(pet)}
                  className="px-6 py-3 bg-[#128CED] text-white rounded-xl font-bold shadow-lg hover:bg-blue-600 hover:scale-105 transition-all"
                >
                  Play Again
                </button>
                <button
                  onClick={() => { setGameState('menu'); gameStateRef.current = 'menu'; }}
                  className="px-6 py-3 bg-white/20 text-white rounded-xl font-bold hover:bg-white/30 transition-all"
                >
                  Menu
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Last Caught Feedback */}
        {lastCaught && gameState === 'playing' && (
          <div className={`mt-4 p-3 rounded-xl text-center transition-all ${
            lastCaught.isSafe
              ? 'bg-emerald-50 border border-emerald-200'
              : 'bg-red-50 border border-red-200'
          }`}>
            <span className="text-lg mr-2">{lastCaught.emoji}</span>
            <span className={`font-bold text-sm ${lastCaught.isSafe ? 'text-emerald-700' : 'text-red-700'}`}>
              {lastCaught.name}: {lastCaught.note}
            </span>
          </div>
        )}

        {/* Controls hint */}
        {gameState === 'playing' && (
          <div className="mt-3 text-center text-xs text-gray-400">
            ← → Arrow keys or touch/drag to move the bowl
          </div>
        )}

        {/* Food Safety Link */}
        <div className="mt-6 text-center">
          <Link href="/food-checker" className="text-[#128CED] font-bold text-sm hover:underline">
            📋 See the full food safety guide →
          </Link>
        </div>

        {/* Educational note */}
        <div className="mt-6 p-4 bg-white rounded-xl border border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            <strong className="text-gray-700">Did you know?</strong> Grapes and chocolate are among the most
            common causes of pet poisoning. Learn which foods are safe at our{' '}
            <Link href="/food-checker" className="text-[#128CED] hover:underline">Food Safety Checker</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
