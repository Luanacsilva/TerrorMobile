🚀 TerrorMobile
📋 Objetivo
O TerrorMobile é um aplicativo mobile desenvolvido em React Native, com o objetivo de gerenciar produtos de um estoque. Ele permite realizar um CRUD (Create, Read, Update e Delete) dos produtos, salvando informações essenciais como:

Nome
Descrição
Quantidade
Foto
As informações dos produtos são carregadas a partir de um JSON estático, permitindo a simulação das operações mesmo sem um backend integrado.

✨ Funcionalidades Principais
Listar Produtos
Exibe todos os produtos disponíveis no estoque, com suas informações detalhadas.

Adicionar Produtos
Permite cadastrar novos produtos preenchendo os campos:

Nome
Descrição
Quantidade
Foto
Editar Produtos
Atualiza as informações de um produto existente.

Deletar Produtos
Remove um produto do estoque.

Persistência Local com JSON
As informações dos produtos são armazenadas e gerenciadas a partir de um JSON estático, simulando um banco de dados.

🛠️ Tecnologias Utilizadas
O projeto TerrorMobile foi desenvolvido utilizando as seguintes tecnologias:

React Native → Framework para desenvolvimento de aplicativos móveis.
Node.js → Gerenciador de pacotes (npm) e execução de scripts.
JavaScript → Linguagem principal utilizada no desenvolvimento.
JSON → Utilizado para armazenar e carregar os dados dos produtos de forma estática


🚀 Como Executar o Projeto
Siga os passos abaixo para rodar o TerrorMobile em sua máquina local:

Clone o Repositório
Faça o download do projeto usando o comando:

bash
Copiar código
git clone https://github.com/Luanacsilva/TerrorMobile.git
Instale as Dependências
Acesse a pasta do projeto e instale as dependências com:

bash
Copiar código
cd TerrorMobile
npm install
Execute o Projeto
Para rodar o aplicativo no emulador ou dispositivo físico, utilize o comando:

bash
Copiar código
npx react-native run-android
ou

bash
Copiar código
npx react-native run-ios
Visualize o Aplicativo
O app será executado no emulador ou dispositivo e mostrará a lista de produtos do JSON estático.

TerrorMobile/
│
├── app/                  # Contém os arquivos principais do app
│   ├── index.tsx         # Componente principal
│   ├── _layout.tsx       # Layout padrão do aplicativo
│   └── app.json          # Dados estáticos (JSON) com os produtos
│
├── node_modules/         # Pacotes e dependências instaladas
│
├── .gitignore            # Arquivos e pastas ignorados pelo Git
├── package.json          # Gerenciamento de dependências e scripts
├── tsconfig.json         # Configurações do TypeScript
├── README.md             # Documentação do projeto
└── package-lock.json     # Versões exatas das dependências

📜 Licença
Este projeto está sob a Licença MIT.
Sinta-se à vontade para usar, modificar e compartilhar conforme necessário.

