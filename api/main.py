from flask import Flask, request
from sympy import *
import pandas as pd

app = Flask(__name__)


def training():
    # importando os dados de um arquivo externo
    dados = pd.read_csv("data.csv")
    dados.head()
    
    x = dados[["tipo", "elementos"]]
    x.head()

    y = dados[["formula"]]
    y.head()

    # Estanciando o modelo
    model = LinearSVC()

    # Treinando o modelo
    modelo.fit(x,y)
    previsoes = modelo.predict(x)
    print("A acurácia do dataset é de: {}%".format(round(accuracy_score(y, previsoes) * 100, 2)))


@app.route('/balanceamento', methods=['POST'])
def balanceamento():
    pass


@app.route('/balanceamento', methods=['POST'])
def balanceamento():

    # Obtenha a equação química enviada pelo cliente
    eq = request.json['equacao']

    # Transforme a equação em uma expressão simbólica do SymPy
    reacoes = Eq(parse_expr(eq.split('->')[0]), parse_expr(eq.split('->')[1]))

    # Resolva a equação
    solucao = solve(reacoes)

    # Converta a solução em uma string
    solucao_str = ''
    for i, coeficiente in enumerate(solucao.values()):
        solucao_str += str(coeficiente) + ' ' + \
            str(list(solucao.keys())[i]) + ' + '
    solucao_str = solucao_str[:-3] + ' -> ' + eq.split('->')[1]

    return {'solucao': solucao_str}

# EXEMPLO
# {
#     "equacao": "H2 + O2 -> H2O"
# }
