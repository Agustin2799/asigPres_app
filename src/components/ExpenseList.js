/* Este componente ExpenseList muestra una lista de gastos en forma de tabla. Utiliza el contexto AppContext para acceder al estado global de gastos. Luego, mapea cada gasto en la lista expenses y crea un componente ExpenseItem para cada uno. Cada ExpenseItem recibe las propiedades id, name y cost del gasto correspondiente. Finalmente, muestra la tabla completa en la interfaz de usuario. */

// Importa las dependencias necesarias desde React
import React, { useContext } from 'react';
// Importa el componente ExpenseItem
import ExpenseItem from './ExpenseItem';
// Importa el contexto de la aplicación desde AppContext
import { AppContext } from '../context/AppContext';

// Define el componente ExpenseList
const ExpenseList = () => {
    // Utiliza el contexto AppContext para acceder al estado global de gastos
    const { expenses } = useContext(AppContext);

    // Devuelve la estructura del componente
    return (
        <table className='table'>
            <thead className="thead-light">
                <tr>
                    {/* Cabeceras de la tabla */}
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {/* Mapea cada gasto y crea un componente ExpenseItem para cada uno */}
                {expenses.map((expense) => (
                    <ExpenseItem
                        id={expense.id}
                        key={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                    />
                ))}
            </tbody>
        </table>
    );
};

// Exporta el componente ExpenseList para que pueda ser utilizado en otros archivos
export default ExpenseList;

