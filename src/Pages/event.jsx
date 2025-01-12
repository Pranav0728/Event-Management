import '../App.css';
import EventCompo from '../components/EventCompo';
import EventHeader from '../components/EventHeader'
import Header from '../components/header';
import { useEffect, useState } from 'react';
function Event() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);
  return (
    <>
    {role == true ? (
      <div>
        <Header/>
         <EventCompo />
         
      </div>
    ) : (
      <>
      <EventHeader/>
         <EventCompo />
      </>
    )}
  </>
  );
}

export default Event;