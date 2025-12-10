import Product from "./Components/Product";
import Cart from "./Components/Cart";
import Form from "./Components/Form";
const App=() => {
  return (
    <div >
      <h1>Welcome to the AIML Security Application</h1>
      <Product id={1234} />
      <Cart/>
      <Form/>
    </div>
  )
}
export default App;