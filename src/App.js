import { useState } from "react"
import "./App.css"

function App() {
  const [amount, setAmount] = useState(0);
  const [currencyValue, setCurrencyValue] = useState("USD");
  const [result, setResult] = useState(0);

  const usd = 87.01;
  const rub = 0.98;
  const rial = 23.20;
  const kz = 0.19;

  const handleCurrencyChange = (e) => {
    setCurrencyValue(e.target.value);
  }

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }

  const sumCurrent = () => {
    let rate = 0;
    switch (currencyValue) {
      case "USD":
        rate = usd;
        break;
      case "RUB":
        rate = rub;
        break;
      case "RIAL":
        rate = rial;
        break;
      case "KZ":
        rate = kz;
        break;
      default:
        rate = 1;
    }
    setResult(amount * rate);
  }

  return (
    <div className="container">
      <select id="currency" onChange={handleCurrencyChange}>
        <option value="USD">USD</option>
        <option value="RUB">RUB</option>
        <option value="RIAL">RIAL</option>
        <option value="KZ">KZ</option>
      </select>
      <form>
        <label>Акча алмаштыруу</label>
        <br />
        <input 
          type="number" 
          id="mount" 
          value={amount} 
          onChange={handleAmountChange} 
        />
      </form>
      <div>
        <button type="button" onClick={sumCurrent}>Алмаштыруу</button>
      </div>
      <h1 id="result">{result ? result : "Жыйынтык"}</h1>
    </div>
  );
}

export default App;
