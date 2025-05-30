import { useState } from 'react'
import './App.css'
import InputBox from './Components/InputField.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

function App() {
  
  let [from ,setFrom] = useState("usd");
  let [to,setTo] = useState("inr");
  let [amount,setAmount] = useState("");
  let [convertedAmount,setconvertedAmount] = useState(0);
  
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo||{});

  const swap = ()=>{
    setFrom(to);
    setTo(from);
    setconvertedAmount(amount);
    setAmount(convertedAmount);
  }
  const convert = ()=>{
     const numericAmount = parseFloat(amount);
  if (!isNaN(numericAmount)) {
    setconvertedAmount(numericAmount * currencyInfo[to]);
  } else {
    setconvertedAmount(0);
  }
  }

  return (
    <>
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount = {amount}
                                selectCurrency = {from}
                                onCurrencyChange= {(currency)=>{
                                  setFrom(currency)
                                }}
                                onAmountChange = {(amount)=>{
                                  setAmount(amount)
                                }}
                                currencyOptions = {options}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                            onClick={()=>swap()}
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                             >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount = {convertedAmount}
                                selectCurrency = {to}
                                onCurrencyChange= {(currency)=>{
                                  setTo(currency)
                                }}
                                currencyOptions = {options}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
