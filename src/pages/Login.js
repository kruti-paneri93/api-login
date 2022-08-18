// import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React , {useState} from 'react'
// import {useNavigate} from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const history = useNavigate();
    
    async function entry(){
        console.log(email , password);
        // let item = {email , password};
        // let result = await fetch ("http://3.7.50.43:3000/API/login" , {
        //     method : 'POST',
        //     headers : {
        //         "Content-Type" : "application/json",
        //         "Content-Length" : "<calculated when request is sent>",
        //         "Host" : "<calculated when request is sent>",
        //         "User-Agent" : "PostmanRuntime/7.29.2",
        //         "Accept" : "*/*",
        //         "Accept-Encoding" : "gzip, deflate, br",
        //         "Connection" : "keep-alive"
        //     },
        //     body : JSON.stringify(item)
        // });
        // result = await result.json();
        // localStorage.setItem(JSON.stringify(result))
        // history.pushState("/home")
    }
  return (
    <div className='container'>
        <div className='d-flex align-items-center justify-content-center'>
            <Form className='col-6 form-height form-position'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={entry} >
                    Submit
                </Button>
            </Form>
        </div>
    </div>
  )
}
export default Login