print("escolha qual exercicio voce gostaria de ver")
print("1 - exercicio 1")
print("2 - exercicio 2")
print("3 - exercicio 3")
print("4 - exercicio 4")
print("5 - exercicio 5")
print("sair - para sair do programa")
exercicio = input("digite o numero do exercicio: ")
if exercicio == "1":
   print ("digite uma palavra e veja se é um palindromo")
palavra = input("digite a palavra: ")
palavra_invertida = palavra [::-1]
if palavra == palavra_invertida:
    print("A palavra é um palindromo!")
else:
    print("A palavra não é um palindromo.")
    
if exercicio == "2":
  
    