import {useState} from 'react'
import {useApp,dicts} from '../app/Ctx'
import {validate} from '../services/storage'
export default function Settings(){const{s,t,set,reset,replace}=useApp();const[msg,setMsg]=useState('')
 const exp=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(s,null,2)],{type:'application/json'}));a.download='progress.json';a.click();URL.revokeObjectURL(a.href)}
 const imp=async e=>{const f=e.target.files[0];if(!f)return;try{const d=JSON.parse(await f.text());if(!validate(d))throw 0;replace(d);setMsg(t('imported'))}catch{setMsg(t('badFile'))}e.target.value=''}
 return <div className="space-y-4"><h1 className="text-2xl font-bold">{t('settings')}</h1>
 <label className="block">{t('lang')} <select className="btn" value={s.lang} onChange={e=>set({lang:e.target.value})}>{Object.entries(dicts).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select></label>
 <label className="block">{t('theme')} <select className="btn" value={s.theme} onChange={e=>set({theme:e.target.value})}><option value="light">{t('light')}</option><option value="dark">{t('dark')}</option></select></label>
 <div className="flex flex-wrap gap-2 items-center"><button className="btn" onClick={exp}>{t('export')}</button><label className="btn">{t('import')}<input type="file" accept="application/json" onChange={imp} className="sr-only"/></label>
  <button className="btn" onClick={()=>window.confirm(t('confirm'))&&reset()}>{t('resetAll')}</button></div>
 <p role="status">{msg}</p><p style={{color:'var(--mute)'}}>{t('note')}</p></div>}
