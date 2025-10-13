// React Version 17 m hota tha asa 
// const elemnet = React.createElement('h1',{},"Hello Coder Army")
// const root = document.getElementById('root')
// const display = ReactDOM.render(elemnet,root) ye km hmra react 17 m hota tha 18 m ye km mt krye ab error ayegi

//React version 18 m asa hota h 
const element = React.createElement('h1',{style:{backgroundColor:'black',color:'white',padding:'10px',textAlign:'end',fontSize:'50px'}},"Hello Coder Army")
const Reactroot = ReactDOM.createRoot(document.getElementById('root'))
Reactroot.render(element)

