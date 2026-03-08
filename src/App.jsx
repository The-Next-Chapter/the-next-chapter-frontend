import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layout/AppLayout"

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/resources" element={<div>Resources Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App