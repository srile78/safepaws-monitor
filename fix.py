f = open('src/components/RecallCard.tsx', 'r', encoding='utf-8').read()
f = f.replace('group-hover:text-[color:var(--primary-blue)]', 'group-hover:text-[#128CED]')
open('src/components/RecallCard.tsx', 'w', encoding='utf-8').write(f)
print("Fixed hover text color")
