f = open('src/app/types.ts', 'r', encoding='utf-8').read()
if 'image?' not in f:
    f = f.replace('severity?: string;', 'image?: string;\n    severity?: string;')
    open('src/app/types.ts', 'w', encoding='utf-8').write(f)
    print("Added image field to Recall type")
else:
    print("Image field already exists")
