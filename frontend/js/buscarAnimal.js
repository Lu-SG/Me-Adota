
async function buscarDados()
{
    const emailUsuario = localStorage.getItem('emailUsuario');
    try { 
        const response = await fetch(`http://localhost:3001/api/usuarios/animais/${emailUsuario}`, { 
            method: 'GET', // Ajustado para GET 
            headers: { 'Content-Type': 'application/json' } 
        }); 
        if (response.ok) 
            { 
                const compatibilidade = await response.json(); 
                const resultadoDiv = document.getElementById('resultado'); 
                resultadoDiv.innerHTML = '';
                compatibilidade.forEach(animal => { 
                    if(animal.compatibilidade === -1000){
                    }else{
                        if(animal.desc_necessidade === '')
                        {
                            const animalDiv = document.createElement('div'); 
                            animalDiv.classList.add('animal'); // Adiciona a classe CSS
                            animalDiv.innerHTML = ` 
                            <h2>${animal.nome}</h2> 
                            <p> <img src="data:${animal.mime_type};base64,${animal.foto}" alt="Animal Image" style="max-width: 300px;"</p>
                            <p>Idade: ${animal.idade}</p> 
                            <p>Espécie: ${animal.especie}</p> 
                            <p>Raça: ${animal.raca}</p>
                            <p>Sexo: ${animal.sexo}</p> 
                            <p>Porte: ${animal.porte}</p> 
                            <p>Localização: ${animal.bairro}, ${animal.rua}, ${animal.numero}, ${animal.complemento}, ${animal.cidade} - ${animal.estado}</p> 
                            <p>Data do Resgate: ${animal.data_resgate}</p>
                            <p>Convive bem com outro animais: ${animal.convivencia}</p>
                            <p>Possui Doença Crônica: ${animal.doenca_cronica}</p>
                            <p>Possui necessidade Especial: ${animal.necessidade_especial}</p>
                            <p>Necessita muita atenção: ${animal.necessidade_atencao}</p>
                            <p>Compatibilidade: ${animal.compatibilidade}</p> `;
                            resultadoDiv.appendChild(animalDiv);
                        }
                        else{
                            const animalDiv = document.createElement('div'); 
                            animalDiv.classList.add('animal'); // Adiciona a classe CSS
                            animalDiv.innerHTML = ` 
                            <h2>${animal.nome}</h2> 
                            <p> <img src="data:${animal.mime_type};base64,${animal.foto}" alt="Animal Image" style="max-width: 300px;"> </p>
                            <p>Idade: ${animal.idade}</p> 
                            <p>Espécie: ${animal.especie}</p> 
                            <p>Raça: ${animal.raca}</p>
                            <p>Sexo: ${animal.sexo}</p> 
                            <p>Porte: ${animal.porte}</p> 
                            <p>Localização: ${animal.bairro}, ${animal.rua}, ${animal.numero}, ${animal.complemento}, ${animal.cidade} - ${animal.estado}</p> 
                            <p>Data do Resgate: ${animal.data_resgate}</p>
                            <p>Convive bem com outro animais: ${animal.convivencia}</p>
                            <p>Possui Doença Crônica: ${animal.doenca_cronica}</p>
                            <p>Possui necessidade Especial: ${animal.necessidade_especial}</p>
                            <p>Necessita muita atenção: ${animal.necessidade_atencao}</p>
                            <p>Descrição das Necessidade(s): ${animal.desc_necessidade}</p>
                            <p>Compatibilidade: ${animal.compatibilidade}</p> `;
                            resultadoDiv.appendChild(animalDiv);
                        }
                        
                    }
                }); 
                } 
                else 
                { 
                    alert("Erro ao buscar compatibilidade."); 
                } 
            } catch (err) { 
                console.error("Erro ao buscar compatibilidade:", err); 
            }





}


  
document.getElementById("buscarAnimal").addEventListener("click", buscarDados);