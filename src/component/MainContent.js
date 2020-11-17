import React, { useEffect, useState } from "react";
import axios from "assets/js/axios";
import { Card, Accordion, Button } from "react-bootstrap";
import "assets/css/MainContent.css";

function MainContent({ fetchUrl }) {
  const [breeds, setBreeds] = useState([]);
  const [limits, setLimits] = useState(10);
  const [loading, setLoading] = useState(true);

  const loadContent = () => {
    async function fetchData() {
      setLoading(true);
      const request = await axios.get(`${fetchUrl}&limit=${limits}`);
      setBreeds(request.data);
      setLoading(false);
    }
    return fetchData();
  };

  useEffect(() => {
    loadContent();
  }, [fetchUrl]);

  // function infinte scroll
  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setLimits(limits + 10);
      loadContent();
    }
  };

  return (
    <div className='mainContent' onScroll={handleScroll}>
      <h3 className='mainContent__title'>List of Cats</h3>
      {breeds?.map((breed) => (
        <Accordion key={breed.id} className='mainContent__accordion'>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                {breed.name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card>
                <Card.Body>
                  <Card.Title>{breed.name}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Country Code: {breed?.country_code}
                  </Card.Subtitle>
                  <Card.Text>{breed.description}</Card.Text>
                  <Card.Link href={breed.vcahospitals_url} target='_blank'>
                    VCA Hospital
                  </Card.Link>
                  <Card.Link href={breed.vetstreet_url} target='_blank'>
                    Vet Street
                  </Card.Link>
                  <Card.Link href={breed.wikipedia_url} target='_blank'>
                    About
                  </Card.Link>
                </Card.Body>
              </Card>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
      {loading && (
        <div class='mainContent__loading'>
          <div class='ball'></div>
          <div class='ball'></div>
          <div class='ball'></div>
        </div>
      )}
    </div>
  );
}

export default MainContent;
