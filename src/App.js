import './categories.styles.scss'

const categories = [
  {
    id: 1,
    title: "Hats",
    subtitle: "Shop now!"
  },
  {
    id: 2,
    title: "Sweaters",
    subtitle: "Sweater weather's here!"
  },
  {
    id: 3,
    title: "Jackets",
    subtitle: "Keep warm with our outerwear!"
  },
  {
    id: 4,
    title: "Shirts",
    subtitle: "Layer up with our shirts!"
  },
  {
    id: 5,
    title: "Pants",
    subtitle: "Keep your bottoms warm!"
  },
]

const App = () => {

  const renderCategoryCards = (cats) => {
    return cats.map( ({id, title, subtitle}) => <div className="card-container" key={id}>
    <div className="category-bg-img"></div>
    <div className="category-body-container">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </div>)
  }

  return (
    <section className="categories-container">
      {renderCategoryCards(categories)}
    </section>
  );
}

export default App;
