import React, {useState, useCallback} from 'react';
import Result from "./components/Result";
import Card from "./components/Card";

const cardsLength = 3;

/** родительский компонент */

function App() {
  // результат хранится здесь
  const [value, setValue] = useState(0);

  const calculateSum = useCallback((value, callback) => () => {
    setValue((prev) => prev + +value);
    callback();
  }, []);

  return (
    <div className="App">
      {new Array(cardsLength).fill(Card).map((item, index) => <Card key={index} calculateSum={calculateSum} />)}
      <br />
      <Result value={value} setValue={setValue} />
    </div>
  );
}

export default App;
