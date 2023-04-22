puts "Bem vindo ao jogo da adivinhação!!! \n"
puts "Qual é o seu nome?"

nome = gets
puts "\nComeçaremos o nome para você, " + nome + "\n"

puts "Escolhendo um número secreto entre 0 e 200.."
numero_secreto = 170
puts "\nNúmero escolhido, que tal adivinhar nosso número secreto??"

numero = gets
puts "\nSua tentativa é " + numero
puts "\nSerá que está correto?"

if numero_secreto == numero.to_i
  puts "Acertou!!"
else
  puts "Errou!!"
end

