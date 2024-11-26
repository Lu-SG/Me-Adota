
const API_URL_USUARIO = 'http://localhost:3001/api/usuarios/checkEmail';


async function checkEmail(event) {
    event.preventDefault();

    let senha = '';
    senha = document.getElementById('senha').value;
    let email = document.getElementById('email').value;

    const str2ab = (str) => {
        const buf = new ArrayBuffer(str.length * 2); // 2 bytes para cada caractere
        const bufView = new Uint16Array(buf);
        for (let i = 0, strLen = str.length; i < strLen; i++) {
          bufView[i] = str.charCodeAt(i);
        }
        return buf;
      };

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

    senha = await storeHashedPassword(senha);


    const valores = {email, senha};





    try {
        const response = await fetch(API_URL_USUARIO, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(valores)
        });
        if (response.ok) {
            alert("Login efetuado com sucesso!");
            localStorage.setItem('emailUsuario', email);


            window.location.href = 'buscarAnimal.html';

        } else {
            alert("Email e/ou senha incorretos");
        }
    } catch (err) {
        console.error("Erro ao logar Usuário:", err);
    }
}







document.getElementById('login-form').addEventListener('submit', checkEmail)