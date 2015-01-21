# hotel-search-engine

## Dados:
* Back-end: **NodeJS**
* Front-end: **AngularJS**
* Servidor Web: **Express**
* Banco de dados: **SQLite**:
* ORM: **Sequelize**
* API: Criei uma de Hotel e outra de Booking mais algumas auxiliares como a de busca por hotéis com quartos não preenchidos.
* Performance: A performance dos serviço de busca foi de 174 requisições por segundo com um volume de 10.000 hotéis na base. (vide relatório em anexo). Futuramente daria para aumentar com otimizações e indexação.

## Dependências
* NodeJS

## Instalação e uso:

```js
./configure
./make
```

ou 

```bash
npm install -g bower
npm install
bower install
npm start
```

* Para visualizar o site entrar em http://localhost:3000
* A busca está bem simples, o input de cidades tem alto completar então é só digitar Rio para ter Rio de Janeiro e clicar em buscar;

## Observações
* Na raiz do projeto existe uma pequena base de dados do sqlite (data.sqlite3) apenas para meios didáticos e não precisar inicializar o banco de dados;
* Existem dois serviços para teste performance, um deles é o api/testCreateHotel que insere hotéis aleatoriamente e o outro é o api/testSearch que faz uma busca;
* Existe um arquivo benchmark.sh que pode ser executado após o servidor ter subido que roda os serviços de teste. (depende do ApacheTools instalado);
