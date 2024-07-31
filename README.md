<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

<br>

## 💻 Projeto

Este projeto é  para  desenvolver uma interface que recebe dados de uma API, baseado nas naves e pilotos de Star Wars.


## 🚀 Tecnologias

- NodeJS
- NestJs
- Docker
- Prisma
- Postgres

## Instalação

### Primeiros Passos

#### 1 - Clonar o Projeto
Clone o repositório para a sua máquina local:

```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

#### 3 -  Rodar com Docker
Para rodar o projeto usando Docker, use o comando:

```sh
docker-compose up
```

#### 4 -  Entrar no Container
Para entrar no container do backend, use o seguinte comando:

```sh
docker-compose exec backend bash
```

#### 5 -   Instalar o Prisma e o Prisma Client:
Para entrar no container do backend, use o seguinte comando:

```sh
npm install prisma -D

npm install @prisma/client
```

Qualquer dúvida,  [NestJS application](https://docs.nestjs.com/#installation) e [Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgres#set-up-prisma).

#### 6 - Inicializar o Prisma

Se for a primeira vez que você está usando o Prisma, inicialize o Prisma para criar o esquema e as variáveis de ambiente (Talvez esse passo não seja necessário para esse projeto)

```sh
npx prisma init
```

#### 7 -  Criar Migrações
Crie as migrações para a sua base de dados:
```sh
npx prisma migrate dev --name init
````

#### 8 -  Gerar as Tabelas
Crie as migrações para a sua base de dados:
```sh
npx prisma generate
````

#### 9 -   Verificar as Tabelas
Você pode verificar as tabelas diretamente no Prisma Studio rodando o comando:

Crie as migrações para a sua base de dados:
```sh
npx prisma studio
````

#### Sucesso! Agora só testar junto com o frontEnd.

## 🔖 Layout

Feito com ♥ by Priscilla Rarimmy :space_invader:
