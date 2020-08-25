import React from 'react';

export interface User {
  name: string;
  email: string;
  password: string;
}

interface Params {
  users: User[]
}

const List: React.FC<Params> = ({ users }) => {
  return (
    <>
      {users.map((user, index) => (
        <ul key={index}>
          <li><strong>Nome:</strong> {user.name}</li>
          <li><strong>Email:</strong> {user.email}</li>
          <li><strong>Senha:</strong> {user.password}</li>
        </ul>
      ))}
    </>
  )
}

export default List;