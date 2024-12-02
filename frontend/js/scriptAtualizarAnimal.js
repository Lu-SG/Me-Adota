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
                if(animal.necessidade_atencao === 'sim')
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
                                console.log(`Base64 String: ${base64String}`);

                                fotoDiv.innerHTML = `<img src="data:${animal.mime_type};base64,${base64String}"   style="max-width: 300px;" >`
                            
                            }else{
                                console.error('A imagem não contém dados.');
                            }
        console.log(animal);




async function updateAnimalById(){

}


document.getElementById('update-animal').addEventListener('submit', updateAnimalById);