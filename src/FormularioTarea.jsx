import { useRef } from "react";
import { Button } from "reactstrap";
import { useState } from "react";

function FormularioTarea({ tarea, onSubmit }) {

  let form = useRef(); // Crea una referencia al formulario
  const [completado, setCompletado] = useState(tarea ? tarea.completado : false);

  const _onSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado de recarga de página
    const formData = new FormData(form.current); // Obtiene los datos del formulario
    const values = {}; // Crea un objeto para almacenar los valores
    formData.forEach((value, key) => {
      
      if (key === 'completado') {
        values[key] = value === 'on'; // Convierte el valor a booleano
      } else {
        values[key] = value;
      }
    });
    values.completado = completado; // Asignar el valor del estado completado
    onSubmit(values); // Ejecuta la función onSubmit pasando los valores
    form.current.reset(); // Resetea el formulario
  };

  // imprimir en consola los valores del form



  return (
    <>
      <h3 className='mb-3'>{tarea ? 'Editar' : 'Nueva' } Tarea</h3>

      <form ref={form} onSubmit={_onSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input 
          type="text" 
          className="form-control mb-2" 
          id="nombre" 
          name="nombre"
          defaultValue={tarea ? tarea.nombre : ''}
          placeholder="Nombre de la tarea" />

        <input 
          type="checkbox" 
          name="completado" 
          id="completado" 
          checked={completado}
          onChange={(event) => {setCompletado(event.target.checked)}}
          />
          {' '}
        <label htmlFor="completado">Completado</label>

        <div className="text-end">
          <Button color="primary" type="submit">Guardar</Button>
        </div>
      </form>
    </>
  )
}

export default FormularioTarea;
