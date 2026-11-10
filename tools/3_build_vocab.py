import json,re,os
words=json.load(open('words.json'))
SKIP_SEC=('Key vocabu','Useful ver','6. N が へた')
PROPER_L={4:['Place name'],}
FICT=set('やまとびじゅつかん おおさかデパート みどりとしょかん アップルぎんこう つるや おはようテレビ だいがくまえ はかた ふしみ こうしえん おおさかじょう しんおおさか / 新大阪 ジャカルタ バンコク ベルリン ニューヨーク ペキン ロンドン ロサンゼルス うめだ バンドン ベラクルス フランケン フエ ビートルズ かつしか ほくさい しちにんのさむらい きんかくじ びわこ ふじさん シャンハイ ホンコン シンガポール JR 104（いち・ゼロ・よん） おといあわせのばんごう'.split(' '))
FIX={  # kana fixes for rows typed in kanji
 'ご注文は？':('ごちゅうもんは？','ご注文は？'),'定食':('ていしょく','定食'),'牛どん':('ぎゅうどん','牛どん'),
 '［少々］お待ちください。':('［しょうしょう］おまちください。','［少々］お待ちください。'),'別々に':('べつべつに','別々に'),
}
KATA=re.compile(r'[゠-ヿ]')
def has_kanji(s): return bool(re.search(r'[一-鿿]',s))
out=[];seen_k={}
def add(L,kana,kanji,ro,en,cat='',pos=None,note=''):
  kanji=(kanji or '').replace('—','').strip()
  if kanji==kana: kanji=''
  # usage notes in brackets with ～
  m=re.search(r'[［\[]([^］\]]*[～〜][^］\]]*)[］\]]',kana)
  if m: note=m.group(1); kana=(kana[:m.start()]+kana[m.end():]).strip()
  if kanji:
    kanji=re.sub(r'[［\[][^］\]]*[～〜][^］\]]*[］\]]','',kanji).strip()
  na=False
  for t in ('[な]','［な］'):
    if t in kana: kana=kana.replace(t,'').strip(); na=True
    kanji=kanji.replace(t,'').strip()
  ro=re.sub(r'\s*\[na\]|\s+na$','',ro) if na else ro
  k1=kanji[:1] if has_kanji(kanji[:1] or 'a') else ''
  prev=seen_k.get(kana)
  if prev is not None and (not k1 or k1 in prev or not any(prev)): return
  seen_k.setdefault(kana,set()).add(k1)
  if pos is None:
    if na or kana in ('すき','きらい','じょうず','へた','いろいろな'): pos='na-adj'
    elif kana.endswith('ます') and ' ' not in kana and not kana.endswith('ません'): pos='v'
    elif kana.endswith('い') and kanji.endswith('い') and not kanji.endswith('ない') or kana in('いい（よい）',): pos='i-adj'
    elif kana.endswith(('。','？','ね','よ')) or ' ' in kana or '、' in kana: pos='exp'
    else: pos='n'
  if kana in('いい（よい）','いい','かわいい','ほしい'): pos='i-adj'
  if kana in ('ない','すくない'): pos='i-adj'
  if kana.endswith(('ください','なさい')): pos='exp'
  if kana in ('しっています','すんでいます'): pos='exp'
  w=dict(L=L,kana=kana,kanji=kanji,ro=ro,en=en,pos=pos)
  if cat: w['cat']=cat
  if note: w['note']=note
  out.append(w)

for w in sorted(words,key=lambda w:w['L']):
  if w['sec'].startswith(SKIP_SEC) or w['jp'] in('Kana / Japanese',) or not w['r']: continue
  kana,kanji,ro,en=w['jp'],w['k'],w['r'],w['m']
  if kana.startswith('（'): continue
  if kana in FIX: kana,kanji=FIX[kana]
  if kana=='おつり': kanji,ro,en='お釣り','otsuri','change (money given back)'
  if kana=='14': continue
  en=en.replace('_','')
  cat=''
  s=w['sec']
  if s.startswith('Countries') or kana in('イタリア','スイス','ヨーロッパ','スペイン','ロシア','アジア','ベトナム'): cat='country'
  if kana in FICT or s.startswith('Place name'): cat='proper'
  if kana=='しんおおさか / 新大阪': kana,kanji='しんおおさか','新大阪'
  add(w['L'],kana,kanji,ro,en,cat)

