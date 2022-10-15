import React, { useState } from "react";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const getPosts = () => {
    var posts_json = [
        {
          "test": 12,
          "iduser": 1,
          "postid": 3,
        },
        {
          "test": 11,
          "iduser": 5,
          "postid": 8,
        }
    ];
    return posts_json;
}

const deletePost = (i) => {
    console.log("delete " + i);
}

const Posts = () => {
    const submitPost = () => {
        console.log("submit post");
        console.log("uid: " + newUserId);
        console.log("pid: " + newPostId);
        console.log("ptxt: " + newPostText);
        console.log("purl: " + newPostURL);
    }

    var posts_json = getPosts();

    const [newUserId, setNewUserId] = useState("");
    const [newPostId, setNewPostId] = useState("");
    const [newPostText, setNewPostText] = useState("");
    const [newPostURL, setNewPostURL] = useState("");
    
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
                            <th className="text-center">Post</th>
                            <th className="text-center">View Posts</th>
                            <th className="text-center">Delete Posts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts_json.map((post, i) => {
                            return (
                                <tr>
                                    <td scope="row">{i+1}</td>
                                    <td width="10%">{post["iduser"]}</td>
                                    <td width="10%">{post["postid"]}</td>
                                    <td className="text-center" width="40%">Post</td>
                                    <td className="text-center" width="15%">
                                        <Link href={"/posts/" + post["postid"]}>
                                            <Button variant="primary">View Post</Button>
                                        </Link>
                                    </td>
                                    <td className="text-center" width="15%">
                                        <Button variant="danger" onClick={(e) => {deletePost(post["postid"])}}>Delete</Button>
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

export default Posts