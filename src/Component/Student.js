import React from "react";
import { Button, Row, Col, Card, Container } from "react-bootstrap";
import "./Student.css";


function Student() {
    const cardInfo = [
        {
          image:
            "s1.png",
          name: "Mike",
          gpa: 3.8
        },
        {
          image:
            "s2.png",
            name: "Manal",
            gpa: 3.6
        },
        {
          image:
            "s3.png",
            name: "Moe",
            gpa: 3.2
        },
        {
          image:
            "s4.png",
            name: "Mary",
            gpa: 2.6
        }
      ];
    

  return (
    <Container>
        <h1>Student List</h1>
        <Row className="g-4">
            <Col> 
                {cardInfo.map((_, idx) => (
                  
                    <Card className="cardCustomized" key={idx} style={{ width: '35rem'}}>
                        <Card.Img variant="top" src = {_.image}/>
                        <Card.Body>
                        <Card.Title>{_.name}</Card.Title>
                        <Card.Text>{_.gpa}</Card.Text>
                        <Button variant={_.name}>Grade</Button>
                        </Card.Body>
                    </Card>
                               
                ))}
            </Col> 
        </Row>        
    </Container>
  );
}

export default Student;
