import React from 'react'
import ShapeImages from "../assets/shape.png"
import MyImages from "../assets/foto_abdulrazak.png"
const Dashboard = () => {
    return (
        <div>
            <div className="table_header">
                <h1>My Profile</h1>
            </div>
            <div className="date1">
                <h1>I,Am Abdul<span>Razak</span></h1>
                <p>This My Test Invitation For PT.Satnusa Persada Tbk Batam as Front End Engineer</p>
                <p>Thank you for giving me the opportunity to take this invitation test</p>
            </div>
            <div className="images">
                <img src ={`${ShapeImages}`} alt="_shape" className="shape"/>
                <img src ={`${MyImages}`} alt="_myphoto" className="my_photo"/>
            </div>
        </div>
    )
}

export default Dashboard