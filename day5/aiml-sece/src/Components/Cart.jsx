import { useState } from "react";
const Cart=() => {
  const [count, setCount] = useState(0);
 
  return (
    <div >
        <h3>{count}</h3>
      <button onClick={() => {setCount(count + 1)}}>Add Product</button>
      <button onClick={() => {setCount(count - 1)}}>Remove Product</button>
    </div>
  )
}
export default Cart;