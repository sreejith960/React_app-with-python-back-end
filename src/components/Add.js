import React,{useState} from "react";
import { Button,Form } from "react-bootstrap";
import Employees from "./Employees";
import {v4 as uuid} from "uuid";
// import {Link,useNavigate} from 'react-router-dom '
import {Link, link,useNavigate} from 'react-router-dom'

function Add(){

    const [User,setUser] = useState('');
    const [Task,setTask ] = useState('');


    let history = useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);


        let a= User,
        b=Task

        Employees.push({id:uniqueId,User:a,Task:b});

        history("/");
    }




    return(
        <div>
            <Form className="cerate-employee" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter user name" required onChange={(e)=> setUser(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTask">
                    <Form.Control type="text" placeholder="Enter Task" required onChange={(e)=> setTask(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Button onClick={(e)=> handlesubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>

    )
}
export default Add;