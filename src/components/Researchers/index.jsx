import React from 'react';
import { useQuery } from 'react-apollo';
import { RESEARCHERS } from '../../store/user';
import LogOut from '../LogOut';
import UserCard from '../UserCard';
import './index.css';

const Researchers = () => {
  const { loading, error, data } = useQuery(RESEARCHERS);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  return (
    <div className="researchers">
      <h1>Investigadores</h1>
      <LogOut />
      <div className="users-container">
        {
          data.researchers.map((researcher) => (
            <UserCard key={researcher.id} user={researcher} rol="investigador" />
          ))
        }
      </div>
    </div>
  );
};

export default Researchers;
