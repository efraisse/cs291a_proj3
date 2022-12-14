import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
//import ErrorPage from 'next/error';
import Error from 'next/error';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

/*const getPosts = () => {
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
}*/

/*const getPostId = (i) => {
  var postid_json = {
    "test": 11,
    "iduser": 5,
    "postid": 8,
    "posttxt": "text",
    "posturl": "url",
  };
  return postid_json;
}*/

/*const getComments = () => {
    var comments_json = [
        {
          "iduser": 1,
          "comment": "very nice",
        },
        {
          "iduser": 5,
          "comment": "This is SO COOL!!!!",
        }
    ];
    return comments_json;
}*/

const getServerSideProps = async ({query, req, res}) => {
    //var posts_json = getPosts();
    var rails_url = "http://localhost:3001";
    var endpoint = "/posts";
    var response = await fetch(rails_url+endpoint);
    var data = await response.json();
    //console.log(data);
    var posts_json = data["data"];
    //console.log(posts_json);

    const {id} = query;

    var in_posts = false;
    for (let i = 0; i < posts_json.length; i++) {
        if(posts_json[i]["attributes"]["idpost"] == id){
            in_posts = true;
            break;
        }
    }

    if(!in_posts){
        res.writeHead(404, { location: `${encodeURI(req.url)}` }).end();
        return { props: {} };
    }
    
    return { props: {} };
};

export { getServerSideProps }

const PostsId = () => {
    const [postid_json, setPostid_json] = useState([]);
    const [comments_json, setComments_json] = useState([]);

    useEffect(() => {

        var rails_url = "http://localhost:3001";
        var endpoint = "/posts/"+id;
        fetch(rails_url+endpoint)
            .then(response => 
                response.json().then(data => {
                    setPostid_json(data["data"]);
                    var endpoint2 = "/comments";
                    fetch(rails_url+endpoint2)
                      .then(response2 =>
                        response2.json().then(data2 => {
                          var arr = data2["data"];
                          var i = 0;
                          while (i<arr.length){
                            if(arr[i]["attributes"]["post_id"] != id){
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
                          setComments_json(arr);
                          setLoading(false);
                        }))
            }))
    }, [])
    
    const router = useRouter();
    const { id } = router.query;

    const submitPost = () => {
      console.log("submit post");
      console.log("uid: " + newUserId);
      console.log("pid: " + newPostId);
      console.log("ptxt: " + newPostText);
      console.log("purl: " + newPostURL);

      if(newUserId == "" || newPostId == ""){
          window.alert("Missing Ids");
          return;
      }

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
      var endpoint = "/posts/"+postid_json["attributes"]["idpost"];
      fetch(rails_url+endpoint, opts)
          .then(response => {
              window.location.reload();
          })
    }

    const deletePost = (i) => {
      console.log("delete " + i);

      const opts = {
          method: 'DELETE',
      };

      var rails_url = "http://localhost:3001";
      var endpoint = "/posts/"+i;
      fetch(rails_url+endpoint, opts)
          .then(response => {
              window.location.reload();
          })
    }

    //var postid_json = getPostId(id);
    
    const [loading, setLoading] = useState(true);

    //var comments_json = getComments();

    const [newUserId, setNewUserId] = useState("");
    const [newPostId, setNewPostId] = useState("");
    const [newPostText, setNewPostText] = useState("");
    const [newPostURL, setNewPostURL] = useState("");

    if(loading){
        return <h1>Loading</h1>
    }

    return (
        <div>
          <div className="m-5">
            <h1 className="text-center">Posts with Id</h1>
            <h2 className="text-center">Post Id: {id}</h2>
          </div>
          <div className="m-5">
            <h2>Post:</h2>
          </div>
          <div className="m-5">
            <div className="row">
              <h4>User Id: {postid_json["attributes"]["user_id"]}</h4>
            </div>
            <div className="row">
              <h4>Post Id: {postid_json["attributes"]["idpost"]}</h4>
            </div>
            <div className="row">
              <h4>Post Text: {postid_json["attributes"]["text"]}</h4>
            </div>
            <div className="row">
              <h4>Post URL: {postid_json["attributes"]["imageurl"]}</h4>
            </div>
          </div>
          <div className="m-5 border border-dark">
              <h1 className="text-center">Update Post</h1>
              <div className="row">
                  <div className="col-3 text-center">
                      <h3>Enter New User Id</h3>
                  </div>
                  <div className="col-3 text-center">
                      <h3>Enter New Post Id</h3>
                  </div>
                  <div className="col-3 text-center">
                      <h3>Enter New Text Post</h3>
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
                          <Form.Control placeholder={postid_json["attributes"]["user_id"]} onChange={(e) => {
                              setNewUserId(e.target.value);
                          }}/>
                      </Form.Group>
                  </div>
                  <div className="col-3 text-center">
                      <Form.Group className="mb-3" controlId="formPostId">
                          <Form.Label>Post Id</Form.Label>
                          <Form.Control placeholder={postid_json["attributes"]["idpost"]} onChange={(e) => {
                              setNewPostId(e.target.value);
                          }}/>
                      </Form.Group>
                  </div>
                  <div className="col-3 text-center">
                      <Form.Group className="mb-3" controlId="formText">
                          <Form.Label>Post Text</Form.Label>
                          <Form.Control as="textarea" rows={3} placeholder={postid_json["attributes"]["text"]} onChange={(e) => {
                              setNewPostText(e.target.value);
                          }}/>
                      </Form.Group>
                  </div>
                  <div className="col-3 text-center">
                      <Form.Group className="mb-3" controlId="formImageURL">
                          <Form.Label>Image URL</Form.Label>
                          <Form.Control placeholder={postid_json["attributes"]["imageurl"]} onChange={(e) => {
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
            <h3>Delete Post:</h3>
            <Button variant="danger" onClick={(e) => {deletePost(id)}}>Delete</Button>
          </div>
          <div className="m-5"></div>
          <div className="m-5">
            <h3>Comments:</h3> 
          </div>
          <div className="m-5">
            <table className="table table-sm table-responsive table-hover table-striped">
              <thead>
                <tr>
                  <th className="text-center"></th>
                  <th className="text-center">Commenter User ID</th>
                  <th className="text-center">Comment</th>
                </tr>
              </thead>
              <tbody>
                {comments_json.map((comment, i) => {
                  return (
                    <tr>
                      <td scope="row">{i+1}</td>
                      <td width="20%">{comment["attributes"]["user_id"]}</td>
                      <td className="text-center" width="70%">{comment["attributes"]["text"]}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )
}

export default PostsId
  