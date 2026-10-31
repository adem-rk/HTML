const KEY='hma.v1'
export const defaults={v:1,lang:'en',theme:'light',done:{},xp:0,days:[],playground:''}
export function load(){try{const d=JSON.parse(localStorage.getItem(KEY));return validate(d)?{...defaults,...d}:{...defaults}}catch{return{...defaults}}}
export function save(s){try{localStorage.setItem(KEY,JSON.stringify(s))}catch{}}
export function validate(d){return !!d&&typeof d==='object'&&d.v===1&&typeof d.xp==='number'&&!!d.done&&typeof d.done==='object'&&['ar','fr','en'].includes(d.lang??'en')}
export function reset(){try{localStorage.removeItem(KEY)}catch{};return{...defaults}}
