# Testes no Front-end

Temos 3 princiais tipos de testes:

- **Testes unitários**: Testam uma unidade específica do código, como uma função ou um componente isolado.
- **Testes de integração**: Testam a interação entre diferentes partes do sistema, como a comunicação entre componentes ou serviços.
- **Testes end-to-end (E2E)**: Testam o sistema como um todo, simulando o comportamento do usuário e verificando se todas as partes funcionam juntas corretamente.

Temos também testes como:

- os **testes de análise estática**, que são executados sem a necessidade de executar o código. Eles podem ser usados para verificar a qualidade do código, detectar erros e vulnerabilidades, e garantir que o código siga as melhores práticas.
- os **testes de acessibilidade**, que são usados para garantir que o código seja acessível a todos os usuários, incluindo aqueles com deficiências. Esses testes podem incluir verificações de contraste de cores, navegação por teclado e uso de leitores de tela.
- **testes de regressão visual**, que são usados para garantir que as alterações no código não afetem a aparência ou o comportamento do aplicativo. Esses testes podem incluir capturas de tela e comparações visuais para detectar diferenças entre versões do aplicativo.

## Testes unitários

Testes unitários são os mais granulares dos testes. Servem para testar partes isoladas do código, como funções ou métodos. Eles são rápidos de executar e ajudam a garantir que cada parte do código funcione corretamente.

### Testes unitários com Jest

Exemplo de teste unitário com Jest:

```javascript
import { soma } from './soma';
import { subtrai } from './subtrai';
import { multiplica } from './multiplica';
import { divide } from './divide';

describe('Testes de soma', () => {
  test('soma de 1 e 2 deve ser 3', () => {
    expect(soma(1, 2)).toBe(3);
  });

  test('soma de -1 e -2 deve ser -3', () => {
    expect(soma(-1, -2)).toBe(-3);
  });
});

describe('Testes de subtração', () => {
  test('subtrai 2 de 3 deve ser 1', () => {
    expect(subtrai(3, 2)).toBe(1);
  });

  test('subtrai -2 de -3 deve ser -1', () => {
    expect(subtrai(-3, -2)).toBe(-1);
  });
});

describe('Testes de multiplicação', () => {
  test('multiplica 2 por 3 deve ser 6', () => {
    expect(multiplica(2, 3)).toBe(6);
  });

  test('multiplica -2 por -3 deve ser 6', () => {
    expect(multiplica(-2, -3)).toBe(6);
  });
});

describe('Testes de divisão', () => {
  test('divide 6 por 3 deve ser 2', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('divide -6 por -3 deve ser 2', () => {
    expect(divide(-6, -3)).toBe(2);
  });

  test('divide 6 por 0 deve lançar erro', () => {
    expect(() => divide(6, 0)).toThrow('Divisão por zero');
  });
});
```

No exemplo acima, temos testes para as operações de soma, subtração, multiplicação e divisão. Cada operação tem seu próprio conjunto de testes, que verificam se os resultados estão corretos e se erros são lançados quando esperado.

### Testes unitários no React

Para o React, podemos usar o Jest em conjunto com o React Testing Library.
Com essa biblioteca, podemos testar componentes de React de forma simples e eficaz.

```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MyComponent } from './MyComponent';
import { soma } from './soma';
import { subtrai } from './subtrai';
import { multiplica } from './multiplica';
import { divide } from './divide';

describe('MyComponent', () => {
  test('deve renderizar o componente corretamente', () => {
    render(<MyComponent />);
    const heading = screen.getByRole('heading', { name: /meu componente/i });
    expect(heading).toBeInTheDocument();
  });

  test('deve chamar a função soma quando o botão for clicado', () => {
    const somaMock = jest.spyOn({ soma }, 'soma');
    render(<MyComponent />);
    const button = screen.getByRole('button', { name: /somar/i });
    userEvent.click(button);
    expect(somaMock).toHaveBeenCalled();
  });
});
```

No exemplo acima, temos um teste que verifica se o componente `MyComponent` é renderizado corretamente e outro teste que verifica se a função `soma` é chamada quando o botão "somar" é clicado. O Jest fornece funções como `jest.spyOn` para criar espiões (spies) e verificar se uma função foi chamada.

## Testes de integração

Testes de integração verificam se diferentes partes do sistema funcionam juntas corretamente. Eles podem envolver a interação entre componentes, serviços ou APIs.

### Testes de integração com Jest e React Testing Library

