import { LEVELS } from './levels.js';
export const KEY = 'daily-games:salto-de-luciernagas:v1';
export function start(level=0){return {level, pegs:[...LEVELS[level].pegs], history:[], wins:[]};}
export function middle(from,to){if(!Number.isInteger(from)||!Number.isInteger(to)||from<0||to<0||from>24||to>24)return null;const [y,x]=[Math.floor(from/5),from%5], [v,u]=[Math.floor(to/5),to%5];return (y===v&&Math.abs(x-u)===2)||(x===u&&Math.abs(y-v)===2)?(from+to)/2:null;}
export function canMove(pegs,from,to){const m=middle(from,to);return m!==null&&pegs.includes(from)&&pegs.includes(m)&&!pegs.includes(to);}
export function move(state,from,to){if(!canMove(state.pegs,from,to)||state.pegs.length===1)return state;const pegs=state.pegs.filter(x=>x!==from&&x!==middle(from,to)).concat(to).sort((a,b)=>a-b);return {...state, pegs,history:[...state.history,{from,to}], wins:pegs.length===1?[...new Set([...state.wins,state.level])]:state.wins};}
export function undo(state){if(!state.history.length)return state;const history=state.history.slice(0,-1);let s=start(state.level);for(const m of history)s=move(s,m.from,m.to);return {...s,wins:state.wins};}
export function hasMoves(pegs){return pegs.some(a=>Array.from({length:25},(_,b)=>b).some(b=>canMove(pegs,a,b)));}
export function decode(raw){try{const x=JSON.parse(raw);if(!x||!Number.isInteger(x.level)||x.level<0||x.level>=LEVELS.length||!Array.isArray(x.history)||x.history.length>24)throw Error();let s=start(x.level);for(const m of x.history){if(!m||!canMove(s.pegs,m.from,m.to))throw Error();s=move(s,m.from,m.to);}return {...s,wins:Array.isArray(x.wins)?[...new Set(x.wins.filter(v=>Number.isInteger(v)&&v>=0&&v<6))]:[]};}catch{return start();}}