def S(L,rows,cat=''):
  for r in rows:
    kana,kanji,ro,en=r[:4]; add(L,kana,kanji,ro,en,cat,r[4] if len(r)>4 else None)
S(0,[('おはよう ございます','','ohayō gozaimasu','Good morning','exp'),('こんにちは','','konnichiwa','Good afternoon / Hello','exp'),('こんばんは','','konbanwa','Good evening','exp'),('おやすみなさい','お休みなさい','oyasuminasai','Good night','exp'),('さようなら','','sayōnara','Goodbye','exp'),('ありがとう ございます','','arigatō gozaimasu','Thank you','exp'),('すみません','','sumimasen','Excuse me / I\'m sorry','exp'),('おねがいします','お願いします','onegaishimasu','Please (request)','exp'),('はじめましょう','始めましょう','hajimemashō','Let\'s begin','exp'),('おわりましょう','終わりましょう','owarimashō','Let\'s finish','exp'),('やすみましょう','休みましょう','yasumimashō','Let\'s take a break','exp'),('わかりますか','分かりますか','wakarimasu ka','Do you understand?','exp'),('もう いちど','もう一度','mō ichido','Once more','exp'),('いいです','','ii desu','It\'s fine / OK','exp'),('だめです','駄目です','dame desu','It\'s not good / no good','exp'),('なまえ','名前','namae','name','n'),('しけん','試験','shiken','exam','n'),('しゅくだい','宿題','shukudai','homework','n'),('しつもん','質問','shitsumon','question','n'),('こたえ','答え','kotae','answer','n'),('れい','例','rei','example','n')],'greetings')
S(3,[('ゼロ','','zero','zero','n'),('いち','一','ichi','one','n'),('に','二','ni','two','n'),('さん','三','san','three','n'),('よん / し','四','yon / shi','four','n'),('ご','五','go','five','n'),('ろく','六','roku','six','n'),('なな / しち','七','nana / shichi','seven','n'),('はち','八','hachi','eight','n'),('きゅう / く','九','kyū / ku','nine','n'),('じゅう','十','jū','ten','n')],'numbers')
S(11,[('ひとつ','一つ','hitotsu','one (thing)','n'),('ふたつ','二つ','futatsu','two (things)','n'),('みっつ','三つ','mittsu','three (things)','n'),('よっつ','四つ','yottsu','four (things)','n'),('いつつ','五つ','itsutsu','five (things)','n'),('むっつ','六つ','muttsu','six (things)','n'),('ななつ','七つ','nanatsu','seven (things)','n'),('やっつ','八つ','yattsu','eight (things)','n'),('ここのつ','九つ','kokonotsu','nine (things)','n'),('とお','十','tō','ten (things)','n'),('いくつ','','ikutsu','how many (things)','n'),('クラス','','kurasu','class','n'),('いい［お］てんきですね','いい［お］天気ですね','ii [o]tenki desu ne','Nice weather, isn\'t it?','exp'),('おでかけですか','お出かけですか','odekake desu ka','Are you going out?','exp'),('いって いらっしゃい','行っていらっしゃい','itte irasshai','See you later / Take care (to someone leaving)','exp'),('いって きます','行ってきます','itte kimasu','I\'m off / See you later (said when leaving)','exp')])
S(20,[('いります','要ります','irimasu','need, require [a visa]','v'),('しらべます','調べます','shirabemasu','check, investigate','v'),('しゅうりします','修理します','shūri shimasu','repair','v'),('でんわします','電話します','denwa shimasu','phone, call','v'),('ぼく','僕','boku','I (casual, used by men)','n'),('きみ','君','kimi','you (casual, to equals/juniors)','n'),('うん','','un','yes (casual)','exp'),('ううん','','uun','no (casual)','exp'),('サラリーマン','','sararīman','office worker, salaried worker','n'),('ことば','言葉','kotoba','word, language','n'),('ぶっか','物価','bukka','prices, cost of living','n'),('きもの','着物','kimono','kimono','n'),('ビザ','','biza','visa','n'),('はじめ','初め','hajime','the beginning','n'),('おわり','終わり','owari','the end','n'),('こっち','','kotchi','this way, this place (casual こちら)','n'),('そっち','','sotchi','that way (casual そちら)','n'),('あっち','','atchi','that way over there (casual あちら)','n'),('どっち','','dotchi','which one / where (casual どちら)','n'),('このあいだ','この間','kono aida','the other day','n'),('みんなで','','minna de','all together','exp'),('～けど','','~kedo','~, but (casual が)','other'),('くにへ かえるの？','国へ帰るの？','kuni e kaeru no?','Are you going back to your country?','exp'),('どう するの？','','dō suru no?','What will you do?','exp'),('どう しようかな','','dō shiyō ka na','What shall I do?','exp'),('よかったら','','yokattara','if you like','exp'),('いろいろ','','iroiro','various','na-adj')])

