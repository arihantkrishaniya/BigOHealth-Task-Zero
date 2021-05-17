import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

function RenderCardOne(props){
    return(
        <Card>
            <CardImg src="assets/images/img1.png" alt= "card image one"/>
            <CardBody>
            <CardTitle>STAY HAPPY IN EVERY SITUATION: 5 SIMPLE WAYS</CardTitle>
                <CardSubtitle><a href ="#Read">Read Full Story</a></CardSubtitle>
                <CardText>Author: Kiran Shibag</CardText>
            </CardBody>
        </Card>

    );
}

function RenderCardTwo(props){
    return(
        <Card>
            <CardImg src="assets/images/img2.jpg" alt= "card image two"/>
            <CardBody>
            <CardTitle>MENTAL HEALTH IS VERY IMPORTANT: BRAD PITT'S JOURNEY</CardTitle>
                <CardSubtitle><a href ="#Read">Read Full Story</a></CardSubtitle>
                <CardText>Author: Kiran Shibag</CardText>
            </CardBody>
        </Card>

    );
}

function RenderCardThree(props){
    return(
        <Card>
            <CardImg src="assets/images/img3.png" alt= "card image three"/>
            <CardBody>
                <CardTitle>COPING WITH EXAM STRESS</CardTitle>
                <CardSubtitle><a href ="#Read">Read Full Story</a></CardSubtitle>
                <CardText>Author: Kiran Shibag</CardText>
            </CardBody>
        </Card>

    );
}


function Blogs(props){
    return(
        <div className ="container">
            <div className = "row align-items-start">
                <div className = "col-12 col-md m-1">
                    <RenderCardOne/>
                </div>
                <div className = "col-12 col-md m-1">
                    <RenderCardTwo/>
                </div>
                <div className = "col-12 col-md m-1">
                    <RenderCardThree/>
                </div>
            </div>
        </div>

    );
}

export default Blogs;