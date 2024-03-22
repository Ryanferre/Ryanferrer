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
    let trchoice= capback.getPropertyValue('background-image').replace('url("http://127.0.0.1:5501/Projetos/Rock,%20Paper,%20Scissors%20game/', "").replace('")', '')
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
              Restchoice.soma(result)
            break;
        case (primeElem=== elemenpos[1] && toelement.style.backgroundImage=== 'url("images/icon-rock.svg")'):
              result++
              Restchoice.soma(result)
                break;
        case (primeElem=== elemenpos[0] && toelement.style.backgroundImage=== 'url("images/icon-paper.svg")'):
              result++
              Restchoice.soma(result)
        default:
            break;
    }
    Restchoice.implent()
    Restchoice.lostWin(result)
}
class obg{
  result
  soma
  implent
  lostWin
}

let Restchoice= new obg()

Restchoice.result= 0;
Restchoice.soma= function(res){
                     this.result+=res
                 };
Restchoice.implent= function(rest){
                        let phrase= document.querySelector('.titlegame')
                        if(rest!=0){
                           phrase.textContent= 'you win'
                        }else{
                           phrase.textContent= 'you lose'
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