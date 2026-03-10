import { useState } from 'react';
import './Counter.css'

function Counter() {

    const [cuenta, setCuenta] = useState(0);

    function incrementar() {
        setCuenta(cuenta + 1);
    }

    function decrementar() {
        setCuenta(cuenta - 1);
    }
    
    return (
        <div className='counterDiv'>
            <button onClick={decrementar}>-</button>
            <span>{cuenta}</span>
            <button onClick={incrementar}>+</button>
        </div>
    );
}

export default Counter;