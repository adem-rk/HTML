import {createContext,useContext,useEffect,useState,useCallback} from 'react'
import {load,save,reset as resetStore} from '../services/storage'
import en from '../i18n/en';import fr from '../i18n/fr';import ar from '../i18n/ar'
export const dicts={en,fr,ar}
const C=createContext()
export const useApp=()=>useContext(C)
export function Provider({children}){
 const [s,setS]=useState(load)
 useEffect(()=>{save(s);document.documentElement.lang=s.lang;document.documentElement.dir=dicts[s.lang].dir;document.documentElement.dataset.theme=s.theme},[s])
 const d=dicts[s.lang]
 const t=k=>d.ui[k]??en.ui[k]??k
 const set=p=>setS(o=>({...o,...p}))
 const complete=useCallback(id=>setS(o=>{if(o.done[id])return o
  const day=new Date().toISOString().slice(0,10)
  return{...o,done:{...o.done,[id]:day},xp:o.xp+20,days:o.days.includes(day)?o.days:[...o.days,day]}}),[])
 const value={s,d,t,set,complete,reset:()=>setS(resetStore()),replace:n=>setS({...n})}
 return <C.Provider value={value}>{children}</C.Provider>}
