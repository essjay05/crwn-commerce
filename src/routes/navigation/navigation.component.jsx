import { Outlet } from 'react-router-dom'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
      <header className="header-nav-container">
        <h1 className="logo">
          <a className="logo-link" href="/">CRWN</a>
        </h1>
        <nav className="nav-links-container">
          <ul className="nav-links-list">
            <li className="nav-link-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-link-item"><a className="nav-link" href="/shop">Shop</a></li>
            {/* <li className="nav-link-item"><a className="nav-link" href="/cart">Cart</a></li> */}
          </ul>
        </nav>
      </header>
      <Outlet/>
    </>
  )
}

export default Navigation