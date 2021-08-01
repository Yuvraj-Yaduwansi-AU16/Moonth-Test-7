import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import { getusers, setSelectedUser } from '../../actions';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const selected_user = useSelector((state) => state.selected_user);
  useEffect(() => {
    dispatch(getusers());
    // eslint-disable-next-line
  }, []);
  const getDetails = (user) => {
    dispatch(setSelectedUser(user));
  };
  return (
    <main className="posts">
      <div className="post-container">
        <h1 className="text-warning">Users List</h1>
        <div className="post-list">
          {users.map((user) => {
            return (
              <div
                key={user.id}
                className="post-list-item"
                onClick={() => getDetails(user)}
              >
                <h2 className="text-white">{user.name}</h2>
                <p className="text-warning">{user.email}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="post-details">
        <h1 className="mx-5 text-warning">User Details</h1>
        <div className="post-list-item">
          <h4 className="text-white">{selected_user.name}</h4>
          <p className="text-white">
            Username :{' '}
            <span className="text-warning">{selected_user.username}</span>{' '}
          </p>
          <p className="text-white">
            Email : <span className="text-warning">{selected_user.email}</span>{' '}
          </p>
          {selected_user.address && (
            <p className="text-white">
              Address :
              <span className="text-warning">
                {selected_user.address.street} ,{selected_user.address.suite} ,
                {selected_user.address.city} ,{selected_user.address.zipcode} .
              </span>
            </p>
          )}
          <p className="text-white">
            Phone : <span className="text-warning">{selected_user.phone}</span>{' '}
          </p>
          <p className="text-white">
            Website :{' '}
            <span className="text-warning">{selected_user.website}</span>{' '}
          </p>
          {selected_user.company && (
            <p className="text-white">
              Company :{' '}
              <span className="text-warning">{selected_user.company.name}</span>{' '}
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Users;
