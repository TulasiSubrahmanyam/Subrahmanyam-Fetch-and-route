import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://marketplace-assets-production.s3-us-west-2.amazonaws.com/vault/items/preview-57bac524-6254-4fc8-a395-671c0a14153b-6MOww.jpg"
              alt="website logo"
            />
          </Link>
          <button type="button" className="nav-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
              onClick={onClickLogout}
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://marketplace-assets-production.s3-us-west-2.amazonaws.com/vault/items/preview-57bac524-6254-4fc8-a395-671c0a14153b-6MOww.jpg"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/Appointments" className="nav-link">
                Book Appointments
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/ContactUs" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                alt="nav home"
                className="nav-bar-img"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/Appointments" className="nav-link">
              <img
                src="https://icon-library.com/images/booking-icon/booking-icon-4.jpg"
                alt="Book Appointment"
                className="nav-bar-img"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/ContactUs" className="nav-link">
              <img
                src="https://www.freeiconspng.com/thumbs/contact-icon-png/contact-phone-icon-4.png"
                alt="Contactus"
                className="nav-bar-img"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
