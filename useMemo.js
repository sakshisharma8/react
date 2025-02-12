import React, { useMemo, useState, memo } from 'react';

const ExpensiveFunction = () => {
    const sum = useMemo(() => {
        let total = 0;
        for (let i = 1; i <= 1000000; i++) {
            total += i;
        }
        return total;
    }, []); 

    console.log("ExpensiveFunction Rendered!"); 
    return <div>Sum: {sum}</div>;
};

function UseMemo() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <ExpensiveFunction />

            <button onClick={() => setCount(count + 1)}>Click me</button>
            <div>
                <p>Here it increases: {count}</p>
            </div>
        </div>
    );
}

export default UseMemo;
{/* Sakshi's code*/}
