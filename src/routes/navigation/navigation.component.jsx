import { NavLink, Outlet } from 'react-router-dom'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
      <header className="header-nav-container">
        <NavLink className="logo-container" to="/">
          <CrwnLogo className="logo" aria-label="CRWN Apparel logo"/>
        </NavLink>
        <nav className="nav-links-container">
          <ul className="nav-links-list">
            <li className="nav-link-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-link-item"><NavLink className="nav-link" to="/shop">Shop</NavLink></li>
            <li className="nav-link-item"><NavLink className="nav-link" to="/signin">Sign In</NavLink></li>
          </ul>
        </nav>
      </header>
      <Outlet/>
    </>
  )
}

export default Navigation