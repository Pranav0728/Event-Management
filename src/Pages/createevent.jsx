import React, { useEffect, useState } from 'react';
import AdminHeader from '../components/admin/AdminHeader';
import Header from '../components/header';
import CreateEvent from '../components/admin/CreateEvent';

function CreateEventPage() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole); // Store role in state after fetching from localStorage
  }, []);

  if (role === null) {
    return <div>Loading...</div>; // Wait until the role is fetched
  }

  return (
    <>
      {role ==true? ( // Check if the role is "true"
        <div className=''>
          <Header />
          <AdminHeader />
          <CreateEvent />
        </div>
      ) : (
        <div>Unauthorized</div>
      )}
    </>
  );
}

export default CreateEventPage;
