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
    appointmentText: String
    appointmentAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
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
    addComment(appointmentId: ID!, commentText: String!): Appointment
    removeAppointment(appointmentId: ID!): Appointment
    removeComment(appointmentId: ID!, commentId: ID!): Appointment
  }
`;

module.exports = typeDefs;
