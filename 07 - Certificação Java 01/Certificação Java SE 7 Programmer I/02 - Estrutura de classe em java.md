# Estrutura de classe em java - Classes #

Classe é uma estrutura onde definimos atributos, métodos e comportamentos de um objeto. A sua declaração pode ser bem simples, apenas a palavra reservada `class` seguida do nome da classe e o corpo da classe entre chaves.

```java
class Pessoa {
    //...
}
```

Há outros modificadores que podem ser usados na definição de uma classe, como `public`, `abstract`, `final`, `strictfp`, `enum` e `interface`. A ordem dos modificadores não importa, mas a palavra `class` deve vir antes do nome da classe.

Dentro de uma classe podemos ter variáveis, métodos, construtores, e até outras classes internas. Essas estruturas são chamadas de --membros-- da classe.

```java
class Pessoa {

    // Atributos
    String nome;
    int idade;

    // Métodos
    void andar() {
        //...
    }

    public String getNomeEIdade() {
        return nome + " " + idade;
    }

    // Construtor
    Pessoa(String n, int i) {
        nome = n;
        idade = i;
    }

    // Classe interna
    class Endereco {
        //...
    }
}
```

## Nomes dos membros ##

### Variáveis ###

Variáveis são identificadas por um nome, que deve seguir algumas regras:
- Deve começar com uma letra, cifrão ($) ou sublinhado (_)
- Pode conter letras, números, cifrões e sublinhados
- Não pode conter espaços em branco
- Não pode ser uma palavra reservada

Usando como exemplo a classe `Pessoa`, as variáveis `nome` e `idade` são válidas, enquanto `1nome` e `nome completo` são inválidas.

Dizemos que estas são variáveis de instância, pois são atributos dos objetos. Elas são declaradas dentro da classe, fora de qualquer método ou construtor, e são acessadas por qualquer membro da classe.

Existem variáveis que não guardam valores ou referências para uma determinada instância, mas sim um valor compartilhado entre todas as instâncias da classe. Estas são chamadas de variáveis estáticas.

```java
class Pessoa {
    // Variável de instância
    String nome;
    int idade;

    // Variável estática
    static int id = 1;
}
```

### Métodos ###

Métodos são declarados de forma diferente. Primeiro espeficicamos o tipo do retorno, seguido do nome do método e então parênteses com os parâmetros, e cada parâmetro é uma declaração de variável diferente.
Essa linha onde está definido o retorno, o nome e os parâmetros é chamada de --assinatura de método--.

Assim como variáveis, métodos também têm regras para seus nomes:
- Deve começar com uma letra, cifrão ($) ou sublinhado (_)
- Pode conter letras, números, cifrões e sublinhados
- Não pode conter espaços em branco
- Não pode ser uma palavra reservada

Eles também podem ser estáticos, o que significa que podem ser acessados sem a necessidade de uma instância da classe.

```java
class Pessoa {
    // Método sem retorno
    void andar() {
        //...
    }

    // Método com retorno
    public String getNomeEIdade() {
        return nome + " " + idade;
    }

    // Método estático
    static void metodoEstatico() {
        //...
    }
}
```

### Construtores ###

Uma classe pode possuir um ou mais construtores. Nossa classe `Pessoa` possui um construtor que recebe dois parâmetros, `n` e `i`, e atribui esses valores aos atributos `nome` e `idade`.

A principal diferença entre um construtor e um método é que o construtor não possui um tipo de retorno, nem mesmo `void`.

```java
class Pessoa {
    // Construtor
    Pessoa(String n, int i) {
        nome = n;
        idade = i;
    }
}
```

#### Métodos com o mesmo nome da classe ####

Note que um construtor pode ter um `return` vazio:

```java
class X {
    int j = 10;

    X(int j) {
        if (j < 10) {
            return;
        }
        this.j = j;
    }
}
```

Caso o construtor tenha um `return` com um valor, o compilador irá emitir um erro.

```java
class X {
    int j = 10;
    X(int j) {
        if (j < 10) {
            return 10; // Erro
        }
        this.j = j;
    }
}
```

### Interfaces ###

Interfaces são semelhantes a classes, mas não possuem implementações. Elas são usadas para definir um contrato, ou seja, quais métodos uma classe que implementa a interface deve ter.

Para definir uma interface, usamos a palavra reservada `interface` seguida do nome da interface e seu corpo.

```java

interface Animal {
    void comer();
    void dormir();
}

class Cachorro implements Animal {
    public void comer() {
        //...
    }

    public void dormir() {
        //...
    }
}


```

#### Múltiplas estuturas em um arquivo ####

Em Java, temos algumas regras para a definição de classes e interfaces em um mesmo arquivo.

- Podem ser definidos em qualquer ordem;
- Se existir alguma classe ou interface pública, o nome do arquivo deve ser o mesmo que o nome da classe ou interface pública;
- Só pode existir uma classe ou interface pública por arquivo;
- Se não houver nenhuma classe ou interface pública, o nome do arquivo pode ser qualquer um.


Logo, são válidos os exemplos abaixo:

```java
// Arquivo: Animal.java
interface Animal {
    void comer();
    void dormir();
}

class Cachorro implements Animal {
    public void comer() {
        //...
    }

    public void dormir() {
        //...
    }
}
```

```java
// Foo.java
public class Foo {
    //...
}

interface Bar {
    //...
}
```

## Pacotes ##

Pacotes servem para organizar classes e interfaces em um diretório. Eles são usados para evitar conflitos de nomes e para organizar o código de forma mais clara.
Todas as classes pertencem a um pacote. Caso o pacote não seja declarado, a classe pertence ao que chamamos de pacote padrão, o `default package`.
Todas as classes do default package se enxergam e podem ser acessadas entre si. As classes no pacote default não podem ser importadas para uso em outros pacotes

```java
// Classe no pacote default
class Pessoa {
    //...
}

```

Para definirmos a qual pacote a classe pertence, usamos a palavra reservada `package` seguida do nome do pacote.
Só pode existir um único package por arquivo, e ele deve ser a primeira instrução do arquivo.
Depois da declaração do package, finalizamos a instrução com um ponto e vírgula. Podemos adicionar comentários antes do package.

```java
// Comentário
package com.empresa.projeto;

class Pessoa {
    //...
}

```
