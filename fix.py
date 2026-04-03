f = open('src/app/game/RainingGame.tsx', 'r', encoding='utf-8').read()

# Slow down the foods - lower base speed and less random variance
f = f.replace(
    "const baseSpeed = 1.5 + (levelRef.current - 1) * 0.4;",
    "const baseSpeed = 0.8 + (levelRef.current - 1) * 0.2;"
)
f = f.replace(
    "const speed = baseSpeed + Math.random() * 1.5;",
    "const speed = baseSpeed + Math.random() * 0.6;"
)

# Remove the washed-out glow effect on toxic foods
f = f.replace(
    """        if (!food.isSafe && food.y > 0) {
          ctx.fillStyle = 'rgba(239, 68, 68, 0.15)';
          ctx.beginPath();
          ctx.arc(food.x + FOOD_SIZE / 2, food.y + FOOD_SIZE / 2, FOOD_SIZE / 2 + 4, 0, Math.PI * 2);
          ctx.fill();
        }""",
    ""
)

# Make food emojis bigger
f = f.replace("const FOOD_SIZE = 36;", "const FOOD_SIZE = 44;")

# Make the bowl wider to match bigger foods
f = f.replace("const BOWL_WIDTH = 70;", "const BOWL_WIDTH = 80;")

# Add food name label under each emoji
f = f.replace(
    "ctx.fillText(food.emoji, food.x, food.y);",
    """ctx.fillText(food.emoji, food.x, food.y);
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = food.isSafe ? '#166534' : '#991B1B';
        ctx.fillText(food.name, food.x + FOOD_SIZE / 2, food.y + FOOD_SIZE + 12);
        ctx.font = str(FOOD_SIZE) + 'px serif';
        ctx.textAlign = 'left';"""
)

# Fix the font reset (template literal)
f = f.replace("str(FOOD_SIZE)", "FOOD_SIZE")
f = f.replace(
    "ctx.font = FOOD_SIZE + 'px serif';",
    "ctx.font = `${FOOD_SIZE}px serif`;"
)

open('src/app/game/RainingGame.tsx', 'w', encoding='utf-8').write(f)
print("Done - slower speed, bigger food, labels, no glow")
