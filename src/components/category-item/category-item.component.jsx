import './category-item.styles.scss'

const CategoryItem = ({ category }) => {

  const { imageUrl, title } = category

  return <div className="category-container">
    <div className="category-bg-img" style={{
      backgroundImage: `url(${imageUrl})`
    }}></div>
    <div className="category-body-container">
      <h1>{title}</h1>
      <p>Shop Now!</p>
    </div>
  </div>
}

export default CategoryItem