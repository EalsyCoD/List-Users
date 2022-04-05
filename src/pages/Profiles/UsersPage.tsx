import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUsers } from "../../ducks/actions/UserProfileAction";

import Profile from "../../Components/Profile/Profile";

export type RouteParams =
  | {
      name: any;
      id: undefined;
    }
  | Record<string, string | undefined>;

const UsersPage = (): JSX.Element => {
  const params = useParams<RouteParams>();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const name: any = `/${params.name}`;
    dispatch(setUsers(name));
  }, [dispatch, params.name]);
  return (
    <React.Fragment>
      <Profile name={params.name} />
    </React.Fragment>
  );
};

export default UsersPage;


