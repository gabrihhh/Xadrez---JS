

function campo(){
    let ident = 1
    let color = false;
    let side = true;
    for(let j=0;j<8;j++){
        if(side!==true){color=true}else{color=false}
        for(let i = 0;i<8;i++){
            
            document.getElementById('main').innerHTML += '<div id="'+ident+'"></div>'
            
            if(color){
                document.getElementById(ident).style.backgroundColor = 'black';
                color=false
            }else{
            color=true 
            }
            ident++
        }
        if(side){side=false}else{side=true}
    }    // document.main.innerHTML += '<br>';
}
campo()

let peaoVerde1 = {id:1,local:9,pasta:'./img/peao.png'}
let peaoVerde2 = {local:10,pasta:'./img/peao.png'}
let peaoVerde3 = {local:11,pasta:'./img/peao.png'}
let peaoVerde4 = {local:12,pasta:'./img/peao.png'}
let peaoVerde5 = {local:13,pasta:'./img/peao.png'}
let peaoVerde6 = {local:14,pasta:'./img/peao.png'}
let peaoVerde7 = {local:15,pasta:'./img/peao.png'}
let peaoVerde8 = {local:16,pasta:'./img/peao.png'}
let torre1 = {local:1,pasta:'./img/torre.png'}
let torre2 = {local:8,pasta:'./img/torre.png'}
let cavalo1 = {local:2,pasta:'./img/cavalo.png'}
let cavalo2 = {local:7,pasta:'./img/cavalo.png'}
let bispo1 = {local:3,pasta:'./img/bispo.png'}
let bispo2 = {local:6,pasta:'./img/bispo.png'}
let rei1 = {local:4,pasta:'./img/rei.png'}
let rainha1 = {local:5,pasta:'./img/rainha.png'}

let pecas = [peaoVerde1,peaoVerde2,peaoVerde3,peaoVerde4,peaoVerde5,peaoVerde6,peaoVerde7,peaoVerde8,torre1,torre2,cavalo1,cavalo2,bispo1,bispo2,rei1,rainha1];
let argumentos =[];

document.addEventListener('click',(e)=>{
  argumentos.push(e.target.id)
  if(argumentos.length == 2){
    
    mudar(argumentos[0],argumentos[1]);

    argumentos=[];

  }

})


function mudar(a,b){

  pecas.forEach((e)=>{if(e.local == b){document.getElementById(e.local).innerHTML = '';}})
  for(let i = 0;i<pecas.length;i++){
    if(a == pecas[i].local){
      document.getElementById(pecas[i].local).innerHTML = '';
      pecas[i].local = b
    }
  }

}


setInterval(()=>{
  pecas.forEach((e)=>{document.getElementById(e.local).innerHTML = '<img src="'+e.pasta+'">'})
},500)
