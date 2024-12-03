// validar data inserida

const validarData = function(){
    const dateString = document.getElementById('data-resgate-input').value;
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = dateString.match(regex);

    if (!match) {
        alert('A data deve seguir o formato: dd/mm/aaaa');
        return false;
    }
    const day = parseInt(match[1]);
    const month = parseInt(match[2]) - 1;
    const year = parseInt(match[3]);

    const date = new Date(year, month, day);

    if(date.getDate() === day && date.getMonth() === month && date.getFullYear() === year) return true;
    else{
        alert('A data inserida não é válida');
        return false;
    }
}

// alterar cor da fonte do select após escolha do usuário

function estilizaSelect(event) {
    const select = event.target;
    if (select.value !== "default") {
        select.classList.add("changed");
    } else {
        select.classList.remove("changed");
    }
}

const listaSelects = document.querySelectorAll('.select-front');

listaSelects.forEach(select => {
    select.addEventListener('change', estilizaSelect);
});

// mostrar/esconder a descrição

function mostraDescricao(){
    const necessidadeSim = document.getElementById('necessidade-possui');
    const necessidadeNao = document.getElementById('necessidade-nao-possui')
    
    const doencaSim = document.getElementById('doenca-cronica-possui');
    const doencaNao = document.getElementById('doenca-cronica-nao-possui');

    
    
    
    const descricaoDiv = document.getElementById('descricao-necessidade');


    function toggleDescricao() {
        if (necessidadeSim.checked || doencaSim.checked) {
            descricaoDiv.style.display = 'flex';
        } else {
            descricaoDiv.style.display = 'none';
        }
    }

    necessidadeSim.addEventListener('change', toggleDescricao);
    doencaSim.addEventListener('change', toggleDescricao);
    doencaNao.addEventListener('change', toggleDescricao);
    necessidadeNao.addEventListener('change', toggleDescricao);

    toggleDescricao();
}

document.addEventListener('DOMContentLoaded', mostraDescricao);

// permitir preview da imagem do pet

function previewImage(event) {
    const input = event.target;

    const file = input.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(e) {
            let imgElement = document.getElementById('preview');


            imgElement.src = e.target.result;
            imgElement.style.display = 'block'; // Exibe a imagem
            imgElement.alt = 'Pré-visualização da imagem';
        }
        reader.readAsDataURL(file); // Converte a imagem para um formato que o navegador pode mostrar

    }else{
        console.error('Nenhum arquivo Selecionado');
    }
    
    
}