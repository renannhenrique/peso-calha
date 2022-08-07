
let calc = 0;
let resultado = document.querySelector(".resultado");
    resultado.style.display = 'none';

document.querySelector(".calcular").addEventListener("click", ()=>{


   let campoSelecao = document.querySelector("select");
   let campoMetragem = document.querySelector(".campoMetragem");

        campoSelecao = parseFloat(campoSelecao.value);
        campoMetragem = parseFloat(campoMetragem.value);

           calc = campoSelecao * campoMetragem;

           resultado.style.display = 'block';
           resultado.innerHTML = calc.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'} + 'kg') + 'kg'; // Tranformando valor para o padrão BR
        

    
});