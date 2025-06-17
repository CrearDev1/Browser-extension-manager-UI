
let btnActivar =document.querySelectorAll('.btn-activar');

btnActivar.forEach(btn =>{
    btn.addEventListener('click', ()=> {
        let btnActivo = btn.style.justifyContent === 'start'? 'end':'start';
        btn.style.justifyContent = btnActivo;

    if (btnActivo === 'start') {
      btn.style.backgroundColor = 'hsl(226, 11%, 37%)';
    } else {
      btn.style.backgroundColor = 'hsl(3, 71%, 56%)'; 
    }
    })
})












    //  let btnActivar =  document.querySelectorAll('.btn-activar').addEventListener('click', activarExtencion);
    
    
    // function activarExtencion(){
    //     btnActivar.forEach(btn  =>{ 
    //     let btnActivo = btn.style.justifyContent === 'start'? 'end':'start';
    //     btn.style.justifyContent = btnActivo;

    //     if (btnActivo === 'start') {
    //         btn.style.backgroundColor = 'hsl(226, 11%, 37%)'
    //     }
    // });
    // }

    // btnActivar.forEach(btn  =>{ 
    //     let btnActivo = btn.style.justifyContent === 'start'? 'end':'start';
    //     btn.style.justifyContent = btnActivo;

    //     if (btnActivo === 'start') {
    //         btn.style.backgroundColor = 'hsl(226, 11%, 37%)'
    //     }
    // });
         