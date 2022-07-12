// Write your JS code here
import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'
import Header from '../Header'

const Home = props => {
  const onClickBook = () => {
    const {history} = props

    Cookies.get('jwt_token')
    history.replace('/Appointments')
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Doctors Appointment</h1>
          <img
            src="https://www.nicepng.com/png/detail/34-342956_doctor-pictures-group-with-physician.png"
            alt="doctor-img"
            className="home-mobile-img"
          />
          <p className="home-description">
            Doctor appointment booking apps grant patients an option to ‘Book
            Anytime,Anywhere’ and also allows easy access to
            doctors.Furthermore, the appointment booking feature makes the lives
            of elderly patients, and those who are suffering from life-long
            ailments or are bed-ridden more comfortable.
          </p>
          <button
            type="button"
            className="shop-now-button"
            onClick={onClickBook}
          >
            Book Appointment
          </button>
        </div>
        <img
          src="https://www.kindpng.com/picc/m/138-1389541_doctors-png-image-doctor-nurse-transparent-png-download.png"
          alt="doctor-img"
          className="home-desktop-img"
        />
      </div>
    </>
  )
}

export default withRouter(Home)
