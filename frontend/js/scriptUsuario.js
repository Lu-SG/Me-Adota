
const API_URL = 'http://localhost:3001/api/usuarios';

async function addUser(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const estado = document.getElementById('estado').value;
    const cidade = document.getElementById('cidade').value;
    const bairro = document.getElementById('bairro').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;

    // Preferências
    let especie_desejada = document.getElementById('especie').value;

    let portes = document.querySelectorAll('input[name="porte"]');
    let porte_desejado = '';
    for(const opcao1 of portes){
        if(opcao1.checked){
            porte_desejado = opcao1.value;
            break;
        }
    }

    let sexos = document.querySelectorAll('input[name="sexo"]');
    let sexo_desejado = '';
    for(const opcao of sexos){
        if(opcao.checked){
            sexo_desejado = opcao.value;
            break;
        }
    }

    let aceita_doencaBoolean = document.querySelectorAll('input[name="doenca"]');
    let aceita_doenca_cronica = '';
    for(const opcao of aceita_doencaBoolean){
        if(opcao.checked){
            aceita_doenca_cronica = opcao.value;
            break;
        }
    }

    let necessidade_especial_Boolean = document.querySelectorAll('input[name="necessidade"]');
    let aceita_necessidade_especial = '';
    for(const opcao of necessidade_especial_Boolean){
        if(opcao.checked){
            aceita_necessidade_especial = opcao.value;
            break;
        }
    }

    let ja_tem_outros_animais_Boolean = document.querySelectorAll('input[name="outros"]');
    let ja_tem_outros_animais = '';
    for(const opcao of ja_tem_outros_animais_Boolean){
        if(opcao.checked){
            ja_tem_outros_animais = opcao.value;
            break;
        }
    }

    let tem_tempo_pro_animal_Boolean = document.querySelectorAll('input[name="tempo"]');
    let tem_tempo_pro_animal = '';
    for(const opcao of tem_tempo_pro_animal_Boolean){
        if(opcao.checked){
            tem_tempo_pro_animal = opcao.value;
            break;
        }
    }
    let senha = '';
    senha = document.getElementById('senha').value;

    const str2ab = (str) => {
        const buf = new ArrayBuffer(str.length * 2); // 2 bytes para cada caractere
        const bufView = new Uint16Array(buf);
        for (let i = 0, strLen = str.length; i < strLen; i++) {
          bufView[i] = str.charCodeAt(i);
        }
        return buf;
      };
  
      // Função para converter um ArrayBuffer em uma string hexadecimal
      const ab2hex = (buffer) => {
        const hexCodes = [];
        const view = new DataView(buffer);
        for (let i = 0; i < view.byteLength; i += 4) {
          const value = view.getUint32(i);
          const stringValue = value.toString(16);
          const padding = '00000000';
          const paddedValue = (padding + stringValue).slice(-padding.length);
          hexCodes.push(paddedValue);
        }
        return hexCodes.join('');
      };
  
      // Função para fazer o hashing da senha
      const hashPassword = async (senha) => {
        const buffer = str2ab(senha);
        const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
        const hashHex = ab2hex(hashBuffer);
        return hashHex;
      };



      const storeHashedPassword = async (password) => { 
        const hashedPassword = await hashPassword(password); 
        // Armazenando a senha com hash em uma variável 
        const storedPassword = hashedPassword; 
        return storedPassword; 
    };


    function validarEmail()
    {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) { 
                
                return true; 
            } else { 
                alert('Email inválido'); 
                return false; 
            } 
    }
  
    function validarSenha()
        {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/; 
            if (passwordRegex.test(senha)) 
                { 
                    return true; 
                } 
                else 
                { 
                    alert('Senha inválida. A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.'); 
                    event.preventDefault(); // Impede o envio do formulário return false; }
        }
    }

    function validarTelefone()
    {
        const phoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/; 
        if (phoneRegex.test(telefone)) 
            { 
                return true; 
            } 
            else 
            { 
                alert('Número de telefone inválido. O formato correto é (00)00000-0000.');
                return false; 
            }
    }

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


    let email = '';
    email = document.getElementById('email').value;
    

    async function validarDados(event) { 
        
        if(validarEmail() == true && validarSenha() == true && validarTelefone() == true && validarNumero() == true)
        {
            senha = await storeHashedPassword(senha); 
            const newUser = { nome, email, telefone, senha, estado, cidade, bairro, rua, numero, complemento, especie_desejada, porte_desejado, sexo_desejado, aceita_necessidade_especial, aceita_doenca_cronica, ja_tem_outros_animais, tem_tempo_pro_animal };

            try {
                const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            });
            if (response.ok) {
                alert("Cadastro realizado com sucesso!");
            
                const emailString = email;
                const emailAdm = '@meadota.com';

                const ehADM = emailString.includes(emailAdm);



                localStorage.setItem('emailUsuario', email);
            
            if(ehADM)
            {
                window.location.href = 'buscarAnimalADM.html';
            }
            else{
                window.location.href = 'buscarAnimal.html';
            }



            } else {
                alert("Erro ao Realizar o cadastro.");
            }
            } catch (err) {
            console.error("Erro ao adicionar Usuário:", err);
            }
        }
        else
        {
            event.preventDefault();
        }

    }

    validarDados(event);

}



  
    




document.getElementById('form-usuario').addEventListener('submit', addUser);

