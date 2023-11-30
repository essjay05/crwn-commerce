import './categories.styles.scss'

const App = () => {

  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]

  const renderCategoryCards = (cats) => {
    return cats.map( ({ id, title, imageUrl }) => <div className="card-container" key={id}>
    <div className="card-bg-img" style={{
      backgroundImage: `url(${imageUrl})`
    }}></div>
    <div className="category-body-container">
      <h1>{title}</h1>
      <p>Shop Now!</p>
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
