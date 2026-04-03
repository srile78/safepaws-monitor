f = open('src/components/HomeDashboard.tsx', 'r', encoding='utf-8').read()
old = 'title="Can My Pet Eat This?" />'
new = old + '\n                        <GuideLink href="/game" emoji="\U0001f3ae" title="Play: Raining Cats & Dogs" />'
f = f.replace(old, new)
open('src/components/HomeDashboard.tsx', 'w', encoding='utf-8').write(f)
print("Done")
