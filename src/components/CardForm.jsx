function CardForm({ addCity }) {
  const handleClick = () => {
    const city = {
      id: 99,
      name: 'London',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis mollitia minus amet voluptates aspernatur.',
      imgURL:
        'https://images.unsplash.com/photo-1706606992618-9108da774e75?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG98ZW58MHx8MHx8fDA%3D',
      isVisited: true,
    };
    addCity(city);
  };
  return (
    <div className="flex flex-col gap-3 w-80 mb-10">
      <input type="text"></input>
      <input type="text"></input>
      <input type="text"></input>
      <button onClick={handleClick}>Aggiungi Card</button>
    </div>
  );
}

export default CardForm;
