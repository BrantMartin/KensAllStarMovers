import React from "react";
import { Link } from "react-router-dom";
// import { useMutation } from "@apollo/react-hooks";

// import { REMOVE_APPOINTMENT } from "../../utils/mutations";
// import { QUERY_APPOINTMENTS, QUERY_ME } from "../../utils/queries";

const AppointmentList = ({
  appointments,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  // const [removeAppointment, { error }] = useMutation(REMOVE_APPOINTMENT);
  if (!appointments.length) {
    return <h3>No Appointments Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {appointments &&
        appointments.map((appointment) => (
          <div key={appointment._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${appointment.appointmentAuthor}`}
                >
                  {appointment.appointmentAuthor} <br />
                  <span style={{ fontSize: "1rem" }}>
                    had this appointment on {appointment.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: "1rem" }}>
                    You had this appointment on {appointment.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{appointment.firstName}</p>
              <p>{appointment.lastName}</p>
              <p>{appointment.phoneNumber}</p>
              <p>{appointment.email}</p>
              <p>Start Location: {appointment.startLocation}</p>
              <p>End Location: {appointment.endLocation}</p>
              <p>Scheduled Date: {appointment.date}</p>
              <p>Bedrooms: {appointment.bedroomNumber}</p>
              <div class="inline-flex">
                <button
                  class="bg-green-400 hover:bg-green-500 text-black-400 font-bold py-2 px-4 rounded-l">
                  Update
                </button>
                <button class="bg-red-400 hover:bg-red-500 text-black-400 font-bold py-2 px-4 rounded-r"
                // onClick={() => {
                //     removeAppointment({ variables: { _id: appointment._id } });
                //     window.location.reload();
                //  }}
                >
                  Delete
                </button>
              </div>
            </div>

            {/* <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/appointments/${appointment._id}`}
            >
              Join the discussion on this appointment.
            </Link> */}
          </div>
        ))}
    </div>
  );
};

export default AppointmentList;
