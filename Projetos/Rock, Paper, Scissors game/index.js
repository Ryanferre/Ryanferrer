function startgame(){
    let toItems= [document.querySelector('.items'), document.querySelector('.game'), document.querySelector('.titleitems')]
    const mychoice= document.querySelector('.ResultYou')

    if(toItems[0].style.display!= 'none' && toItems[1].style.display!= 'flex' && toItems[2].style.display!= 'none'){
         toItems[0].style.display= 'none'
         toItems[1].style.display= 'flex'
         toItems[2].style.display= 'none'
    }
            
    let choice= event.target
    let capback= window.getComputedStyle(choice)
    let trchoice= capback.getPropertyValue('background-image').replace('url("http://127.0.0.1:5500/rock-paper-scissors-master/', "").replace('")', '')
        mychoice.style.backgroundImage= `url(${trchoice})`


    choicedesk(trchoice)

}
function choicedesk(primeElem){
     let resultdesk;
     let result= 0
     let toelement= document.querySelector('.ResultSegun')
     let elemenpos= ['images/icon-scissors.svg', 'images/icon-paper.svg', 'images/icon-rock.svg']

     
         resultdesk= Math.floor(Math.random() *3)
         toelement.style.backgroundImage= `url(${elemenpos[resultdesk]})`
    
     switch (true) {
        case (primeElem=== elemenpos[2] && toelement.style.backgroundImage=== 'url("images/icon-scissors.svg")'):
              result++
              obj.soma(result)
            break;
        case (primeElem=== elemenpos[1] && toelement.style.backgroundImage=== 'url("images/icon-rock.svg")'):
              result++
              obj.soma(result)
                break;
        case (primeElem=== elemenpos[0] && toelement.style.backgroundImage=== 'url("images/icon-paper.svg")'):
              result++
              obj.soma(result)
        default:
            break;
    }
    obj.implent()
    obj.lostWin(result)
}

const obj={
    result: 0,
    soma: function(res){
              this.result+=res
          },
    implent: function (){
                 let numtab= document.querySelector('.tablenumber')
                 numtab.textContent= this.result;
             },

    lostWin: function(rest){
                 let phrase= document.querySelector('.titlegame')
             if(rest!=0){
                 phrase.textContent= 'you win'
               }else{
                 phrase.textContent= 'you lose'
               }
             }
}
function returngame(){
    const modStyle= [document.querySelector('.items'), document.querySelector('.game'), document.querySelector('.titleitems')]

    if(modStyle[0].style.display!= '' && modStyle[1].style.display!= '' && modStyle[2].style.display!= ''){
       modStyle[0].style.display= ''
       modStyle[1].style.display= ''
       modStyle[2].style.display= ''
      }
}