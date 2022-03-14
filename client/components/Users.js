
import React, { useState, useEffect } from "react";
import { fetchUsers } from "../store/users";
import { useDispatch, useSelector } from "react-redux";
 import { Link, Redirect } from "react-router-dom";

function Users(){

  const  userList  = useSelector(state => state.allUsers );
  const { isAdmin } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
   }, []);
    return  isAdmin ? (
      <div>
        {userList.map((user) => (
          <Link key={user.id} to={`/User/${user.id}`}>
            <div>
              <h3>User: {user.username}</h3>
              <h3>Admin: {String(user.isAdmin)}</h3>
              {!isAdmin? null : (
                <>
                  <button>edit</button>
                  <button>delete</button>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>
        ):(<Redirect to="/home" />)
    //
  }





export default Users