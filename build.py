# Bundles index.html + css + data + app into one self-contained page for publishing (dist/minna-line.html).
import os, re
here = os.path.dirname(os.path.abspath(__file__))
read = lambda p: open(os.path.join(here, p), encoding='utf-8').read()
html = read('index.html')
scripts = re.findall(r'<script src="([^"]+)"></script>', html)
safe = lambda p: read(p).replace('</script', '<' + chr(92) + '/script')
js = '\n'.join('<script>\n' + safe(s) + '\n</script>' for s in scripts if os.path.exists(os.path.join(here, s)))
fonts = re.search(r'<link rel="stylesheet" href="(https://fonts[^"]+)">', html).group(1)
page = f'''<title>Minna Line</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="{fonts}">
<style>
{read('app.css')}
</style>
<div id="app"></div>
{js}
'''
os.makedirs(os.path.join(here, 'dist'), exist_ok=True)
open(os.path.join(here, 'dist', 'minna-line.html'), 'w', encoding='utf-8').write(page)
print('wrote dist/minna-line.html', len(page.encode()) // 1024, 'KB')
