import React, { useState } from "react";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const getUsers = () => {
    var users_json = [
        {
          "test": 12,
          "iduser": 1,
          "nickname": "the_boi",
        },
        {
          "test": 11,
          "iduser": 5,
          "nickname": "jeffrey_be20s",
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

    const editUser = (i) => {
        setEditNum(i);
        console.log("edit " + i);
        handleShow();
    }

    var users_json = getUsers();

    const [newUserId, setNewUserId] = useState("");
    const [newNickname, setNewNickname] = useState("");

    const [editNum, setEditNum] = useState(0);

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleCloseSubmit = () => {
        console.log("submit edit");
        console.log("uid: " + newUserId);
        console.log("nn: " + newNickname);
        setShowModal(false);
    }

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
                            <th className="text-center">Nickname</th>
                            <th className="text-center">View Users</th>
                            <th className="text-center">Edit Users</th>
                            <th className="text-center">Delete Users</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users_json.map((user, i) => {
                            return (
                                <tr>
                                    <td scope="row">{i+1}</td>
                                    <td width="15%">{user["iduser"]}</td>
                                    <td width="15%">{user["nickname"]}</td>
                                    <td className="text-center" width="30%">
                                        <Link href={"/users/" + user["iduser"]}>
                                            <Button variant="primary">View User</Button>
                                        </Link>
                                    </td>
                                    <td className="text-center" width="10%">
                                        <Button variant="secondary" onClick={(e) => {editUser(i)}}>Edit User</Button>
                                    </td>
                                    <td className="text-center" width="10%">
                                        <Button variant="danger" onClick={(e) => {deleteUser(user["iduser"])}}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <Form.Group className="mb-3" controlId="formUserId">
                            <Form.Label>Edit User Id</Form.Label>
                            <Form.Control placeholder={users_json[editNum]["iduser"]} onChange={(e) => {
                                setNewUserId(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                    <div className="row">
                        <Form.Group className="mb-3" controlId="formPostId">
                            <Form.Label>Edit Nickname</Form.Label>
                            <Form.Control placeholder={users_json[editNum]["nickname"]} onChange={(e) => {
                                setNewNickname(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Users