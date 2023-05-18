class Livro
  attr_reader :titulo, :preco, :ano_lancamento, :possui_reimpressao

  def initialize(titulo, preco, ano_lancamento, possui_reimpressao)
    @titulo = titulo
    @preco = preco
    @ano_lancamento = ano_lancamento
    @possui_reimpressao = possui_reimpressao
  end

  def to_csv
    "#{@titulo},#{@ano_lancamento},#{@preco}"
  end

  def possui_reimpressao?
    @possui_reimpressao
  end

  private

  def calcula_preco(base)
    if @ano_lancamento < 2006
      if @possui_reimpressao
        base * 0.9
      else
        base * 0.05
      end
    elsif @ano_lancamento <= 2010
      base * 0.96
    else
      base
    end
  end
end

class Estoque
  def initialize
    @livros = []
  end

  def exporta_csv
    @livros.each do |livro|
      puts livro.to_csv
    end
  end

  def mais_baratos_que(valor)
    @livros.select do |livro|
      livro.preco <= valor
    end
  end

  def total
    @livros.size
  end

  def adiciona(livro)
    @livros << livro if livro
  end
end

livro_algoritmos = Livro.new("Algoritmos", 100, 1998, true)
livro_arquitetura = Livro.new("Introdução a Arquitetura e Design de Software", 70, 2011, true)

estoque = Estoque.new
estoque.adiciona livro_algoritmos
estoque.adiciona livro_arquitetura
estoque.adiciona Livro.new("The Pragmatic Programmer", 100, 1999, true)
estoque.adiciona Livro.new("Programmin Ruby", 100, 2004, true)
estoque.adiciona nil

puts "\n\n"

estoque.exporta_csv()

puts "\n\n"

baratos = estoque.mais_baratos_que(80)
baratos.each do |livro|
  puts livro.titulo
end

puts "\n\n"

