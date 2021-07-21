import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import "./inspiration.css";
import {IMAGE_ARRAY} from './InspirationPageConstant'


export default class Inspiration extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row style={{backgroundColor:'rgb(248, 248, 248)',height:'200px'}}> 
                        <div>Inspiration for your first order</div>
                        <Carousel>
                            {IMAGE_ARRAY.corosalArray.map((key)=>{
                                return(
                                <Carousel.Item key={key}>
                                    <CardDeck>
                                        {IMAGE_ARRAY.imageArray.map((key)=>{
                                            return(
                                                <Card>
                                                    <Card.Img variant="top" src={key.url} />
                                                    <Card.Body>
                                                    <Card.Title>{key.name}</Card.Title>
                                                    </Card.Body>
                                                </Card>
                                            )   
                                        })}
                                    </CardDeck>    
                                </Carousel.Item>      
                                )
                            })}
                        </Carousel>
                        
                    </Row>
                </Container>
        </div>     
        )
    }
}
