import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/users';
import UserCard from '../UserCard';
import './index.css';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => (state.users?.users));

  useEffect(() => {
    const fetching = async () => {
      await dispatch(fetchUsers());
    };
    fetching();
  }, []);

  return (
    <div className="home">
      <h1>Home</h1>
      <div className="users-container">
        {
            users !== null
              ? users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))
              : null
        }
      </div>
    </div>
  );
};

export default Home;
