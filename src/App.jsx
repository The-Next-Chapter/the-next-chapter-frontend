import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"

import AppLayout from "./layout/AppLayout"
import ScrollToTop from "./components/ScrollToTop"

/* --------------------------
   LAZY LOADED PAGES
--------------------------- */
const HomePage = lazy(() => import("./pages/HomePage"))
const StartHerePage = lazy(() => import("./pages/StartHerePage"))
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"))
const ResourceDetailPage = lazy(() => import("./pages/ResourceDetailPage"))
const AboutPage = lazy(() => import("./pages/AboutPage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <AppLayout>

        {/* Suspense wraps ONLY routes */}
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-[60vh] text-stone-500">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/start-here" element={<StartHerePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:slug" element={<ResourceDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>

      </AppLayout>

    </BrowserRouter>
  )
}

export default App