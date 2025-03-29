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






