import json,re
raw=json.load(open('raw.json'))
words=[]
for f,rows in raw.items():
  m=re.match(r'Lesson (\d+)/',f)
  if not m: continue
  L=int(m.group(1))
  for r in rows:
    jp=r.get('Japanese') or r.get('Kana / Japanese') or r.get('Kana') or r.get('Hiragana')
    mean=r.get('Meaning') or r.get('Used for')
    if not jp or not mean: continue
    words.append(dict(L=L,jp=jp,k=r.get('Kanji',''),r=r.get('Romaji') or r.get('Reading',''),m=mean,sec=r['sec'],f=f.split('/')[1][:12]))
json.dump(words,open('words.json','w'),ensure_ascii=False)
for w in sorted(words,key=lambda w:w['L']):
  print(f"{w['L']}|{w['sec'][:18]}|{w['jp']}|{w['k']}|{w['r']}|{w['m'][:45]}")
