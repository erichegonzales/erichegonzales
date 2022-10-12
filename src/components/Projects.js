import Transitions from "./Transitions";
import { CardGroup, Card } from 'react-bootstrap'

const Projects = () => {
  return (
    <>
      <Transitions>
        <div className="projects-div">
          <h1 id='projects-header'>Projects</h1>
          <hr />
          <br />
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>AllThingSurf</Card.Title>
              <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Text>
                  AllThingSurf is a website for anyone interested in being a part of the surf community. 
                  
                  This application was made with 
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </Transitions>
    </>
  );
};

export default Projects;
