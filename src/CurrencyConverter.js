import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('MXN');
  const [result, setResult] = useState('');
  const [conversionDirection, setConversionDirection] = useState('toMXN');

  const exchangeRates = {
    MXN: 1,        // Peso Mexicano (MXN)
    USD: 0.049,     // Dólar estadounidense (USD)
    EUR: 0.042,     // Euro (EUR)
    BTC: 0.000001,  // Bitcoin (BTC)
    ETH: 0.00006,   // Ethereum (ETH)
    DOGE: 0.1,      // Dogecoin (DOGE)
  };

  const handleConversion = () => {
    if (!amount || isNaN(amount)) {
      setResult('Por favor, ingresa una cantidad válida.');
    } else {
      const convertedAmount = conversionDirection === 'toMXN'
        ? (amount * exchangeRates[selectedCurrency]).toFixed(2)
        : (amount / exchangeRates[selectedCurrency]).toFixed(2);
      
      setResult(`${amount} ${selectedCurrency} es igual a ${convertedAmount} ${
        conversionDirection === 'toMXN' ? 'MXN' : selectedCurrency
      }`);
    }
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
      >
        <option value="MXN">MXN</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="DOGE">DOGE</option>
      </select>
      <button onClick={handleConversion}>Calcular</button>
      <p>{result}</p>
      <button onClick={() => setConversionDirection('toMXN')}>MXN a Otra Divisa</button>
      <button onClick={() => setConversionDirection('toCurrency')}>Otra Divisa a MXN</button>
    </div>
  );
}

export default CurrencyConverter;

