import './App.css';
import Event from './Pages/event';
import Createevent from './Pages/createevent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from './components/admin/registration';
import Approve from './Pages/approve';
import Scan from './Pages/scan';
import Attendance from './Pages/attendance'
import AttendanceScan from './components/admin/attendanceScan'
import HistoryEvents from './Pages/historyEvents';
import EditEventPage from './Pages/EditEventPage';
import LandingPage from './components/Landing';
import SignInPage from './components/SiginIn';
import RegisterPage from './components/register';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index  path="/" element={<LandingPage/>} />
    <Route path="/signin" element={<SignInPage/>} />
    <Route path="/register" element={<RegisterPage/>} />
    <Route path="/events" element={<Event/>} />
    <Route path="/admin" element={<Createevent/>} />
    <Route path="/admin/approve" element={<Approve/>} />
    <Route path="/admin/attendance" element={<Attendance/>} />
    <Route path="/admin/scan" element={<Scan/>} />
    <Route path="/admin/eventhistory" element={<HistoryEvents/>} />
    <Route path="/attendancescan/:id" element={<AttendanceScan/>} />
    <Route path="/registrations/:id" element={<RegistrationPage/>} />
    <Route path="/admin/history" element={<HistoryEvents />} />
    <Route path="/admin/editEvent" element={<EditEventPage/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;