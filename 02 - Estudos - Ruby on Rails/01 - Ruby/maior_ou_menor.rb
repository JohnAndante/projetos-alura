# Trecho de boas vindas
def da_boas_vindas
  puts "Bem vindo ao jogo da adivinhação!!! \n"
  puts "Qual é o seu nome?"
  nome = gets
  puts "\nComeçaremos o nome para você, " + nome + "\n"
end

# Sorteia numero secreto
def sorteia_numero_secreto
  puts "Escolhendo um número secreto entre 0 e 200.."
  numero_secreto = 170
  puts "\nNúmero escolhido, que tal adivinhar nosso número secreto??"
  numero_secreto
end

#######################################################################

da_boas_vindas

numero_secreto = sorteia_numero_secreto

qtd_tentativas = 5

# Início do for de adivinhação
for tentativa in 1..qtd_tentativas
  puts "\n\n\n\n"
  puts "Tentativa " + tentativa.to_s + " de " + qtd_tentativas.to_s
  puts "Entre com o número"
  chute = gets
  puts "Você chutou " + chute.to_s

  acertou = numero_secreto == chute.to_i

  if acertou
    puts "Acertou!!!"
    break
  else
    maior = numero_secreto > chute.to_i
    if maior
      puts "O número secreto é maior!!!"
    else
      puts "O número secreto é menor!!"
    end
  end
end
