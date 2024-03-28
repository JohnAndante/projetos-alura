# Escopo de Variáveis #

## Variáveis locais ##

Variáveis declaradas dentro de métodos ou construtores.
O ciclo de vida de uma variável local vai do ponto onde ela foi declarada até o fim do bloco onde ela foi declarada.

```java
public void m1() {
    int x = 10;     // Variável local
    System.out.println(x)
}
```

## Variáveis de instância ##

Também chamadas de variáveis de objeto, são atributos dos objetos. Declaradas dentro da classe, fora de qualquer método ou construtor. São acessadas por qualquer membro da classe e existem enquanto o objeto existir

```java
class Pessoa {
    String nome;    // Variável de instância/objeto

    public void setNome(string n) {
        this.nome = n;
    }
}
```

## Variáveis estáticas ##

São variáveis compartilhadas por todas as instâncias da classe, é declarada com a palavra "static". estão no escopo da classe, e permanecem lá enquanto a classe estiver carregada na memória

```java
class Pessoa {
    static int id = 1; // Variável estática
}

class Teste {
    public static void main(String[] args) {
        Pessoa p = new Pessoa();
        System.out.println(p.id); // Acessando pelo objeto
        System.out.println(Pessoa.id); // Acessando pela classe
    }
}
```

Para esta variável não precisamos ter uma referência de objeto para acessá-la, podemos acessá-la diretamente pela classe, uma vez que a variável permita acesso público.


## Variáveis com o mesmo nome ##

Não podemos declarar duas variáveis no mesmo escopo e com o mesmo nome.

```java
public void m1() {
    int x = 10;
    int x = 20; // Erro
}
```

Mas podemos ter variáveis em escopos diferentes com o mesmo nome. Caso haja ambiguidade o compilador irá emitir um erro.

```java
class m1 {
    static int x = 20;
    int x = 10; // Erro
}

System.out.println(New m1().x); // Estamos acessando qual variável?
```

Também não podemos declarar variáveis locais com o mesmo nome de parâmetros.

```java
public void m1(int x) {
    int x = 10; // Erro
}
```

Podemos porém declarar variáveis locais com o mesmo nome de variáveis de instância. Esta técnica é chamada de shadowing.
Conseguimos resolver o problema de ambiguidade referenciando a variável de instância com a palavra reservada "this".

```java
class Pessoa {

    static string nome = "João";
    int idade = 20;

    public static void setNome(string nome) {
        Pessoa.nome = nome; // Usando a referência da classe
    }

    public void setIdade(int idade) {
        this.idade = idade; // Usando o this
    }
}
```

Quando não usamos o "this" o compilador entende que estamos referenciando a variável local, a de menor escopo.

```java
class X {
    
    int a = 10;

    public void metodo() {
        int a = 20; // shadowing
        System.out.println(a); // imprime 20
    }
}
```
