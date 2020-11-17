import React, { useState } from "react";
import "assets/css/SearchContent.css";
import axios from "assets/js/axios";
import { Card, Accordion, Button } from "react-bootstrap";

function SearchContent({ fetchSearch }) {
  const [searchValues, setSearchValues] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchContent = (e) => {
    setLoading(true);
    const searchValue = e.target.value.toLowerCase();
    async function fetchData() {
      const request = await axios.get(`${fetchSearch}&q=${searchValue}`);
      if (request) {
        setSearchValues(request.data);
      }
      setLoading(false);
    }
    fetchData();
  };

  return (
    <div className='searchContent'>
      <h3>Search Your Favorite Cats</h3>
      <div className='searchContent__container'>
        <div className='searchContent__searchWrapper'>
          <input
            type='text'
            name='searchCat'
            id='searchCat'
            placeholder='search cat example sphynx..'
            onChange={searchContent}
          />
        </div>
      </div>

      {searchValues?.map((item) => (
        <Accordion key={item.id} className='searchContent__accordion'>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                {item.name}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Country Code: {item.country_code}
                  </Card.Subtitle>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Link href={item.vcahospitals_url} target='_blank'>
                    VCA Hospital
                  </Card.Link>
                  <Card.Link href={item.vetstreet_url} target='_blank'>
                    Vet Street
                  </Card.Link>
                  <Card.Link href={item.wikipedia_url} target='_blank'>
                    About
                  </Card.Link>
                </Card.Body>
              </Card>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}

      {loading && (
        <div class='searchContent__loading'>
          <div class='ball'></div>
          <div class='ball'></div>
          <div class='ball'></div>
        </div>
      )}
    </div>
  );
}

export default SearchContent;
