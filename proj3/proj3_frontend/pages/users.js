import React, { useState } from "react";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const getUsers = () => {
    var users_json = [
        {
          "test": 12,
          "iduser": 1,
        },
        {
          "test": 11,
          "iduser": 5,
        }
    ];
    return users_json;
}

const deleteUser = (id) => {
    console.log("delete " + id);
}

const Users = () => {
    const submitUser = () => {
        console.log("submit user");
        console.log("uid: " + newUserId);
        console.log("nn: " + newNickname);
    }

    var users_json = getUsers();

    const [newUserId, setNewUserId] = useState("");
    const [newNickname, setNewNickname] = useState("");

    return (
        <div>
            <div className="m-5">
                <h1 className="text-center">Users</h1>
            </div>
            <div className="m-5 border border-dark">
                <h1 className="text-center">Create User</h1>
                <div className="row">
                    <div className="col-3 text-center">
                        <h3>Enter User Id</h3>
                    </div>
                    <div className="col-3 text-center">
                        <h3>Enter Nickname</h3>
                    </div>
                </div>
                <Form>
                <div className="row">
                    <div className="col-3 text-center">
                        <Form.Group className="mb-3" controlId="formUserId">
                            <Form.Label>User Id</Form.Label>
                            <Form.Control placeholder="Enter your User Id (must be unique)" onChange={(e) => {
                                setNewUserId(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                    <div className="col-3 text-center">
                        <Form.Group className="mb-3" controlId="formNickname">
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control placeholder="Enter your nickname" onChange={(e) => {
                                setNewNickname(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-3 text-center">
                    <Button variant="primary" onClick={(e) => {submitUser()}}>Submit</Button>
                    </div>
                </div>
                </Form>
                <br/>
            </div>
            <div className="m-5"></div>
            <div className="m-5">
                <h1>All Users:</h1>
            </div>
            <div className="m-5">
                <table className="table table-sm table-responsive table-hover table-striped">
                    <thead>
                        <tr>
                            <th className="text-center"></th>
                            <th className="text-center">User ID</th>
                            <th className="text-center">View User's Posts</th>
                            <th className="text-center">Delete Users</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users_json.map((user, i) => {
                            return (
                                <tr>
                                    <td scope="row">{i+1}</td>
                                    <td width="30%">{user["iduser"]}</td>
                                    <td className="text-center" width="30%">
                                        <Link href={"/users/" + user["iduser"]}>
                                            <Button variant="primary">View Posts</Button>
                                        </Link>
                                    </td>
                                    <td className="text-center" width="15%">
                                        <Button variant="danger" onClick={(e) => {deleteUser(user["iduser"])}}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users