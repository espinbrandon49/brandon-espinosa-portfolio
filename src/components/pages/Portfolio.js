import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Narratorium from '../../assets/narratorium.png'

const styles = {
  bold: {
    fontWeight: '700',
  },
  width: {
    width: "350px",
  }
}
const Portfolio = () => {
  return (
    <Card style={styles.width}>
      <Card.Img variant="top" src={Narratorium} />
      <Card.Body>
        <Card.Title>Narratorium</Card.Title>
        <Card.Text>
          <span style={styles.bold} >Front-end: </span>HTML, CSS, Javascript, Fetch, Web API, Session Storage, Skeleton, Figma, Quill JS
          <br/><br/>
          <span style={styles.bold}>Back-end: </span>Node, NPM, Express, MySQL, Sequelize, User Authentication via bcrypt, Handlebars, Socket.io
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Portfolio
