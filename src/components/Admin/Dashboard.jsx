import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddDeleteUsers from './AddDeleteUsers';
import Allocation from './Allocation';
import "../../styles/admin.css";
import Footer from '../Common/Footer';


function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('manage');

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <nav>
          <button onClick={() => setActiveTab('manage')}>Manage Users</button>
          <button onClick={() => setActiveTab('allocate')}>Allocate Staff</button>
          <Link to="/" className="logout-btn">Logout</Link>
        </nav>
      </header>

      <main>
        {activeTab === 'manage' && <AddDeleteUsers />}
        {activeTab === 'allocate' && <Allocation />}
      </main>
      <Footer/>
    </div>
  );
}

export default AdminDashboard;