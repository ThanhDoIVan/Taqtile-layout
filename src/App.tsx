import Button from "./components/Button"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Offer from "./components/Offer"
import Subscription from "./components/Subscription"
import { Xmark } from "./components/Xmark"

function App() {

  return (
   <div className="container">
    <Xmark />
    {/* <Features /> */}
    <Offer />
    <Subscription />
    <Button />
    <Footer />
   </div>
  )
}

export default App
