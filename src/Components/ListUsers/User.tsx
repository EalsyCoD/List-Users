import React from 'react';
import { Link } from 'react-router-dom';
import styled from './UsersList.module.scss';
import { ICard, RootState } from '../../types';
import { useSelector } from 'react-redux';

interface Props {
  data: ICard;
}
const User: React.FC<Props> = () => {
  const users = useSelector((state: RootState) => state.users);
  return (
    <React.Fragment>
      <div className={styled.container}>
        {users.map((data, i) => (
          <div className={styled.border} key={i}>
            <div className={styled.users}>
              <p className={styled.name}>ФИО:</p>{' '}
              <p className={styled.username}>{data.name}</p>
              <Link
                to={`profile/${data.id}`}
                type="submit"
                className={styled.button}
              >
                Подробнее
              </Link>
            </div>
            <div className={styled.users}>
              <p className={styled.name}>город:</p>{' '}
              <p className={styled.username}>{data.address.city}</p>
            </div>
            <div className={styled.users}>
              <p className={styled.name}>компания:</p>{' '}
              <p className={styled.username}>{data.company.name}</p>
            </div>
          </div>
        ))}
        <h1 className={styled.lengthUsers}>
          Найдено {users.length} пользоваталей
        </h1>
      </div>
    </React.Fragment>
  );
};

export { User };
