import React from 'react'

import { Link } from 'react-router-dom'

import Header from './header'

const Dashboard = () => {
  return (
    <div>
      <Header />

      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Dashboard</div>

          <Link to="/dashboard/profile/d47f32f5-a80b-4798-8674-54ed17711f2c">Go To Profile </Link>

          <Link to="/dashboard/main">Go To Main </Link>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
