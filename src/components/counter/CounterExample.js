import React, { useState } from "react";
import { Card } from 'primereact/card';

let CounterExample = () => {
    let [counter, setCounter] = useState(0);

    return(
        <React.Fragment>
            <div className="p-grid p-m-3">
                <div className="p-col">
                    <Card>
                        <h2>Counter: {counter}</h2>
                    </Card>
                    
                </div>
            </div>
        </React.Fragment>
    )
};
export default CounterExample;