# verb group
G2_I={'みます','います','おきます|起','かります','あびます','できます','おります','たります','きます|着'}
def group(kana,kanji):
  if kana=='します' or re.search(r'(^|\s|[゠-ヿ]|[一-鿿]{2}|物|り)します$',kanji or '') or kana.endswith((' します','をします')): return 3
  if kana.endswith('します') and not kanji and kana not in('だします','けします','かします','はなします','おします','かえします','なくします'): return 3
  if kanji.endswith('来ます') or kana in('きます|来',) : return 3
  stem=kana[:-2]; last=stem[-1]
  if kana=='きます': return 3 if '来' in kanji else 2
  for g in G2_I:
    k,_,kj=g.partition('|')
    if kana.endswith(k) and (not kj or kj in kanji) and (len(kana)==len(k) or k in('できます','あびます') or kana.endswith('おきます') and '起' in kanji):
      if kana=='おきます' and '起' not in kanji: break
      return 2
  if last in 'えけげせぜてでねへべぺめれ': return 2
  return 1
for w in out:
  if w['pos']=='v':
    w['g']=group(w['kana'],w['kanji'])
    w['pos']='v%d'%w['g']; del w['g']
for w in out:
  if w['kana']=='見せてください。': w['kana'],w['kanji']='みせて ください。','見せてください。'
# Corrections from the proofread, kept here so a rebuild from the notes doesn't undo them.
RO_FIX={'タクシー':'takushī','ホッチキス':'hotchikisu','スイッチ':'suitchi','サンドイッチ':'sandoitchi','しゅっちょうします':'shutchō shimasu'}
POS_FIX={'あぶない':'i-adj','ふね':'n','おかね':'n','あね':'n'}
for w in out:
  if w['kana'] in RO_FIX: w['ro']=RO_FIX[w['kana']]
  if w['kana'] in POS_FIX: w['pos']=POS_FIX[w['kana']]
  if w['kana']=='こうしえん': w['en']=w['en'].replace('in Osaka','near Osaka')
for i,w in enumerate(out): w['id']='%d:%s'%(w['L'],w['kana'])
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data', 'vocab.js'),'w').write('// Core N5 vocab (stations 1–20), built from the "Learning Japanese" notes (+ L0 greetings, L11 counters, L20 filled in)\nwindow.VOCAB = '+json.dumps(out,ensure_ascii=False,indent=0)+';\n')
from collections import Counter
print(len(out),Counter(w['L'] for w in out))
print(Counter(w['pos'] for w in out))
for w in out:
  if w['pos'].startswith('v'): print(w['pos'],w['kana'],w['kanji'],end=' · ')
