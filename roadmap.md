# ROADMAP DE ALTO NÍVEL

Esse roadmap descreve as principais etapas e histórias de usuário para o desenvolvimento do projeto Pokedex Ionic+Angular. As epics organizam as funcionalidades em blocos lógicos, enquanto as histórias de usuário detalham tarefas específicas a serem implementadas.

---

## Epic 1 · Setup & Infraestrutura

Prepara todo o esqueleto do projeto e define o tema global (cores, espaçamentos, tipografia).

- [X] **US1.1** – Configurar repositório Git e branches de feature
- [X] **US1.2** – Inicializar projeto Ionic+Angular
- [X] **US1.3** – Definir design tokens (SCSS): paleta pokédex-red, yellow, espaçamentos, border-radius
- [ ] **US1.4** – Configurar ESLint, Prettier e Husky (lint-staged)
- [ ] **US1.5** – Criar pipeline CI (GitHub Actions) para build e lint

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

### 1 · Setup & Infraestrutura

- [X] Criar repositório remoto
  - Incluir README inicial e licença MIT
- [X] Definir convenções de Git & branches
  - `main` para produção
  - `feature/*` para novas funcionalidades
  - `hotfix/*` para correções emergenciais
- [X] Inicializar projeto Ionic + Angular
  - Criar branch `feature/initial-setup`
  - Executar scaffold via CLI
  - Commit inicial com estrutura básica
- [X] Definir design tokens
  - Paleta de cores (pokedex-red, yellow, neutras)
  - Tipografia (familia, pesos, hierarquia de títulos)
  - Espaçamentos (sm, md, lg) e border-radius
- [X] Configurar lint & formatação
  - Instalar e ajustar ESLint
  - Instalar e ajustar Prettier
  - Documentar convenções de estilo no projeto
- [ ] Configurar hooks de pré-commit
  - Instalar Husky
  - Configurar lint-staged para rodar lint e prettier antes do commit
- [ ] Criar pipeline de CI (GitHub Actions)
  - Instalar dependências e executar build
  - Rodar lint e formatação
  - Executar testes (mesmo que inicialmente vazios)
- [ ] Documentar setup local
  - Passos para clone, instalação e execução
  - Convenções de commits e branches
- [ ] Pull Request & Merge
  - Abrir PR de feature/initial-setup para main
  - Revisão e merge após aprovação
