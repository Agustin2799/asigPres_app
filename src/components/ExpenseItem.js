/* Este componente ExpenseItem representa un elemento de gasto en la tabla de gastos. Utiliza el contexto AppContext para acceder a la función dispatch, que se utiliza para enviar acciones al reducer y actualizar el estado global.

Cuando se hace clic en el botón de aumento (+), se llama a la función increaseAllocation, que envía una acción de tipo ADD_EXPENSE con un nuevo objeto de gasto como payload.

Cuando se hace clic en el icono de eliminación (TiDelete), se llama a la función handleDeleteExpense, que envía una acción de tipo DELETE_EXPENSE con el ID del gasto a eliminar como payload. */

// Importa las dependencias necesarias desde React y React Icons
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
// Importa el contexto de la aplicación desde AppContext
import { AppContext } from '../context/AppContext';

// Define el componente ExpenseItem
const ExpenseItem = (props) => {
    // Utiliza el contexto AppContext para acceder a la función dispatch
    const { dispatch } = useContext(AppContext);

    // Maneja el evento de eliminar un gasto
    const handleDeleteExpense = () => {
        // Envía una acción de tipo 'DELETE_EXPENSE' con el id del gasto a eliminar como payload
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    // Incrementa la asignación del presupuesto para un departamento específico
    const increaseAllocation = (name) => {
        // Crea un objeto con el nombre del departamento y un costo de 10
        const expense = {
            name: name,
            cost: 10,
        };

        // Envía una acción de tipo 'ADD_EXPENSE' con el nuevo gasto como payload
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    // Devuelve la estructura del componente
    return (
        <tr>
            {/* Muestra el nombre del departamento */}
            <td>{props.name}</td>
            {/* Muestra el costo del departamento */}
            <td>£{props.cost}</td>
            {/* Botón para aumentar la asignación del presupuesto */}
            <td><button onClick={event => increaseAllocation(props.name)}>+</button></td>
            {/* Icono para eliminar el gasto */}
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

// Exporta el componente ExpenseItem para que pueda ser utilizado en otros archivos
export default ExpenseItem;
