import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import HomePage from "./pages/HomePage"
import StartHerePage from "./pages/StartHerePage"
import ResourcesPage from "./pages/ResourcesPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ResourceDetailPage from "./pages/ResourceDetailPage"

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
<Route path="/start-here" element={<StartHerePage />} />
<Route path="/resources" element={<ResourcesPage />} />
<Route path="/resources/:slug" element={<ResourceDetailPage />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App