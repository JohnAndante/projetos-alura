# Testes unitários e de integração

## Causas de erros comuns

- Falta de testes
- Seres humanos cometem erros

## Pirâmide de testes

- **TOPO**: Testes e2e
- **MEIO**: Testes de integração
- **BASE**: Testes unitários

### Testes unitários

- Testes curtos e isolados
- Análise de funções e/ou métodos, classes
- Maior granularidade
- **Não garante que a aplicação está funcionando**
- Exemplo: testar uma função que soma dois números, testar uma função que valida um CPF

### Testes de integração

- Testa a integração entre duas ou mais unidades
- Testes de rotas e requisições
- Comunicação entre dois módulos
- **Não garante que a aplicação está funcionando**
- Exemplo: testar a integração entre uma função e um banco de dados, um fluxo de login

### Testes e2e

- Testa a aplicação como um todo
- Teste de ponta a ponta
- Testes longos e complexos
- Analisa todos os módulos da aplicação
- **Garante que a aplicação está funcionando**
- **Tempo de execução maior e de maior custo**
- Exemplo: testar a aplicação como um usuário, clicando em botões, preenchendo formulários, etc

## Cultura de testes

- **Testes são tão importantes quanto o código**

### Fatores fundamentais

- Qualidade
- Confiança
- Tempo

### Fases do teste

- **Análise de requisitos**
  Nessa fase é identificado o que será testado, quais são as funcionalidades que estarão presentes no projeto e quais testes e quais tipos de teste vamos implementar para poder atingir esses objetivos.

- **Plano de teste**
  Aqui geralmente é elaborado o plano de teste que irá conter as ferramentas que serão utilizadas para o teste. Divide as responsabilidades de quem vai criar os testes, estima o tempo, a complexidade e os gastos de recursos que terá no projeto.

- **Caso de teste**
  Nessa etapa são detalhados os testes em si: Condições, dados de entrada, comportamento esperado, resultado esperado, quantidades de teste, etc.

- **Ambiente de teste**
  Aqui escolhemos onde e como os testes serão executados. É criado o pipeline, o fluxo de como é produzido pela equipe de desenvolvimento e como aquilo vai sendo testado, ferramentas de versionamento e tudo que será utilizado, onde as alterações e implementações que são feitas pelo time de desenvolvimento vão sendo testadas e validadas para poder seguir no projeto.

- **Implementação**
  Aqui é feita a documentação daqueles resultados que foram obtidos com os testes, problemas que aconteceram dentro dos processos, estabelecendo como podem ter melhorias para os próximos ciclos e toda essa parte que vai lidar diretamente com a implementação, tanto do código em si do projeto quanto da implementação dos testes e tudo que aconteceu em torno disso.

### Testes estáticos

Depende da ferramenta/código utilizado, não é necessário executar o código para testar.

#### ESLint

- Ferramenta de análise de código estático para identificar padrões problemáticos encontrados no código JavaScript.

Instalação:

```bash
npm install eslint --save-dev
npx eslint --init
```

Extensões recomendadas:

- eslint-config-airbnb-base
- eslint-plugin-import
- eslint-plugin-jest

#### Prettier

- Ferramenta de formatação de código

Instalação:

```bash
npm install prettier --save-dev
npx prettier --write .
```

## Métodos do Jest

| Método | Funcionalidade |
| --- | --- |
| `describe` | Agrupa testes |
| `it` | Testa uma funcionalidade |
| `expect` | Verifica se o teste passou |
| `beforeEach` | Executa uma função antes de cada teste |
| `afterEach` | Executa uma função após cada teste |
| `beforeAll` | Executa uma função antes de todos os testes |
| `afterAll` | Executa uma função após todos os testes |

## Matchers

| Matcher | Funcionalidade |
| --- | --- |
| `toBe` | Verifica se o valor é igual |
| `toEqual` | Verifica se o valor é igual |
| `toBeNull` | Verifica se o valor é nulo |
| `toBeUndefined` | Verifica se o valor é indefinido |
| `toBeDefined` | Verifica se o valor é definido |
| `toBeTruthy` | Verifica se o valor é verdadeiro |
| `toBeFalsy` | Verifica se o valor é falso |
| `toBeGreaterThan` | Verifica se o valor é maior que |
| `toBeGreaterThanOrEqual` | Verifica se o valor é maior ou igual a |
| `toBeLessThan` | Verifica se o valor é menor que |
| `toBeLessThanOrEqual` | Verifica se o valor é menor ou igual a |
| `toBeCloseTo` | Verifica se o valor é próximo a |
| `toMatch` | Verifica se o valor corresponde a uma expressão regular |
| `toContain` | Verifica se o valor contém |
| `toHaveLength` | Verifica se o valor tem um tamanho específico |
| `toThrow` | Verifica se a função lança uma exceção |

## Diversos

| Método | Funcionalidade |
| --- | --- |
| `expect.extend` | Adiciona matchers personalizados |
| `expect.anything` | Corresponde a qualquer coisa menos null e undefined |
| `expect.any` | Testa qualquer coisa que é criada com um construtor |
| `expect.arrayContaining` | O array esperado é um subconjunto do array recebido |
| `expect.assertions` | Verifica que um certo número de verificações são chamadas durante um teste |
| `expect.closeTo` | É útil quando você compara números quebrados num array |
| `expect.hasAssertions` | Verifica que pelo menos uma verificação é chamada durante um teste |
| `expect.not.arrayContaining` | Quando o array esperado não é um subconjunto do array recebido |
| `expect.not.objectContaining` | Quando o objeto esperado não é um subconjunto do objeto recebido |
| `expect.not.stringContaining` | Quando o valor recebido não é uma String ou não corresponde ao valor esperado da String |
| `expect.not.stringMatching` | Quando o valor recebido não é String ou não corresponde a String esperada ou a expressão regular |
| `expect.objectContaining` | Corresponde a qualquer objeto recebido que recursivamente coincide com as propriedades esperadas |
| `expect.stringContaining` | Quando o valor recebido é uma String que contém a String esperada |
| `expect.stringMatching` | Quando o valor recebido é uma String que contém a String ou expressão regular esperada |
| `expect.addSnapshotSerializer` | Para adicionar um módulo que formata estruturas de dados específicas da aplicação |
| `.not` | Se você sabe como testar algo, .not permite que você teste seu oposto |
| `.resolves` | Decodifica o valor de uma promessa cumprida, para que qualquer outro matcher possa então ser encadeado |
| `.rejects` | Decodifica o motivo de uma promessa rejeitada, para que qualquer outro matcher possa ser encadeado |
