function converterMoeda() {
    var valorEmDolar = parseFloat(document.getElementById('valor-dolar').value);
    var cotacaoDoDolar = 4.99;
    var valorEmReal = valorEmDolar * cotacaoDoDolar;
    valorEmReal = valorEmReal.toFixed(2);
    document.getElementById('resultado').innerText = "Valor em Reais: R$" + valorEmReal;
  }  