import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

/*const getComments = () => {
    var comments_json = [
        {
          "iduser": 1,
          "postid": 3,
          "idcomment": 5,
          "comment": "very nice",
        },
        {
          "iduser": 5,
          "postid": 8,
          "idcomment": 7,
          "comment": "This is SO COOL!!!!",
        }
    ];

    return comments_json;
}*/

const Comments = () => {

    const [comments_json, setComments_json] = useState([]);

    useEffect(() => {
        var rails_url = "http://localhost:3001";
        var endpoint = "/comments";
        fetch(rails_url+endpoint)
            .then(response => 
                response.json().then(data => {
                    setComments_json(data["data"])
                    setLoading(false);
            }))
    }, [])

    const submitComment = () => {
        console.log("submit comment");
        console.log("uid: " + newUserId);
        console.log("pid: " + newPostId);
        console.log("cid: " + newCommentId);
        console.log("ctxt: " + newCommentText);

        if(newUserId == "" || newPostId == "" || newCommentId == ""){
            window.alert("Missing Ids");
            return;
        }

        const opts = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "user_id": newUserId,
                "post_id": newPostId,
                "idcomment": newCommentId,
                "text": newCommentText,
            })
        };

        var rails_url = "http://localhost:3001";
        var endpoint = "/comments";
        fetch(rails_url+endpoint, opts)
            .then(response => {
                window.location.reload();
            })
    }

    const deleteComment = (i) => {
        console.log("delete " + i);

        const opts = {
            method: 'DELETE',
        };

        var rails_url = "http://localhost:3001";
        var endpoint = "/comments/"+i;
        fetch(rails_url+endpoint, opts)
            .then(response => {
                window.location.reload();
            })
    }

    const editComment = (i) => {
        setEditNum(i);
        console.log("edit " + i);
        handleShow();
    }

    //var comments_json = getComments();

    const [loading, setLoading] = useState(true);

    const [newUserId, setNewUserId] = useState("");
    const [newPostId, setNewPostId] = useState("");
    const [newCommentId, setNewCommentId] = useState("");
    const [newCommentText, setNewCommentText] = useState("");

    const [editNum, setEditNum] = useState(0);

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleCloseSubmit = () => {
        console.log("submit edit");
        console.log("uid: " + newUserId);
        console.log("pid: " + newPostId);
        console.log("cid: " + newCommentId);
        console.log("ctxt: " + newCommentText);

        if(newUserId == "" || newPostId == "" || newCommentId == ""){
            window.alert("Missing Ids");
            return;
        }
        
        setShowModal(false);

        const opts = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "user_id": newUserId,
                "idpost": newPostId,
                "idcomment": newCommentId,
                "text": newCommentText,
            })
        };

        var rails_url = "http://localhost:3001";
        var endpoint = "/comments/"+comments_json[editNum]["attributes"]["idcomment"];
        fetch(rails_url+endpoint, opts)
            .then(response => {
                window.location.reload();
            })
    }

    if(loading){
        return <h1>Loading</h1>
    }
    
    return (
        <div>
            <div className="m-5">
                <h1 className="text-center">Comments</h1>
            </div>
            <div className="m-5 border border-dark">
                <h1 className="text-center">Create Comment</h1>
                <div className="row">
                    <div className="col-3 text-center">
                        <h3>Enter User Id</h3>
                    </div>
                    <div className="col-3 text-center">
                        <h3>Enter Post Id</h3>
                    </div>
                    <div className="col-3 text-center">
                        <h3>Enter Comment ID</h3>
                    </div>
                    <div className="col-3 text-center">
                        <h3>Enter Comment Text</h3>
                    </div>
                </div>
                <Form>
                <div className="row">
                    <div className="col-3 text-center">
                        <Form.Group className="mb-3" controlId="formUserId">
                            <Form.Label>User Id</Form.Label>
                            <Form.Control placeholder="Enter your User Id" onChange={(e) => {
                                setNewUserId(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                    <div className="col-3 text-center">
                        <Form.Group className="mb-3" controlId="formPostId">
                            <Form.Label>Post Id</Form.Label>
                            <Form.Control placeholder="Enter Post Id" onChange={(e) => {
                                setNewPostId(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                    <div className="col-3 text-center">
                        <Form.Group className="mb-3" controlId="formCommentId">
                            <Form.Label>Comment Id</Form.Label>
                            <Form.Control placeholder="Enter Comment Id" onChange={(e) => {
                                setNewCommentId(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                    <div className="col-3 text-center">
                        <Form.Group className="mb-3" controlId="formText">
                            <Form.Label>Comment Text</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter the text for your comment" onChange={(e) => {
                                setNewCommentText(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-3 text-center">
                    <Button variant="primary" onClick={(e) => {submitComment()}}>Submit</Button>
                    </div>
                </div>
                </Form>
                <br/>
            </div>
            <div className="m-5"></div>
            <div className="m-5">
                <h1>All Comments:</h1>
            </div>
            <div className="m-5">
                <table className="table table-sm table-responsive table-hover table-striped">
                    <thead>
                        <tr>
                            <th className="text-center"></th>
                            <th className="text-center">Commenter User ID</th>
                            <th className="text-center">Post ID</th>
                            <th className="text-center">Comment ID</th>
                            <th className="text-center">Comment</th>
                            <th className="text-center">View Posts</th>
                            <th className="text-center">Delete Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments_json.map((comment, i) => {
                            return (
                                <tr>
                                    <td width="5%">{i+1}</td>
                                    <td width="10%">{comment["attributes"]["user_id"]}</td>
                                    <td width="10%">{comment["attributes"]["post_id"]}</td>
                                    <td width="10%">{comment["attributes"]["idcomment"]}</td>
                                    <td className="text-center" width="30%">{comment["attributes"]["text"]}</td>
                                    <td className="text-center" width="10%">
                                        <Link href={"/posts/" + comment["attributes"]["post_id"]}>
                                            <Button variant="primary">View Post</Button>
                                        </Link>
                                    </td>
                                    <td className="text-center" width="10%">
                                        <Button variant="secondary" onClick={(e) => {editComment(i)}}>Edit Comment</Button>
                                    </td>
                                    <td className="text-center" width="10%">
                                        <Button variant="danger" onClick={(e) => {deleteComment(comment["attributes"]["idcomment"])}}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <Form.Group className="mb-3" controlId="formUserId">
                            <Form.Label>New User Id</Form.Label>
                            <Form.Control placeholder={comments_json[editNum]["attributes"]["user_id"]} onChange={(e) => {
                                setNewUserId(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                    <div className="row">
                        <Form.Group className="mb-3" controlId="formPostId">
                            <Form.Label>New Post Id</Form.Label>
                            <Form.Control placeholder={comments_json[editNum]["attributes"]["post_id"]} onChange={(e) => {
                                setNewPostId(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                    <div className="row">
                        <Form.Group className="mb-3" controlId="formImageURL">
                            <Form.Label>New Comment Id</Form.Label>
                            <Form.Control placeholder={comments_json[editNum]["attributes"]["idcomment"]} onChange={(e) => {
                                setNewCommentId(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                    <div className="row">
                        <Form.Group className="mb-3" controlId="formText">
                            <Form.Label>New Comment</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder={comments_json[editNum]["attributes"]["text"]} onChange={(e) => {
                                setNewCommentText(e.target.value);
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

export default Comments