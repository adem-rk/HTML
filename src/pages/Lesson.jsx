import {Link,useParams,useNavigate} from 'react-router-dom'
import {useApp} from '../app/Ctx'
import {lessons} from '../data/curriculum'
import Preview from '../components/Preview'
import CopyBtn from '../components/CopyBtn'
export default function Lesson(){const{id}=useParams();const{s,t,d,complete,set}=useApp();const nav=useNavigate()
 const i=lessons.findIndex(l=>l.id===id);const l=lessons[i];if(!l)return <p>{t('none')}</p>
 const done=!!s.done[id]
 return <article className="space-y-5"><p className="chip">{t('level')} {l.level} · {d.levels[l.level-1]} · {l.min} {t('min')}</p>
 <h1 className="text-3xl font-bold">{l.t[s.lang]}</h1>
 {l.items.map(([code,txt],k)=><section key={k} className="card space-y-3"><p><span className="num">{k+1}</span>{txt[s.lang]}</p>
  <pre><code>{code}</code></pre><Preview code={code} height={code.length>150?170:110}/>
  <div className="flex gap-2 flex-wrap"><CopyBtn text={code}/><button className="btn" onClick={()=>{set({playground:code,pgcss:'',pgjs:''});nav('/playground')}}>{t('tryit')}</button></div></section>)}
 <button className="btn p" disabled={done} onClick={()=>complete(id)}>{done?t('completed'):t('complete')}</button>
 <div className="flex justify-between">{lessons[i-1]?<Link to={`/lesson/${lessons[i-1].id}`}>← {t('prev')}</Link>:<span/>}{lessons[i+1]&&<Link to={`/lesson/${lessons[i+1].id}`}>{t('next')} →</Link>}</div></article>}
