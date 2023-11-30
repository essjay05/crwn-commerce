import CategoryItem from '../category-item/category-item.component'

import './directory.styles.scss'

const Directory = ({ categories }) => {
  
  return (
    <main className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
    </main>
    
  )
}

export default Directory