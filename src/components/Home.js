import React, { Fragment } from "react";
import {Button,Table} from 'react-bootstrap'
import Employees from "./Employees";
import "./Style.css"
import {Link, link,useNavigate} from 'react-router-dom'

function Home(){
    let history = useNavigate ();

    const handelEdit = (id,user,task) =>{
        localStorage.setItem('User',user);
        localStorage.setItem('Task',task);
        localStorage.setItem('Id',id)


    }

    const handleDelete =(id) => {
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id)

        Employees.splice(index,1);
        history('/');
    }
    return(
        
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered size ="sm">
                    <thead>
                        <tr>
                            <th color="red">
                                USER
                            </th>
                            <th>
                                TASK
                            </th>
                            <th>
                                ACTIONS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                            ?
                            Employees.map((item)=>{
                                return(
                                    <tr>
                                        <td>
                                            {item.User}
                                        </td>
                                        <td>
                                            {item.Task}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button onClick={()=>handelEdit (item.id,item.User,item.Task)}>Edit</Button>
                                            </Link>

                                            <Button onClick={()=>handleDelete(item.id)}>Delete</Button>
                                            
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "no data availaible"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link className="cerate-employee" to="/create">
                    <Button>Create</Button>
                </Link>
                

            </div>
        </Fragment>
         
    )
}

export default Home;