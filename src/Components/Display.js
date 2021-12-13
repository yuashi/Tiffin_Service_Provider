import React,{useState} from 'react';
import tiffinServices from '../shared/tiffinServices';
import { Card, Button, Image, Icon, Rating } from 'semantic-ui-react';
import TiffinServiceModal from '../DisplayHelper/TiffinServiceModal';

const Display = ()=>{

  const[showModal,setShowModal] = useState(false);
  const[current,setCurrent]=useState([]);

  function getModalComponent() {
  if (showModal) {
    return <TiffinServiceModal currentService={current} 
                          setShowModal={setShowModal}/>
            
  }
  else {
    return null;
  }
} 
    return(
        <div className="displaysection">
        <h1 className="displaytitle">Tiffin Services near You</h1>
        <Card.Group centered >
          {tiffinServices.map(service => (
            <Card key={service.key}>
            <Image src={service.src} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{service.title}</Card.Header>
              <Card.Meta>
                <Icon name='map marker' color='red' />
              <span className='date'>{service.location}</span>
              </Card.Meta>
              <Card.Description>
              <Rating icon='star' defaultRating={service.rating} maxRating={5} />
              <p>
              {service.price}
              </p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
              <Button color='green' onClick= {()=>{ setCurrent(service);setShowModal(true);}}>View Menu</Button>
              <Button color='blue' attached='right'>Book Now</Button>
              {getModalComponent()}
              </a>
             </Card.Content>
          </Card>
          ))
          }
       </Card.Group>
      </div>


    );
}

export default Display;
