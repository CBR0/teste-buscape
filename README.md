# Teste para Front-end

##Dependências
- Nodejs

## Instalação
Em ambiente de DEV o projeto é inciado usando **browser-sync** com **gulp** (para facilitar testar em Smartphones), caso precise gerar o CSS a partir do Sass é preciso instalar globalmente o gulp com `npm install -g gulp`.

    npm install

## Rodando o projeto
O sass é transpilado via gulp com node-sass

      npm start

> É possivel rodar a aplicação usando webserver comum, como Nginx ou até mesmo Express com Nodejs basta utilizar o diretório **public**.

## Backlog

**Pré-requisitos**
- [x] Layout responsivo
- [x] Listar os produtos
- [x] Remover do carrinho
- [x] Galeria de imagens

**Bonus game**
- [x] Trocar imagens quebradas para imagens de erro default.
- [ ] Renderizar no server side.
- [ ] Persistir os dados.
- [ ] Teste do código.