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
