import React from "react";

import styled from "./Profile.module.scss";
import { useDispatch } from "react-redux";
import SideBar from "../../Components/SideBar/SideBar";

import { EditUser } from "../../ducks/actions/EditAction";
import { setNotification } from "../../ducks/actions/NotificationAction";

const regexName = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
const regexUsername = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
const regexEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
const regexStreet = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
const regexCity =
  /([a-zA-Zа-яА-ЯёЁ]+[-]?[a-zA-Zа-яА-ЯёЁ]*[-]?[a-zA-Zа-яА-ЯёЁ]*[-]?[a-zA-Zа-яА-ЯёЁ]*)/;
const regexZipcode = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
const regexPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const regexWebsite =
  /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;

interface Props {
  name: string;
}

const Profile: React.FC<Props> = ({ name }, user): JSX.Element => {
  const dispatch = useDispatch();
  const [edit, setEdit] = React.useState({
    name: "",
    username: "",
    email: "",
    street: "",
    city: "",
    zipcode: "",
    phone: "",
    website: "",
    comment: "",
  });
  // const edituser = useSelector((state: RootState) => state.edituser);

  const handleEdit = (user: []) => {
    console.log("edit", user);
    const userEdit = {
      ...user,
      name: edit.name,
      username: edit.username,
      email: edit.email,
      street: edit.street,
      city: edit.city,
      zipcode: edit.zipcode,
      phone: edit.phone,
      website: edit.website,
    };
    if (edit.name.match(regexName)) {
      dispatch(EditUser(userEdit));
    } else {
      dispatch(setNotification("Введите корректные данные", 400, 3));
    }
    if (edit.username.match(regexUsername)) {
      dispatch(EditUser(userEdit));
    } else {
      dispatch(setNotification("Введите корректные данные", 400, 3));
    }
    if (edit.email.match(regexEmail)) {
      dispatch(EditUser(userEdit));
    } else {
      dispatch(setNotification("Введите корректные данные", 400, 3));
    }
    if (edit.street.match(regexStreet)) {
      dispatch(EditUser(userEdit));
    } else {
      dispatch(setNotification("Введите корректные данные", 400, 3));
    }
    if (edit.city.match(regexCity)) {
      dispatch(EditUser(userEdit));
    } else {
      dispatch(setNotification("Введите корректные данные", 400, 3));
    }
    if (edit.zipcode.match(regexZipcode)) {
      dispatch(EditUser(userEdit));
    } else {
      dispatch(setNotification("Введите корректные данные", 400, 3));
    }
    if (edit.phone.match(regexPhone)) {
      dispatch(EditUser(userEdit));
    } else {
      dispatch(setNotification("Введите корректные данные", 400, 3));
    }
    if (edit.website.match(regexWebsite)) {
      dispatch(EditUser(userEdit));
    } else {
      dispatch(setNotification("Введите корректные данные", 400, 3));
    }
    setEdit({
      name: "",
      username: "",
      email: "",
      street: "",
      city: "",
      zipcode: "",
      phone: "",
      website: "",
      comment: "",
    });
  };

  return (
    <React.Fragment>
      <div className={styled.container}>
        <div className={styled.headerline}>
          <div className={styled.header}>Профиль пользователя</div>
          <button type="submit" className={styled.btn}>
            <p className={styled.text}>Редактировать</p>
          </button>
        </div>
        <div className={styled.frame}>
          <div>
            <p className={styled.name}>Name</p>
            <input
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
              value={edit.street}
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
              value={edit.city}
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
              value={edit.zipcode}
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
              className={styled.comment}
              type="text"
              onChange={(e) =>
                setEdit({
                  ...edit,
                  comment: e.target.value,
                })
              }
            ></input>
          </div>
          <button onClick={() => handleEdit(user)} className={styled.disable}>
            <p
              onClick={() => console.log("click user", user.user)}
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
