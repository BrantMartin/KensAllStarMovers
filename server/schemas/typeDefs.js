const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    appointments: [Appointment]!
  }

  type Appointment {
    _id: ID
    name: String
    phoneNumber: Int
    email: String
    startLocation: String
    endLocation: String
    date: String
    bedroomNumber: Int
    appointmentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    appointments(username: String): [Appointment]
    appointment(appointmentId: ID!): Appointment
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAppointment(appointmentText: String!): Appointment
    removeAppointment(appointmentId: ID!): Appointment
  }
`;

module.exports = typeDefs;
