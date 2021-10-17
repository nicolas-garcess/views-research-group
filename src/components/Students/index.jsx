import React from 'react';
import { useQuery } from 'react-apollo';
import { STUDENTS } from '../../store/user';
import LogOut from '../LogOut';
import UserCard from '../UserCard';
import './index.css';

const Students = () => {
  const { loading, error, data } = useQuery(STUDENTS);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <div className="students">
      <h1>Estudiantes</h1>
      <LogOut />
      <div className="users-container">
        {
          data.students.map((student) => (
            <UserCard key={student.id} user={student} rol="estudiante" />
          ))
        }
      </div>
    </div>
  );
};

export default Students;