```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MyComponent } from './MyComponent';
import { soma } from './soma';
import { subtrai } from './subtrai';
import { multiplica } from './multiplica';
import { divide } from './divide';
import { MyService } from './MyService';

describe('MyComponent', () => {
  test('deve renderizar o componente corretamente', () => {
    render(<MyComponent />);
    const heading = screen.getByRole('heading', { name: /meu componente/i });
    expect(heading).toBeInTheDocument();
  });

  test('deve chamar a função soma quando o botão for clicado', () => {
    const somaMock = jest.spyOn({ soma }, 'soma');
    render(<MyComponent />);
    const button = screen.getByRole('button', { name: /somar/i });
    userEvent.click(button);
    expect(somaMock).toHaveBeenCalled();
  });

  test('deve chamar o serviço MyService quando o botão for clicado', () => {
    const myServiceMock = jest.spyOn(MyService, 'getData');
    render(<MyComponent />);
    const button = screen.getByRole('button', { name: /obter dados/i });
    userEvent.click(button);
    expect(myServiceMock).toHaveBeenCalled();
  });
});
```

No exemplo acima, temos um teste que verifica se o serviço `MyService` é chamado quando o botão "obter dados" é clicado. Isso garante que a interação entre o componente e o serviço funcione corretamente.

## Testes end-to-end (E2E)

Testes end-to-end (E2E) verificam o sistema como um todo, simulando o comportamento do usuário e verificando se todas as partes funcionam juntas corretamente. Eles são mais lentos de executar, mas garantem que o sistema funcione como esperado.

### Testes E2E com Cypress

```javascript

describe('Testes E2E com Cypress', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // URL do seu aplicativo
  });

  it('deve renderizar o componente corretamente', () => {
    cy.get('h1').contains('Meu Componente');
  });

  it('deve chamar a função soma quando o botão for clicado', () => {
    cy.intercept('POST', '/api/soma').as('soma');
    cy.get('button').contains('Somar').click();
    cy.wait('@soma').its('response.statusCode').should('eq', 200);
  });

  it('deve chamar o serviço MyService quando o botão for clicado', () => {
    cy.intercept('GET', '/api/dados').as('getDados');
    cy.get('button').contains('Obter Dados').click();
    cy.wait('@getDados').its('response.statusCode').should('eq', 200);
  });
});
```

No exemplo acima, temos testes E2E que verificam se o componente é renderizado corretamente e se as funções `soma` e `MyService` são chamadas quando os botões correspondentes são clicados. O Cypress fornece uma maneira fácil de interceptar requisições e verificar se elas foram feitas corretamente.


## Prettier

O prettier é uma extensão/pacote/biblioteca que ajuda a reforçar um padrão de código dentro de um projeto, corrigindo e formatando o código conforme o desenvolvimento.

Para instalar deve ser feito o seguinte comando:

```bash
npm install --save-dev prettier
```

E então criar um arquivo `.prettierrc` na raiz do projeto com as configurações desejadas. Um exemplo de configuração é:

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "printWidth": 80
}
```

## Eslint

O eslint é uma ferramenta para "lintar" (analisar e corrigir) o código, ajudando a encontrar e corrigir erros de sintaxe, estilo e boas práticas.

Tem a versão antiga, que aceita o .eslintrc, e a nova, que aceita o .eslintrc.json.

Nesse curso foi instalado o antigo, com esse passo a passo:

1. Instalar o eslint:

```bash
npm install --save-dev eslint
```

2. Instalar a extensão do prettier no eslint

```bash
npm install --save-dev eslint-config-prettier
```

3. Criar o arquivo de configuração do eslint, o `.eslintrc`:

```json
{
  "extends": [
    "eslint:recommended",
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  }
}
```

4. Depois foram instalados mais extensões para o eslint

```bash
npm i -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

5. E então foram adicionadas as extensões no arquivo de configuração do eslint:

```json
{
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "import/no-unresolved": "error",
        "react/self-closing-comp": "warn",
        "no-unused-vars": [
            "warn",
            {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_"
            }
        ]
    },
    "plugins": [
        "react",
        "import",
        "jsx-a11y"
    ],
    "env": {
        "es6": true,
        "browser": true,
        "jest": true,
        "node": true
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}

```

Essa configuração não funciona para o arquivo `.eslintrc`, então criei o `.eslint.config.js` com o seguinte conteúdo:

