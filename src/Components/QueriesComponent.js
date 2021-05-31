import React from 'react';
import { Breadcrumb , BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Queries(){
    return(
        <div className ="container">
            <div className="row">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Queries</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <p>  </p>
                    <h3>Queries!</h3>
                    <p> <br/></p>
                    <hr />
                    <p> <br/></p>
                </div>   
            </div>
            <div >
                <div className="col-12 m-6" >
                    <p><img style={{float: "left", margin: "0px 15px 15px 0px;"}} src="assets/images/patient.png" width="80" alt="patient" /> My child is 4.5 years old and she is suffering from stomach pain & vomiting from 24 hrs. I have consulted local doctor, who injected for pain & vomiting with an antibiotic resistance. but she not well still. what should I do if I have no resources to contact with doctors immediately. of course I will consult tomorrow morning.</p>
                </div>
                <div className="col-12 m-5">
                <p><img style={{float: "right", margin: "0px 0px 15px 15px;"}} src="assets/images/doctor.jpeg" width="120" alt="doctor" /><em>"If stool is yellow and milk feeding is good then nothing to worry about. Change the cerelac type for taste change"</em><br/>  ---<b><em>Dr. Abhishek Tiwary, Pediatrician (MBBS,MD)</em></b></p>
                </div>
            </div>
            <div >
                <div className="col-12 col-md-5 m-1">
                <Button type="primary">
                 Consult with Pediatrician       
                </Button>{' '}
                <Button variant="secondary">
                 Share Query and Response       
                </Button>{' '}  
                </div>
            </div>
            <p> <br/></p>
            <hr/>
            <div className="row">
                <p>Similar Question: <Link to="/similarquestion"><em>My child is 4.5 years old and she is suffering from stomach pain & vomiting from 24 hrs. I have consulted local doctor, who injected for pain & vomiting with an antibiotic resistance. but she not well still. what should I do if I have no resources to contact with doctors immediately. of course I will consult tomorrow morning.</em></Link></p>
                <p>  <br/></p>
            </div>
        </div>                
    );
}

export default Queries;