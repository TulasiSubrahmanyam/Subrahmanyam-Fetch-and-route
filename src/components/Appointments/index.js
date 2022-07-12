import {Component} from 'react'
import {v4} from 'uuid'

import Header from '../Header'

import AppointmentItem from '../AppointmentItem'

import './index.css'

const catogeryList = [
  {
    id: 'ENT',
    DisplayText: 'ENT',
  },
  {
    id: 'Radiologist',
    DisplayText: 'Radiologist',
  },
  {
    id: 'Neurologist',
    DisplayText: 'Neurologist',
  },
  {
    id: 'cardiologist',
    DisplayText: 'cardiologist',
  },
  {
    id: 'Dentist',
    DisplayText: 'Dentist',
  },
]

const doctorsList = [
  {
    id: 'ABC',
    DisplayText: 'ABC',
  },
  {
    id: 'EFG',
    DisplayText: 'EFG',
  },
  {
    id: 'HIJ',
    DisplayText: 'HIJ',
  },
  {
    id: 'LMN',
    DisplayText: 'LMN',
  },
  {
    id: 'XYZ',
    DisplayText: 'XYZ',
  },
]
class Appointments extends Component {
  state = {
    appointmentsList: [],
    titleInput: '',
    dateInput: '',
    isFilterActive: false,
    activeCapitalId: catogeryList[0].id,
    activeDoctorId: doctorsList[0].id,
  }

  toggleIsStarred = id => {
    const {appointmentsList} = this.state
    const updatedTodosList = appointmentsList.filter(
      eachTodo => eachTodo.id !== id,
    )

    this.setState({
      appointmentsList: updatedTodosList,
    })
  }

  onFilter = () => {
    const {isFilterActive} = this.state

    this.setState({
      isFilterActive: !isFilterActive,
    })
  }

  onChangeDateInput = event => {
    this.setState({dateInput: event.target.value})
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput, activeCapitalId, activeDoctorId} = this.state

    const newAppointment = {
      id: v4(),
      title: titleInput,
      date: dateInput,
      Catogery: activeCapitalId,
      DoctorName: activeDoctorId,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      titleInput: '',
      dateInput: '',
      Catogery: '',
      activeDoctorId: '',
    }))
  }

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  onChangeDoctor = event => {
    this.setState({activeDoctorId: event.target.value})
  }

  getFilteredAppointmentsList = () => {
    const {appointmentsList, isFilterActive} = this.state

    if (isFilterActive) {
      return appointmentsList.filter(
        eachTransaction => eachTransaction.isStarred === true,
      )
    }
    return appointmentsList
  }

  render() {
    const {
      titleInput,
      dateInput,
      isFilterActive,
      activeCapitalId,
      activeDoctorId,
    } = this.state
    const filterClassName = isFilterActive ? 'filter-filled' : 'filter-empty'
    const filteredAppointmentsList = this.getFilteredAppointmentsList()

    return (
      <>
        <Header />
        <div className="app-container">
          <div className="responsive-container">
            <div className="appointments-container">
              <div className="add-appointment-container">
                <form className="form" onSubmit={this.onAddAppointment}>
                  <h1 className="add-appointment-heading">Book Appointment</h1>
                  <label htmlFor="title" className="label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={titleInput}
                    onChange={this.onChangeTitleInput}
                    className="input"
                    placeholder="Patientname"
                  />
                  <label htmlFor="section" className="label">
                    Category
                  </label>
                  <select
                    className="input"
                    onChange={this.onChangeCapital}
                    value={activeCapitalId}
                  >
                    {catogeryList.map(eachCapital => (
                      <option
                        key={eachCapital.id}
                        value={eachCapital.id}
                        className="option"
                      >
                        {eachCapital.DisplayText}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="section" className="label">
                    DoctorName
                  </label>
                  <select
                    className="input"
                    onChange={this.onChangeDoctor}
                    value={activeDoctorId}
                  >
                    {doctorsList.map(eachCapital => (
                      <option
                        key={eachCapital.id}
                        value={eachCapital.id}
                        className="option"
                      >
                        {eachCapital.DisplayText}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="date" className="label">
                    DATE
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={dateInput}
                    onChange={this.onChangeDateInput}
                    className="input"
                  />
                  <button type="submit" className="add-button">
                    Register
                  </button>
                </form>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                  alt="appointments"
                  className="appointments-img"
                />
              </div>
              <hr className="hr" />
              <div className="header-with-filter-container">
                <h1 className="appointments-heading">Appointments</h1>
                <button
                  type="button"
                  className={`filter-style ${filterClassName}`}
                  onClick={this.onFilter}
                >
                  Starred
                </button>
              </div>
              <ul className="appointments-list">
                {filteredAppointmentsList.map(eachAppointment => (
                  <AppointmentItem
                    key={eachAppointment.id}
                    appointmentDetails={eachAppointment}
                    toggleIsStarred={this.toggleIsStarred}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Appointments
