import { useCallback, useState } from 'react';

export const useCounter = ({ 
    min = 0, 
    max = 5,
} = {}) => {
    const [value, setValue] = useState(min);

    const onIncrement = useCallback(
        () => setValue(c => Math.min(c + 1, max)), [max]);
    const onDecrement = useCallback(
        () => setValue(c => Math.max(c - 1, min)), [min]);

    return { value, onIncrement, onDecrement};
};