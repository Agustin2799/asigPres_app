/* En el fragmento de código anterior, utilizamos el gancho useState para crear una variable de estado llamada newBudget e inicializarla con el valor actual de presupuesto. También estamos definiendo una función llamada handleBudgetChange que actualiza el valor de newBudget cuando el usuario cambia el valor del campo de entrada.

Luego configuramos el atributo de valor del campo de entrada en newBudget y agregamos un detector de eventos onChange que llama a handleBudgetChange cuando el usuario cambia el valor del campo de entrada.

Aquí, está utilizando las clases de Bootstrap Alert para brindar un bonito fondo gris agregando algo de texto y codificando un valor. */

// Importa las dependencias necesarias desde React
import React, { useContext, useState } from 'react';
// Importa el contexto de la aplicación desde AppContext
import { AppContext } from '../context/AppContext';

// Define el componente Budget
const Budget = () => {
    // Utiliza el contexto AppContext para acceder al estado global del presupuesto
    const { budget } = useContext(AppContext);

    // Define el estado local para el nuevo presupuesto y una función para actualizarlo
    const [newBudget, setNewBudget] = useState(budget);

    // Maneja los cambios en el valor del presupuesto
    const handleBudgetChange = (event) => {
        // Actualiza el estado local con el nuevo valor del presupuesto
        setNewBudget(event.target.value);
    }

    // Devuelve la estructura del componente
    return (
        <div className='alert alert-secondary'>
            {/* Muestra el presupuesto actual */}
            <span>Budget: £{budget}</span>

            {/* Proporciona un campo de entrada para que el usuario pueda cambiar el presupuesto */}
            <input
                type="number"
                step="10" // Incremento/decremento en múltiplos de 10
                value={newBudget} // Valor del presupuesto en el estado local
                onChange={handleBudgetChange} // Maneja los cambios en el valor del presupuesto
            />
        </div>
    );
};

// Exporta el componente Budget para que pueda ser utilizado en otros archivos
export default Budget;

