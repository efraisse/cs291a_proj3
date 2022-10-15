import React, { useState } from "react";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const getComments = () => {
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
}

const deleteComment = (i) => {
    console.log("delete " + i);
}

const Comments = () => {
    const submitComment = () => {
        console.log("submit comment");
        console.log("uid: " + newUserId);
        console.log("pid: " + newPostId);
        console.log("cid: " + newCommentId);
        console.log("ctxt: " + newCommentText);
    }

    var comments_json = getComments();

    const [newUserId, setNewUserId] = useState("");
    const [newPostId, setNewPostId] = useState("");
    const [newCommentId, setNewCommentId] = useState("");
    const [newCommentText, setNewCommentText] = useState("");
    
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
                                    <td width="10%">{comment["iduser"]}</td>
                                    <td width="10%">{comment["postid"]}</td>
                                    <td width="10%">{comment["idcomment"]}</td>
                                    <td className="text-center" width="40%">{comment["comment"]}</td>
                                    <td className="text-center" width="10%">
                                        <Link href={"/posts/" + comment["postid"]}>
                                            <Button variant="primary">View Post</Button>
                                        </Link>
                                    </td>
                                    <td className="text-center" width="10%">
                                        <Button variant="danger" onClick={(e) => {deleteComment(comment["idcomment"])}}>Delete</Button>
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

export default Comments