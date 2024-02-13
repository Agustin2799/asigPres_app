// Importa React y el estilo CSS de Bootstrap
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa el proveedor de contexto AppProvider y los componentes relacionados
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

// Define el componente principal de la aplicación
const App = () => {
    return (
        // Envuelve la aplicación con el proveedor de contexto AppProvider
        <AppProvider>
            {/* Contenedor principal de la aplicación con clases de Bootstrap */}
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                {/* Sección para mostrar el presupuesto, presupuesto restante y gastos totales */}
                <div className='row mt-3'>
                    <div className='col-sm'>
                        {/* Componente para mostrar el presupuesto */}
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        {/* Componente para mostrar el presupuesto restante */}
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        {/* Componente para mostrar los gastos totales */}
                        <ExpenseTotal />
                    </div>
                </div>
                {/* Sección para mostrar la lista de asignaciones de presupuesto */}
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        {/* Componente para mostrar la lista de asignaciones */}
                        <ExpenseList />
                    </div>
                </div>
                {/* Sección para cambiar la asignación de presupuesto */}
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        {/* Componente para el formulario de cambio de asignación */}
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

// Exporta el componente principal de la aplicación
export default App;
