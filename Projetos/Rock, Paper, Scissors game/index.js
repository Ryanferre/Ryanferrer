function startgame(){
    let visibleInvisible= [document.querySelector('.items'), document.querySelector('.game'), document.querySelector('.titleitems')]
    const myElement= document.querySelector('.ResultYou')

    if(visibleInvisible[0].style.display!= 'none' && visibleInvisible[1].style.display!= 'flex' && visibleInvisible[2].style.display!= 'none'){
         visibleInvisible[0].style.display= 'none'
         visibleInvisible[1].style.display= 'flex'
         visibleInvisible[2].style.display= 'none'
    }
            
    let callElement= event.target
    let currentElement= window.getComputedStyle(callElement)
    let captureImage= currentElement.getPropertyValue('background-image').replace('url("http://127.0.0.1:5501/Projetos/Rock,%20Paper,%20Scissors%20game/', "").replace('")', '')
        myElement.style.backgroundImage= `url(${captureImage})`

    choicedesk(captureImage)

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
              resultchange.soma(result)
            break;
        case (primeElem=== elemenpos[1] && toelement.style.backgroundImage=== 'url("images/icon-rock.svg")'):
              result++
              resultchange.soma(result)
                break;
        case (primeElem=== elemenpos[0] && toelement.style.backgroundImage=== 'url("images/icon-paper.svg")'):
              result++
              resultchange.soma(result)
        default:
            break;
    }
    resultchange.implement()
    resultchange.lostWin(result)
}


const resultchange = {
  result: 0,

  soma: function(res) {
            this.result += res;
            localStorage.setItem('historic', this.result)
        },

  implement: function() {
                 let numtable = document.querySelector('.tablenumber');
                 numtable.textContent = this.result;
             },
  
  lostWin: function(rest) {
                let phrase = document.querySelector('.titlegame');
             if(rest != 0) {
                phrase.textContent= 'you win';
             }else{
                phrase.textContent= 'you lose';
              }
           }
}

function Loadhistoric(){
    const tableresult= document.querySelector('.tablenumber')
    const lasthistoric= localStorage.getItem('historic')

    if(lasthistoric != 0){
        tableresult.innerHTML= lasthistoric
    }
    else{
       tableresult.innerHTML= ''
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