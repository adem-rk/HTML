import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useApp} from '../app/Ctx'
import {lessons,levels} from '../data/curriculum'
export default function Curriculum(){const{s,t,d}=useApp();const[q,setQ]=useState('')
 const shown=lessons.filter(l=>l.t[s.lang].toLowerCase().includes(q.toLowerCase()))
 return <div className="space-y-4"><input className="btn w-full" type="search" aria-label={t('search')} placeholder={t('search')} value={q} onChange={e=>setQ(e.target.value)}/>
 {!shown.length&&<p>{t('none')}</p>}
 {levels.map(n=>{const ls=shown.filter(l=>l.level===n);return ls.length?<section key={n}><h2 className="font-bold mb-2">{t('level')} {n} — {d.levels[n-1]}</h2>
  <ul className="space-y-2 list-none p-0">{ls.map(l=><li key={l.id}><Link to={`/lesson/${l.id}`} className="card flex justify-between no-underline" style={{color:'var(--fg)'}}><span>{l.t[s.lang]}</span><span style={{color:'var(--mute)'}}>{l.min} {t('min')} {s.done[l.id]?'✓':''}</span></Link></li>)}</ul></section>:null})}</div>}
