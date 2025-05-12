import { useState } from 'react';

function CardForm({ addCity }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imgURL: '',
    isVisited: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type == 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
    console.log(e.target.name);
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const city = {
      id: Math.random(),
      name: formData.name,
      description: formData.description,
      imgURL: formData.imgURL,
      isVisited: formData.isVisited,
    };
    addCity(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-80 mb-10 bg-zinc-300 p-5 rounded-lg"
    >
      <div className="flex flex-col">
        <label className="text-black">Nome città</label>
        <input
          className="form-input bg-zinc-800 text-white"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="flex flex-col">
        <label className="text-black">Descrizione</label>
        <textarea
          className="form-input bg-zinc-800 text-white"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label className="text-black">Immagine</label>
        <input
          className="form-input bg-zinc-800 text-white"
          type="text"
          name="imgURL"
          value={formData.imgURL}
          onChange={handleInputChange}
        ></input>
      </div>

      <div className="flex flex-col">
        <label className="text-black">Visitata?</label>
        <input
          type="checkbox"
          name="isVisited"
          checked={formData.isVisited}
          onChange={handleInputChange}
        ></input>
      </div>

      <button className="bg-amber-300" type="submit">
        Aggiungi Card
      </button>
    </form>
  );
}

export default CardForm;
