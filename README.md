# To-do-List 📝

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)
---

![Status](https://github.com/jonatasmirand/To-do-List-Test/actions/workflows/main.yml/badge.svg)


## 🚀 Deploy
O projeto está disponível em produção no Vercel:  
👉 [https://to-do-list-test-inky.vercel.app/](https://to-do-list-test-inky.vercel.app/)

---


## 🧠 Sobre o projeto

Uma aplicação **To-do-List** desenvolvida com **Next.js**, **React** e **TypeScript** para adicionar, listar e remover tarefas de forma organizada e estilizada.

---

## 🚀 Funcionalidades

- Adicionar novas tarefas.
- Remover tarefas existentes.
- Contador de tarefas (com mensagem personalizada para 0, 1 ou mais tarefas).
- Interface limpa e responsiva.
- Hooks personalizados (`useTarefas` e `useContadorDeTarefas`).

---

## 🛠 Tecnologias

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

---

## 📁 Estrutura do Projeto

.
├─ app/
│ ├─ hooks/
│ │ ├─ useTarefas.ts
│ │ ├─ useTarefas.test.tsx
│ │ ├─ useContadorDeTarefas.ts
│ │ └─ useContadorDeTarefas.test.tsx
│ ├─ page.tsx
│ └─ globals.css
├─ components/
│ ├─ NovaTarefa/
│ │ ├─ NovaTarefa.tsx
│ │ ├─ NovaTarefa.module.css
│ │ └─ NovaTarefa.test.tsx
│ ├─ Title/
│ │ ├─ Title.tsx
│ │ ├─ Title.module.css
│ │ └─ Title.test.tsx
│ └─ Footer.tsx
├─ type/
│ └─ tarefa.ts
└─ package.json

yaml
Copiar código

---

## ⚡ Como Rodar

1. Clone o repositório:

```bash
git clone <seu-repositorio>
cd to-do-list
Instale as dependências:

bash
Copiar código
npm install
# ou
yarn install
Execute a aplicação em modo de desenvolvimento:

bash
Copiar código
npm run dev
# ou
yarn dev
Acesse em http://localhost:3000
```


## 🧪 CI/CD Pipeline
O repositório utiliza **GitHub Actions** para integração contínua.

Cada push na branch `main` executa:
1. **Build** da aplicação  
2. **Lint e Prettier check**  
3. **Testes automatizados**  
4. **Deploy automático** para a Vercel (se tudo passar)

📦 Veja o status atual do pipeline:  
![Status](https://github.com/jonatasmirand/To-do-List-Test/actions/workflows/main.yml/badge.svg)

🔗 [Acompanhar execuções](https://github.com/jonatasmirand/To-do-List-Test/actions)

## 🧪 Testes

```
Execute todos os testes com:

bash
Copiar código
npm run test
```

### ou

```
yarn test
Exemplos de testes
Hook useTarefas
```

```
ts
Copiar código

expect(result.current.tarefas).toContainEqual(
  expect.objectContaining({ tarefa: "Aprender Jest" })
);
```

### Componente Title

```
ts
Copiar código
const elemento = await screen.findByText("Titulo");
expect(elemento).toBeInTheDocument();
```

## 🎨 Estilização

Cards para visualização das tarefas.

Botões com efeito hover.

Layout centralizado e responsivo.

Feedback visual claro de ações.

## 📄 Licença

MIT License © Jonatas Miranda

Feito por Jonatas Miranda
