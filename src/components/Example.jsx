import { useState, useEffect, useContext } from 'react';
import { ProvaContext } from '../stores/ProvaContext';

function Example() {
  const { count, setCount } = useContext(ProvaContext);

  // const { count, setCount } = useContext(ProvaContext);
  // const [count, setCount] = useState(0);
  // const [data, setData] = useState(null);

  // Definizione dell'effetto
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, [count]);

  //   const handleClick = () => {
  //     setCount(count + 1);
  //     document.title = `Conteggio: ${count}`;
  //   };

  return (
    <div>
      <p>Conteggio: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementa</button>
    </div>
  );
}

export default Example;
