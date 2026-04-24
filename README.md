# TupãSoft - Marketplace de Software

Plataforma de catálogo de software com frontend React, backend Node.js (Express + Sequelize) e PostgreSQL.

## Visão Geral

O TupãSoft é um marketplace de software que conecta desenvolvedores e empresas. Ele oferece um catálogo de soluções de software, permitindo que os usuários descubram, avaliem e adquiram produtos digitais. Nosso modelo de negócios é baseado em comissões sobre vendas, proporcionando uma plataforma segura e eficiente para transações entre compradores e vendedores.

O sistema é composto por um frontend moderno em React, um backend robusto em Node.js com Express e Sequelize para gerenciamento de dados, e um banco de dados PostgreSQL para armazenamento persistente.

## Arquitetura

- Frontend: React 19, Vite, Radix UI
- Backend: Node.js ESM, Express, Sequelize, Zod
- Banco: PostgreSQL relacional com persistência em volume Docker

## Estrutura do Repositório

```text
tupa-soft/
├── frontend/
├── backend/
├── docs/
├── docker-compose.yml
├── .env.compose.example
└── README.md
```

## Pré-requisitos

### Para rodar com Docker (recomendado)

- Docker 24+
- Docker Compose 2+

### Para rodar sem Docker

- Node.js 20+
- npm 10+
- PostgreSQL 14+
- psql (CLI)

## Execução Rápida com Docker

1. Criar arquivo de ambiente do Compose:

```bash
cp .env.compose.example .env.compose
```

2. Subir tudo:

```bash
docker compose --env-file .env.compose up --build
```

3. Acessar:

- Frontend: http://localhost:5173
- Backend API: http://localhost:3333/api
- Health check: http://localhost:3333/api/health
- PostgreSQL host: localhost:5433

### Persistência do banco

- O volume postgres_data mantém os dados entre reinícios.
- O arquivo backend/db/sql/init.sql roda somente na primeira criação do volume.

### Comandos úteis Docker

```bash
# Subir em background
docker compose --env-file .env.compose up --build -d

# Ver status
docker compose --env-file .env.compose ps

# Ver logs
docker compose --env-file .env.compose logs -f

# Parar sem apagar dados
docker compose --env-file .env.compose down

# Parar e apagar dados do banco
docker compose --env-file .env.compose down -v
```

## Variáveis de Ambiente

### Compose (.env.compose)

- DB_USER: usuário do Postgres
- DB_PASSWORD: senha do Postgres
- DB_NAME: nome do banco
- DB_PORT: porta do Postgres no host
- PORT_BACKEND: porta da API no host
- CORS_ORIGIN: origem liberada para frontend
- PORT_FRONTEND: porta do frontend no host

## Documentação por Módulo

- Frontend: frontend/README.md
- Backend: backend/README.md
- Documentação funcional e negócio: docs/README.md

## Contribuição

Contribuições são bem-vindas! Para contribuir, siga as etapas abaixo:

1. Fork este repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature')
4. Push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request

## Equipe

- João Carlos
- Reyner Alegria
- João Paulo
- Margarida
- Elizabeth
- José André

## Licença

Projeto proprietário - © 2026 TupãSoft.
