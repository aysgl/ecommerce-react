import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user";

export default function User() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.items);
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    console.log(users);
    return (
        <div>
            <h1>users</h1>
            {users &&
                users.map((user) => <p key={user.title}>{user.desc}</p>)
            }
        </div>
    );
}