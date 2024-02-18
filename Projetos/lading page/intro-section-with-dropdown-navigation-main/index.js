

function MosterPrimeElemes(){
    const ElementInpuPri=[document.querySelector('.ContPrime'),document.querySelector('#SP1_P1'),
                          document.querySelector('#SP1_P2'), document.querySelector('.Element1')]
    if(ElementInpuPri[0].style.display!== 'flex'){
        ElementInpuPri[0].style.display= 'flex'
        ElementInpuPri[1].style.transform= 'rotateZ(-39deg)'
        ElementInpuPri[2].style.transform = 'rotateZ(39deg)'
    }else{
        ElementInpuPri[0].style.display= ''
        ElementInpuPri[1].style.transform= ''
        ElementInpuPri[2].style.transform= ''
    }
}

function MosterSegunElemes(){
    const ElementInpuSE= [document.querySelector('.ContSegun'), document.querySelector('#SP2_P1'),
                          document.querySelector('#SP2_P2')]
    if(ElementInpuSE[0].style.display!== 'flex'){
        ElementInpuSE[0].style.display= 'flex'
        ElementInpuSE[1].style.transform= 'rotateZ(-39deg)'
        ElementInpuSE[2].style.transform = 'rotateZ(39deg)'
    }else{
        ElementInpuSE[0].style.display= ''
        ElementInpuSE[1].style.transform= ''
        ElementInpuSE[2].style.transform= ''
    }
}


function AboltAplic(){
    const MySelect= [document.querySelector('.P1B'), document.querySelector('.P2B')]

    const MyElement= [document.querySelector('#SP1_P1'), document.querySelector('#SP1_P2'),
                      document.querySelector('#SP2_P1'), document.querySelector('#SP2_P2')]
    let Dic= event.target
    
    switch (Dic) {
        case Dic= MySelect[0]:
            MySelect[0].style.color= 'black'
            MyElement[0].style.background= 'black'
            MyElement[0].style.border= 'solid 1px black'
            MyElement[1].style.background= 'black'
            MyElement[1].style.border= 'solid 1px black'
            break;
        case Dic= MySelect[1]:
            MySelect[1].style.color= 'black'
            MyElement[2].style.background= 'black'
            MyElement[2].style.border= 'solid 1px black'
            MyElement[3].style.background= 'black'
            MyElement[3].style.border= 'solid 1px black'
            break;
    
        default:
            break;
    }

}

function ReturnElem(){
    const MySelectRet=[document.querySelector('.P1B'), document.querySelector('.P2B')]

    const MyElementRet= [document.querySelector('#SP1_P1'), document.querySelector('#SP1_P2'),
                         document.querySelector('#SP2_P1'), document.querySelector('#SP2_P2')]
    let Dec= event.target

    switch (Dec) {
        case Dic= MySelectRet[0]:
            MySelectRet[0].style.color= ''
            MyElementRet[0].style.background= ''
            MyElementRet[0].style.border= ''
            MyElementRet[1].style.border= ''
            MyElementRet[1].style.background= ''
        case Dic= MySelectRet[1]:
            MySelectRet[1].style.color= ''
            MyElementRet[2].style.background= ''
            MyElementRet[2].style.border= ''
            MyElementRet[3].style.background= ''
            MyElementRet[3].style.border= ''
            break;
    
        default:
            break;
    }
}



function Imag(){
    const ElemenTMobi= document.querySelector('.Mag')
    const ElemenTSet= ['/intro-section-with-dropdown-navigation-main/images/image-hero-mobile.png',
                       '/intro-section-with-dropdown-navigation-main/images/image-hero-desktop.png']
    let Spe= window.innerWidth
    setInterval(()=>{
        switch (Spe) {
            case Spe < 900:
                ElemenTMobi.src= ElemenTSet[0]
                break;
        
           case Spe > 900:
            ElemenTMobi.src= ElemenTSet[1]
        }
    }, 100)
    
}

Imag()

function Mymenu(){
    const BoxPris= document.querySelector('.Menu')
    const ElementBox= document.querySelector('.Naveg')
    const ItemElement= [document.querySelector('.Item1'), document.querySelector('.Item2'),
                        document.querySelector('.Item3')]

    if(ElementBox.style.left!= '100%'){
        ElementBox.style.left= '100%'
        BoxPris.style.justifyContent= 'center'
        ItemElement[0].style.transform= 'rotateZ(50deg)'
        ItemElement[2].style.transform= 'rotateZ(-50deg)'
        ItemElement[1].style.display= 'none'
    }
    else{
        ElementBox.style.left= ''
        BoxPris.style.justifyContent= ''
        ItemElement[0].style.transform= ''
        ItemElement[2].style.transform= ''
        ItemElement[1].style.display= ''
    }
}