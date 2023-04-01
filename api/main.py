from flask import Flask, request
from sympy import *

app = Flask(__name__)

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
        solucao_str += str(coeficiente) + ' ' + str(list(solucao.keys())[i]) + ' + '
    solucao_str = solucao_str[:-3] + ' -> ' + eq.split('->')[1]
    
    return {'solucao': solucao_str}

# EXEMPLO
# {
#     "equacao": "H2 + O2 -> H2O"
# }