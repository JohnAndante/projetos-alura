# Trecho de boas vindas
def da_boas_vindas
  puts "Bem vindo ao jogo da adivinhação!!! \n"
  puts "Qual é o seu nome?"
  nome = gets.strip
  puts "\nComeçaremos o nome para você, #{nome} \n"
end

# Sorteia numero secreto
def sorteia_numero_secreto
  puts "Escolhendo um número secreto entre 0 e 200.."
  sorteado = 170
  puts "\nNúmero escolhido, que tal adivinhar nosso número secreto??"
  sorteado
end

# Pede um numero para o usuario
def pede_um_numero(tentativa, qtd_tentativas, chutes)
  puts "\n\n\n\n"
  puts "Tentativa #{tentativa} de #{qtd_tentativas}"
  if chutes.size > 0
    puts "Chutes até agora: "
    for chute in chutes
      puts "#{chute}"
    end
  end
  puts "Entre com o número"
  chute = gets.strip
  puts "Você chutou #{chute.to_s}"
  chute.to_i
end

def verifica_se_acertou(numero_secreto, chute)

  acertou = numero_secreto == chute

  if acertou
    puts "Acertou!!!"
    return true
  end


  maior = numero_secreto > chute
  if maior
    puts "O número secreto é maior!!!"
  else
    puts "O número secreto é menor!!"
  end
  false

end

#######################################################################

da_boas_vindas

numero_secreto = sorteia_numero_secreto

qtd_tentativas = 5
chutes = []


# Início do for de adivinhação
for tentativa in 1..qtd_tentativas
  chute = pede_um_numero tentativa, qtd_tentativas, chutes
  chutes << chute
  break if verifica_se_acertou numero_secreto, chute
end
