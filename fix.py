f = open('src/components/HomeDashboard.tsx', 'r', encoding='utf-8').read()
old = 'title="Raw vs. Kibble" />'
new = old + '\n                        <GuideLink href="/food-checker" emoji="\U0001f34e" title="Can My Pet Eat This?" />'
f = f.replace(old, new)
open('src/components/HomeDashboard.tsx', 'w', encoding='utf-8').write(f)
print("Done")
