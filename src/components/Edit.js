import React,{useState,useEffect} from "react";
import { Button,Form } from "react-bootstrap";
import Employees from "./Employees";
import {v4 as uuid} from "uuid";
// import {Link,useNavigate} from 'react-router-dom '
import {Link, link,useNavigate} from 'react-router-dom'

function Edit(){
    console.log("sdbdhfvdhvfdhfhvdh")
    const [user,setUser] = useState('');
    const [task,setTask ] = useState('');
    const[id,setId] = useState('');

    let history = useNavigate();
    

    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id);


    const handlesubmit=(e)=>{
        e.preventDefault();

        let a=Employees[index];
        a.User =user;
        a.Task=task;



        history("/");
    }

    useEffect(() =>{
        setUser(localStorage.getItem('User'))
        setTask(localStorage.getItem('Task'))
        setId(localStorage.getItem('Id'))

    },[])


    return(
        <div>
            <Form className="cerate-employee" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter user name" value={user} required onChange={(e)=> setUser(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTask">
                    <Form.Control type="text" placeholder="Enter Task" value={task} required onChange={(e)=> setTask(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Button onClick={(e)=> handlesubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
    )



}
export default Edit;