# Aplicações Java executáveis com um método `main` #

Uma classe executável é uma classe que possui um método inicial para a execução do programa - o método `main`, que será chamado pelo Java quando o programa for executado. Classes sem o método `main`não serão classes executáveis e não podem ser usadas como ponto inicial da aplicação.

## Método `main` ##

O método `main`deve seguir algumas regras para ser executado pelo Java:

- Deve ser público (`public`);
- Deve ser estático (`static`);
- Não deve ter retorno (`void`);
- Deve ter o nome `main`;
- Deve receber como parâmetro um `array`ou `varargs`de Strings (`String[]`ou `String...`).

```java
// Parâmetro como array
public static void main (String[] args) {}

// Parâmetro como varargs
public static void main (String... args) {}

// A ordem dos modificadores não importa
static public void main (String[] args) {}

// O nome do parâmetro não importa
public static void main (String[] argumentos) {}

// Também é uma definição válida de array
public static void main (String args[]) {}

```

## Executando uma classe pela linha de comando ##

Para executarmos uma classe com `main` pela linha de comando, devemos compilar o arquivo com o comando `javac`e executar a classe com o comando `java`.

Usando de exemplo o arquivo `MinhaClasse.java`:

```java
public class MinhaClasse {
    public static void main (String[] args) {
        System.out.println("Olá, mundo!");
    }
}
```

Para compilar o arquivo, usamos o comando `javac`:

```bash
$ javac MinhaClasse.java
$
$ java MinhaClasse
"Olá, mundo!"
```

Ao compilar a classe, passamos como parametro o comando `javac` com o nome do arquivo, enquanto para executar usamos o nome da classe com o comando `java`.

## Passando parâmetros pela linha de comando ##

Podemos passar parâmetros para o método `main` ao executarmos uma classe pela linha de comando. Esses valores serão recebidos no array do método `main`. Por exemplo, ao executarmos a classe `MinhaClasse` com os argumentos `um`, `dois` e `três`:

```java
public class MinhaClasse {
    public static void main (String[] args) {
        for (String arg : args) {
            System.out.println(arg);
        }
    }
}
```

```bash
$ java MinhaClasse um dois três
"um"
"dois"
"três"

```

Para informar o valor do parâmetro, passamos os valores --APÓS-- o nome da classe a ser executada, separados por espaço.

```bash
$ java MinhaClasse um dois três
```

Ao passarmos mais de um parâmetro, eles serão armazenados na sequência informada dentro de um array de Strings.

## Compilação e execução ##

Para criarmos um programa Java, devemos escrever um código fonte, e então gerar o executável através de um compilador. O compilador do JDK (`Java Development Kit`) é o `javac`, que transforma o código fonte em bytecode, que é interpretado pela JVM (`Java Virtual Machine`).

O comando `java`invoca a máquina virtual para executar um programa java. Ao baixarmos o Java, podemos escolher baixar o JDK, que já vem com o JRE, ou somente o JRE (`Java Runtime Environment`), que inclui a `virtual machine`.

### Javac ###

Temos como exemplo abaixo o arquivo `Prova.java`:

```java
class Prova {
    double tempo;
}
```

```bash
$ javac Prova.java
```

O bytecode da classe `Prova` gerado na compilação é colocado no arquivo `Prova.class` dentro do nosso diretório de trabalho. Como exemplo, se estou na pasta "Projetos", o arquivo `Prova.class` será criado dentro dela.

```explorer
📂 Projetos
│  📄 Prova.java
```

Os projetos profissionais utilizam o recurso de pacotes para melhor organizar as fontes e os bytecodes.
Ao compilar uma classe que está em um pacote, o compilador cria uma estrutura de diretórios para armazenar o bytecode.

```java
package certificacao;
class Prova {
    double tempo;
}
```

```bash
$ javac certificacao/Prova.java

```

Neste exemplo, o compilador irá criar um diretório chamado `certificacao` e dentro dele o arquivo `Prova.class`.

```explorer
📂 Projetos
│  📂 certificacao
│  │ D 📄 Prova.class
```

### Escolhendo a versão do Java na hora de compilar ###

Na hora da compilação, podemos escolher a versão do Java em que queremos compilar. Fazemos isso com a opção `-source` do comando `javac` seguido da versão desejada.

```bash
$ javac Prova.java -source 1.3
```

### Java ###

Para executarmos o programa, usamos o comando `java`, seguido do nome da classe que contém o método `main`.

```java
package certificacao;
class Teste {
    public static void main(String[] args) {
        Prova p = new Prova();
        p.tempo = 210;
        System.out.println(p.tempo);
    }
}
```

