import React,{useState} from 'react';
import {Icon,Menu,Input,Button,Checkbox,Form,Modal,Header,Image} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

const NavigationBar =()=>{

    const[open,setOpen]=useState(false);
    const[open2,setOpen2]=useState(false);

    /*----login modal user details---------------*/
    const[loginUser,setLoginUser]=useState('');
    const[loginPass,setLoginPass]=useState('');

    /*-----sign up modal user details------------*/
    const[signupFirstname,setFirstName]=useState('');
    const[signupLastname,setLastName]=useState('');
    const[signupEmail,setEmail]=useState('');
    const[signupContact,setContact]=useState('');
    const[signupUsername,setSignupUsername]=useState('');
    const[signupPass,setSignupPass]=useState('');


    
    const toggleModal=()=>setOpen(!open);
    const toggleSignUpModal=()=>setOpen2(!open2);

    const handleSignup=(event)=>{
         event.preventDefault();
          const payload = {
           FirstName:signupFirstname,
           LastName:signupLastname,
           Email:signupEmail,
           Username:signupUsername,
           Contact:signupContact,
           Password:signupPass
         };
         axios({
           url:'http://localhost:8080/api/signup',
           method:'POST',
           data:payload
         })
           .then(()=>{
           console.log('Data has been sent to the server');
           })
           .catch(()=>{
           console.log('Internal Server Error');
           });
           setOpen2(false);
           
    };
    
    return(
        <>
        <Menu icon='labeled' inverted fixed='top' color='green' fluid widths={7} stackable borderless>
        <Menu.Item header><Image src='/assets/imgs/logo.jpg' size='tiny' verticalAlign='top' floated='left' /></Menu.Item>
        <Menu.Item >
        <Input
        size='mini'
        action={{ type: 'submit', content: 'Go' }}
        placeholder='Search'
        />
        </Menu.Item>
        <Menu.Item
          as={NavLink} to="/home"
          name='home'
         
        >
        <Icon name='home'/>
        Home
        </Menu.Item>
        <Menu.Item
          as={NavLink} to="/veg"
          name='veg'
          
        >
        <Icon name='leaf'/>
        Vegetarian Meals
        </Menu.Item>
        <Menu.Item
          as={NavLink} to="/nonveg"
          name='nonveg'
          
        >
        <Icon name='food'/>
        Non-Vegetarian Meals
        </Menu.Item>
        <Menu.Item
          as={NavLink} to="/aboutus"
          name='aboutus'
          
        >
        <Icon name='info'/>
        About Us
        </Menu.Item>
        <Menu.Item>
        <Button onClick={toggleModal} size='big' inverted color='white'>Log-in</Button>
        </Menu.Item>  

        </Menu>



     <Modal
      closeIcon
      open={open} 
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      size='small'
     >
    <Header className="modalheader"  icon>
    <Icon name='user circle' />
        LOGIN
    </Header>
    <Modal.Content>  
    <Form onSubmit={toggleModal}>
    <Form.Input
      label='Username'
      placeholder='user123'
      name='loginUser'
      onChange={(e)=> setLoginUser(e.target.value)} />
    <Form.Input 
      label='Password'
      placeholder='123@'
      name='loginPass'
      type='password' 
      onChange={(e)=>setLoginPass(e.target.value)} />
    <Form.Field>
      <Checkbox label='Remember me' />
    </Form.Field>
    <Button onClick={()=>window.alert("Welcome "+`${loginUser}`)} fluid color='blue'>LOGIN</Button>
    </Form>
    </Modal.Content>
    <Modal.Actions>
      <p>New user? Sign up </p>
      <Button color='green'  onClick={toggleSignUpModal} fluid >Sign Up</Button></Modal.Actions> 
    </Modal>

     <Modal
      closeIcon
      open={open2}
      onClose={() => setOpen2(false)}
      onOpen={() => setOpen2(true)}
      size='small' 
      >
    <Header className="modalheader" icon>
    <Icon name='user circle' />
        SIGN UP
    </Header>
    <Modal.Content>  
    <Form onSubmit={handleSignup} success>
    <Form.Field required >
      <label>First Name</label>
      <input placeholder='First Name'
             name='signupFirstname'
             type='text'
             onChange={(e)=>setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field required>
      <label>Last Name</label>
      <input placeholder='Last Name'
              name='signupLastname'
              type='text'
              onChange={(e)=>setLastName(e.target.value)} />
    </Form.Field>
    <Form.Field required>
      <label>Email</label>
      <input placeholder='Email'
              name='signupEmail'
              type='email'
              onChange={(e)=>setEmail(e.target.value)} />
    </Form.Field>
    <Form.Field required>
      <label>Contact no.</label>
      <input placeholder='Contact no'
              name='signupContact'
              type='number'
              onChange={(e)=>setContact(e.target.value)}  />
    </Form.Field>
    <Form.Field required>
      <label>Username</label>
      <input placeholder='user123'
              name='signupUsername'
              onChange={(e)=>setSignupUsername(e.target.value)} />
    </Form.Field>
    <Form.Field required>
      <label>Password</label>
      <input placeholder='123@'
              name='signupPass'
              type='password'
              onChange={(e)=>setSignupPass(e.target.value)}  />
    </Form.Field>
    <Form.Field required>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Form.Button type='submit' color='blue' fluid>Sign Up</Form.Button>
    </Form>
    </Modal.Content>
    <Modal.Actions>
    </Modal.Actions>
     </Modal>

</>
    );
}
export default NavigationBar;