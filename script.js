function calcularJuros() {
    let capital = parseFloat(document.getElementById('capital').value);
    let taxa = parseFloat(document.getElementById('taxa').value) / 100;
    let tempo = parseInt(document.getElementById('tempo').value);
    
    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo) || capital <= 0 || taxa <= 0 || tempo <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
        return;
    }
    
    let montante = capital * Math.pow((1 + taxa), tempo);
    document.getElementById('resultado').innerText = `Montante Final: R$ ${montante.toFixed(2)}`;
}