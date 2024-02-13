
// Importa la dependencia necesaria desde React
import React, { useContext } from 'react';
// Importa el contexto de la aplicación desde AppContext
import { AppContext } from '../context/AppContext';

// Define el componente Remaining
const Remaining = () => {
    // Utiliza el contexto AppContext para acceder al estado global de gastos y presupuesto
    const { expenses, budget } = useContext(AppContext);

    // Calcula el total de los gastos actuales sumando el costo de cada gasto en la lista de gastos
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    // Determina el tipo de alerta (color) basado en si el total de gastos es mayor que el presupuesto
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    // Devuelve la estructura del componente
    return (
        <div className={`alert ${alertType}`}>
            {/* Muestra el presupuesto restante */}
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};

/* Aquí, está utilizando la función de reducción para obtener un total de todos los costos, asignando esto a una variable y mostrando la variable en su JSX.
Ahora, cada vez que el usuario agrega un gasto, esto hace que el estado se actualice, lo que hará que todos los componentes conectados al contexto se vuelvan a representar y se actualicen con nuevos valores. */

// Exporta el componente Remaining para que pueda ser utilizado en otros archivos
export default Remaining;
