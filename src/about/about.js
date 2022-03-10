import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
    <section className="about">
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
          <Card.Img
            variant="top"
            src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC4D03AQEOge1qQaHcyg%2Fprofile-displayphoto-shrink_800_800%2F0%2F1629236080469%3Fe%3D1652313600%26v%3Dbeta%26t%3DxO2T0-9d_uoZ7q_mIo7wvddYGBdwUNVF38DEm-_ExCs"
          />
          <Card.Body>
            <Card.Title>Adnan Varela</Card.Title>
            <Card.Text>
              Full-stack Software Engineer with a passion for bringing a
              client’s desires to life on the web. I bring a relentless
              work-ethic and drive to succeed on every project. It was great
              working on this project with my team, I learned so much not only
              technical concepts but How to work as a team and really organizing
              the workflow that would get us to hit the milestones we needed.
            </Card.Text>
            <a href="https://acnow7.github.io/portafolio/#" target="_blank">
              <Button variant="primary">Portfolio</Button>
            </a>{" "}
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://ca.slack-edge.com/T0351JZQ0-U02Q729LAHY-78f40a29525c-512"
          />
          <Card.Body>
            <Card.Title>Basil Breton</Card.Title>
            <Card.Text>
              Cultivated at peak summer season, I love being outdoors trying to
              soak in what little Washington sun is given. I learned a ton of
              technical things on this project, but also got my first real
              experience working on a team. Learning the git work flow furthered
              my learning journey in software development.
            </Card.Text>
            <a
              href="https://basilspice.github.io/Portfolio-1/"
              target="_blank"
            >
              <Button variant="primary">Portfolio</Button>
            </a>{" "}
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://ca.slack-edge.com/T0351JZQ0-U02RADZ8XPB-45f6ea781dbc-512"
          />
          <Card.Body>
            <Card.Title>Sam Tiso</Card.Title>
            <Card.Text>
              A highly adaptive software engineer with an interest in creating
              utility to help serve others and improve quality of life. As a
              result of my experiences in education as well as in design and
              production, I excel at communication and creative approaches to
              solving problems.
            </Card.Text>
            <a
              href="https://sammywt.github.io/portfolio_project/"
              target="_blank"
            >
              <Button variant="primary">Portfolio</Button>
            </a>{" "}
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://ca.slack-edge.com/T0351JZQ0-U02QXQF1ATC-03df0b2fb262-512"
          />
          <Card.Body>
            <Card.Title>Robert Neyrinck</Card.Title>
            <Card.Text>
              Software engineer with a background in technology sales, enjoys
              nerding out with friends over tabletop games and solving complex
              javascript bugs. This project was enlightening, and my favorite
              part was taking on the role of project manager during our backend
              planning and development stage.
            </Card.Text>
            <a
              href="https://rneyrinck.github.io/RneyrinckSePortfolio/"
              target="_blank"
            >
              <Button variant="primary">Portfolio</Button>
            </a>
          </Card.Body>
        </Card>
      </section>
      </section>
    </>
  );
};
export default About;
