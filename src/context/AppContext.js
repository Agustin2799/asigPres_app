import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
// Este es el reducer, que actualiza el estado basado en la acción recibida
export const AppReducer = (state, action) => {
    let budget = 0;
    switch (action.type) {
        // Maneja la acción de agregar un gasto
        case 'ADD_EXPENSE':
            // Calcula el total de los gastos actuales
            let total_budget = 0;
            total_budget = state.expenses.reduce(
                (previousExp, currentExp) => {
                    return previousExp + currentExp.cost
                }, 0
            );
            // Añade el costo del nuevo gasto
            total_budget = total_budget + action.payload.cost;
            action.type = "DONE";
            // Si el costo total de los gastos es menor o igual al presupuesto, actualiza el estado
            if (total_budget <= state.budget) {
                total_budget = 0;
                state.expenses.map((currentExp) => {
                    if (currentExp.name === action.payload.name) {
                        currentExp.cost = action.payload.cost + currentExp.cost;
                    }
                    return currentExp
                });
                return {
                    ...state,
                };
            } else {
                // Si excede el presupuesto, muestra una alerta y no actualiza el estado
                alert("Cannot increase the allocation! Out of funds");
                return {
                    ...state
                }
            }
        // Maneja la acción de reducir un gasto
        case 'RED_EXPENSE':
            // Reduce el costo del gasto y aumenta el presupuesto disponible
            const red_expenses = state.expenses.map((currentExp) => {
                if (currentExp.name === action.payload.name && currentExp.cost - action.payload.cost >= 0) {
                    currentExp.cost = currentExp.cost - action.payload.cost;
                    budget = state.budget + action.payload.cost
                }
                return currentExp
            })
            action.type = "DONE";
            return {
                ...state,
                expenses: [...red_expenses],
            };
        // Maneja la acción de eliminar un gasto
        case 'DELETE_EXPENSE':
            action.type = "DONE";
            state.expenses.map((currentExp) => {
                if (currentExp.name === action.payload) {
                    budget = state.budget + currentExp.cost
                    currentExp.cost = 0;
                }
                return currentExp
            })
            action.type = "DONE";
            return {
                ...state,
                budget
            };
        // Maneja la acción de establecer el presupuesto inicial
        case 'SET_BUDGET':
            action.type = "DONE";
            state.budget = action.payload;

            return {
                ...state,
            };
        // Maneja la acción de cambiar la moneda
        case 'CHG_CURRENCY':
            action.type = "DONE";
            state.currency = action.payload;
            return {
                ...state
            }

        default:
            // Si no hay ninguna acción reconocida, retorna el estado sin cambios
            return state;
    }
};

// 1. Sets the initial state when the app loads
// Establece el estado inicial cuando la aplicación se carga
const initialState = {
    budget: 2000,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
    ],
    currency: '£'
};

// 2. Creates the context this is the thing our components import and use to get the state
// Crea el contexto que nuestros componentes importan y utilizan para obtener el estado
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Componente Proveedor - envuelve los componentes a los que queremos dar acceso al estado
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    // Configura el estado de la aplicación. Toma un reducer y un estado inicial
    const [state, dispatch] = useReducer(AppReducer, initialState);
    let remaining = 0;

    // Calcula el presupuesto restante
    if (state.expenses) {
        const totalExpenses = state.expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        remaining = state.budget - totalExpenses;
    }

    // Proporciona el contexto con los valores del estado y la función dispatch
    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                budget: state.budget,
                remaining: remaining,
                dispatch,
                currency: state.currency
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
