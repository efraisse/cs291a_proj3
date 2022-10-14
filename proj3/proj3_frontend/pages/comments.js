import React from "react";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

const getComments = () => {
    var comments_json = [
        {
          "iduser": 1,
          "postid": 3,
          "comment": "very nice",
        },
        {
          "iduser": 5,
          "postid": 8,
          "comment": "This is SO COOL!!!!",
        }
    ];

    return comments_json;
}

const Comments = () => {
    var comments_json = getComments();
    
    return (
        <div>
            <div className="m-5">
                <h1 className="text-center">Comments</h1>
            </div>
            <div className="m-5">
                <table className="table table-sm table-responsive table-hover table-striped">
                    <thead>
                        <tr>
                            <th className="text-center"></th>
                            <th className="text-center">Commenter User ID</th>
                            <th className="text-center">Post ID</th>
                            <th className="text-center">Comment</th>
                            <th className="text-center">View Posts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments_json.map((comment, i) => {
                            return (
                                <tr>
                                    <td scope="row">{i+1}</td>
                                    <td width="15%">{comment["iduser"]}</td>
                                    <td width="15%">{comment["postid"]}</td>
                                    <td className="text-center" width="45%">{comment["comment"]}</td>
                                    <td className="text-center" width="15%">
                                        <Link href={"/posts/" + comment["postid"]}>
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

export default Comments