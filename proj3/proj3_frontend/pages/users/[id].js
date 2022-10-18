import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
//import ErrorPage from 'next/error';
import Error from 'next/error';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


/*const getUsers = () => {
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
}*/

/*const getUserId = (i) => {
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
}*/

const getServerSideProps = async ({query, req, res}) => {
    //var users_json = getUsers();
    var rails_url = "http://localhost:3001";
    var endpoint = "/users";
    var response = await fetch(rails_url+endpoint);
    var data = await response.json();
    //console.log(data);
    var users_json = data["data"];

    const {id} = query;

    var in_users = false;
    for (let i = 0; i < users_json.length; i++) {
        if(users_json[i]["attributes"]["iduser"] == id){
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
    const [userid_json, setUserid_json] = useState([]);
    const [posts_json, setPosts_json] = useState([]);

    useEffect(() => {

        var rails_url = "http://localhost:3001";
        var endpoint = "/users/"+id;
        fetch(rails_url+endpoint)
            .then(response => 
                response.json().then(data => {
                    setUserid_json(data["data"]);
                    var endpoint2 = "/posts";
                    fetch(rails_url+endpoint2)
                      .then(response2 =>
                        response2.json().then(data2 => {
                          var arr = data2["data"];
                          var i = 0;
                          while (i<arr.length){
                            if(arr[i]["attributes"]["user_id"] != id){
                              if(arr.length == 1){
                                arr = [];
                                break;
                              }
                              else{
                                arr.splice(i,1);
                              }
                              continue;
                            }
                            i+=1;
                          }
                          setPosts_json(arr);
                          setLoading(false);
                        }))
            }))
    }, [])

    const router = useRouter()
    const { id } = router.query;

    const submitUser = () => {
        console.log("submit user");
        console.log("uid: " + newUserId);
        console.log("nn: " + newNickname);

        if(newUserId == ""){
            window.alert("Missing Id");
            return;
        }

        const opts = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "iduser": newUserId,
                "nickname": newNickname,
            })
        };

        var rails_url = "http://localhost:3001";
        var endpoint = "/users/"+userid_json["attributes"]["iduser"];
        fetch(rails_url+endpoint, opts)
            .then(response => {
                window.location.reload();
            })
    }

    const deleteUser = (i) => {
        console.log("delete " + i);

        const opts = {
            method: 'DELETE',
        };

        var rails_url = "http://localhost:3001";
        var endpoint = "/users/"+i;
        fetch(rails_url+endpoint, opts)
            .then(response => {
                window.location.reload();
            })
    }

    //var userid_json = getUserId(id);
    
    const [loading, setLoading] = useState(true);
    
    //var posts_json = getPosts();

    const [newUserId, setNewUserId] = useState("");
    const [newNickname, setNewNickname] = useState("");

    if(loading){
        return <h1>Loading</h1>
    }

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
                    <h4>User Id: {userid_json["attributes"]["iduser"]}</h4>
                </div>
                <div className="row">
                    <h4>Nickname: {userid_json["attributes"]["nickname"]}</h4>
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
                            <Form.Control placeholder={userid_json["attributes"]["iduser"]} onChange={(e) => {
                                setNewUserId(e.target.value);
                            }}/>
                        </Form.Group>
                    </div>
                    <div className="col-3 text-center">
                        <Form.Group className="mb-3" controlId="formNickname">
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control placeholder={userid_json["attributes"]["nickname"]} onChange={(e) => {
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
                                    <td width="15%">{post["attributes"]["idpost"]}</td>
                                    <td className="text-center" width="35%">{post["attributes"]["text"]}</td>
                                    <td className="text-center" width="25%">{post["attributes"]["imageurl"]}</td>
                                    <td className="text-center" width="15%">
                                        <Link href={"/posts/" + post["attributes"]["idpost"]}>
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
  