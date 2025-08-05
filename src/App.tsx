import './App.css'
// import ClassComponent from './components/ClassComponent'
import FuncComponent from './components/FuncComponent'

function App() {
  return (
    <>
      {/* ClassComponent NON SI STA ASPETTANDO una prop "subtitle" */}
      {/* <ClassComponent subtitle="Sono stato scritto in TS" btnLabel="cliccami" /> */}
      {/* <ClassComponent subtitle="Sono di nuovo io!" /> */}
      <FuncComponent subtitle="Sono una prop!" btnLabel="cliccami" />
      <FuncComponent subtitle="Sono una prop!" />
    </>
  )
}

export default App
