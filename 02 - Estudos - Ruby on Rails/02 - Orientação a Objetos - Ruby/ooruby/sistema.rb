require_relative "livro"
require_relative "revista"
require_relative "ebook"
require_relative "estoque"

def livro_para_newsletter(livro)
  if livro.ano_lancamento < 1999
    puts "Newsletter/Liquidação"
    puts "Titulo: #{livro.titulo} - #{livro.preco}"
  end
end

algoritmos = Livro.new("Algoritmos", 100, 1998, true, "editora", "livro")
arquitetura = Livro.new("Introdução À Arquitetura e Design de Software", 70, 2011, true, "editora", "livro")
programmer = Livro.new("The Pragmatic Programmer", 100, 1999, true, "editora", "livro")
ruby = Livro.new("Programming Ruby", 100, 2004, true, "editora", "livro")
revistona = Livro.new("Revista de Ruby", 10, 2012, true, "Revistas", "revista")
online_arquitetura = Livro.new("Introdução a Arquitetura e Design de Software", 50, 2012, true, "editora", "ebook")

estoque = Estoque.new
estoque << algoritmos << algoritmos << ruby << programmer << arquitetura << ruby << ruby << revistona << revistona << online_arquitetura
estoque.vende ruby
estoque.vende algoritmos
estoque.vende algoritmos
estoque.vende revistona
estoque.vende online_arquitetura

puts estoque.livro_que_mais_vendeu_por(&:titulo).titulo
puts estoque.revista_que_mais_vendeu_por(&:titulo).titulo
puts estoque.ebook_que_mais_vendeu_por(&:titulo).titulo

# ! Curso Concluído
