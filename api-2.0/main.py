from flask import Flask, request, jsonify
import re

app = Flask(__name__)

def parse_formula(formula):
    elements = re.findall(r'([A-Z][a-z]*)(\d*)', formula)
    return {element: int(count) if count else 1 for element, count in elements}

def balance_equation(equation):
    reactants, products = equation.split('->')
    reactants = [r.strip() for r in reactants.split('+')]
    products = [p.strip() for p in products.split('+')]

    reactant_elements = {}
    product_elements = {}

    for reactant in reactants:
        elements = parse_formula(reactant)
        for element, count in elements.items():
            reactant_elements[element] = reactant_elements.get(element, 0) + count

    for product in products:
        elements = parse_formula(product)
        for element, count in elements.items():
            product_elements[element] = product_elements.get(element, 0) + count

    elements = list(set(reactant_elements.keys()) | set(product_elements.keys()))

    coefficients = [0] * (len(reactants) + len(products))

    def dfs(idx):
        if idx == len(elements):
            return True

        element = elements[idx]

        for i, reactant in enumerate(reactants):
            reactant_count = reactant_elements.get(element, 0)
            if reactant_count > 0:
                coefficients[i] += 1
                reactant_elements[element] -= 1
                if dfs(idx + 1):
                    return True
                coefficients[i] -= 1
                reactant_elements[element] += 1

        for i, product in enumerate(products):
            product_count = product_elements.get(element, 0)
            if product_count > 0:
                coefficients[len(reactants) + i] += 1
                product_elements[element] -= 1
                if dfs(idx + 1):
                    return True
                coefficients[len(reactants) + i] -= 1
                product_elements[element] += 1

        return False

    dfs(0)

    balanced_equation = ''

    for i, coefficient in enumerate(coefficients[:len(reactants)]):
        if coefficient != 1:
            balanced_equation += str(coefficient)
        balanced_equation += reactants[i]
        if i != len(reactants) - 1:
            balanced_equation += ' + '

    balanced_equation += ' -> '

    for i, coefficient in enumerate(coefficients[len(reactants):]):
        if coefficient != 1:
            balanced_equation += str(coefficient)
        balanced_equation += products[i]
        if i != len(products) - 1:
            balanced_equation += ' + '

    return balanced_equation

@app.route('/balance', methods=['POST'])
def balance_endpoint():
    equation = request.json.get('equation')

    try:
        balanced_equation = balance_equation(equation)

        return jsonify({'balanced_equation': balanced_equation})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)