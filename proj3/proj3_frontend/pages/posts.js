import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
//import fetch from 'unfetch';

/*
const getPosts = () => {
    var posts_json = [
        {
          "test": 12,
          "iduser": 1,
          "postid": 3,
          "posttxt": "text",
          "posturl": "url",
        },
        {
          "test": 11,
          "iduser": 5,
          "postid": 8,
          "posttxt": "text",
          "posturl": "url",
        }
    ];
    return posts_json;
}*/

const deletePost = (i) => {
    console.log("delete " + i);
}

const Posts = () => {

    const [posts_json, setPosts_json] = useState([]);

    useEffect(() => {
        var rails_url = "http://localhost:3001";
        var endpoint = "/posts";
        fetch(rails_url+endpoint)
            .then(response => 
                response.json().then(data => {
                    setPosts_json(data["data"])
                    setLoading(false);
            }))
    }, [])

    const submitPost = () => {
        console.log("submit post");
        console.log("uid: " + newUserId);
        console.log("pid: " + newPostId);
        console.log("ptxt: " + newPostText);
        console.log("purl: " + newPostURL);

        const opts = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "user_id": newUserId,
                "idpost": newPostId,
                "text": newPostText,
                "imageurl": newPostURL,
            })
        };

        var rails_url = "http://localhost:3001";
        var endpoint = "/posts";
        fetch(rails_url+endpoint, opts)
            .then(response => {
                window.location.reload();
            })

    }

    const editPost = (i) => {
        setEditNum(i);
        console.log("edit " + i);
        handleShow();
    }

    //var posts_json = getPosts();
    
    const [loading, setLoading] = useState(true);

    const [newUserId, setNewUserId] = useState("");
    const [newPostId, setNewPostId] = useState("");
    const [newPostText, setNewPostText] = useState("");
    const [newPostURL, setNewPostURL] = useState("");

    const [editNum, setEditNum] = useState(0);

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleCloseSubmit = () => {
        console.log("submit edit");
        console.log("uid: " + newUserId);
        console.log("pid: " + newPostId);
        console.log("ptxt: " + newPostText);
        console.log("purl: " + newPostURL);
        setShowModal(false);

        const opts = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "user_id": newUserId,
                "idpost": newPostId,
                "text": newPostText,
                "imageurl": newPostURL,
            })
        };

        var rails_url = "http://localhost:3001";
        var endpoint = "/posts/"+posts_json[editNum]["attributes"]["idpost"];
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
                <h1 className="text-center">Posts</h1>
            </div>
            <div className="m-5 border border-dark">
                <h1 className="text-center">Create Post</h1>
                <div className="row">
                    <div className="col-3 text-center">
                        <h3>Enter User Id</h3>
                    </div>
                    <div className="col-3 text-center">
                        <h3>Enter Post Id</h3>
                    </div>
                    <div className="col-3 text-center">
                        <h3>Enter Text Post</h3>
                    </div>
                    <div className="col-3 text-center">
                        <h3>Enter Image URL</h3>
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
                            <Form.Control placeholder="Enter your Post's Id (must be unique)" onChange={(e) => {
                                setNewPostId(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                    <div className="col-3 text-center">
                        <Form.Group className="mb-3" controlId="formText">
                            <Form.Label>Post Text</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter the text for your post" onChange={(e) => {
                                setNewPostText(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                    <div className="col-3 text-center">
                        <Form.Group className="mb-3" controlId="formImageURL">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control placeholder="Enter your Image URL (if wanted)" onChange={(e) => {
                                setNewPostURL(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-3 text-center">
                    <Button variant="primary" onClick={(e) => {submitPost()}}>Submit</Button>
                    </div>
                </div>
                </Form>
                <br/>
            </div>
            <div className="m-5"></div>
            <div className="m-5">
                <h1>All Posts:</h1>
            </div>
            <div className="m-5">
                <table className="table table-sm table-responsive table-hover table-striped">
                    <thead>
                        <tr>
                            <th className="text-center"></th>
                            <th className="text-center">Poster User ID</th>
                            <th className="text-center">Post ID</th>
                            <th className="text-center">Post Text</th>
                            <th className="text-center">Post URL</th>
                            <th className="text-center">View Posts</th>
                            <th className="text-center">Edit Posts</th>
                            <th className="text-center">Delete Posts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts_json.map((post, i) => {
                            return (
                                <tr>
                                    <td scope="row">{i+1}</td>
                                    <td width="10%">{post["attributes"]["user_id"]}</td>
                                    <td width="10%">{post["attributes"]["idpost"]}</td>
                                    <td className="text-center" width="25%">{post["attributes"]["text"]}</td>
                                    <td className="text-center" width="15%">{post["attributes"]["imageurl"]}</td>
                                    <td className="text-center" width="10%">
                                        <Link href={"/posts/" + post["attributes"]["idpost"]}>
                                            <Button variant="primary">View Post</Button>
                                        </Link>
                                    </td>
                                    <td className="text-center" width="10%">
                                        <Button variant="secondary" onClick={(e) => {editPost(i)}}>Edit Post</Button>
                                    </td>
                                    <td className="text-center" width="10%">
                                        <Button variant="danger" onClick={(e) => {deletePost(post["attributes"]["idpost"])}}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <Form.Group className="mb-3" controlId="formUserId">
                            <Form.Label>Edit User Id</Form.Label>
                            <Form.Control placeholder={posts_json[editNum]["attributes"]["user_id"]} onChange={(e) => {
                                setNewUserId(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                    <div className="row">
                        <Form.Group className="mb-3" controlId="formPostId">
                            <Form.Label>Edit Post Id</Form.Label>
                            <Form.Control placeholder={posts_json[editNum]["attributes"]["idpost"]} onChange={(e) => {
                                setNewPostId(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                    <div className="row">
                        <Form.Group className="mb-3" controlId="formText">
                            <Form.Label>Edit Post Text</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder={posts_json[editNum]["attributes"]["text"]} onChange={(e) => {
                                setNewPostText(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                    <div className="row">
                        <Form.Group className="mb-3" controlId="formImageURL">
                            <Form.Label>Edit Image URL</Form.Label>
                            <Form.Control placeholder={posts_json[editNum]["attributes"]["imageurl"]} onChange={(e) => {
                                setNewPostURL(e.target.value);
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

export default Posts