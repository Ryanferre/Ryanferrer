function DatesConf(){
    let DetVal= [document.querySelector('.Clickname').value, document.querySelector('.ClickLast').value,
              document.querySelector('.ClickAdress').value, document.querySelector('.ClickPassword').value]
    let Dic= [document.querySelector('.Nicknam'), document.querySelector('.NickLast'),
              document.querySelector('.NickAdress'), document.querySelector('.NickPassword')]
    let DetSty= [document.querySelector('.Clickname'), document.querySelector('.ClickLast'),
                 document.querySelector('.ClickAdress'), document.querySelector('.ClickPassword')]
    
              
    if(DetVal[0]== ''){
        Dic[0].style.opacity= '1'
        DetSty[0].style.backgroundImage= 'url(icon-error.svg)'
        DetSty[0].placeholder= ''
        DetSty[0].style.borderColor= 'red'
    }else{
        Dic[0].style.opacity= ''
    }

    if(DetVal[1]== ''){
        Dic[1].style.opacity= '1'
        DetSty[1].style.backgroundImage= 'url(icon-error.svg)'
        DetSty[1].placeholder= ''
        DetSty[1].style.borderColor= 'red'
    }else{
        Dic[1].style.opacity= ''
        
    }

    if(DetVal[2]== ''){
        Dic[2].style.opacity= '1'
        DetSty[2].style.backgroundImage= 'url(icon-error.svg)'
        DetSty[2].style.color= 'red'
        DetSty[2].placeholder= 'email@example/com'
        DetSty[2].style.borderColor= 'red'
    }else{
        Dic[2].style.opacity= ''
    }

    if(DetVal[3]== ''){
        Dic[3].style.opacity= '1'
        DetSty[3].style.backgroundImage= 'url(icon-error.svg)'
        DetSty[3].placeholder= ''
        DetSty[3].style.border= 'solid 1px red'
    }else{
        Dic[3].style.opacity= ''
    }
}