/* Este componente AllocationForm representa un formulario para agregar o reducir la asignación de presupuesto para un departamento. Utiliza el contexto AppContext para acceder a la función dispatch y al presupuesto restante. El formulario incluye selectores para elegir el departamento y la acción (agregar o reducir asignación), así como un campo de entrada para ingresar el costo de la asignación. Cuando se envía el formulario, se valida si el costo ingresado excede el presupuesto restante y se envía una acción al reducer para agregar o reducir la asignación según la acción seleccionada. */

// Importa las dependencias necesarias desde React y el contexto de la aplicación
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

// Define el componente AllocationForm
const AllocationForm = (props) => {
    // Utiliza el contexto AppContext para acceder a la función dispatch y al presupuesto restante
    const { dispatch, remaining } = useContext(AppContext);

    // Define el estado local para el nombre, el costo y la acción (agregar o reducir asignación)
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    // Maneja el evento de envío del formulario
    const submitEvent = () => {
        // Verifica si el costo ingresado excede el presupuesto restante
        if (cost > remaining) {
            alert("The value cannot exceed remaining funds £" + remaining);
            setCost(""); // Restablece el campo de costo
            return; // Sale de la función
        }

        // Crea un objeto con el nombre y el costo del departamento
        const expense = {
            name: name,
            cost: parseInt(cost), // Convierte el costo a un número entero
        };

        // Envía una acción al reducer dependiendo de si se está agregando o reduciendo la asignación
        if (action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    // Devuelve la estructura del componente
    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    {/* Selector para elegir el departamento */}
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                    </select>

                    {/* Selector para elegir la acción (agregar o reducir asignación) */}
                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>

                    {/* Campo de entrada para ingresar el costo de la asignación */}
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '2rem', size: 10 }}
                        onChange={(event) => setCost(event.target.value)}
                    />

                    {/* Botón para guardar la asignación */}
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

// Exporta el componente AllocationForm para que pueda ser utilizado en otros archivos
export default AllocationForm;

