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
  mutation addAppointment {
    addAppointment {
      _id
      name
      phoneNumber
      email
      startLocation
      endLocation
      date
      bedroomNumber
      appointmentAuthor
      createdAt
    }
  }
`;