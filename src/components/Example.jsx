import { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)

  // Definizione dell'effetto
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        console.log(data)
      })
  }, [count])

  //   const handleClick = () => {
  //     setCount(count + 1);
  //     document.title = `Conteggio: ${count}`;
  //   };

  return (
    <div>
      <p>Conteggio: {count}</p>
      <p>{data}</p>
      <button onClick={() => setCount(count + 1)}>Incrementa</button>
    </div>
  )
}

export default Example
