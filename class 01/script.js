// Create Element through Js // ye h hmara sirf Element ko create krne ke liye 
// React hmara Object h bss nm hi liabrary h
// Ye hi hamri React liabray h ye code alread likha hua h bss hm isko utha kr apne code m le aoo or use krlu kitna acha hoga haina h 
const React = {
  createElement:function(tag,styles,children){
    const element = document.createElement(tag)
    if(typeof children == 'object'){
      for(let val of children)
        element.append(val)
    }
    else
    element.innerText = children;
    for(let key in styles){
      element.style[key]= styles[key]
    }
    return element;
  } 
}
//isme ek hoga mera element jo dalne h or ek hoga jisme dalna h 
// ReactDOM kya h Object bss nm hi liabrary h 
const ReactDOM = {
  render:function(element,root){
    root.append(element)
  }
}
const header1 = React.createElement('h1',{backgroundColor:'black',color:"white",fontSize:'50px',textAlign:'center',marginBottom:'20px'},"Hello Coder Army")
const header2 = React.createElement('h2',{backgroundColor:'black',color:"white",fontSize:'50px',textAlign:'center'},"Kaise ho ap sb log")
const para = React.createElement('p',{backgroundColor:'black',color:"white",fontSize:'50px',textAlign:'center',marginBottom:'20px'},'Frontend Developer')
const l1 = React.createElement('li',{},'HTML')
const l2 = React.createElement('li',{},'CSS')
const l3 = React.createElement('li',{},'JavaScript') 
// agr hme children m multiple element bhejne h to array ki form m bhej deneg
const unorderedlist = React.createElement('ul',{backgroundColor:'black',color:"white",fontSize:'50px',textAlign:'center',marginBottom:'20px'},[l1,l2,l3])
// agr mujhe yha unorderedlist create krni pde to kse krege
// HTML ,CSS ,JavaScript  ye dalege uske andr 

const root = document.querySelector('#root')
ReactDOM.render(unorderedlist,root)
ReactDOM.render(para,root)
ReactDOM.render(header1,root)
ReactDOM.render(header2,root)

// m ye chata hu ki m khud se React ko manupulate na kru uska nm rkh dia mne ReactDOM
// ye kaam m khud na krke ReactDOM se kraoga bhai
// const root = document.querySelector('#root')
// root.appendChild(para)
// root.appendChild(header1)
// root.appendChild(header2)

// AB krege hm Rendering ke liye DOM Manupulation 