```bash
$ javac certificacao/Teste.java
$ java certificacao.Teste
> 210.0
```
E após isso temos os arquivos:

```explorer
📂 Projetos
│  📂 certificacao
│  │  📄 Prova.class
│  │  📄 Prova.java
│  │  📄 Teste.class
│  │  📄 Teste.java
```

Somente o arquivo `Teste.java` foi passado para o compilador. Nesse arquivo, a classe `Teste` utiliza a classe `Prova`, que se encontra em outro arquivo, `Prova.java`. Dessa forma, o compilador vai compilar automaticamente o arquivo `Prova.java` se necessário.

Para executar, é preciso passar o nome completo da classe desejada para a máquina virtual. O sufixo `.class` não faz parte do nome da classe, então ele não aparece na invocação da máquina virtual pelo comando java.

### Propriedades na linha de comando ###

Podemos passar parâmetros ou propriedades para a JVM na linha de comando. Para isso, usamos a opção `-D` seguida do nome da propriedade e do valor. Este `-D` --NÃO-- faz parte da chave, do main ou do valor.

```bash
java -Dchave1=abc -Dchave2=def Foo xpto bar
```

`chave1=abc` e `chave2=def` são parâmetros/propriedades e `xptio` e `bar` são argumentos para o método `main`, que se encontram na classe `Foo`.

## Classpath ##

Para compilar ou executar, é necessário que o compilador `javac` e a JVM `java` consigam encontrar as classes referenciadas pela aplicação Java.

As classes feitas pelo programador são encontradas através do --classpath--.

O classpath é formado por --diretórios, arquivos JAR e arquivos ZIP-- que contenham as classes e os pacotes da nossa aplicação. Por padrão, o classpath está configurado para o diretório correnta da aplicação - identificado pelo `.`.

### Configurando o classPath ###

Podemos configurar o classpath de duas formas:

1. Através da variável de ambiente `CLASSPATH`:

Podemos seguir as opções do SO em questão para configurar a variável de ambiente. Essa práctica é desencorajada, pois pode causar conflitos com outras aplicações.

```bash
$ export CLASSPATH=/home/usuario/Projetos
```

2. Através da opção `-cp` ou `-classpath`:

É a forma mais usada e recomendada. Podemos passar o classpath na linha de comando, seguido da opção `-cp` ou `-classpath` e o caminho desejado.

```bash
$ java -cp /home/usuario/Projetos certificacao.Teste
```

Podemos também passar caminhos de outras pastas como de `JARs`ou `zips`. Para passar mais de um caminho, separamos os caminhos com `:` no Linux e `;` no Windows.

```bash
$ java -cp C:/codigos/java/certificacao.jar;/outrodir/ scjp/Prova.java
$ java -cp C:/codigos/java/certificacao.jar;/outrodir/ scjp/Prova
```

## Arquivos JAR ##

Podemos compactar arquivos de uma aplicação JAVA em um arquivo JAR (`Java ARchive`). O arquivo JAR é um arquivo ZIP que contém classes e recursos da aplicação.

Para criar um `jar`usamos o comando `jar`do JDK. O comando `jar` possui várias opções, mas as mais comuns são:

- `c` - cria um novo arquivo JAR;
- `f` - especifica o nome do arquivo JAR;
- `v` - exibe os detalhes do processo;
- `m` - inclui um arquivo de manifesto.

```bash
$ jar cfv certificacao.jar certificacao/*.class
```
E então podemos executar nossa classe usando essa `jar`:

```bash
$ java -cp certificacao.jar certificacao.Teste
```

## META-INF/Manifest.mf ##

Ao criarmos o jar com o comando `jar`, ele cria automaticamente a pasta `META-INF`, que é usada para configurações relativas ao josso jar. Dentro dela, é criado o arquivo `Manifest.mf`.

Esse arquivo pode ser usado para configurar a aplicação, como por exemplo, podemos apontar qual é a classe princilap (`Main-Class`) da aplicação, que deve ser executada ao rodar o jar.

Para isso, colocamos a seguinte instrução no arquivo `Manifest.mf`:

```java
Main-Class: certificacao.Teste
```

E depois geramos o jar com o comando `jar`:

```bash
$ jar cfm certificacao.jar META-INF/MANIFEST.MF certificacao/*.class
```

E então, ao rodar um jar com um `Main-Class` configurado, não precisamos passar o nome da classe na linha de comando:

```bash
$ java -jar certificacao.jar
```


