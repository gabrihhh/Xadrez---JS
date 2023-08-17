

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

let peaoVerde1 = {
  local:9,
  pasta:'./img/peao.png'
}
let peaoVerde2 = {
  local:10,
  pasta:'./img/peao.png'
}
let peaoVerde3 = {
  local:11,
  pasta:'./img/peao.png'
}

let pecas = [peaoVerde1,peaoVerde2,peaoVerde3];
let argumentos =[];

document.addEventListener('click',(e)=>{
  argumentos.push(e.target.id)
  console.log(argumentos)
  if(argumentos.length == 2){
    
    mudar(argumentos[0],argumentos[1]);

    argumentos=[];

  }

})


function mudar(a,b){

  

}


setInterval(()=>{
  pecas.forEach((e)=>{document.getElementById(e.local).innerHTML = '<img src="'+e.pasta+'">'})
},100)
