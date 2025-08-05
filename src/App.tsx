import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClassComponent from './components/ClassComponent'
import FuncComponent from './components/FuncComponent'
import FormComponent from './components/FormComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyNavbar from './components/MyNavbar'

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        {/* ClassComponent NON SI STA ASPETTANDO una prop "subtitle" */}
        <Route
          path="/"
          element={
            <>
              <FuncComponent subtitle="Sono una prop!" btnLabel="cliccami" />
              <FuncComponent subtitle="Sono una prop!" />
            </>
          }
        />
        <Route
          path="/class"
          element={
            <>
              <ClassComponent
                subtitle="Sono stato scritto in TS"
                btnLabel="cliccami"
              />
              <ClassComponent subtitle="Sono di nuovo io!" />
            </>
          }
        />
        <Route path="/form" element={<FormComponent />} />
        <Route
          path="*"
          element={
            <div>
              <h2>404 - Not Found</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
