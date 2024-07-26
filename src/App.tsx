import Button from "./components/Button"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Prices from "./components/Prices"
import { Xmark } from "./components/Xmark"

function App() {

  return (
   <div className="container">
    <Xmark />
    <Features />
    <Prices />
    <Button />
    <Footer />
   </div>
  )
}

export default App
