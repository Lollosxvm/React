import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card';
import CardForm from './components/CardForm';
function App() {
  const [count, setCount] = useState(0);

  const addCity = (city) => {
    setCities([...cities, city]);
  };

  const [cities, setCities] = useState([
    {
      id: 0,
      name: 'Tokyo',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis mollitia minus amet voluptates aspernatur.',
      imgURL:
        'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG9raW98ZW58MHx8MHx8fDA%3D',
      isVisited: true,
    },
    {
      id: 1,
      name: 'New York',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis mollitia minus amet voluptates aspernatur.',
      imgURL:
        'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D',
      isVisited: false,
    },
    {
      id: 2,
      name: 'Paris',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis mollitia minus amet voluptates aspernatur.',
      imgURL:
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D',
      isVisited: true,
    },
    {
      id: 3,
      name: 'Sydney',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis mollitia minus amet voluptates aspernatur.',
      imgURL:
        'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lkbmV5fGVufDB8fDB8fHww',
      isVisited: false,
    },
    {
      id: 4,
      name: 'Rio de Janeiro',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis mollitia minus amet voluptates aspernatur.',
      imgURL:
        'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlvJTIwZGUlMjBqYW5lcmlvfGVufDB8fDB8fHww',
      isVisited: true,
    },
  ]);

  return (
    <>
      <CardForm addCity={addCity}></CardForm>
      <div className="grid grid-cols-4 gap-5">
        {cities
          .filter((city) => city.isVisited)
          .map((city) => (
            <Card
              key={city.id}
              title={city.name}
              isVisited={city.isVisited}
              imgURL={city.imgURL}
            >
              {city.description}
            </Card>
          ))}
      </div>

      <div className="flex items-center justify-between p-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
