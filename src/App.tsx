import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Landing from "@/pages/Landing";
import { ThemeProvider } from "@/components/ThemeProvider";

const Products = lazy(() => import("@/pages/Products"));
const Contact = lazy(() => import("@/pages/Contact"));
const ScheduleDemo = lazy(() => import("@/pages/ScheduleDemo"));
const ProductDetailPage = lazy(() => import("@/pages/ProductDetailPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const SpeedTest = lazy(() => import("@/pages/SpeedTest"));

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="mindsync-landing-theme">
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetailPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schedule-demo" element={<ScheduleDemo />} />
            <Route path="/speed" element={<SpeedTest />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}


export default App
