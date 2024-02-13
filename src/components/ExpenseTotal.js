/* Este componente ExpenseTotal muestra el total de gastos hasta el momento. Utiliza el contexto AppContext para acceder al estado global de gastos. Luego, calcula el total de gastos sumando el costo de cada gasto en la lista de gastos. Finalmente, muestra el total de gastos en la interfaz de usuario.
Aquí, está utilizando la función de reducción para obtener un total de todos los costos, asignando esto a una variable y mostrando la variable en su JSX.
Ahora, cada vez que el usuario agrega un gasto, esto hace que el estado se actualice, lo que hará que todos los componentes conectados al contexto se vuelvan a representar y se actualicen con nuevos valores. */

// Importa la dependencia necesaria desde React
import React, { useContext } from 'react';
// Importa el contexto de la aplicación desde AppContext
import { AppContext } from '../context/AppContext';

// Define el componente ExpenseTotal
const ExpenseTotal = () => {
    // Utiliza el contexto AppContext para acceder al estado global de gastos
    const { expenses } = useContext(AppContext);

    // Calcula el total de gastos sumando el costo de cada gasto en la lista de gastos
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    // Devuelve la estructura del componente
    return (
        <div className='alert alert-primary'>
            {/* Muestra el total de gastos hasta el momento */}
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
};

// Exporta el componente ExpenseTotal para que pueda ser utilizado en otros archivos
export default ExpenseTotal;

