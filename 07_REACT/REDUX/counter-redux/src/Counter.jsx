import { useDispatch, useSelector } from "react-redux"
import { decrementCounter, incrementCounter, reset } from "./redux/counterSlice"


function Counter() {

  
  const dispatch =useDispatch()
  const count = useSelector((state)=>state.counterReducer.count)
  return (
    <div className=" d-flex justify-content-center container" >
    <div className=" count shadow-3 rounded-5 m-5 p-5 text-center col-lg-6 ">
        <h1 className="text-light shadow-dark">{count}</h1>

        <div className="mt-5 " >
            <button className="btn btn-primary m-3" onClick={()=>dispatch(incrementCounter())}>Increment</button>
            <button className="btn btn-primary m-3" onClick={()=>dispatch(decrementCounter())}>Decrement</button>
            <button className="btn btn-primary m-3"onClick={(()=>dispatch(reset()))}>Reset</button>
        </div>
    </div>
    </div>

  )
}

export default Counter