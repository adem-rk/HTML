import {useEffect,useRef,useState} from 'react'
import {useApp} from '../app/Ctx'
import CopyBtn from '../components/CopyBtn'
const START={html:'<h1 id="t">Hello!</h1>\n<button id="b">Click me</button>',css:'h1{color:#7c3aed}\nbutton{padding:.5rem 1rem;border-radius:8px}',js:"document.getElementById('b').onclick=()=>{\n  document.getElementById('t').textContent='It works!'\n  console.log('clicked')\n}"}
// reports errors and console output to the parent (postMessage only; the frame has no access to the app)
const HOOK=`<script>(function(){var p=function(k,m){parent.postMessage({hma:1,k:k,m:String(m)},'*')};window.onerror=function(m,s,l){p('error',m+(l?' (line '+l+')':''))};['log','warn','error'].forEach(function(f){var o=console[f];console[f]=function(){p(f,[].slice.call(arguments).join(' '));o.apply(console,arguments)}})})()<\/script>`
function build({html,css,js},hook=true){
 const H=hook?HOOK:'',st=`<style>${css}</style>`
 const sc=js.trim()?`<script>${js.replace(/<\/script/gi,'<\\/script')}<\/script>`:''
 if(/<html|<!doctype/i.test(html)){let d=html
  d=/<\/head>/i.test(d)?d.replace(/<\/head>/i,m=>H+st+m):H+st+d
  return /<\/body>/i.test(d)?d.replace(/<\/body>/i,m=>sc+m):d+sc}
 return `<!doctype html><html><head><meta charset="utf-8">${H}<style>body{font-family:system-ui,sans-serif;margin:12px;color:#111}</style>${st}</head><body>${html}${sc}</body></html>`}
export default function Playground(){const{s,t,set}=useApp()
 const[v,setV]=useState(()=>s.playground?{html:s.playground,css:s.pgcss||'',js:s.pgjs||''}:START)
 const[tab,setTab]=useState('html');const[doc,setDoc]=useState(()=>build(v));const[run,setRun]=useState(0);const[logs,setLogs]=useState([])
 const frame=useRef(null);const first=useRef(true)
 useEffect(()=>{const h=setTimeout(()=>{setDoc(build(v));setLogs([])},250);return()=>clearTimeout(h)},[v])
 useEffect(()=>{if(first.current){first.current=false;return}const h=setTimeout(()=>set({playground:v.html,pgcss:v.css,pgjs:v.js}),800);return()=>clearTimeout(h)},[v])
 useEffect(()=>{const f=e=>{if(e.source===frame.current?.contentWindow&&e.data?.hma)setLogs(l=>[...l.slice(-49),e.data])};window.addEventListener('message',f);return()=>window.removeEventListener('message',f)},[])
 const edit=x=>setV(o=>({...o,[tab]:x}))
 const onKey=e=>{if(e.key==='Tab'){e.preventDefault();const a=e.target,i=a.selectionStart;edit(a.value.slice(0,i)+'  '+a.value.slice(a.selectionEnd));requestAnimationFrame(()=>{a.selectionStart=a.selectionEnd=i+2})}}
 const dl=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([build(v,false)],{type:'text/html'}));a.download='page.html';a.click();URL.revokeObjectURL(a.href)}
 const empty=!v.html.trim()&&!v.css.trim()&&!v.js.trim()
 return <div className="space-y-3"><div className="flex flex-wrap gap-2"><button className="btn p" onClick={()=>{setDoc(build(v));setLogs([]);setRun(n=>n+1)}}>{t('run')}</button><button className="btn" onClick={()=>{setV(START);setRun(n=>n+1)}}>{t('reset')}</button><CopyBtn text={v[tab]}/><button className="btn" onClick={dl}>{t('download')}</button></div>
 <div role="tablist" className="flex gap-1">{[['html','HTML'],['css','CSS'],['js','JavaScript']].map(([k,n])=><button key={k} role="tab" aria-selected={tab===k} className="btn tab" onClick={()=>setTab(k)}>{n}</button>)}</div>
 <div className="grid md:grid-cols-2 gap-3"><textarea className="code card w-full" style={{minHeight:320,color:'var(--fg)',resize:'vertical'}} spellCheck="false" autoCapitalize="off" autoCorrect="off" aria-label={t('editor')} value={v[tab]} onChange={e=>edit(e.target.value)} onKeyDown={onKey}/>
  {empty?<div className="card">{t('empty')}</div>:<iframe key={run} ref={frame} title={t('preview')} sandbox="allow-scripts allow-forms allow-modals" srcDoc={doc} className="w-full bg-white rounded-lg" style={{height:320,border:'1px solid var(--bd)'}}/>}</div>
 <div className="card console" role="log" aria-label="Console">{logs.length?logs.map((l,i)=><div key={i} className={l.k==='error'?'err':''}>{l.k==='log'?'›':l.k+':'} {l.m}</div>):<span style={{color:'var(--mute)'}}>Console</span>}</div>
 <p className="text-sm" style={{color:'var(--mute)'}}>{t('sandbox')}</p></div>}
