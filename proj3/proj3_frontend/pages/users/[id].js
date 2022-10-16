import React, { useState } from 'react';
import { useRouter } from 'next/router';
//import ErrorPage from 'next/error';
import Error from 'next/error';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


/*
<div className="m-5">
        <table className="table table-sm table-responsive table-hover table-striped">
          <thead>
            <tr>
              <th className="text-center"></th>
              <th className="text-center">Post</th>
              <th className="text-center">View Posts</th>
            </tr>
          </thead>
          <tbody>
            {posts_json.map((post, i) => {
              return (
                <tr>
                  <td scope="row">{i+1}</td>
                  <td className="text-center" width="70%">Post</td>
                  <td width="20%">
                    <a href={window.location.origin+"/posts/"+post["postid"]}>
                      <button type="button">View Post</button>
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>*/


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

const getUserId = (i) => {
    var userid_json = {
        "test": 11,
        "iduser": 5,
        "nickname": "jeffrey_be20s",
    }
    return userid_json;
}

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
}

const deleteUser = (id) => {
    console.log("delete " + id);
}

const getServerSideProps = async ({query, req, res}) => {
    var users_json = getUsers();

    const {id} = query;

    var in_users = false;
    for (let i = 0; i < users_json.length; i++) {
        if(users_json[i]["iduser"] == id){
            in_users = true;
            break;
        }
    }

    if(!in_users){
        res.writeHead(404, { location: `${encodeURI(req.url)}` }).end();
        return { props: {} };
    }
    
    return { props: {} };
};

export { getServerSideProps }

const UsersId = () => {
    const router = useRouter()
    const { id } = router.query;

    const submitUser = () => {
        console.log("submit user");
        console.log("uid: " + newUserId);
        console.log("nn: " + newNickname);
      }

    /*var users_json = getUsers();

    var in_users = false;
    for (let i = 0; i < users_json.length; i++) {
        if(users_json[i]["iduser"] == id){
            in_users = true;
            break;
        }
    }

    if(!in_users){
        return (
            <Error statusCode={404} />
        );
    }*/

    var userid_json = getUserId(id);
    
    var posts_json = getPosts();

    const [newUserId, setNewUserId] = useState("");
    const [newNickname, setNewNickname] = useState("");

    return (
        <div>
            <div className="m-5">
                <h1 className="text-center">Users with Id</h1>
                <h2 className="text-center">User Id: {id}</h2>
            </div>
            <div className="m-5">
                <h2>User Info:</h2>
            </div>
            <div className="m-5">
                <div className="row">
                    <h4>User Id: {userid_json["iduser"]}</h4>
                </div>
                <div className="row">
                    <h4>Nickname: {userid_json["nickname"]}</h4>
                </div>
            </div>
            <div className="m-5 border border-dark">
              <h1 className="text-center">Update User</h1>
              <div className="row">
                    <div className="col-3 text-center">
                        <h3>Enter New User Id</h3>
                    </div>
                    <div className="col-3 text-center">
                        <h3>Enter New Nickname</h3>
                    </div>
                </div>
                <Form>
                <div className="row">
                    <div className="col-3 text-center">
                        <Form.Group className="mb-3" controlId="formUserId">
                            <Form.Label>User Id</Form.Label>
                            <Form.Control placeholder={userid_json["iduser"]} onChange={(e) => {
                                setNewUserId(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                    <div className="col-3 text-center">
                        <Form.Group className="mb-3" controlId="formNickname">
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control placeholder={userid_json["nickname"]} onChange={(e) => {
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
                <h3>Delete User:</h3>
                <Button variant="danger" onClick={(e) => {deleteUser(id)}}>Delete</Button>
            </div>
            <div className="m-5"></div>
            <div className="m-5">
                <h3>User's Posts:</h3> 
            </div>
            <div className="m-5">
                <table className="table table-sm table-responsive table-hover table-striped">
                    <thead>
                        <tr>
                            <th className="text-center"></th>
                            <th className="text-center">Post ID</th>
                            <th className="text-center">Post Text</th>
                            <th className="text-center">Post Url</th>
                            <th className="text-center">View Posts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts_json.map((post, i) => {
                            return (
                                <tr>
                                    <td scope="row">{i+1}</td>
                                    <td width="15%">{post["postid"]}</td>
                                    <td className="text-center" width="35%">{post["posttxt"]}</td>
                                    <td className="text-center" width="25%">{post["posturl"]}</td>
                                    <td className="text-center" width="15%">
                                        <Link href={"/posts/" + post["postid"]}>
                                            <Button variant="primary">View Post</Button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
      )
}

export default UsersId
  