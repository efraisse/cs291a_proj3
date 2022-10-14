import React from 'react';
import { useRouter } from 'next/router';
//import ErrorPage from 'next/error';
import Error from 'next/error';
import Button from 'react-bootstrap/Button';


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

    var comments_json = getComments();

    return (
        <div>
          <div className="m-5">
            <h1 className="text-center">Posts with Id</h1>
            <h2 className="text-center">Post Id: {id}</h2>
          </div>
          <div className="m-5">
            <h2>Post</h2>
          </div>
          <div className="m-5">
            <h3>Update Post:</h3>
          </div>
          <div className="m-5">
            <h3>Delete Post:</h3>
            <Button variant="danger" onClick={(e) => {deletePost(id)}}>Delete</Button>
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
  