# Teste para Front-end


## Dependências
- Nodejs


## Instalação
Em ambiente de DEV o projeto é inciado usando **browser-sync** com **gulp** (para facilitar testar em Smartphones), caso precise gerar o CSS a partir do Sass é necessário instalar globalmente o gulp com `npm install -g gulp`.

    npm install


## Rodando o projeto
Rodando server side, com todos os pacotes instalados.

      npm start

Rodando em DEV

      gulp
* O sass é transpilado via gulp com node-sass
> É possivel rodar a aplicação usando webserver comum, como Nginx ou até mesmo Express com Nodejs basta utilizar o diretório **public**.

## Backlog

**Pré-requisitos**
- [x] Layout responsivo
- [x] Listar os produtos
- [x] Remover do carrinho
- [x] Galeria de imagens

**Bonus game**
- [x] Trocar imagens quebradas para imagens de erro default.
- [x] Renderizar no server side.
- [ ] Persistir os dados.
- [ ] Teste do código.