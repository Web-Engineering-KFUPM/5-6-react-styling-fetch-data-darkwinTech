// TODO 1.3: Add bootstrap in Search Bar Component
// File: src/components/SearchBar.jsx
//
// - Add Bootstrap classes:
//     In div tag add properties: mb-4


import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-4">
      <InputGroup>
        <InputGroup.Text></InputGroup.Text>
        <Form.Control
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </InputGroup>
    </div>
  )
}

export default SearchBar
