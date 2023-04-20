import { useState } from 'react';
import PropTypes from 'prop-types';


/**
 * Prueba que el contador comienza en el valor dado
 * counter_starts_at_given_value", () => {
        const wrapper = shallow(<CounterApp value={5} />);
        expect(wrapper.find('h2').text()).toBe('5');
 * @returns 
 */
export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value)

    /**
     * El contador se incrementa en 1 cuando se llama a handleAdd.
     */
    const handleAdd = () => {
        setCounter( counter + 1);
    }  
    /**
     *  El contador disminuye en 1 cuando se llama a resta
     */
    const resta = () => {
        setCounter( counter - 1);
    }   

    /**
     * El contador se restablece al valor dado cuando se llama a reset
     */
    const reset = () => {
        setCounter(value);
    }
  

    return(
        <>
            <h1>CounterApp desde 10</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ resta }>-1</button>
            <button onClick={ reset }>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}
