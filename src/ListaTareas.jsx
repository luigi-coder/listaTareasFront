import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function ListaTareas({ tareas, onDelete, onEdit }) {
  return (
    <>
      <h3 className='mb-3 mt-4'>Lista de Tareas</h3>

      {
        tareas.map((tarea) => (
          <div className='mb-3 border rounded p-3' key={tarea.id}>
            <div className='d-flex justify-content-between mb-1'>
              <div className="fw-bold">{tarea.nombre}</div>
              <div className='text-muted small'>
                <FontAwesomeIcon 
                  icon={faEdit} 
                  className='cursor-pointer'
                  onClick={()=>onEdit(tarea)}/>
                <FontAwesomeIcon 
                  icon={faTrash} 
                  className='cursor-pointer ms-2' 
                  onClick={()=>onDelete(tarea.id)}/>
              </div>
            </div>
            <div>
              {
                tarea.completado ?
                <div className='text-success small'>
                  <FontAwesomeIcon icon={faCheckCircle} className='me-2'/>{' '}
                  Completada
                </div>
                :
                <div className='text-danger small'>
                  <FontAwesomeIcon icon={faCheckCircle} className='me-2'/>{' '}
                  Pendiente
                </div>
              }
            </div>
          </div>
        ))
      }


    </>
  )
}

export default ListaTareas

