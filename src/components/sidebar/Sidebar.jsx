import React, { useContext } from 'react'
import './Sidebar.scss'
import { DashboardCustomize } from '@mui/icons-material'
import { Person3Outlined } from '@mui/icons-material'
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../context/darkModeContext';
const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className='sidebar'>
      <div className="top">
        <Link to='/' style={{ textDecoration: 'none' }}>
        <span className='logo'>ReisAdmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className='title'>MAIN</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
          <li>
            <DashboardCustomize className='icon'/>
            <span>Dashboard</span>
          </li>
          </Link>
          <p className='title'>LISTS</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
          <li>
            <Person3Outlined className='icon'/>
            <span>Users</span>
          </li>
          </Link>
          <Link to='/products' style={{ textDecoration: 'none' }}>
          <li>
            <StoreIcon className='icon'/>
            <span>Products</span>
          </li>
          </Link>
          <li>
            <CreditCardIcon className='icon'/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <AssessmentIcon className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className='icon'/>
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <MedicalInformationIcon className='icon'/>
            <span>Sistem Health</span>
          </li>
          <li>
            <PsychologyIcon className='icon'/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type: "LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type: "DARK"})}></div>
       
      </div>
    </div>
  )
}

export default Sidebar
