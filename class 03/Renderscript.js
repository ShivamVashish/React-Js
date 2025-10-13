const element1 = React.createElement('h1',{style:{backgroundColor:'black',color:'white',padding:'10px',textAlign:'center',fontSize:'50px'},id:'first',className:'Header1'},"Hello Coder Army")
const element2 = React.createElement('h2',{style:{backgroundColor:'black',color:'white',padding:'10px',textAlign:'center',fontSize:'50px',marginTop:'20px'},id:'Second',className:'Header1'},"Frontend Developer")
const Reactroot = ReactDOM.createRoot(document.getElementById('root'))
const Div1 = React.createElement('div',{},[element1,element2])
// Reactroot.render(element1) 
// Render jo hota h hmara ye kheta h ki previous content ko 
// Note ==> Dono ko show krane ke liye hme Div ke andr rkhna hoga element1 & element2 ko bhi phlee div create krege ab asa krne se sirf mujhe react.render div krna h bss 
Reactroot.render(Div1)
// Reactroot.render(element2)