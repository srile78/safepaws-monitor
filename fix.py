f = open('src/app/game/RainingGame.tsx', 'r', encoding='utf-8').read()

# Spawn foods less frequently - bigger gap between spawns
f = f.replace(
    "const spawnRate = Math.max(30, 70 - levelRef.current * 5);",
    "const spawnRate = Math.max(50, 120 - levelRef.current * 7);"
)

# Limit max foods on screen and prevent horizontal overlap
f = f.replace(
    "const food = FOODS[Math.floor(Math.random() * FOODS.length)];",
    """// Max 4 foods on screen at once
    if (foodsRef.current.length >= 4) return;
    const food = FOODS[Math.floor(Math.random() * FOODS.length)];"""
)

# After setting x position, check it doesnt overlap existing foods
f = f.replace(
    "x: Math.random() * (GAME_WIDTH - FOOD_SIZE),",
    """x: (() => {
        let x, attempts = 0;
        do {
          x = Math.random() * (GAME_WIDTH - FOOD_SIZE);
          attempts++;
        } while (
          attempts < 10 &&
          foodsRef.current.some(f => Math.abs(f.x - x) < FOOD_SIZE * 1.8 && f.y < FOOD_SIZE * 3)
        );
        return x;
      })(),"""
)

open('src/app/game/RainingGame.tsx', 'w', encoding='utf-8').write(f)
print("Done - max 4 foods, spaced out, less overlap")
