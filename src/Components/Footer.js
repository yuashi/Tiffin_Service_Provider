import React from 'react';
import {Container,List,Icon} from 'semantic-ui-react';


const Footer = ()=>{
    return(
        <div className="footersection">
            <Container fluid>
                <div className="left" >
                <List link inverted size='huge'>
                <List.Item color='white' as='a'>FAQs</List.Item>
                <List.Item as='a'>Give us your Feedback</List.Item>
                 </List>
                </div>
                <div className="right">
                <List link inverted size='huge'>
                <List.Item color='white' as='a'><Icon name='instagram'/>Instagram</List.Item>
                <List.Item as='a'><Icon name='facebook official'/>Facebook</List.Item>
                <List.Item as='a'><Icon name='mail'/>Gmail</List.Item>
                 </List>
                </div>
                <div className="center">
                <p>
                <Icon name='copyright outline'> Mom's Tiffin</Icon>
                </p>
                </div>
            </Container>
        </div>

    );
}

export default Footer;