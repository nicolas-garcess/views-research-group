import React from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';
import { RESEARCHER, STUDENT } from '../../store/user';
import LogOut from '../LogOut';
import './index.css';

const UserInfo = () => {
  const slug = useParams();
  const query = slug.role === 'investigador' ? RESEARCHER : STUDENT;
  const { loading, error, data } = useQuery(query, {
    variables: { id: slug.id }
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  const selectFieldsPerUser = () => {
    const { role } = slug;
    switch (role) {
      case 'investigador':
        return (
          <>
            <LogOut />
            <p className="user-value">
              Identificador:
              {' '}
              <span>{data.researcher.id}</span>
            </p>
            <p className="user-value">
              Correo electrónico:
              {' '}
              <span>{data.researcher.email}</span>
            </p>
            <p className="user-value">
              Id del proyecto:
              {' '}
              <span>{data.researcher.idProyecto}</span>
            </p>
            <p className="user-value">
              Usuario:
              {' '}
              <span>{data.researcher.usuario}</span>
            </p>
            <p className="user-value">
              Horas de dedicación:
              {' '}
              <span>{data.researcher.horasDedicacion}</span>
            </p>
            <p className="user-value">
              Activo:
              {' '}
              <span>{data.researcher.activo ? 'Sí' : 'No'}</span>
            </p>
          </>
        );
      case 'estudiante':
        return (
          <>
            <LogOut />
            <p className="user-value">
              Identificador:
              {' '}
              <span>{data.student.id}</span>
            </p>
            <p className="user-value">
              Correo electrónico:
              {' '}
              <span>{data.student.email}</span>
            </p>
            <p className="user-value">
              Id del proyecto:
              {' '}
              <span>{data.student.idProyecto}</span>
            </p>
            <p className="user-value">
              Usuario:
              {' '}
              <span>{data.student.usuario}</span>
            </p>
            <p className="user-value">
              Carrera:
              {' '}
              <span>{data.student.carrera}</span>
            </p>
            <p className="user-value">
              Celular:
              {' '}
              <span>{data.student.celular}</span>
            </p>
            <p className="user-value">
              Fecha de ingreso:
              {' '}
              <span>{data.student.fechaIngreso}</span>
            </p>
            <p className="user-value">
              Activo:
              {' '}
              <span>{data.student.activo ? 'Sí' : 'No'}</span>
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="user-info">
      <h1 className="user-title">
        Estudiante:
        {' '}
        {slug.role === 'investigador' ? <span>{data.researcher.nombre}</span> : <span>{data.student.nombre}</span>}
      </h1>
      {selectFieldsPerUser()}
    </div>
  );
};

export default UserInfo;
