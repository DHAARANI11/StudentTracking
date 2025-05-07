import React, { useState } from 'react';
import "../../styles/admin.css";

function AddDeleteUsers() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    id: '',
    name: '',
    email: '',
    class:'',
    role: 'student',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.password) {
      setUsers([...users, { ...newUser, id: Date.now() }]);
      setNewUser({
        id: '',
        name: '',
        email: '',
        class:'',
        role: 'student',
        password: ''
      });
    }
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="manage-users">
      <h2>Manage Users</h2>
      
      <div className="add-user-form">
        <h3>Add New User</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        <select name="class" value={newUser.class} onChange={handleInputChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select name="role" value={newUser.role} onChange={handleInputChange}>
          <option value="student">Student</option>
          <option value="staff">Staff</option>
        </select>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={newUser.password}
          onChange={handleInputChange}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      <div className="users-list">
        <h3>Users List</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Class</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.class}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddDeleteUsers;