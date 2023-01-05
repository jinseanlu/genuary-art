const rand = (()=>Math.random(Math.PI))
const arr = [0.009, 0.09, 0.9]
const osc1 =()=> {return osc(1, 1, 1)}
shape(5, 0.5, arr).modulate(o0).modulateRepeat(osc1()).out(o0)
render(o0)
