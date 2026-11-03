import os,re,json,sys
root=sys.argv[1]
out={}
for d,_,fs in os.walk(root):
  for f in fs:
    if not f.endswith('.md'): continue
    p=os.path.join(d,f); rel=os.path.relpath(p,root)
    rows=[];hdr=None;section=''
    for line in open(p,encoding='utf-8'):
      s=line.strip()
      if s.startswith('#'): section=s.strip('# ').strip(); hdr=None; continue
      if s.startswith('|'):
        cells=[c.strip() for c in s.strip('|').split('|')]
        if all(re.fullmatch(r':?-+:?',c) or c=='' for c in cells): continue
        if hdr is None: hdr=cells; continue
        rows.append({'sec':section,**{h:c for h,c in zip(hdr,cells)}})
      else:
        if s=='' : pass
        else: hdr=None if not s.startswith('|') else hdr
    out[rel]=rows
json.dump(out,open('raw.json','w'),ensure_ascii=False,indent=0)
for k,v in sorted(out.items()):
  hdrs=set(tuple(r.keys()) for r in v)
  print(k,len(v),list(hdrs)[:4])
