import './index.css'

const AppointmentIem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, Catogery, DoctorName} = appointmentDetails

  const onClickCancel = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          type="button"
          testid="star"
          className="cancel-button"
          onClick={onClickCancel}
        >
          Cancel
        </button>
      </div>

      <p className="data">{Catogery}</p>
      <p className="data">{DoctorName}</p>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentIem
