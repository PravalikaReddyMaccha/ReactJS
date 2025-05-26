import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  let [length, setLength] = useState(6);
  let [number, setNumber] = useState(false);
  let [character, setCharacter] = useState(false);
  let [password, setPassword] = useState("");
  const didMount = useRef(false);
  const passwordRef = useRef(null);
 
  const generatePassword = () => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      chars = chars + "0123456789";
    }
    if (character) {
      chars = chars + "!@#$%^&*()_+-={}[]:;\"'<>,.?/";
    }
    let generated = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generated += chars[randomIndex];
    }

    setPassword(generated);
  };
  
  const handleCopy=()=>{
    passwordRef.current?.select();
     passwordRef.current?.setSelectionRange(0, 20);
    navigator.clipboard.writeText(passwordRef.current.value)
    // .then(() => {
    //   alert("Password copied!");
    // })
    // .catch((err) => {
    //   console.error("Copy failed", err);
    // });
  }

  function handleLengthChange(event) {
    setLength(event.target.value);
    // generatePassword(event.target.value,number,character)
    //  generatePassword();
  }
  function handleNumbers(event) {
    setNumber(event.target.checked);
    
    // generatePassword(length,event.target.checked,character)
    //  generatePassword();
  }
  function handleCharacters(event) {
    setCharacter(event.target.checked);
    // generatePassword(length,number,event.target.checked)
  }
  useEffect(() => {
    if (didMount.current) {
      generatePassword();
    } else {
      didMount.current = true;
    }
  }, [length, number, character]);

  return (
    <>
      <div className="flex flex-col items-center bg-gray-500 p-4">
        <div className="flex">
          <input
            ref = {passwordRef}
            type="text"
            value={password}
            className="border border-gray-300  px-3 py-2 w-64"
            readOnly
            //  onChange={()=>setPassword()}
          />

          <button onClick={handleCopy} className="bg-blue-500 text-white px-4 py-2  hover:bg-blue-600">
            Copy
          </button>
        </div>

        <div className="flex mx-auto mt-5">
          <div className="w-150  flex gap-4">
            <label
              htmlFor="range"
              className=" flex gap:10px text-gray-700 font-semibold mb-1"
            >
              Length: <span>{length}</span>
            </label>
            <input
              id="range"
              type="range"
              min="6"
              max="20"
              value={length}
              onChange={handleLengthChange}
              className="w-300 accent-blue-500"
            />
          </div>

          <div className="flex items-center gap-4 ">
            <label
              htmlFor="check1"
              className=" ml-2 text-gray-700 font-semibold "
            >
              Numbers
            </label>

            <input
              type="checkbox"
              id="check1"
              checked={number}
              onChange={handleNumbers}
              className="w-4 h-4 accent-blue-600"
            />
          </div>

          <div className="flex items-center gap-4">
            <label
              htmlFor="check2"
              className=" flex ml-2 text-gray-700 font-semibold"
            >
              Characters
            </label>
            <input
              type="checkbox"
              id="check2"
              checked={character}
              onChange={handleCharacters}
              className="w-4 h-4 accent-blue-600"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
