class Livro
  attr_reader :titulo, :preco, :ano_lancamento

  def initialize(titulo, preco, ano_lancamento)
    @titulo = titulo
    @preco = preco
    @ano_lancamento = ano_lancamento
  end

  private
  def calcula_preco(base)
    if @ano_lancamento < 2000
      base * 0.7
    else
      base
    end
  end
end

livro_rails = Livro.new("Agile Web Development with Rails", 70, 2011)
livro_ruby = Livro.new("Programming Ruby 1.9", 60, 2010)
livro_algoritmos = Livro.new("Algoritmos", 100, 1998)

def imprime_nota_fiscal(livros)
  livros.each do |livro|
    puts "Titulo: #{livro.titulo} - #{livro.preco}"
  end
end

def livro_para_newsletter(livro)
  if livro.ano_lancamento < 1999
    puts "Newsletter/Liquidação"
    puts "Titulo: #{livro.titulo} - #{livro.preco}"
  end
end

puts "\n\n"

livros = [livro_rails,livro_ruby]
imprime_nota_fiscal livros

puts "\n\n"

livro_para_newsletter(livro_algoritmos)

puts "\n\n"

