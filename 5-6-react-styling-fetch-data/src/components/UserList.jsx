// TODO 1.4: Display User Cards in Grid
// File: src/components/UserList.jsx
// Use:
//     - Use <Alert variant="info"> when no users are found.
// - Make a return statement after the if condition.
//     - Make a <Row> tag inside the return statement.
//     - Add  user.map function inside the row tag
// {users.map(user => (
// ))}
// - Add Col tag inside the user.map function.
// - Add <UserCard user={user} onUserClick={onUserClick} /> inside the Col tag.
// - Add properties to Col tag: md={6} lg={4} mb-4

import React from 'react'
import { Row, Col, Alert } from 'react-bootstrap'
import UserCard from './UserCard'

function UserList({ users, onUserClick }) {
  if (users.length === 0) {
    return (
      <Alert variant="info">
        No users found matching your search criteria.
      </Alert>
    )
  }
  return (
      <Row>  {users.map(user => (
          <Col key={user.id} md={6} lg={4} className="mb-4">
              <UserCard user={user} onUserClick={onUserClick} />
          </Col>
      ))}
      </Row>
  )

}

export default UserList
