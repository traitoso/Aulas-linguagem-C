import pandas as pd

def criar_dataframe():
    dados = {
        'Nome': ['Ana', 'Bruno', 'Diego', 'Carla'],
        'Nota': [8.5, 7.0, 5.0, 9.2]
    }
    return pd.DataFrame(dados)


def exibir_dataframe(df):
    print("--- DataFrame Completo ---")
    print(df)
    print("\n")

def exibir_nomes(df):
    print("--- Lista de Alunos ---")
    print(df['Nome'])
    print("\n")


def calcular_media(df):
    media = df['Nota'].mean()
    print(f"--- Média da Turma ---")
    print(f"A média das notas é: {media:.2f}")
    print("\n")


def exibir_aprovados(df):
    print("--- Alunos Aprovados (Nota >= 7) ---")
    aprovados = df[df['Nota'] >= 7]
    print(aprovados)
    print("\n")


if __name__ == "__main__":
    df_alunos = criar_dataframe()
    
    exibir_dataframe(df_alunos)
    exibir_nomes(df_alunos)
    calcular_media(df_alunos)
    exibir_aprovados(df_alunos)