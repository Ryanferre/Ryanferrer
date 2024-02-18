function MenuApres(){
    const LookMenu= document.querySelector('.Infor')
    const MobileMenu= document.querySelector('.InforMobile')
    if( LookMenu.style.left!= 0 + '%'){
        LookMenu.style.left= 0 + '%'
        LookMenu.style.opacity= '1'
    }else{
        LookMenu.style.left= ''
        LookMenu.style.opacity= ''
    }
    if(MobileMenu.style.left!= 0 + '%'){
        MobileMenu.style.left= 0 + '%'
    }else{
        MobileMenu.style.left= ''
    }
}

function Behavior(){
    let Gett= [document.querySelector('.Look'), document.querySelector('.Contate'),
               document.querySelector('.BehavioLeter'), document.querySelector('.Habilit')]
    
    if(Gett[0].style.left!= 7 + '%' || Gett[1].style.left!= -150 + '%' || Gett[2].style.left!= '' || Gett[3].style.left!= ''){
        Gett[0].style.left= 7 + '%'
        Gett[1].style.left= -150 + '%'
        Gett[2].style.left= ''
        Gett[3].style.left= ''
    }else{
        Gett[1].style.left= ''
        Gett[0].style.left= ''
    }
}
function BehaviorLeter(){
  let Gette= [document.querySelector('.Look'), document.querySelector('.Contate'),
              document.querySelector('.BehavioLeter'), document.querySelector('.Habilit')]
  if(Gette[0].style.left!= '' || Gette[1].style.left!= -150 + '%' || Gette[3].style.left!= ''){
    Gette[2].style.left= 0 + '%'
    Gette[0].style.left= ''
    Gette[1].style.left= -150 + '%'
    Gette[3].style.left= ''
  }
  else{
    Gette[1].style.left= ''
    Gette[2].style.left= ''
  }

}

function Habylit(){
    let Gytte= [document.querySelector('.Habilit'), document.querySelector('.Look'), document.querySelector('.Contate'),
                 document.querySelector('.BehavioLeter')]
    if(Gytte[0].style.left!= 0 + '%' || Gytte[1].style.left!= '' || Gytte[2].style.left!= -150 + '%' || Gytte[3].style.left!= ''){
        Gytte[0].style.left= 0 + '%'
        Gytte[2].style.left= -150 + '%'
        Gytte[1].style.left= ''
        Gytte[3].style.left= ''
    }else{
        Gytte[0].style.left= ''
        Gytte[2].style.left= ''
    }
}

function MarginCont(){
    const Imag= document.querySelector('.BehavioLeter')
    const Senttinel= window.innerWidth

    if(Senttinel<= 900){
        Imag.style.marginTop= 0 + '%';
    }else{
        Imag.style.marginTop =''
    }
    console.log(Senttinel)
    //deleta as chaves do objeto infor//
}


 window.setInterval(MarginCont(), 100)