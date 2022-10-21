import Transitions from "./Transitions";
import { Card, Container } from "react-bootstrap";
import Footer from "./Footer";

const Projects = () => {
  const dot = "·";

  return (
    <Transitions>
      <Container className="p-4">
        <h1 id="projects-header">Projects</h1>
        <Card id="allthingsurf">
          <Card.Body>
            <Card.Title>AllThingSurf</Card.Title>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <iframe
              width="1120"
              height="630"
              src="https://www.loom.com/embed/af19a83a5f0849ae9f04094da2970f2f"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <hr />
            <br />
            <Card.Text>
              AllThingSurf is a social media application for the surfing
              community to connect by sharing content, lessons, and news. Users
              can create posts and utilize their feed to establish their
              personal brand or keep up with other surfers in the community.
              Users will also register as coaches to create lessons that surfers
              can request to book.
              {/* Two challenges I observed when I learned to surf
                was: 1. How can I meet other surfers in my community? 2. How do
                I find a reputable coach and receive personalized lessons? The
                app aims to solve these issues by featuring a feed that shows
                the content of surfers in a preferred location, of popular
                surfers, or of any surfer they choose to follow. Surfers can
                register and create a coach profile, specify their
                qualifications, and post lessons. Any surfer can request to book
                these lessons. The content-sharing serves as a way for users to
                interact with surfers in their community and for coaches to
                establish their personal brand and reputation. */}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              React {dot} Ruby on Rails {dot} Django {dot} October 2022
              <br /> 3 week Flatiron capstone project {dot} Made by me
            </small>
          </Card.Footer>
        </Card>

        <br />
        <Card>
          <Card.Body>
            <Card.Title>House Haven</Card.Title>
            <hr />
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <iframe
              width="1120"
              height="630"
              src="https://www.youtube.com/embed/fuKhwi4H51o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <br />
            <br />
            <Card.Text>
              HouseHaven is a digital resource to help justice-involved women
              find safe, secure, and affordable housing options nearby. When the
              user inputs their information, it calculates a personalized
              listing of eligible houses. There is a resources page that offers
              a marketplace for free or cheap furniture and assistance for
              identification and government programs.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {" "}
              React {dot} Ruby on Rails {dot} October 2022
              <br /> 36 hour hackathon for Girls in Tech NY {dot} Made in a
              6-person team
            </small>
          </Card.Footer>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Title>Troll School</Card.Title>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <iframe
              width="1120"
              height="630"
              src="https://www.loom.com/embed/d271825d278243b6a426d24974afdde2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <hr />
            <Card.Text>
              Troll School is an online children's educational platform that
              provides interesting and interactive courses to teach various
              subjects, such as math, spelling, history, and art. The features
              include minimaps, quizzes, a drawing board, a personalized profile
              with a progress bar, login/logout, and authentication.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {" "}
              React {dot} Ruby on Rails {dot} August 2022
              <br /> 1 week Flatiron project {dot} Made in a 5-person team
            </small>
          </Card.Footer>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Title>Cosmo Ticketing</Card.Title>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <iframe
              width="1120"
              height="630"
              src="https://www.loom.com/embed/613256ba2a3141df8c14968cb757e0ac"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <hr />
            <Card.Text>
              Cosmo Center is a ticketing management system for an eSports
              venue. Users can view venue events, reserve tickets, cancel
              tickets. The profile page display's the user's bought tickets.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {" "}
              React {dot} Ruby on Rails {dot} August 2022
              <br /> 48 hour Flatiron hackathon project {dot} Made in a 3-person
              team
            </small>
          </Card.Footer>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Title>EA Budgeting</Card.Title>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <iframe
              width="1120"
              height="630"
              src="https://www.loom.com/embed/20fdce289a8d4133a062fa21e2ace062"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <hr />
            <Card.Text>
              EA Budgeting is a budget calculator that calculates the user's
              amount of daily available money in a year. The user inputs their
              income, investments, debts, bills, tax information, and any daily
              expenses. The app provides a visualization of the results in a
              table and pie chart.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              React {dot} July 2022
              <br /> 1 week Flatiron project {dot} Made in a 2-person team
            </small>
          </Card.Footer>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Title>NASA APOD Generator</Card.Title>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <iframe
              width="1120"
              height="630"
              src="https://www.loom.com/embed/24a7412fea1448a9882b58e2bc89a34d"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <hr />
            <Card.Text>
              The Astronomy Picture of the Day (APOD) Generator fetches data
              from the public NASA APOD API. The user can view the astronomy
              image for a specified date or for a randomly generated date. The
              images with their descriptions are stored in a personalized
              collection of cards that the user can like, unlike, or discard.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              React {dot} Vanilla JavaScript {dot} July 2022
              <br /> 1 week Flatiron project {dot} Made by me
            </small>
          </Card.Footer>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Title>Polynomial Calculator</Card.Title>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <iframe
              width="1120"
              height="630"
              src="https://www.loom.com/embed/e334f46be07a49c4a16eb15691f9353b"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <hr />
            <Card.Text>
              This Java based calculator will be able to add, subtract, multiply
              and divide polynomials using linked lists.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Java {dot} April 2022
              <br /> 4 week DSA course project {dot} Made by me
            </small>
          </Card.Footer>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Title>Tic-tac-toe</Card.Title>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <iframe
              width="1120"
              height="630"
              src="https://www.loom.com/embed/f37ad911cd284c06b6e9178ce59e686e"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <hr />
            <Card.Text>
              This project implements a Java version of the popular game
              Tic-tac-toe.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              Java {dot} March 2022
              <br /> 4 week DSA course project {dot} Made by me
            </small>
          </Card.Footer>
        </Card>
      </Container>
      <Footer />
    </Transitions>
  );
};

export default Projects;
