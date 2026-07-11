import { useCounter } from './useCounter.js';
import { CounterUI } from './CounterUI/CounterUI';

export const Counter = () => {
    const {value, onIncrement, onDecrement} = useCounter();

    return (
         <CounterUI
            value={value}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
        />
    );
};