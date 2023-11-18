import React from 'react'
import './Single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/List'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
     <div className="singleContainer">
      <Navbar/>
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img
             src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
             alt="user" 
             className="itemImg"
            />
            <div className="details">
              <h1 className="itemTitle">Jane Doe</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">janedoe@gmail.com</span> 
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+55 11 40002 8922</span> 
              </div>
              <div className="detailItem">
                <span className="itemKey">Adress:</span>
                <span className="itemValue">Tomar do Geru, Sergipe</span> 
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Brazil</span> 
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title="User Spending (Last 6 Months)"/>
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Last Transactions</h1>
        <List/>
      </div>
     </div>
    </div>
  )
}

export default Single
