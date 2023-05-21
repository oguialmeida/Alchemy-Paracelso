from flask import Flask, request
from sympy import *
import pandas as pd
from sklearn.svm import LinearSVC

app = Flask(__name__)

class Data:
    def __init__(self):
        self.dados = pd.read_csv("data.csv")
    
    def get_data(self):
        return self.dados
    
    def add_data(self, tipo, elementos, formula):
        new_data = pd.DataFrame({'tipo': [tipo], 'elementos': [elementos], 'formula': [formula]})
        self.dados = pd.concat([self.dados, new_data], ignore_index=True)
    
    def update_data(self, index, tipo, elementos, formula):
        self.dados.loc[index] = [tipo, elementos, formula]
    
    def delete_data(self, index):
        self.dados.drop(index, inplace=True)


class Model:
    def __init__(self):
        self.model = LinearSVC()
    
    def train_model(self, x, y):
        self.model.fit(x, y)
    
    def predict(self, x):
        return self.model.predict(x)


data_obj = Data()
model_obj = Model()

@app.route('/data', methods=['GET'])
def get_data():
    data = data_obj.get_data()
    return data.to_json()

@app.route('/data', methods=['POST'])
def add_data():
    tipo = request.json['tipo']
    elementos = request.json['elementos']
    formula = request.json['formula']
    data_obj.add_data(tipo, elementos, formula)
    return {'message': 'Data added successfully'}

@app.route('/data/<int:index>', methods=['PUT'])
def update_data(index):
    tipo = request.json['tipo']
    elementos = request.json['elementos']
    formula = request.json['formula']
    data_obj.update_data(index, tipo, elementos, formula)
    return {'message': 'Data updated successfully'}

@app.route('/data/<int:index>', methods=['DELETE'])
def delete_data(index):
    data_obj.delete_data(index)
    return {'message': 'Data deleted successfully'}

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

@app.route('/classify', methods=['POST'])
def classify():
    # Obtenha os dados de entrada para classificação
    tipo = request.json['tipo']
    elementos = request.json['elementos']

    # Obtenha os dados existentes
    data = data_obj.get_data()

    # Separe as variáveis independentes (x) e a variável dependente (y)
    x = data[['tipo', 'elementos']]
    y = data
