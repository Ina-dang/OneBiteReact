import React, { useEffect, useState } from "react";

const CounterA = React.memo(({ count }) => {
    useEffect(() => {
        console.log(`Counter A update - count : ${count}`);
    })
    return <div>{count}</div>
})


const CounterB = React.memo(({ obj }) => {
    useEffect(() => {
        console.log(`Counter B update - objCount : ${obj.count}`);
    })
    return <div>{obj.count}</div>
})

const areEqual = (prevProps, nextProps) => {
    // if (prevProps.obj.count === nextProps.obj.count) {
    //     return true;
    // }
    // return false;
    return prevProps.obj.count === nextProps.obj.count;
}

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {

    const [count, setCount] = useState(1);
    const [obj, setObj] = useState({
        //객체안에 count:1
        count: 1
    })

    return (
        <div style={{ padding: 50 }}>
            <div>
                <h2>Counter A</h2>
                <CounterA count={count} />
                <button onClick={() => setCount(count)}>A button</button>
            </div>
            <div>
                <h2>Counter B</h2>
                <MemoizedCounterB obj={obj} />
                <button onClick={() =>
                    setObj({
                        count: obj.count
                    })
                }> B Button </button>
            </div>
        </div >
    )
}

export default OptimizeTest;