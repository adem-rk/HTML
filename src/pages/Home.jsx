import {Link} from 'react-router-dom'
import {useApp} from '../app/Ctx'
import {lessons,levels} from '../data/curriculum'
import Social from '../components/Social'
const BY={en:'Created by',fr:'Créé par',ar:'من إعداد'}
export default function Home(){const{s,t,d}=useApp()
 const doneN=Object.keys(s.done).length
 const next=lessons.find(l=>!s.done[l.id])
 const total=lessons.reduce((a,l)=>a+l.min,0)
 const stats=[[lessons.length,t('lessons')],[lessons.reduce((a,l)=>a+l.items.length,0),'HTML '+({en:'examples',fr:'exemples',ar:'أمثلة'})[s.lang]],[total,t('min')],[`${doneN}/${lessons.length} · ${s.xp} ${t('xp')}`,t('done')]]
 return <div className="space-y-8">
 <section className="hero"><p className="chip">{BY[s.lang]}</p><p className="author">Adem Hammoudi</p>
  <h1 className="text-3xl md:text-5xl font-bold my-3">{t('hero')}</h1><p className="max-w-xl mb-5" style={{color:'var(--mute)'}}>{t('sub')}</p>
  <div className="flex flex-wrap gap-2 mb-6"><Link to={`/lesson/${(next||lessons[0]).id}`} className="btn p no-underline">{doneN?t('cont'):t('start')}</Link><Link to="/playground" className="btn no-underline">{t('playground')}</Link></div>
  <div className="bar my-5" aria-hidden="true"><i style={{width:`${doneN/lessons.length*100}%`}}/></div><Social/></section>
 <section aria-label={t('stats')} className="grid grid-cols-2 md:grid-cols-4 gap-3">{stats.map(([v,l],i)=><div className="card" key={i}><div className="text-2xl font-bold">{v}</div><div style={{color:'var(--mute)'}}>{l}</div></div>)}</section>
 <section><h2 className="text-xl font-bold mb-3">{t('curriculum')}</h2><div className="grid md:grid-cols-2 gap-2">{lessons.map(l=><Link key={l.id} to={`/lesson/${l.id}`} className="card path no-underline" style={{color:'var(--fg)'}}><span className="num">{l.level}</span>{l.t[s.lang]}<span className="ms-auto">{s.done[l.id]?'✓':''}</span></Link>)}</div></section></div>}
