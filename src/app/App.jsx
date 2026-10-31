import {HashRouter,Routes,Route,NavLink,Link} from 'react-router-dom'
import {Sun,Moon,GraduationCap} from 'lucide-react'
import {Provider,useApp,dicts} from './Ctx'
import Social from '../components/Social';import Home from '../pages/Home';import Curriculum from '../pages/Curriculum';import Lesson from '../pages/Lesson';import Playground from '../pages/Playground';import Settings from '../pages/Settings'
function Shell(){const{s,t,set}=useApp()
 const nav=[['/','home'],['/curriculum','curriculum'],['/playground','playground'],['/settings','settings']]
 return <div className="min-h-screen flex flex-col">
 <header className="card head flex flex-wrap items-center gap-3 rounded-none border-x-0 border-t-0">
  <Link to="/" className="flex items-center gap-2 font-bold no-underline" style={{color:'var(--fg)'}}><GraduationCap/>{t('app')}</Link>
  <nav aria-label="Main" className="flex flex-wrap gap-1 grow">{nav.map(([p,k])=><NavLink key={p} to={p} end={p==='/'} className="btn no-underline" style={({isActive})=>isActive?{borderColor:'var(--ac)'}:{}}>{t(k)}</NavLink>)}</nav>
  <select aria-label={t('lang')} className="btn" value={s.lang} onChange={e=>set({lang:e.target.value})}>{Object.entries(dicts).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select>
  <button className="btn" aria-label={t('theme')} onClick={()=>set({theme:s.theme==='dark'?'light':'dark'})}>{s.theme==='dark'?<Sun size={16}/>:<Moon size={16}/>}</button>
 </header>
 <main className="grow w-full max-w-5xl mx-auto p-4">
  <Routes><Route path="/" element={<Home/>}/><Route path="/curriculum" element={<Curriculum/>}/><Route path="/lesson/:id" element={<Lesson/>}/><Route path="/playground" element={<Playground/>}/><Route path="/settings" element={<Settings/>}/><Route path="*" element={<Home/>}/></Routes>
 </main>
 <footer className="p-6 text-center text-sm space-y-3" style={{color:'var(--mute)'}}><Social/><p>© Adem Hammoudi · {t('note')}</p></footer></div>}
export default()=> <Provider><HashRouter><Shell/></HashRouter></Provider>
