import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <h1>Employee List</h1>

      {employees.map(emp => (
        <div key={emp.id}>
          <h3>{emp.name}</h3>
          <p>{emp.role}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;