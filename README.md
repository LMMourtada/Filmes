````markdown
# Filmes

Minha primeira aplicação Full Stack: um site para pesquisa de filmes utilizando a API do TMDB e armazenamento de favoritos em PostgreSQL.

## Tecnologias

### Frontend

- React
- Vite
- Axios
- React Router DOM
- Tailwind CSS
- DaisyUI

### Backend

- Node.js
- Express
- PostgreSQL
- Neon

## Funcionalidades

- Listar filmes populares
- Pesquisar filmes
- Adicionar filmes aos favoritos
- Remover filmes dos favoritos
- Paginação
- Persistência dos favoritos em banco de dados

## Estrutura do projeto

```text
Filmes/
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── Routes.jsx
│   │   └── main.jsx
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── vite.config.js
│
├── Backend/
│   ├── src/
│   │   ├── database.js
│   │   └── server.js
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

## Instalação

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Instalar as dependências

#### Frontend

```bash
cd Frontend
npm install
```

#### Backend

```bash
cd Backend
npm install
```

## Variáveis de ambiente

Crie um arquivo `.env` nas pastas **Frontend** e **Backend**, utilizando os arquivos `.env.example` como modelo.

### Backend

```env
DATABASE_URL=
```

### Frontend

```env
VITE_TMDB_TOKEN=
VITE_API_BASE=https://api.themoviedb.org/3
VITE_IMG=https://image.tmdb.org/t/p/w500
```

## Executando o projeto

### Backend

```bash
node src/server.js
```

### Frontend

```bash
npm run dev
```
````
