# Funcionarios

Este é um projeto React utilizando Vite como bundler. Vite é um construtor de aplicações web extremamente rápido e leve que aproveita o suporte nativo de ES Modules no navegador para oferecer tempos de compilação instantâneos e desenvolvimento rápido.

## Instalação

Certifique-se de ter o Node.js e npm instalados em seu sistema antes de prosseguir.

1. Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/EduardoSobreira/Desafio.git
```

2. Acesse o diretório do projeto:

```bash
cd desafio
```

3. Instale as dependências do projeto utilizando npm:

```bash
npm install
```

## Uso
Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
npm run dev
```
Isso iniciará o servidor de desenvolvimento em http://localhost:3000.


Para criar uma versão otimizada para produção, execute:

```bash
npm run build
```

Isso criará uma pasta dist na raiz do projeto com os arquivos otimizados para produção.

## Estrutura do Projeto
A estrutura do projeto é a seguinte:

```bash
desafio/
|- public/
|- src/
|  |- components/
|  |- estilos/
|  |- App.jsx
|  |- main.jsx
|- package.json
|- README.md
```
- public/: Este diretório contém os arquivos públicos que serão servidos pelo servidor.
- src/: Este diretório contém o código-fonte da aplicação.
- components/: Este diretório contém os componentes React reutilizáveis.
- App.jsx: Este é o componente principal da aplicação.
- main.jsx: Este é o ponto de entrada da aplicação onde o React é renderizado no DOM.
- package.json: Este arquivo contém as dependências do projeto e scripts de build.
