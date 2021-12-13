import React,{useState} from 'react';
import {  Button,Modal, Image ,Icon,Table} from 'semantic-ui-react';

const TiffinServiceModal = ({currentService,setShowModal}) => {

    const [open, setOpen] = useState(true);

    return(
      <div id="tiffinServiceNearme">
        <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        >
        <Modal.Header>{currentService.title}</Modal.Header>
        <Modal.Content image scrolling>
          <Image size='massive' src={currentService.src} wrapped />
          <Modal.Description >
              <p><Icon name='phone'>{currentService.contact}</Icon></p>
              <p>Price: {currentService.price}</p>
              <p><h2 style={{textAlign:'center'}}>Menu</h2></p>
            <Table celled  color='green'>
            <Table.Header>
             <Table.Row>
             <Table.HeaderCell>Day</Table.HeaderCell>
             <Table.HeaderCell>Breakfast</Table.HeaderCell>
             <Table.HeaderCell>Lunch</Table.HeaderCell>
             <Table.HeaderCell>Dinner</Table.HeaderCell>
             </Table.Row>
            </Table.Header>
             <Table.Body>
                <Table.Row>
                  <Table.Cell>MONDAY</Table.Cell>
                  <Table.Cell>{currentService.mon_bfast}</Table.Cell>
                  <Table.Cell>{currentService.mon_lunch}</Table.Cell>
                  <Table.Cell>{currentService.mon_dinner}</Table.Cell>
                  </Table.Row>
                <Table.Row>
                  <Table.Cell>TUESDAY</Table.Cell>
                  <Table.Cell>{currentService.tue_bfast}</Table.Cell>
                  <Table.Cell>{currentService.tue_lunch}</Table.Cell>
                  <Table.Cell>{currentService.tue_dinner}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>WEDNESDAY</Table.Cell>
                  <Table.Cell>{currentService.wed_bfast}</Table.Cell>
                  <Table.Cell>{currentService.wed_lunch}</Table.Cell>
                  <Table.Cell>{currentService.wed_dinner}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>THURSDAY</Table.Cell>
                  <Table.Cell>{currentService.thu_bfast}</Table.Cell>
                  <Table.Cell>{currentService.thu_lunch}</Table.Cell>
                  <Table.Cell>{currentService.thu_dinner}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>FRIDAY</Table.Cell>
                  <Table.Cell>{currentService.fri_bfast}</Table.Cell>
                  <Table.Cell>{currentService.fri_lunch}</Table.Cell>
                  <Table.Cell>{currentService.fri_dinner}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>SATURDAY</Table.Cell>
                  <Table.Cell>{currentService.sat_bfast}</Table.Cell>
                  <Table.Cell>{currentService.sat_lunch}</Table.Cell>
                  <Table.Cell>{currentService.sat_dinner}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>SUNDAY</Table.Cell>
                  <Table.Cell>{currentService.sun_bfast}</Table.Cell>
                  <Table.Cell>{currentService.sun_lunch}</Table.Cell>
                  <Table.Cell>{currentService.sun_dinner}</Table.Cell>
                </Table.Row>
             </Table.Body>
            </Table>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={() => {setOpen(false);setShowModal(false)}}>
          <Icon name='remove' /> Cancel
        </Button>
        <Button  color='blue'  onClick={() => {setOpen(false);setShowModal(false)}} >
            Book Now
          </Button>
        </Modal.Actions>
      </Modal>
      </div>
    );

}

export default TiffinServiceModal;