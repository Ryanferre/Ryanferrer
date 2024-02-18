function Mytime(){
    
        let Dtime= new Date()
        let Mestime= Dtime.getMonth() + 1
        let Daytime= Dtime.getDate()
        let Htime= Dtime.getHours()
        let Mtime= Dtime.getMinutes()
        let Stime= Dtime.getSeconds()

        const ElementMes= document.querySelector('.Titlle')
        let EleModf= [document.querySelector('.Selmot'), document.querySelector('.Selhors'),
                      document.querySelector('.Selmint'), document.querySelector('.Selsec')]
                      EleModf[0].textContent= Daytime
                      EleModf[1].textContent= Htime
                      EleModf[2].textContent= Mtime
                      EleModf[3].textContent= Stime

        const Mes= ['janeiro', 'fevereiro', 'março', 'abril',
                    'maio', 'junho', 'julho', 'agosto', 'setembro',
                    'outubro', 'novembro', 'dezembro']

        switch (Mestime) {
            case 1:
                ElementMes.textContent= Mes[0]
                break;
            case 2:
                ElementMes.textContent= Mes[1]
                break;
            case 3:
                ElementMes.textContent= Mes[2]
                break;
            case 4:
                ElementMes.textContent= Mes[3]
                break;
            case 5:
                ElementMes.textContent= Mes[4]
                break;
            case 6:
                ElementMes.textContent= Mes[5]
                break;
            case 7:
                ElementMes.textContent= Mes[6]
                break;
            case 8:
                ElementMes.textContent= Mes[7]
                break;
            case 9:
                ElementMes.textContent= Mes[8]
                break;
            case 10:
                ElementMes.textContent= Mes[9]
                break;
            case 11:
                ElementMes.textContent= Mes[10]
                break;
            case 12:
                ElementMes.textContent= Mes[11]
            default:
                break;
        }
        return Htime;
}


//esta função modifica as imagens de acordo com o horario e tamanho da tela
function WindBack(){

        let OrientDay= document.querySelector('.MoldBack')
        let WidthMob=[]
        let Hor= Mytime()

        //ordem de apresentação de imagens desktop e mobile
        const ElementsDesk= ['imagensDay/Bom-dia.jpg', 'imagensDay/Boa-tarde.jpg',
                            'imagensDay/Boa-tarde-noite.jpg', 'imagensDay/Boa-noite-fotor.jpg']
                           
        const ElementsMobi= ['imagensDay/Bom-dia-fotor-mobile.jpg', 'imagensDay/Boa-tarde-fotor-mobile.jpg',
                              'imagensDay/Boa-tarde-noite-fotor-mobile.jpg','imagensDay/Boa-noite-fotor-mobile.jpg']
        
        //capturando o resultado atual aplicado no background
        let St= window.getComputedStyle(OrientDay)
        let StVal= St.getPropertyValue('background').replace('rgba(0, 0, 0, 0) url("http://127.0.0.1:5500', "").replace('") no-repeat scroll 50% 0% / 300% padding-box border-box', '')
        
        //usando o resultado encontrado e verificando o seu array de origem
        //se o css mudar para a versão mobile a variavel WidthMob recebe
        //a ordem de apresentção para imagens mobile e vice-versa
            for(let i=0; i<ElementsDesk.length; i++){
                  if(StVal.includes(ElementsDesk[i])){
                    WidthMob= ElementsDesk.slice()
                    break;
                  }else if(StVal.includes(ElementsMobi[i])){
                    WidthMob= ElementsMobi.slice()
                    break;
                  }
                }
        //o background muda de acordo com o horario e a sua ordem de apresentação
        // tambem é modificada de a cordo com o resultado da variavel WidthMob
        //OBS: o text-shadow é modificado nessa função por conta dos horarios
        if(Hor>=7 && Hor<=12){
            OrientDay.style.backgroundImage= `url('${WidthMob[0]}')`
        }
        if(Hor>=12 && Hor<=16){
            OrientDay.style.backgroundImage= `url('${WidthMob[1]}')`
        }
        if(Hor>=16 && Hor<=18){
            OrientDay.style.backgroundImage= `url('${WidthMob[2]}')`
        }
        if(Hor>=18){
            OrientDay.style.backgroundImage= `url('${WidthMob[3]}')`
        }
}


//esta função verifica em qual horario a pagina esta sendo acessada e modifica
//alguns elementos de acordo com o horario
function Apres(){
    alert('ATENÇÃO! OS ELEMENTOS PODEM NÃO SER EXATAMENTE COMO DEMOSTRADO NA FOTO, POIS ELES MUDAM DE ACORDO COM O HORARIO')
    let SelNam= prompt('Bem vindo! qual o seu nome?')
    let UsuaNam= document.querySelector('.WelcomeUsua')

    //elementos de saudação
    const ElementApres= ['bom dia', 'boa tarde', 'boa noite']
    //icone/tempo
    const CrImag= document.querySelector('.Imag')

    //horario fornecido pela função Mytime()
    let ElementVerifi= Mytime()

    if(SelNam=== ''){
        SelNam= '!'
    }
    else{
        SelNam=' ' + SelNam + '!'
    }
    //modificação dos elementos
    if(ElementVerifi>=7 || ElementVerifi<=12){
            UsuaNam.textContent= ElementApres[0] + SelNam
            CrImag.src= "imageIcon/icons8-sol-e-nuvem-48.png"
        }
        if(ElementVerifi>=12 || ElementVerifi<=17){
            UsuaNam.textContent= ElementApres[1] + SelNam
        }
        if(ElementVerifi>=17 || ElementVerifi<=7){
            UsuaNam.textContent= ElementApres[2] + SelNam
            CrImag.src= 'imageIcon/icons8-lua-brilhante-48.png'
           
        }
        
}
Apres()
setInterval(()=>{
    Mytime()
    WindBack()
}, 100)