```javascript
import eslint from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

export default [
  eslint.configs.recommended,
  {
    plugins: {
      react: reactPlugin,
      'jsx-a11y': jsxA11yPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/no-unresolved': 'error',
      'react/self-closing-comp': 'warn',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  prettier,
];
```

## Escrevendo testes

Podemos escrever testes de várias formas, a abordada no curso foi utilizando o **Jest** e o **React Testing Library**.

Criamos um arquivo na pasta do componente com o middle-text de testes, por exemplo `MyComponent.test.js`, e escrevemos os testes dentro desse arquivo.

Dentro desse arquivo podemos realizar diversos testes diferentes envolvendo o componente e sua lógica, como por exemplo:

- Verificar se o componente renderiza corretamente
- Verificar se o componente renderiza corretamente com props
- Verificar se o componente valida as props, quando necessário
- Verificar se o componente renderiza corretamente com estados

### Sintaxe de testes

A sintaxe de testes é bem simples, e podemos utilizar os métodos `describe`, `test` e `it` para criar os testes.

Esses métodos são do `@jest/globals`, que é o Jest, e podemos utilizá-los para criar os testes de forma simples e rápida.

```javascript
import { describe, test, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  test('deve renderizar o componente corretamente', () => {
    render(<MyComponent />);
    const heading = screen.getByRole('heading', { name: /meu componente/i });
    expect(heading).toBeInTheDocument();
  });

  test('deve chamar a função soma quando o botão for clicado', () => {
    const somaMock = jest.spyOn({ soma }, 'soma');
    render(<MyComponent />);
    const button = screen.getByRole('button', { name: /somar/i });
    userEvent.click(button);
    expect(somaMock).toHaveBeenCalled();
  });
});
```

No exemplo acima, temos um teste que verifica se o componente `MyComponent` é renderizado corretamente e outro teste que verifica se a função `soma` é chamada quando o botão "somar" é clicado. O Jest fornece funções como `jest.spyOn` para criar espiões (spies) e verificar se uma função foi chamada.

### Anotações diversas

#### Rerender

Podemos atualizar um componente guardando o render dele em uma variável e chamando o método `rerender` do `render` do `@testing-library/react`, passando o novo componente como parâmetro.

```javascript
  const { rerender } = render(<MyComponent prop1="valor antigo"/>);
  expect(screen.getByText('valor antigo')).toBeInTheDocument();

  rerender(<MyComponent prop1="novo valor" />);
  expect(screen.getByText('novo valor')).toBeInTheDocument();
```

#### Instalando o React Testing Library

Por padrão ele tem que vir instalado, mas se não vier, podemos instalar com o seguinte comando:

```bash
npm install --save-dev @testing-library/user-event @testing-library/dom @testing-library/react
```

#### userEvent (@testing-library/user-event)

O userEvent faz parte do testing-library e é uma biblioteca que simula eventos de usuário.

- `userEvent.click(element)`: Simula um clique em um elemento.
- `userEvent.type(element, text)`: Simula a digitação de texto em um elemento.
- `userEvent.selectOptions(element, value)`: Simula a seleção de uma opção em um elemento `<select>`.
- `userEvent.hover(element)`: Simula o movimento do mouse sobre um elemento.
- `userEvent.dblClick(element)`: Simula um duplo clique em um elemento.
- `userEvent.tab()`: Simula a tecla Tab, movendo o foco para o próximo elemento interativo.
- `userEvent.keyboard(text)`: Simula a digitação de texto, incluindo teclas especiais como Shift, Ctrl, etc.
- `userEvent.paste(text)`: Simula a colagem de texto em um elemento.
- `userEvent.clear(element)`: Simula a limpeza do conteúdo de um elemento, como um campo de entrada.

