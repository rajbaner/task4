// App.js
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.users);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <tbody>
        <tr>
          <th>SNo</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Maiden Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone</th>
          <th>UserName</th>
          <th>Password</th>
          <th>Birth Date </th>
          <th>Image</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.maidenName}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.username}</td>
             <td>{item.password}</td>
              <td>{item.birthDate}</td>
            <td>
              <img src={item.image} alt="" height={100} />
            </td>
            <td>{item.price}</td>
            <td>{item.rating}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default App;