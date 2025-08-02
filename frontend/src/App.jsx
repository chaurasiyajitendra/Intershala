import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Deshborad from "./pages/Deshborad"
import Leaderboard from "./pages/LeaderBoard"

const App = () => {
  return (  
    <>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<Deshborad/>} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
    </>
  )
}

export default App