# ionic-pokeapp

Aplicativo mobile desenvolvido em Ionic + Angular, consumindo a PokeAPI. Lista Pokémons com paginação, exibe detalhes com imagens e informações adicionais, permite favoritar e é responsivo para diferentes orientações de tela.

## Fluxo de Branches e Contribuição

Este projeto segue um fluxo simples de branches adequado para desenvolvimento solo, mas que permite evoluir futuramente para um time maior.

### Branches principais

- **main**: Contém sempre a versão estável e pronta para produção.

### Convenção de nomes de branches

- **feature/**: Para desenvolvimento de novas funcionalidades.
  - Exemplo: `feature/login-screen`

- **hotfix/**: Para correções emergenciais que precisam ir direto para produção.
  - Exemplo: `hotfix/fix-crash-on-startup`

### Pull Requests

- Mesmo sendo um projeto solo, toda alteração na `main` será feita via Pull Request.
- O próprio autor faz a abertura, revisão e merge dos PRs.
- Não teremos proteções obrigatórias de aprovação na `main`, para evitar bloqueios desnecessários.

### Commits

Usaremos o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/):

- Exemplos:
  - `feat: adicionar tela de listagem de pokemons`
  - `fix: corrigir bug no carregamento de imagens`
  - `chore: ajustes de configuração inicial`

## Setup Local

1. Clone o repositório

```bash
git clone <repo-url>
cd ionic-pokeapp
```

2. Instale dependências

```bash
npm install
```

3. Prepare os hooks (só na primeira vez)

```bash
npm run prepare
```

4. Execute em dev

```bash
npm start
```

5. Para lint, formatação e testes:

```bash
npm run lint
npm run format
npm test
```

---

## Integração Contínua (CI)

Este projeto usa GitHub Actions para garantir build, lint e formatação em cada push ou pull request:

- O workflow fica em `.github/workflows/ci.yml`.
- Ele roda nas branches `main` e `feature/**`.
- Passos executados:
  1. Checkout do código
  2. Instalação das dependências (`npm ci`)
  3. Lint (`npm run lint`)
  4. Checagem de formatação (`npx prettier --check "src/**/*.{ts,html,scss}"`)
  5. Build do app (`npm run build`)

Para ver o status do CI, acesse a aba **Actions** no GitHub após o push.
