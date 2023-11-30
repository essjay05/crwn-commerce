const categories = [
  {
    id: 1,
    title: "Hats",
    description: "Shop now!"
  },
  {
    id: 2,
    title: "Sweaters",
    description: "Sweater weather's here!"
  },
  {
    id: 3,
    title: "Jackets",
    description: "Keep warm with our outerwear!"
  },
  {
    id: 4,
    title: "Shirts",
    description: "Layer up with our shirts!"
  },
  {
    id: 5,
    title: "Pants",
    description: "Keep your bottoms warm!"
  },
]

const App = () => {

  const renderCategoryCards = (cats) => {
    return cats.map( cat => <div className="card-container" key={cat.id}>
    <h1>{cat.title}</h1>
    <p>{cat.description}</p>
  </div>)
  }

  return (
    <section className="categories-container">
      {renderCategoryCards(categories)}
    </section>
  );
}

export default App;
