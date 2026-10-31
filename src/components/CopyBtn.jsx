import {useState} from 'react'
import {useApp} from '../app/Ctx'
export default function CopyBtn({text}){const{t}=useApp();const[ok,setOk]=useState(false)
 return <button className="btn" onClick={async()=>{try{await navigator.clipboard.writeText(text);setOk(true);setTimeout(()=>setOk(false),1500)}catch{}}}>{ok?t('copied'):t('copy')}</button>}
