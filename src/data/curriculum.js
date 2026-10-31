// Lessons: language-neutral code + short explanations per language (en, fr, ar)
const T=(en,fr,ar)=>({en,fr,ar})
const svg="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='50'%3E%3Crect width='80' height='50' fill='%234f46e5'/%3E%3C/svg%3E"
export const levels=[1,2,3,4,5,6,7,8,9,10]
export const lessons=[
{id:'structure',level:1,min:8,t:T('Page structure','Structure d’une page','بنية الصفحة'),items:[
['<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My page</title>\n</head>\n<body>\n  <p>Visible content goes in body.</p>\n</body>\n</html>',T('Every page: doctype, html, head (hidden info) and body (what people see). HTML is a markup language, not a programming language.','Toute page : doctype, html, head (infos cachées) et body (ce que l’on voit). Le HTML est un langage de balisage, pas de programmation.','كل صفحة: doctype ثم html وhead (معلومات مخفية) وbody (ما يراه الزائر). HTML لغة ترميز وليست لغة برمجة.')],
['<!-- This comment is not displayed -->\n<p>Comments explain your code.</p>',T('Comments are invisible notes for developers.','Les commentaires sont des notes invisibles pour les développeurs.','التعليقات ملاحظات غير مرئية للمطوّرين.')]]},
{id:'text',level:1,min:8,t:T('Headings and paragraphs','Titres et paragraphes','العناوين والفقرات'),items:[
['<h1>Main title</h1>\n<h2>Section</h2>\n<h3>Sub-section</h3>',T('h1 to h6 give the page an outline. Use one h1.','h1 à h6 donnent un plan à la page. Un seul h1.','من h1 إلى h6 تعطي الصفحة مخططًا. استخدم h1 واحدًا.')],
['<p>First paragraph.</p>\n<p>Second paragraph.</p>',T('p creates a paragraph.','p crée un paragraphe.','العنصر p ينشئ فقرة.')],
['<p>Line one<br>Line two</p>\n<hr>',T('br breaks a line; hr draws a separator.','br saute une ligne ; hr trace un séparateur.','br يقطع السطر وhr يرسم خطًا فاصلًا.')]]},
{id:'format',level:2,min:8,t:T('Text formatting','Mise en forme du texte','تنسيق النص'),items:[
['<p><strong>Important</strong> and <em>emphasised</em>.</p>',T('strong = important (bold), em = stress (italic).','strong = important (gras), em = emphase (italique).','strong للأهمية (غامق) وem للتأكيد (مائل).')],
['<p>Water: H<sub>2</sub>O, E = mc<sup>2</sup></p>',T('sub is lowered text, sup is raised text.','sub = indice, sup = exposant.','sub نص سفلي وsup نص علوي.')],
['<p>Use <code>&lt;p&gt;</code> for paragraphs &amp; <mark>highlight</mark>.</p>\n<blockquote>A quotation.</blockquote>',T('code, mark, blockquote, and entities (&lt; &amp;).','code, mark, blockquote et entités (&lt; &amp;).','code وmark وblockquote والرموز الخاصة (&lt; &amp;).')]]},
{id:'lists',level:2,min:8,t:T('Lists','Listes','القوائم'),items:[
['<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>',T('ul: bullet list when order does not matter.','ul : liste à puces, l’ordre n’importe pas.','ul قائمة نقطية عندما لا يهم الترتيب.')],
['<ol>\n  <li>Write code</li>\n  <li>Save file</li>\n</ol>',T('ol: numbered list when order matters.','ol : liste numérotée, l’ordre compte.','ol قائمة مرقمة عندما يهم الترتيب.')],
['<ul>\n  <li>Web\n    <ul><li>HTML</li></ul>\n  </li>\n</ul>',T('Nest a list inside an li.','Imbriquez une liste dans un li.','ضع قائمة داخل عنصر li.')]]},
{id:'links',level:3,min:8,t:T('Links','Liens','الروابط'),items:[
['<a href="https://developer.mozilla.org">MDN Web Docs</a>',T('a + href creates a link.','a + href crée un lien.','a مع href ينشئ رابطًا.')],
['<a href="https://example.com" target="_blank" rel="noopener noreferrer">Open in new tab</a>',T('target="_blank" opens a new tab; add rel for safety.','target="_blank" ouvre un onglet ; ajoutez rel par sécurité.','target="_blank" يفتح تبويبًا جديدًا؛ أضف rel للأمان.')],
['<a href="#end">Go down</a>\n<div style="height:200px"></div>\n<p id="end">Target</p>\n<a href="mailto:me@example.com">Email me</a>',T('#id jumps inside the page; mailto: opens email.','#id saute dans la page ; mailto: ouvre l’email.','#id ينتقل داخل الصفحة وmailto: يفتح البريد.')]]},
{id:'images',level:3,min:8,t:T('Images','Images','الصور'),items:[
[`<img src="${svg}" alt="Blue rectangle" width="80">`,T('img needs src and a useful alt text.','img exige src et un texte alt utile.','img تحتاج src ونص alt مفيدًا.')],
[`<figure>\n  <img src="${svg}" alt="Blue rectangle">\n  <figcaption>A caption</figcaption>\n</figure>`,T('figure + figcaption add a caption.','figure + figcaption ajoutent une légende.','figure وfigcaption تضيفان تعليقًا للصورة.')]]},
{id:'semantic',level:4,min:10,t:T('Semantic structure','Structure sémantique','العناصر الدلالية'),items:[
['<header><h1>My site</h1></header>\n<nav><a href="#a">Home</a></nav>\n<main><p>Content</p></main>\n<footer>© 2026</footer>',T('header, nav, main, footer describe the role of each area.','header, nav, main, footer décrivent le rôle de chaque zone.','header وnav وmain وfooter تصف دور كل منطقة.')],
['<article>\n  <h2>Post</h2>\n  <p>Text</p>\n</article>\n<aside>Side note</aside>',T('article is standalone content; aside is related extra content.','article = contenu autonome ; aside = contenu annexe.','article محتوى مستقل وaside محتوى جانبي.')],
['<div>Generic block</div>\n<span>generic inline</span>',T('div and span have no meaning: use them only if nothing semantic fits.','div et span n’ont pas de sens : à utiliser seulement sans alternative sémantique.','div وspan بلا معنى: استخدمهما عند غياب عنصر دلالي مناسب.')]]},
{id:'tables',level:5,min:10,t:T('Tables','Tableaux','الجداول'),items:[
['<table border="1">\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>Sara</td><td>20</td></tr>\n</table>',T('table, tr (row), th (header cell), td (data cell).','table, tr (ligne), th (en-tête), td (cellule).','table وtr (صف) وth (خلية عنوان) وtd (خلية بيانات).')],
['<table border="1">\n  <caption>Marks</caption>\n  <thead><tr><th scope="col">Subject</th></tr></thead>\n  <tbody><tr><td>HTML</td></tr></tbody>\n</table>',T('caption, thead, tbody and scope make tables accessible.','caption, thead, tbody et scope rendent le tableau accessible.','caption وthead وtbody وscope تجعل الجدول سهل الوصول.')],
['<table border="1">\n  <tr><th colspan="2">Merged</th></tr>\n  <tr><td>A</td><td>B</td></tr>\n</table>',T('colspan merges columns (rowspan merges rows).','colspan fusionne des colonnes (rowspan des lignes).','colspan يدمج الأعمدة وrowspan يدمج الصفوف.')]]},
{id:'forms',level:6,min:12,t:T('Forms','Formulaires','النماذج'),items:[
['<label for="n">Name</label>\n<input id="n" name="name" required>\n<button type="submit">Send</button>',T('label linked to input by for/id; required is built-in validation.','label lié à input par for/id ; required = validation native.','label مرتبط بـ input عبر for/id وrequired تحقق مدمج.')],
['<input type="email" placeholder="you@mail.com">\n<input type="number" min="1" max="10">\n<input type="password">',T('The type attribute changes the control and its validation.','L’attribut type change le champ et sa validation.','السمة type تغيّر الحقل وطريقة التحقق.')],
['<select><option>HTML</option><option>CSS</option></select>\n<textarea rows="2">Hello</textarea>',T('select = dropdown, textarea = multi-line text.','select = liste déroulante, textarea = texte multiligne.','select قائمة منسدلة وtextarea نص متعدد الأسطر.')],
['<fieldset>\n  <legend>Level</legend>\n  <label><input type="radio" name="l"> Beginner</label>\n  <label><input type="checkbox"> Newsletter</label>\n</fieldset>',T('radio = one choice, checkbox = many; fieldset/legend group them.','radio = un choix, checkbox = plusieurs ; fieldset/legend les groupent.','radio اختيار واحد وcheckbox عدة اختيارات؛ fieldset وlegend تجمعها.')]]},
{id:'media',level:7,min:8,t:T('Audio, video and iframes','Audio, vidéo et iframes','الصوت والفيديو وiframe'),items:[
['<audio controls></audio>\n<video controls width="200"></video>',T('controls shows play buttons; add src or source for a file.','controls affiche les boutons ; ajoutez src ou source pour un fichier.','controls يعرض أزرار التشغيل؛ أضف src أو source لملف.')],
['<iframe title="Embedded page" srcdoc="<p>Hello from an iframe</p>" height="70"></iframe>',T('iframe embeds another page. Always give it a title and trust only safe sources.','iframe intègre une autre page. Donnez un title et fiez-vous à des sources sûres.','iframe يضمّن صفحة أخرى. أعطه title ولا تثق إلا بمصادر آمنة.')]]},
{id:'metadata',level:8,min:8,t:T('Metadata','Métadonnées','البيانات الوصفية'),items:[
['<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <meta name="description" content="Short summary">\n  <title>Page title</title>\n</head>',T('charset, viewport (mobile), description (search) and title go in head.','charset, viewport (mobile), description (recherche) et title vont dans head.','charset وviewport (الجوال) وdescription (البحث) وtitle تُوضع في head.')]]},
{id:'advanced',level:9,min:10,t:T('Advanced elements','Éléments avancés','عناصر متقدمة'),items:[
['<details>\n  <summary>Click me</summary>\n  <p>Hidden text.</p>\n</details>',T('details/summary: native show-hide, no JavaScript.','details/summary : afficher/masquer natif, sans JavaScript.','details/summary إظهار وإخفاء أصلي بدون JavaScript.')],
['<progress value="70" max="100"></progress>\n<meter value="0.6">60%</meter>',T('progress = task progress; meter = a measure in a range.','progress = avancement ; meter = mesure dans un intervalle.','progress تقدّم مهمة وmeter قياس ضمن مدى.')],
['<p data-id="42" id="p1">Custom data attribute</p>',T('data-* stores custom values on an element.','data-* stocke des valeurs personnalisées.','data-* يخزّن قيمًا مخصصة في العنصر.')]]}
]
