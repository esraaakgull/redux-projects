import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, decrementByAmount, increment, incrementByAmount} from "../../redux/counter/counterSlice";

const Counter = () => {
    const number = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(3);

    return (
        <div className="container">
            <h1>{number}</h1>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <div>
                <button onClick={() => dispatch(incrementByAmount(amount))}>Increment By Value</button>
                <button onClick={() => dispatch(decrementByAmount(amount))}>Decrement By Value</button>
            </div>
        </div>
    )
}

export default Counter