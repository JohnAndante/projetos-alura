def da_boas_vindas
  puts "Bem vindo ao Foge-foge"
  puts "Qual é o seu nome?"
  nome = gets.strip
  puts "\e[H\e[2J"
  puts "Começaremos jogo para você, #{nome}!"
  puts "\n\n"
  nome
end

def desenha mapa
  puts mapa
end

def pede_movimento
  puts "\n\n"
  puts "Para onde deseja ir?"
  movimento = gets.strip
end


