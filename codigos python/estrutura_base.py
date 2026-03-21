# função para manter o programa rodando
def continuar_prog():
    continuar = input("Deseja ir para outro exercício? (sim/nao): ")
    return continuar == "sim"


# Função do exercício 1
def e_palindromo():
    print("Digite uma palavra e veja se é um palíndromo")

    palavra = input("Digite a palavra: ")
    palavra_invertida = palavra[::-1]

    if palavra == palavra_invertida:
        print("A palavra é um palíndromo!")
    else:
        print("A palavra não é um palíndromo.")


# função exercicio 2
def categoria_idade():
    idade = int(input("Digite a idade da pessoa: "))

    if idade <= 12:
        print("Categoria: Criança")

    elif idade <= 17:
        print("Categoria: Adolescente")

    elif idade <= 59:
        print("Categoria: Adulto")

    else:
        print("Categoria: Idoso")

#função exercicio 3
def valor_credito():
    
    try:
        valor = float(input("Digite um valor: "))
        print("Valor interpretado:", valor)
        print("Tipo:", type(valor))

    except ValueError:
        print("Entrada inválida! Digite apenas números.")
        
#função exercicio 4        
def reprovou():

    nota = float(input("Insira a nota do aluno: "))

    if nota >= 7:
        print("Aprovado")

    elif nota >= 5:
        print("De recuperação")

    else:
        print("Reprovado")
        
#função exercicio 5
def classificar_valor():

    valor = input("Digite qualquer coisa5: ")

    if valor == "":
        print("Tipo: None (valor vazio)")

    elif valor.lower() == "true" or valor.lower() == "false":
        print("Tipo: Booleano")

    else:
        try:
            int(valor)
            print("Tipo: Inteiro (int)")
        except ValueError:

            try:
                float(valor)
                print("Tipo: Float (float)")
            except ValueError:
                print("Tipo: Texto (str)")
    
    
    
    
# Função principal (menu)
def main():

    continuar = True

    while continuar:

        exercicio = input("Digite o número do exercício: (1,2,3,4,5 ou sair) ")

        if exercicio == "1":
            e_palindromo()
            continuar = continuar_prog()

        elif exercicio == "2":
            categoria_idade()
            continuar = continuar_prog()

        elif exercicio == "3":
            valor_credito()
            print("try/except impede que o programa quebre se o usuário digitar texto.")
            continuar = continuar_prog()

        elif exercicio == "4":
            reprovou()
            continuar = continuar_prog()

        elif exercicio == "5":
            classificar_valor()
            continuar = continuar_prog()

        elif exercicio == "sair":
            print("Saindo do programa...")
            break

        else:
            print("Opção inválida")
            continuar = continuar_prog()


# Executa o programa
main()