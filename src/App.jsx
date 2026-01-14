import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ConsultationForm from "./pages/ConsultationForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/konsultasi" element={<ConsultationForm />} />
      </Routes>
    </BrowserRouter>
  )
}
