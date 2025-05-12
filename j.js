function opencv() {
    window.open("curriculum vitae.pdf","_blank")
    
}
// const btn=document.getElementById("toggle-mode")
// btn.addEventListener("click",()=>{
//     document.body.classList.toggle("dark");
    
//     document.body.classList.toggle("light")
// })
// window.onload=()=>{
//     document.body.classList.add("dark")
// }

function lightmode() {
    const lightbutton=document.getElementById("toggle-lightmode")
    lightbutton.style.display="none"
     const darkbutton=document.getElementById("toggle-darkmode")
    darkbutton.style.display="block"
    darkbutton.style.textAlign="right"
    
  
    const abc=document.getElementsByTagName("a")
    for (let i = 0; i < abc.length; i++) {
       abc[i].style.color="black"   

    }
    const button=document.getElementsByTagName("button")
    for (let i = 0; i < button.length; i++) {      button[i].style.borderColor=" black"
        button[i].style.color="black";
   
    }

    const body=document.querySelector("body")
  
    body.style.backgroundColor="white"
    body.style.color="rgb(22, 22, 26)"
  
    abc.style.color="rgb(22, 22, 26)"

  
 


  
    }
function darkmode() {
    const darkbutton=document.getElementById("toggle-darkmode")
    darkbutton.style.display="none"
   
     const lightbutton=document.getElementById("toggle-lightmode")
    lightbutton.style.display="block"
    lightbutton.style.textAlign="right"
    
    const anchor=document.getElementsByTagName("a")
    for (let index = 0; index < anchor.length; index++) {
        anchor[index].style.color="whitesmoke";
        
    }
    const bodydark=document.querySelector("body")
    bodydark.style.backgroundColor="rgb(22, 22, 26)"
    bodydark.style.color="whitesmoke"
    const btn=document.getElementsByTagName("button")
    for (let index = 0; index < btn.length; index++) {
        btn[index].style.borderColor="whitesmoke"
        ;
        btn[index].style.color="whitesmoke"
        
    }
    
}
 window.onload=()=>{
        document.body.classList.add("dark")
     }
   
    

    

    

