import re

with open('public/landing-pages/kage.html', 'r', encoding='utf-8') as f:
    t = f.read()

print('fonts.css refs:', re.findall(r'[^"\'<>\n]*fonts\.css[^"\'<>\n]*', t))
print('three.min.js refs:', re.findall(r'[^"\'<>\n]*three\.min\.js[^"\'<>\n]*', t))
print('webp files count:', len(set(re.findall(r'[^"\'\s()<>]+\.webp', t))))
for w in sorted(list(set(re.findall(r'[^"\'\s()<>]+\.webp', t)))):
    print('  ', w)
