import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_APPOINTMENT } from "../../utils/mutations";
import { QUERY_APPOINTMENTS, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [date, setDate] = useState("");
  const [bedroomNumber, setBedroomNumber] = useState("");

  const [addAppointment, { error }] = useMutation(ADD_APPOINTMENT, {
    update(cache, { data: { addAppointment } }) {
      try {
        const { appointments } = cache.readQuery({ query: QUERY_APPOINTMENTS });

        cache.writeQuery({
          query: QUERY_APPOINTMENTS,
          data: { appointments: [addAppointment, ...appointments] },
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: {
          me: { ...me, appointments: [...me.appointments, addAppointment] },
        },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addAppointment({
        variables: {
          firstName,
          lastName,
          phoneNumber,
          email,
          startLocation,
          endLocation,
          date,
          bedroomNumber,
          appointmentAuthor: Auth.getProfile().data.username,
        },
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setStartLocation("");
      setEndLocation("");
      setDate("");
      setBedroomNumber("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "firstName") {
      setFirstName(value);
    }
    else if (name === "lastName") {
      setLastName(value);
    }
    else if (name === "email") {
      setEmail(value);
    }
    else if (name === "phoneNumber") {
      setPhoneNumber(value);
    }
    else if (name === "startLocation") {
      setStartLocation(value);
    }
    else if (name === "endLocation") {
      setEndLocation(value);
    }
    else if (name === "date") {
      setDate(value);
    }
    else if (name === "bedroomNumber") {
      setBedroomNumber(value);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <form onSubmit={handleFormSubmit}>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="firstName"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                value={firstName}
                onChange={handleChange}
              ></input>
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="lastName"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                value={lastName}
                onChange={handleChange}
              ></input>
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              value={email}
                onChange={handleChange}
            ></input>
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="phoneNumber"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              value={phoneNumber}
                onChange={handleChange}
            ></input>
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (123-456-7890)
            </label>
          </div>

          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="startLocation"
                id="floating_where_from"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                value={startLocation}
                onChange={handleChange}
              ></input>
              <label
                htmlFor="floating_where_from"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Where from?
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="endLocation"
                id="floating_where_to"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                value={endLocation}
                onChange={handleChange}
              ></input>
              <label
                htmlFor="floating_where_to"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Where to?
              </label>
            </div>
          </div>

          <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="date"
                name="date"
                id="floating_date"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                value={date}
                onChange={handleChange}
              ></input>
              <label
                htmlFor="floating_date"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                What day?
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="bedroomNumber"
                id="floating_bedrooms"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                value={bedroomNumber}
                onChange={handleChange}
              ></input>
              <label
                htmlFor="floating_bedrooms"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Number of bedrooms
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      ) : (
        <div>
          <h4>Welcome to Ken's All Star Movers!</h4>
          <p>Ken's All Star Movers was founded in 2019 and is proud to serve the Phoenix area with exceptional moving services. Your move isn't just about your new home, it's about you and your family having a stress free moving experience! Rest assured that your treasured items will be well cared htmlFor during the entire moving process!</p>
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;
