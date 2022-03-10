import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Card>
        <Card.Title>About Us</Card.Title>
        <Card.Body>
          This is a full-stack MERN application. Three months before this
          project none of the developers knew anything about React, Node,
          Express, or Mongoose.
          <br />
          The main functionality of Hey, Neighbor is to provide users with a
          marketplace to rent items, offer services, and search for either.{" "}
        </Card.Body>
      </Card>

        <Card.Title>Developers</Card.Title>
      <section className="dev-cards">

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Adnan Varela</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Portfolio</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Basil Breton</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Portfolio</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Sam Tiso</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Portfolio</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Robert Neyrinck</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Portfolio</Button>
          </Card.Body>
        </Card>
      </section>
    </>
  );
};
export default About;
