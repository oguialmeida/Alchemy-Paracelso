from flask import Blueprint, request, jsonify
from sympy import Eq, parse_expr, solve
from models import Data, Model

data_routes = Blueprint('data_routes', __name__)
balanceamento_routes = Blueprint('balanceamento_routes', __name__)
classify_routes = Blueprint('classify_routes', __name__)

data_obj = Data()
model_obj = Model()

@data_routes.route('/data', methods=['GET'])
def get_data():
    data = data_obj.get_data()
    return jsonify(data)

@data_routes.route('/data', methods=['POST'])
def add_data():
    tipo = request.json['tipo']
    elementos = request.json['elementos']
    formula = request.json['formula']
    data_obj.add_data(tipo, elementos, formula)
    return {'message': 'Data added successfully'}

@data_routes.route('/data/<int:index>', methods=['PUT'])
def update_data(index):
    tipo = request.json['tipo']
    elementos = request.json['elementos']
    formula = request.json['formula']
    data_obj.update_data(index, tipo, elementos, formula)
    return {'message': 'Data updated successfully'}

@data_routes.route('/data/<int:index>', methods=['DELETE'])
def delete_data(index):
    data_obj.delete_data(index)
    return {'message': 'Data deleted successfully'}

@balanceamento_routes.route('/balanceamento', methods=['POST'])
def balanceamento():
    eq = request.json['equacao']
    reacoes = Eq(parse_expr(eq.split('->')[0]), parse_expr(eq.split('->')[1]))
    solucao = solve(reacoes)
    solucao_str = ''
    for i, coeficiente in enumerate(solucao.values()):
        solucao_str += str(coeficiente) + ' ' + str(list(solucao.keys())[i]) + ' + '
    solucao_str = solucao_str[:-3] + ' -> ' + eq.split('->')[1]
    return {'solucao': solucao_str}

@classify_routes.route('/classify', methods=['POST'])
def classify():
    tipo = request.json['tipo']
    elementos = request.json['elementos']
    data = data_obj.get_data()
    x = data[['tipo', 'elementos']]
    y = data
    return {'message': 'Classification done'}
