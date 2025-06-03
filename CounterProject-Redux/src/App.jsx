import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount,reset } from './features/counterslice.js';
import './App.css';
import './index.css';
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
  <div className="flex flex-col items-center justify-center bg-gray-400 p-10">
    <h1 className="flex flex-col items-center justify-center bg-black-400 mb-3 font-extrabold">Counter</h1>
    <h1 className="text-4xl font-bold mb-6 text-gray-800">{count}</h1>
    <div className="space-x-4">
      <button
        onClick={() => dispatch(increment())}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
      >
        +1
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
      >
        -1
      </button>
      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
      >
        +5
      </button>
    </div>
    <button
        onClick={() => dispatch(reset())}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-3 rounded transition"
      >
        Reset
      </button>
  </div>
);

}

export default App;
