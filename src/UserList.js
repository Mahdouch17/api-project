import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setListOfUser(res.data);
    });
  }, []);

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <table>
        <thead>
          <tr>
            <th className="firstColumn">Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Company name</th>
            <th>Address</th>
            <th>Website</th>
            <th>Phone</th>
          </tr>
        </thead>
        {listOfUser.map((user) => (
          <tbody key={user.id}>
            <tr>
              <td className="firstColumn">{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
              <td>
                {user.address.city}-{user.address.street}
              </td>
              <td>{user.website}</td>
              <td>{user.phone}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default UserList;
