import React from 'react';

import styled from './Profile.module.scss';
import { useDispatch } from 'react-redux';
import SideBar from '../../Components/SideBar/SideBar';
import { EditUser } from '../../ducks/actions/EditAction';
import { setNotification } from '../../ducks/actions/NotificationAction';
import { ICard } from '../../types';

const regexName = /^[a-zA-Z][a-zA-Z0-9-_\\.]{1,20}$/;
const regexUsername = /^[a-zA-Z][a-zA-Z0-9-_\\.]{1,20}$/;
const regexEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
const regexStreet = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
const regexCity =
  /([a-zA-Zа-яА-ЯёЁ]+[-]?[a-zA-Zа-яА-ЯёЁ]*[-]?[a-zA-Zа-яА-ЯёЁ]*[-]?[a-zA-Zа-яА-ЯёЁ]*)/;
const regexZipcode = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
const regexPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const regexWebsite =
  /^([a-zA-Z0-9]([a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;

interface Props {
  id: number;
}

const Profile: React.FC<Props> = (item: any) => {
  const dispatch = useDispatch();
  const [ readOnly, setReadOnly ] = React.useState(true);
  const rootClasses = [ styled.text ];
  if (readOnly === false) {
    rootClasses.push(styled.active);
  }

  const [ edit, setEdit ] = React.useState<any>({
    id: item.id,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      city: '',
      zipcode: '',
    },
    phone: '',
    website: '',
    company: {
      name: '',
    },
  });

  const handleEdit = () => {
    const item = {
      id: edit.id,
      name: edit.name,
      username: edit.email,
      email: edit.email,
      address: {
        street: edit.address.street,
        city: edit.address.city,
        zipcode: edit.address.zipcode,
      },
      phone: edit.phone,
      website: edit.website,
      company: {
        name: edit.company.name,
      },
    };
    if (edit.name.match(regexName)) {
      dispatch(EditUser(item));
    } else {
      setTimeout(() => {
        dispatch(setNotification('Введите корректный name', 400, 4));
      }, 50);
    }
    if (edit.username.match(regexUsername)) {
      dispatch(EditUser(item));
    } else {
      setTimeout(() => {
        dispatch(setNotification('Введите корректный usename', 400, 8));
      }, 1000);
    }
    if (edit.email.match(regexEmail)) {
      dispatch(EditUser(item));
    } else {
      setTimeout(() => {
        dispatch(setNotification('Введите корректный email', 400, 12));
      }, 2500);
    }
    if (edit.address.street.match(regexStreet)) {
      dispatch(EditUser(item));
    } else {
      setTimeout(() => {
        dispatch(setNotification('Введите корректный street', 400, 14));
      }, 3500);
    }
    if (edit.address.city.match(regexCity)) {
      dispatch(EditUser(item));
    } else {
      setTimeout(() => {
        dispatch(setNotification('Введите корректный city', 400, 18));
      }, 4500);
    }
    if (edit.address.zipcode.match(regexZipcode)) {
      dispatch(EditUser(item));
    } else {
      setTimeout(() => {
        dispatch(setNotification('Введите корректный zipcode', 400, 22));
      }, 5500);
    }
    if (edit.phone.match(regexPhone)) {
      dispatch(EditUser(item));
    } else {
      setTimeout(() => {
        dispatch(setNotification('Введите корректный phone', 400, 26));
      }, 6500);
    }
    // if (edit.website.match(regexWebsite)) {
    //   dispatch(EditUser(item));
    // } else {
    //   setTimeout(() => {
    //     dispatch(setNotification('Введите корректный website', 400, 10));
    //   }, 7500);
    // }
    setEdit({
      id: 0,
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        city: '',
        zipcode: '',
      },
      phone: '',
      website: '',
      company: {
        name: '',
      },
    });
  };

  return (
    <React.Fragment>
      <div className={styled.container}>
        <div className={styled.headerline}>
          <div className={styled.header}>Профиль пользователя</div>
          <button type="submit" className={styled.btn}>
            <p
              className={rootClasses.join(' ')}
              onClick={() => setReadOnly(false)}
            >
              Редактировать
            </p>
          </button>
        </div>
        <div className={styled.frame}>
          <div>
            <p className={styled.name}>Name</p>
            <input
              readOnly={readOnly}
              value={edit.name}
              className={styled.border}
              type="text"
              onChange={(e) =>
                setEdit({
                  ...edit,
                  name: e.target.value,
                })
              }
            ></input>
          </div>
          <div>
            <p className={styled.username}>User name</p>
            <input
              readOnly={readOnly}
              value={edit.username}
              className={styled.bordername}
              type="text"
              onChange={(e) =>
                setEdit({
                  ...edit,
                  username: e.target.value,
                })
              }
            ></input>
          </div>
          <div>
            <p className={styled.username}>E-mail</p>
            <input
              readOnly={readOnly}
              value={edit.email}
              className={styled.bordername}
              type="text"
              onChange={(e) =>
                setEdit({
                  ...edit,
                  email: e.target.value,
                })
              }
            ></input>
          </div>
          <div>
            <p className={styled.username}>Street</p>
            <input
              readOnly={readOnly}
              value={edit.address.street}
              className={styled.bordername}
              type="text"
              onChange={(e) =>
                setEdit({
                  ...edit,
                  street: e.target.value,
                })
              }
            ></input>
          </div>
          <div>
            <p className={styled.username}>City</p>
            <input
              readOnly={readOnly}
              value={edit.address.city}
              className={styled.bordername}
              type="text"
              onChange={(e) =>
                setEdit({
                  ...edit,
                  city: e.target.value,
                })
              }
            ></input>
          </div>
          <div>
            <p className={styled.username}>Zip-code</p>
            <input
              readOnly={readOnly}
              value={edit.address.zipcode}
              className={styled.bordername}
              type="text"
              onChange={(e) =>
                setEdit({
                  ...edit,
                  zipcode: e.target.value,
                })
              }
            ></input>
          </div>
          <div>
            <p className={styled.username}>Phone</p>
            <input
              readOnly={readOnly}
              value={edit.phone}
              className={styled.bordername}
              type="text"
              onChange={(e) =>
                setEdit({
                  ...edit,
                  phone: e.target.value,
                })
              }
            ></input>
          </div>
          <div>
            <p className={styled.username}>Website</p>
            <input
              readOnly={readOnly}
              value={edit.website}
              className={styled.bordername}
              type="text"
              onChange={(e) =>
                setEdit({
                  ...edit,
                  website: e.target.value,
                })
              }
            ></input>
          </div>
          <div>
            <p className={styled.username}>Comment</p>
            <input
              readOnly={readOnly}
              className={styled.comment}
              type="text"
            ></input>
          </div>
          <button onClick={handleEdit} className={styled.disable}>
            <p
              className={styled.btntext}
            >
              Отправить
            </p>
          </button>
        </div>
      </div>
      <SideBar />
    </React.Fragment>
  );
};

export default Profile;