Ele possui vários comandos, mas os mais utilizados são os de clique, digitação e seleção de opções.
Para mais informações, consulte a [documentação oficial](https://testing-library.com/docs/user-event/intro/).

#### Linhas de comando do react-scripts test

Podemos definir algumas linhas especiais de comando ao executar os testes, como por exemplo:

- `npm test -- --watch`: Executa os testes em modo de observação, ou seja, ele fica escutando as alterações no código e executa os testes novamente quando há alguma alteração.
- `npm test -- --watchAll`: Executa todos os testes, mesmo aqueles que não foram alterados.
- `npm test -- --coverage`: Executa os testes e gera um relatório de cobertura de código, mostrando quais partes do código foram testadas e quais não foram.
- `npm test -- --updateSnapshot`: Atualiza os snapshots dos testes, caso eles tenham mudado.
- `npm test -- --ci`: Executa os testes em modo CI, ou seja, ele não fica escutando as alterações no código e executa os testes apenas uma vez.
- `npm test -- --findRelatedTests`: Executa os testes relacionados a um arquivo específico, ou seja, ele executa apenas os testes que estão relacionados ao arquivo que foi alterado.

Boa parte dos comandos também está disponível ao executar o comando normalmente e apertando `p` para ver as opções disponíveis.

>[!NOTE]
> **Sugestão**: Bom criar um script desse jeitin aqui:
> ```json
> "scripts": {
>   "test": "react-scripts test --watch",
>   "test:all": "react-scripts test --watchAll",
>   "test:coverage": "react-scripts test --coverage",
> }
> ```
> Assim podemos executar os testes de forma mais simples, sem precisar digitar o `--watch` toda vez.
>

#### testId

Podemos definir um id para o elemento que queremos testar, e então utilizar o `getByTestId` para pegar o elemento.

```javascript
// Componente
const MyComponent = () => {
  return (
    <div>
      <h1 data-testid="heading">Meu Componente</h1>
      <button data-testid="button">Clique aqui</button>
    </div>
  );
};

// Teste
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  test('deve renderizar o componente corretamente', () => {
    render(<MyComponent />);
    const heading = screen.getByTestId('heading');
    expect(heading).toBeInTheDocument();
  });

  test('deve chamar a função soma quando o botão for clicado', () => {
    const somaMock = jest.spyOn({ soma }, 'soma');
    render(<MyComponent />);
    const button = screen.getByTestId('button');
    userEvent.click(button);
    expect(somaMock).toHaveBeenCalled();
  });
});
```

Primeiro definimos lá no componente o `data-testid`, e depois utilizamos o `getByTestId` para pegar o elemento e realizar os testes.

#### Test driven development (TDD)

É uma abordagem de desenvolvimento onde primeiro escrevemos o teste, depois o código. Serve tanto para o front-end quanto para o back-end.
A ideia é que primeiro escrevemos o teste, depois escrevemos o código para passar no teste e por último refatoramos o código.

#### Testes em pull requests

É uma ótima prática aplicar os testes em pull requests, para garantir que o código esteja funcionando corretamente antes de ser enviado para produção.

Isso pode ser feito criando uma pasta `.github` na raiz do projeto e dentro dela criar uma pasta `workflows`, e dentro dessa pasta criar um arquivo `test.yml` com o seguinte conteúdo:

```yaml
name: Testes
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Configurar Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Instalar dependências
        run: npm install
      - name: Executar testes
        run: npm test -- --watchAll=false --ci
```

Nesse exemplo, estamos configurando o GitHub Actions para executar os testes sempre que houver um push ou pull request na branch `main`. O workflow irá instalar as dependências e executar os testes.
Os testes ali no caso estão rodando em modo CI, ou seja, ele não fica escutando as alterações no código e executa os testes apenas uma vez.

#### Garantindo o funcionamento em produção

Caso a plataforma de produção permita alterar o script inicial do projeto (geralmente permite) é uma boa prática aplicar o teste justo nesse script, para garantir que os testes sejam executados antes de subir o projeto para produção.

```
react-scripts test && react-scripts build && react-scripts start
```

Esse comando executa os testes, e caso eles passem, ele executa o build e sobe o projeto. Caso os testes falhem, o build não é executado e o projeto não sobe.

#### Boas práticas

- **Escrever testes pequenos e focados em uma única funcionalidade.**
  Não é bom escrever vários testes e verificações em um único testes, é bom dividir os testes em partes menores e mais específicas.
- **Nomear os testes de forma clara e descritiva.**
  Seja claro e descritivo ao nomear os testes, para que fique fácil entender o que está sendo testado.
- **Utilizar mocks e spies para isolar o código.**
  Utilize mocks e spies para isolar o código e evitar dependências externas, como APIs ou serviços. Isso ajuda a garantir que os testes sejam rápidos e confiáveis.
- **Utilizar snapshots para verificar a renderização de componentes.**
  Utilize snapshots para verificar a renderização de componentes e garantir que eles não mudem inesperadamente. Isso ajuda a detectar alterações indesejadas na renderização do componente.
- **Garantir o funcionamento dos testes em 100% dos casos.**
  Verificar se os casos são suficientes e se todos os casos estão sendo testados. Isso ajuda a garantir que o código esteja funcionando corretamente e que não haja erros ocultos, surpresas ou bugs.

