import { NavLink, Outlet } from 'react-router-dom'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
      <header className="header-nav-container">
        <NavLink className="logo-container" to="/">
          <h1 className="logo">CRWN</h1>
        </NavLink>
        <nav className="nav-links-container">
          <ul className="nav-links-list">
            <li className="nav-link-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-link-item"><NavLink className="nav-link" to="/shop">Shop</NavLink></li>
            {/* <li className="nav-link-item"><NavLink className="nav-link" to="/cart">Cart</NavLink></li> */}
          </ul>
        </nav>
      </header>
      <Outlet/>
    </>
  )
}

export default Navigation