import './App.css'
import { GlobalContextProvider } from './Context/StepperContext'
import { Stepper } from './Stepper/Stepper'

function App() {

  return (
    <>
      <h1>React JS Stepper Form</h1>

      <div className="container">
        <div className="row">
        <GlobalContextProvider>
      <Stepper />
      </GlobalContextProvider>
        </div>
      </div>
    
      
    </>
  )
}

export default App
