import React from "react";

import styled from "./Profile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState, ICard } from "../../types";
import SideBar from "../../Components/SideBar/SideBar";

import { EditUser } from "../../ducks/actions/EditAction";

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
  const edituser = useSelector((state: RootState) => state.edituser);

  const handleEdit = (user: any) => {
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
    dispatch(EditUser(userEdit));
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
        {/* {Array.isArray(edituser) &&
        edituser.map((user: any, i: any) => {
          return( */}
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
        {/* // ) })}  */}
      </div>
      <SideBar />
    </React.Fragment>
  );
};

export default Profile;
