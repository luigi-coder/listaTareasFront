import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Container, Row, Col } from 'reactstrap';
import ListaTareas from './ListaTareas';
import axios from 'axios';
import './App.css'
import FormularioTarea from './FormularioTarea';

function App() {
  
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState();

  const cargarTareas = () => {
    axios.get('http://localhost:8080/tareas')
    .then((response) => {
      setTareas(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(cargarTareas, []);

  const onSubmit = (values) => {

    if(tarea){
      axios.put(`http://localhost:8080/tareas/${tarea.id}`, values)
      .then((response) => {
        setTarea()
        cargarTareas()
      })
      .catch((error) => {
        console.log(error)
      })
    }else{
      axios.post('http://localhost:8080/tareas', values)
      .then((response) => {
        cargarTareas()
      })
      .catch((error) => {
        console.log(error)
      })
    }  
  }

  const eliminarTarea = (id) => {
    axios.delete(`http://localhost:8080/tareas/${id}`)
    .then((response) => {
      cargarTareas()
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <ListaTareas 
              tareas={tareas}
              onDelete={eliminarTarea}
              onEdit={(tarea) => setTarea(tarea)}/>
          </Col>
          <Col md={6}>
            <FormularioTarea 
              onSubmit={onSubmit}
              tarea={tarea}
              />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
