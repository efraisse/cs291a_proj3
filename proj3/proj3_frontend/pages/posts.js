import React from "react";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

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

const Posts = () => {
    var posts_json = getPosts();
    
    return (
        <div>
            <div className="m-5">
                <h1 className="text-center">Posts</h1>
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
                        </tr>
                    </thead>
                    <tbody>
                        {posts_json.map((post, i) => {
                            return (
                                <tr>
                                    <td scope="row">{i+1}</td>
                                    <td width="15%">{post["iduser"]}</td>
                                    <td width="15%">{post["postid"]}</td>
                                    <td className="text-center" width="40%">Post</td>
                                    <td className="text-center" width="20%">
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
    );
};

export default Posts