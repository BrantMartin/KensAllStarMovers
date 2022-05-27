import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_APPOINTMENT = gql`
  mutation addAppointment($firstName: String!, $lastName: String!, $phoneNumber: String!, $email: String!, $startLocation: String!, $endLocation: String!, $date: String!, $bedroomNumber: Int! ) {
    addAppointment(firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, email: $email, startLocation: $startLocation, endLocation: $endLocation, date: $date, bedroomNumber: $bedroomNumber ) {
      _id
      firstName
      lastName
      phoneNumber
      email
      startLocation
      endLocation
      date
      bedroomNumber
      appointmentAuthor
    }
  }
`;

export const REMOVE_APPOINTMENT = gql`
mutation removeAppointment($appointmentId: ID!) {
  removeAppointment(appointmentId: $appointmentId) {
    _id
  }
}`

export const UPDATE_APPOINTMENT = gql `
mutation updateAppointment($appointmentId: ID!, $firstName: String!, $lastName: String!, $phoneNumber: String!, $email: String!, $startLocation: String!, $endLocation: String!, $date: String!, $bedroomNumber: Int! ) {
  updateAppointment(appointmentId: $appointmentId, firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, email: $email, startLocation: $startLocation, endLocation: $endLocation, date: $date, bedroomNumber: $bedroomNumber ) {
    _id
    firstName
    lastName
    phoneNumber
    email
    startLocation
    endLocation
    date
    bedroomNumber
  }
}`