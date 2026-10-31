import {useApp} from '../app/Ctx'
// sandbox="" => no scripts, no same-origin: user HTML cannot touch the app or its storage
export default function Preview({code,height=320}){const{t}=useApp()
 if(!code.trim())return <div className="card">{t('empty')}</div>
 const doc=/<html|<!doctype/i.test(code)?code:`<!doctype html><meta charset="utf-8"><style>body{font-family:system-ui,sans-serif;margin:12px;color:#111}</style>${code}`
 return <iframe title={t('preview')} sandbox="" srcDoc={doc} className="w-full bg-white rounded-lg" style={{height,border:'1px solid var(--bd)'}}/>}
