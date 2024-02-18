function docangle(){
    let rang= [document.querySelector('.scop'),document.querySelector('.speri'),
               document.querySelector('.cotex'), document.querySelector('.rocks'),
               document.querySelector('.loger'),document.querySelector('.criar'),
                document.querySelector('.cadrest'), document.getElementById('text')];
    rang[2].classList.remove('cotex');
    rang[2].classList.add('remov');
    rang[0].classList.add('reverscop');
    rang[0].classList.remove('scop');
    rang[1].classList.remove('speri');
    rang[1].classList.add('rist');

   
        rang[5].style.display= 'none';
        rang[6].style.display= 'none';
        rang[2].textContent= 'login';
        rang[3].style.display= 'none';
        rang[4].style.hegth= 2.5 + 'em';
        rang[4].style.display= 'inline';
        rang[4].style.transform= 'rotateY(-160deg)';
        rang[7].style.opacity= 0
   
}

function action(){
    let usuario= [document.querySelector('.email'), document.querySelector('.password')];

    let msgrepos= document.querySelector('.respos');
    
    let user= usuario[0].value;
    let valid= parseInt(usuario[1].value);

    if(localStorage.getItem('user')!= user || localStorage.getItem('password')!= valid){
        msgrepos.style.opacity= 1;
        msgrepos.textContent= 'senha incorreta';
        msgrepos.style.color= 'rgb(255, 4, 255)';
    }else{
        msgrepos.style.opacity= 1;
        msgrepos.textContent= 'login aprovado';
        msgrepos.style.color= 'green';

       }
}

function newDefoo(){
    let enterdados= [document.querySelector('.criar'), document.querySelector('.cadrest'),
                     document.querySelector('.rocks'), document.querySelector('.creat'), document.getElementById('text')];
    let titte= document.querySelector('.cotex');
    let rotate= document.querySelector('.scop');

    titte.classList.remove('cotex');
    titte.classList.add('remov')

    rotate.classList.remove('scop');
    rotate.classList.add('reverscop');
    setTimeout(()=>{enterdados[2].style.display= 'none'
                    enterdados[0].style.display= 'none'
                    enterdados[3].style.display= 'inline'
                    enterdados[4].style.opacity= 0
                    enterdados[1].style.transform= 'rotateY(-160deg)'
                    enterdados[1].style.opacity=1}, 1002);
}

function newcadrest(){
    let dados= [document.querySelector('.createmail'), document.querySelector('.creatpassword')];

    let user= dados[0].value;
    let password= dados[1].value;

    localStorage.setItem('user', user);
    localStorage.setItem('password', password)
}