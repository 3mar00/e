let allp = document.querySelectorAll(".con-lis p");
let v = document.querySelectorAll(".con-lis");
let p = document.querySelectorAll(".con-lo p");
let l = document.querySelector(".lis");
let c = document.querySelector(".top-lis img");
let log = document.querySelector(".top-lis h3");
let n =document.querySelector(".s");
let ni =document.querySelector(".s img");

nii = 0;
n.onclick = _=>{
    let r = document.styleSheets[0].cssRules[0].style;

    console.log(r)

    if(nii == 0){


        r.cssText=`

        --c:#000;
        --b1:#c3ff09;
        --b2:#39a800;
        --b3:#1974e2;
        --b4:#e91e63;
        --b5:#006a1b;
    
        `
        ni.src="gr.png"
        n.style.justifyContent="right"
        nii++
    }else{

        
        r.cssText=`

        --c:#ffffff;
        --b1:#212121;
        --b2:#333363;
        --b3:#bec1ce;
        --b4:#bec1ce;
        --b5:#434381;
    
        `
        n.style.justifyContent="left"
        ni.src="nr.png"
        nii--
        
    }


}



// log

p.forEach((a) =>{
    
    
    a.onclick= _=>{
        p.forEach( (a)=>a.removeAttribute("class"))
        a.className="c"
    }
})

// list ||||||

v.forEach((a) =>{

    a.onclick= _=>{
        v.forEach((a) => a.classList.remove('c'))

        a.classList.add("c")
    }


})


allp.forEach( (a) =>  a.style.display="none" );


c.onclick = _ =>{
    
    allp.forEach( (a) =>{
        let alll = document.querySelectorAll(".con-lisn");
        if(a.style.display == "none"){
            
            a.style=""
            log.style=""
            a.parentElement.className="con-lisn"
            l.style.animation=" w 0s linear forwards"
            
            console.log(alll);
            
        }else{
            a.parentElement.className="con-lis"
            a.style.display="none"
            log.style.display="none"
            l.style.animation=" w 0s linear reverse forwards"
            
        }
    })
    
}