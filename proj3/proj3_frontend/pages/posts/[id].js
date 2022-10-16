import React, { useState } from 'react';
import { useRouter } from 'next/router';
//import ErrorPage from 'next/error';
import Error from 'next/error';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


/*
return {
      notFound: true,
    };*/


/*
async function getInitialProps({ query, res }) {
    var posts_json = getPosts();

    var in_posts = false;
    for (let i = 0; i < posts_json.length; i++) {
        if(posts_json[i]["postid"] == id){
            in_posts = true;
            break;
        }
    }

    var id = query

    return { in_posts, id }
}
PostsId.getInitialProps = getInitialProps
*/

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

const getPostId = (i) => {
  var postid_json = {
    "test": 11,
    "iduser": 5,
    "postid": 8,
    "posttxt": "text",
    "posturl": "url",
  };
  return postid_json;
}

const getComments = () => {
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
}

const deletePost = (id) => {
    console.log("delete " + id);
}

const getServerSideProps = async ({query, req, res}) => {
    var posts_json = getPosts();

    const {id} = query;

    var in_posts = false;
    for (let i = 0; i < posts_json.length; i++) {
        if(posts_json[i]["postid"] == id){
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
    const router = useRouter();
    const { id } = router.query;

    const submitPost = () => {
      console.log("submit post");
      console.log("uid: " + newUserId);
      console.log("pid: " + newPostId);
      console.log("ptxt: " + newPostText);
      console.log("purl: " + newPostURL);
    }
    
    /*var posts_json = getPosts();

    var in_posts = false;
    for (let i = 0; i < posts_json.length; i++) {
        if(posts_json[i]["postid"] == id){
            in_posts = true;
            break;
        }
    }

    if(!in_posts){
        return (
            <Error statusCode={404} />
        );
    }*/

    var postid_json = getPostId(id);

    var comments_json = getComments();

    const [newUserId, setNewUserId] = useState("");
    const [newPostId, setNewPostId] = useState("");
    const [newPostText, setNewPostText] = useState("");
    const [newPostURL, setNewPostURL] = useState("");

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
              <h4>User Id: {postid_json["iduser"]}</h4>
            </div>
            <div className="row">
              <h4>Post Id: {postid_json["postid"]}</h4>
            </div>
            <div className="row">
              <h4>Post Text: {postid_json["posttxt"]}</h4>
            </div>
            <div className="row">
              <h4>Post URL: {postid_json["posturl"]}</h4>
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
                          <Form.Control placeholder={postid_json["iduser"]} onChange={(e) => {
                              setNewUserId(e.target.value);
                          }}/>
                      </Form.Group>
                  </div>
                  <div className="col-3 text-center">
                      <Form.Group className="mb-3" controlId="formPostId">
                          <Form.Label>Post Id</Form.Label>
                          <Form.Control placeholder={postid_json["postid"]} onChange={(e) => {
                              setNewPostId(e.target.value);
                          }}/>
                      </Form.Group>
                  </div>
                  <div className="col-3 text-center">
                      <Form.Group className="mb-3" controlId="formText">
                          <Form.Label>Post Text</Form.Label>
                          <Form.Control as="textarea" rows={3} placeholder={postid_json["posttxt"]} onChange={(e) => {
                              setNewPostText(e.target.value);
                          }}/>
                      </Form.Group>
                  </div>
                  <div className="col-3 text-center">
                      <Form.Group className="mb-3" controlId="formImageURL">
                          <Form.Label>Image URL</Form.Label>
                          <Form.Control placeholder={postid_json["posturl"]} onChange={(e) => {
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
                      <td width="20%">{comment["iduser"]}</td>
                      <td className="text-center" width="70%">{comment["comment"]}</td>
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
  