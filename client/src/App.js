import './App.css';
import { useState, useEffect} from 'react';
import Axios from 'axios';

function App() {
  const [listOfEmployee, setListOfEmployee] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getEmployees").then((res) =>{
      setListOfEmployee(res.data)
    })
  }, [])

  return (
    <div className="App">
      <div className='employeesDisplay'>
        {listOfEmployee.map((employee) => {
          return (
            <div>
              <h1>Name: {employee.name}</h1>
              <h1>Lastname: {employee.lastname}</h1>
              <h1>Age: {employee.age}</h1>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
