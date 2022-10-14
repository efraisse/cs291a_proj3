import React from 'react';
import { useRouter } from 'next/router';
//import ErrorPage from 'next/error';
import Error from 'next/error';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';


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
    
    var posts_json = getPosts();

    return (
        <div>
            <div className="m-5">
                <h1 className="text-center">Users with Id</h1>
                <h2 className="text-center">User Id: {id}</h2>
            </div>
            <div className="m-5">
                <h2>User Info</h2>
            </div>
            <div className="m-5">
                <table className="table table-sm table-responsive table-hover table-striped">
                    <thead>
                        <tr>
                            <th className="text-center"></th>
                            <th className="text-center">Post ID</th>
                            <th className="text-center">Post</th>
                            <th className="text-center">View Posts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts_json.map((post, i) => {
                            return (
                                <tr>
                                    <td scope="row">{i+1}</td>
                                    <td width="15%">{post["postid"]}</td>
                                    <td className="text-center" width="60%">Post</td>
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
  