

setTimeout(function setarDadosAnimal() {
    const id_animal = localStorage.getItem('id_animal');
const animalString = localStorage.getItem('animal') 
let animal = JSON.parse(animalString);




document.getElementById('id-animal').value = id_animal;
document.getElementById('nome').value = animal.nome;
document.getElementById('idade').value = animal.idade;
document.getElementById('especie-animal').value = animal.especie;
document.getElementById('raca-animal').value = animal.raca;

document.getElementById('cidade').value = animal.cidade;
document.getElementById('estado').value = animal.estado;
document.getElementById('rua').value = animal.rua;
document.getElementById('numero').value = animal.numero;
document.getElementById('bairro').value = animal.bairro;
document.getElementById('complemento').value = animal.complemento;
document.getElementById('data-resgate-input').value = animal.data_resgate;
if(animal.porte === 'P')
    {
        const radioP = document.getElementById('porte-pequeno');
        radioP.checked = true;
    }
    if(animal.porte === 'M')
        {
            const radioM = document.getElementById('porte-medio');
            radioM.checked = true;
        }
    if(animal.porte === 'G')
    {
        const radioG = document.getElementById('porte-grande');
        radioG.checked = true;
    }
    if(animal.porte === 'XG')
    {
        const radioXG = document.getElementById('porte-extra-grande');
         radioXG.checked = true;
    }

    if(animal.sexo === 'M')
        {
            const radioM = document.getElementById('check-macho');
            radioM.checked = true;
        }
        if(animal.sexo === 'F')
        {
            const radioF = document.getElementById('check-femea');
             radioF.checked = true;
        }

        if(animal.necessidade_especial === 'sim')
            {
                document.getElementById('descricao').value = animal.desc_necessidade;

                const radioNecS = document.getElementById('necessidade-possui');
                radioNecS.checked = true;
            }
            if(animal.necessidade_especial === 'nao')
            {
                const radioNecN = document.getElementById('necessidade-nao-possui');
                 radioNecN.checked = true;
            }

            if(animal.doenca_cronica === 'sim')
                {
                    document.getElementById('descricao').value = animal.desc_necessidade;
                    const radioDocS = document.getElementById('doenca-cronica-possui');
                    radioDocS.checked = true;
                }
            if(animal.doenca_cronica === 'nao')
            {
                const radioDocN = document.getElementById('doenca-cronica-nao-possui');
                radioDocN.checked = true;
            }

            if(animal.convivencia === 'sim')
                {
                    const radioAnS = document.getElementById('convivencia-boa');
                    radioAnS.checked = true;
                }
                if(animal.convivencia === 'nao')
                {
                    const radioAnN = document.getElementById('convivencia-ruim');
                     radioAnN.checked = true;
                }
                if(animal.necessidade_atencao === 'sim' )
                    {
                        const radioTmpS = document.getElementById('atencao-extra');
                        radioTmpS.checked = true;
                    }
                    if(animal.necessidade_atencao  === 'nao')
                    {
                        const radioTmpN = document.getElementById('atencao-normal');
                         radioTmpN.checked = true;
                    }
                   
                    const fotoDiv = document.getElementById('foto');
                
                    function arrayBufferToBase64(buffer) { 
                        let binary = ''; 
                        let bytes = new Uint8Array(buffer); 
                        let len = bytes.byteLength; 
                        for (let i = 0; i < len; i++) 
                            { 
                                binary += String.fromCharCode(bytes[i]); 
                            } 
                            return window.btoa(binary); 
                        }

                        if (animal.foto.data && animal.foto.data.length > 0) 
                            { 
                                // Converter a foto para Base64 
                                const base64String = arrayBufferToBase64(animal.foto.data); 

                                fotoDiv.innerHTML = `<img src="data:${animal.mime_type};base64,${base64String}"   style="max-width: 300px;" >`
                            
                            }else{
                                console.error('A imagem não contém dados.');
                            }
}, 200);

async function atualizarAnimal(event){
    const id_animal = localStorage.getItem('id_animal');

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const raca = document.getElementById('raca-animal').value;

    const estado = document.getElementById('estado').value;
    const cidade = document.getElementById('cidade').value;
    const bairro = document.getElementById('bairro').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const data_resgate = document.getElementById('data-resgate-input').value;
    let especie = document.getElementById('especie-animal').value;

    let portes = document.querySelectorAll('input[name="porte-animal"]');
    let porte = '';
    for(const opcao1 of portes){
        if(opcao1.checked){
            porte = opcao1.value;
            break;
        }
    }

    let sexos = document.querySelectorAll('input[name="sexo"]');
    let sexo = '';
    for(const opcao of sexos){
        if(opcao.checked){
            sexo = opcao.value;
            break;
        }
    }

    let doencaBoolean = document.querySelectorAll('input[name="doenca-cronica"]');
    let doenca_cronica = '';
    for(const opcao of doencaBoolean){
        if(opcao.checked){
            doenca_cronica = opcao.value;
            break;
        }
    }

    let necessidade_especial_Boolean = document.querySelectorAll('input[name="necessidade"]');
    let necessidade_especial = '';
    for(const opcao of necessidade_especial_Boolean){
        if(opcao.checked){
            necessidade_especial = opcao.value;
            break;
        }
    }

    let convivencia_Boolean = document.querySelectorAll('input[name="convivencia"]');
    let convivencia = '';
    for(const opcao of convivencia_Boolean){
        if(opcao.checked){
            convivencia = opcao.value;
            break;
        }
    }

    let necessidade_atencao_Boolean = document.querySelectorAll('input[name="atencao"]');
    let necessidade_atencao = '';
    for(const opcao of necessidade_atencao_Boolean){
        if(opcao.checked){
            necessidade_atencao = opcao.value;
            break;
        }
    }

    const desc_necessidade = document.getElementById('descricao').value;

    const mime_type = 'a';
    
    event.preventDefault();





    function validarNumero()
    {
        if (!isNaN(numero) && numero !== '') 
            { 
                return true; 
            } 
            else 
            { 
                alert('Número inválido. Por favor, insira um número.'); 
                 return false; 
            }
    }

    if(validarNumero() == true)
        {
                // Remove a parte 'data:image/jpeg;base64,' 
                const updateAnimalData = { 
                    nome, 
                    idade, 
                    especie, 
                    raca, 
                    sexo, 
                    porte, 
                    numero, 
                    rua, 
                    cidade, 
                    estado, 
                    complemento, 
                    data_resgate, 
                    convivencia, 
                    doenca_cronica, 
                    necessidade_especial, 
                    necessidade_atencao,
                    foto, // Inclui a imagem codificada em Base64 
                    mime_type,
                    desc_necessidade,
                    bairro
                };
                
            try {
                const response = await fetch(`http://localhost:3001/api/animais/atualizarAnimal/${id_animal}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updateAnimalData)
                });
                if (response.ok) {
                    
                    alert("Animal atualizado com sucesso!");
                } else {
                    alert("Erro ao atualizar animal.");
                }
            } catch (err) {
                console.error("Erro ao atualizar animal:", err);
            }
        
        }
        
    }
        



const botaoSelecionar = document.getElementById('select-animal');
if(botaoSelecionar){
    document.getElementById('select-animal').addEventListener('click', setarDadosAnimal);
}

document.getElementById('form-animal-atualizacao').addEventListener('submit', atualizarAnimal);
