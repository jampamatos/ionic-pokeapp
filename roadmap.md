# ROADMAP DE ALTO NÍVEL

Esse roadmap descreve as principais etapas e histórias de usuário para o desenvolvimento do projeto Pokedex Ionic+Angular. As epics organizam as funcionalidades em blocos lógicos, enquanto as histórias de usuário detalham tarefas específicas a serem implementadas.

---

## Epic 1 · Setup & Infraestrutura

Prepara todo o esqueleto do projeto e define o tema global (cores, espaçamentos, tipografia).

- [X] **US1.1** – Configurar repositório Git e branches de feature
- [X] **US1.2** – Inicializar projeto Ionic+Angular
- [X] **US1.3** – Definir design tokens (SCSS): paleta pokédex-red, yellow, espaçamentos, border-radius
- [X] **US1.4** – Configurar ESLint, Prettier e Husky (lint-staged)
- [X] **US1.5** – Criar pipeline CI (GitHub Actions) para build e lint

## Epic 2 · Listagem de Pokémons

Exibir grid paginado de cards com sprites, nome e ícone de favorito.

- [ ] **US2.1** – Criar PokeApiService (injeção de dependência) para chamar /pokemon?limit&offset
- [ ] **US2.2** – Renderizar grid de `<ion-card>` com sprite, nome e estrela de favorito
- [ ] **US2.3** – Implementar paginação “Anterior” / “Próximo” e indicador de página
- [ ] **US2.4** – Adicionar barra de busca para filtrar por nome (reactivo)
- [ ] **US2.5** – Garantir responsividade: 2 colunas em portrait, 3 em landscape

## Epic 3 · Detalhes do Pokémon

Mostrar tela com sprites e pelo menos 6 descrições (flavor texts).

- [ ] US3.1 – Gerar PokedexDetailPage com rota parametrizada (/pokemon/:id)
- [ ] US3.2 – Chamar /pokemon/{id} e exibir sprites (default/front/back, shiny)
- [ ] US3.3 – Chamar /pokemon-species/{id} e mostrar ≥6 flavor_text entries
- [ ] US3.4 – Exibir atributos extra (tipo(s), altura, peso, habilidades) em cards
- [ ] US3.5 – Layout adaptável portrait/landscape (posição das imagens vs. textos)

## Epic 4 · Favoritos

Permitir ao usuário marcar Pokémon e consultar sua lista.

- [ ] US4.1 – Criar FavoritesService usando Storage local (Ionic Storage)
- [ ] US4.2 – Botão/star no card e na detail para marcar/desmarcar favorito
- [ ] US4.3 – Página FavoritesPage que lista apenas os pokémons favoritos
- [ ] US4.4 – Persistir favoritos entre sessões e exibir contador no header

## Epic 5 · Qualidade & Extras

Documentação, testes e demonstração em mídia.

- [ ] **US5.1** – Escrever README.md (≤10 frases) sobre abordagem e padrões adotados
- [ ] **US5.2** – Escrever testes unitários (Jasmine/Karma) para PokeApiService e componentes críticos
- [ ] **US5.3** – Criar documentação técnica (diagramas simples de componentes e fluxo de dados)
- [ ] **US5.4** – Adicionar GIFs ou vídeos curtos em /docs/demo mostrando navegação e favoritos
- [ ] **US5.5 (bônus)** – Avaliar possibilidade de WebHook simulado (e.g. notificar lista de favoritos a um serviço externo)

---

## Epic Atual Detalhada

### 2 · Listagem de Pokémons

- [X] Branch
  - Criar branch `feature/pokedex-list` a partir de main
- [X] Scaffold de página
  - Gerar `PokedexListPage` via CLI: `ionic generate page pages/pokedex-list`
- [X] Modelagem de dados
  - Definir interfaces TypeScript para o retorno de `/pokemon?limit&offset`
  - Definir modelo para resumo de Pokémon (`name, url`)
- [X] Serviço de API
  - Criar `PokeApiService` com método `getPokemons(limit: number, offset: number)`
  - Implementar tratamento de erros e tipagem de resposta
- [X] Injeção de dependência
  - Registrar `PokeApiService` no módulo raiz (`AppModule`) ou módulo de páginas
- [X] Consulta inicial
  - No `ionViewWillEnter` de `PokedexListPage`, chamar `getPokemons`
  - Controlar estado de carregamento e exibir `<ion-spinner>`
- [X] Renderização do grid
  - No template, usar `<ion-grid>` ou CSS Grid para dispor os cards
  - Cada card deve conter:
    - Sprite (imagem) do Pokémon
    - Nome em caixa alta
    - Ícone de favorito (estrela outline)
- [X] Busca reativa
  - Incluir `<ion-searchbar>` no topo da lista
  - Filtrar localmente o array de pokémons com debounce (ex.: 300ms)
- [X] Paginação
  - Adicionar botões “Anterior” e “Próximo” abaixo do grid
  - Manter `currentPage` e recalcular `offset = (currentPage – 1) × limit`
  - Desabilitar “Anterior” em `currentPage = 1` e “Próximo” em última página
- [X] Responsividade
  - Em portrait: 2 colunas; em landscape: 3 colunas
  - Ajustar via CSS custom properties (`--ion-grid-columns`) ou media queries SCSS
- [X] Tratamento de erros
  - Exibir `<ion-toast>` ou `<ion-text color="danger">` em caso de falha na requisição
- [ ] Estilização
  - Aplicar design tokens (cores, espaçamentos, border-radius) nos cards e botões
  - Garantir contraste e alinhamento consistentes
- [ ] Commits frequentes
  - Após cada item acima, criar commit com Conventional Commit:
    - `feat(pokedex): create PokeApiService`
    - `feat(pokedex): scaffold PokedexListPage`
    - `fix(pokedex): handle API errors in list page`
    - …
- [ ] Pull Request
  - Ao finalizar todos os itens, abrir PR `feature/pokedex-list → main`
  - Descrever brevemente as mudanças e linkar as US do Epic 2
