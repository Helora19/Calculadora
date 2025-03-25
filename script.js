function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculatePercentage() {
    try {
        let expression = document.getElementById('display').value;
        let lastNumberMatch = expression.match(/(\d+\.?\d*)$/);
        if (lastNumberMatch) {
            let lastNumber = parseFloat(lastNumberMatch[0]);
            let percentageValue = lastNumber / 100;
            document.getElementById('display').value = expression.replace(/(\d+\.?\d*)$/, percentageValue);
        }
    } catch (e) {
        alert('Erro ao calcular porcentagem!');
    }
}
function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        alert('Erro na expressão!');
    }
}
