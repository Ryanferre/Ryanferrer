



function MolderStile(){
    let DicModificatio= [document.querySelector('.Man'), document.querySelector('.MessaPased'),
                         document.querySelector('.Listener'), document.querySelector('.contain'),
                         document.querySelector('.Doc'), document.querySelector('#Nig'),
                         document.querySelector('#Noc1'), document.querySelector('.Magsuces'),
                         document.querySelector('.TextMold')]
    let Dok= DicModificatio[4].value
    
    DicModificatio[0].style.display= 'none'
    DicModificatio[1].innerText= 'dismiss message'
    DicModificatio[2].style.display= 'none'
    DicModificatio[3].style.justifyContent= 'center'
    DicModificatio[3].style.width= 'Max-content'
    DicModificatio[3].style.margin= '2.5%' + 'auto'
    DicModificatio[4].style.display= 'none'
    DicModificatio[5].style.display= 'none'
    DicModificatio[7].style.display= 'flex'
    DicModificatio[6].innerHTML= '<p>A confirm email' + ` ${DicModificatio[6].innerHTML= `<strong>${Dok}</strong>`} ` + 'has been sent to please open it and click the button to confirm your subscription</p>'
    DicModificatio[8].innerText = 'Thanks for subscribing'
    DicModificatio[8].style.textAlign= 'start'
    DicModificatio[8].style.margin= '0'
}


function Devop(DicModificatio){
    let zit= [document.querySelector('.Doc'),document.querySelector('#Noc2')];
    
    //essas duas repetições representa dois valores
    //diferentes
    let Veler= zit[0].value
    let val= zit[0].value

    let vog= val.split('')
    let Dic= Veler.split('@gmail.com')

    console.log(Dic)
    let lette= Dic.indexOf('')
    if(lette== -1 || vog== ''){
        zit[0].style.color= 'red'
        zit[1].style.opacity= '1'
    }else{
        zit[0].style.color= ''
        zit[1].style.opacity= ''
        DicModificatio()
        //como essa variavel foi declarada na função anterior e
        //passada como parametro para essa função, ela vai ser chamada
        //em forma de função
    }
}