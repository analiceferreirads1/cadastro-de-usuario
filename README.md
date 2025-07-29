
# Sistema de  Cadastro de Usuário 

Objetivo do Projeto
Aplicação web desenvolvida com React.js e Styled Components, com foco em manipulação de listas, integração com API e experiência de usuário. 
Ideal para treinar conceitos de front-end moderno, componentização e consumo de dados externos,consolidar o uso de props, estados, rotas e estilização moderna


## 🖥️ Demo

![Demonstração do projeto](assets/cadastro-de-usuarios.gif)

🔗
[Acesse a aplicação online](https://cadastro-de-usuario-v25r.vercel.app)

---

##  Tecnologias utilizadas

- React.js  
- Styled Components 
- Axios
- Vite 
- JavaScript ES6  
- Git e GitHub
- React Router DOM  

---


## Funcionalidades

-  Cadastro de novos usuários  
-  Listagem de usuários cadastrados  
-  Exclusão de usuários individualmente  
-  Avatares automáticos via ID  
-  Navegação com React Router  
-  Interface moderna e responsiva 

---

## Estrutura do Projeto

```bash
src/
├── assets/ # Ícones e imagens
├── components/ # Componentes reutilizáveis
│ ├── Button/
│ └── TopBackground/
├── pages/
│ └── ListUsers/
├── services/
│ └── api.js # Axios configurado
├── App.jsx # Definição de rotas
└── main.jsx # Entrada da aplicação
---
 Demonstração


---

## 🔗 API de Usuários

Utiliza uma API REST com as seguintes rotas:

- `GET /usuarios` → Listagem  
- `POST /usuarios` → Cadastro  
- `DELETE /usuarios/:id` → Exclusão  

Avatares são gerados dinamicamente com:

```url
https://avatar.iran.liara.run/public?username={id}

Clone o repositório:
git clone https://github.com/analiceferreirads1/cadastro-de-usuario.git

Instale as dependências:
npm install

Rode o projeto:
npm run dev

Acesse:

http://localhost:5173

Autora
Analice Ferreira
Desenvolvedora Full Stack em formação pelo DevClub
LinkedIn https://www.linkedin.com/in/analice-ferreira-de-souza-47620b32b/| GitHub https://github.com/analiceferreirads1