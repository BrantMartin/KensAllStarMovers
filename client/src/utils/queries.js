import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      appointments {
        _id
        name
        phoneNumber
        email
        startLocation
        endLocation
        date
        bedroomNumber
        appointmentAuthor
      }
    }
  }
`;

export const QUERY_APPOINTMENTS = gql`
  query getAppointments {
    appointments {
      _id
      name
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

export const QUERY_SINGLE_APPOINTMENT = gql`
  query getSingleAppointment($appointmentId: ID!) {
    appointment(appointmentId: $appointmentId) {
      _id
      name
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      appointments {
        _id
        name
        phoneNumber
        email
        startLocation
        endLocation
        date
        bedroomNumber
        appointmentAuthor
      }
    }
  }
`;
