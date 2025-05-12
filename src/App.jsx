import { useState, useReducer, useContext } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card';
import CardForm from './components/CardForm';
import Example from './components/Example';
import { ProvaContext } from './stores/ProvaContext';

function formReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return { name: '', email: '' };
    default:
      return state;
  }
}

function App() {
  const [count, setCount] = useState(0);
  // const [data, setData] = useState([]);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    name: '',
    email: '',
  });

  const handleFieldChange = (field, value) => {
    dispatchFormState({ type: 'CHANGE_FIELD', field, value });
  };

  const resetForm = (e) => {
    e.preventDefault();
    dispatchFormState({ type: 'RESET_FORM' });
  };

  const sendForm = (e) => {
    e.preventDefault();
    console.log(formState);
  };

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
  ]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       //console.log(data);
  //     });
  // }, [count]);

  return (
    <ProvaContext.Provider value={{ count, setCount }}>
      <Example></Example>
      <CardForm addCity={addCity}></CardForm>
      <div className="grid grid-cols-4 gap-5">
        {cities.map((city) => (
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
      {/* <div className="grid grid-cols-4 gap-5">
        {data.map((item) => (
          <div className="bg-slate-400 rounded-lg p-3" key={item.id}>
            <p className="text-red-500 mb-1">userid: {item.userId}</p>
            <h2 className="text-xl mb-3">title: {item.title}</h2>
            <p className="text-gray-800">body: {item.body}</p>
          </div>
        ))}
      </div> */}
      <form className="flex flex-col gap-3 w-80 mt-10 mb-10 bg-zinc-300 p-5 rounded-lg">
        <div className="flex flex-col">
          <label className="text-black" htmlFor="name">
            Nome:
          </label>
          <input
            className="form-input bg-zinc-800 text-white"
            autoComplete="off"
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={(e) => handleFieldChange('name', e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-black" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input bg-zinc-800 text-white"
            autoComplete="off"
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
          />
        </div>
        <button className="text-red-400" onClick={resetForm}>
          Resetta
        </button>
        <button className="text-green-400" onClick={sendForm}>
          Invia
        </button>
      </form>
    </ProvaContext.Provider>
  );
}

export default App;
