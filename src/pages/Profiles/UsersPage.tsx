import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsers } from "../../ducks/actions/UserProfileAction";

import { Notification } from "../../Components/Notification/Notification";
import Profile from "../../Components/Profile/Profile";

export type RouteParams =
  | {
      name: string;
      id: undefined;
    }
  | Record<string, string | any>;

const UsersPage = (): JSX.Element => {
  const params = useParams<RouteParams>();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const name: string = `/${params.name}`;
    dispatch(setUsers(name));
  }, [dispatch, params.name]);
  return (
    <React.Fragment>
      <Notification />
      <Profile name={params.name} />
    </React.Fragment>
  );
};

export default UsersPage;
