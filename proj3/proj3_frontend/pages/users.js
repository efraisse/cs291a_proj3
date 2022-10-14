import React from "react";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

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

const Users = () => {
    var users_json = getUsers();

    return (
        <div>
            <div className="m-5">
                <h1 className="text-center">Users</h1>
            </div>
            <div className="m-5">
                <table className="table table-sm table-responsive table-hover table-striped">
                    <thead>
                        <tr>
                            <th className="text-center"></th>
                            <th className="text-center">User ID</th>
                            <th className="text-center">View User's Posts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users_json.map((user, i) => {
                            return (
                                <tr>
                                    <td scope="row">{i+1}</td>
                                    <td width="30%">{user["iduser"]}</td>
                                    <td className="text-center" width="30%">
                                        <Link href={"/users/" + user["iduser"]}>
                                            <Button variant="primary">View Posts</Button>
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

export default Users