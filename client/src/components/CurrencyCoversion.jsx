// CurrencyConverter.js

async function fetchCurrencyConversion(countryName, targetCurrency) {
    const apiKey = 'e5d564bd1f-c090ab0541-sf8wpd';
    const apiUrl = `https://v6.exchangeratesapi.io/latest?base=${encodeURIComponent(countryName)}&symbols=${encodeURIComponent(targetCurrency)}&access_key=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch currency conversion');
      }
      const data = await response.json();
      return data.rates[targetCurrency];
    } catch (error) {
      console.error('Error fetching currency conversion:', error);
      return null;
    }
  }
  
  export { fetchCurrencyConversion };
  