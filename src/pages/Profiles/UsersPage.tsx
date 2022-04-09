import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { EditUser } from '../../ducks/actions/EditAction';

import { Notification } from '../../Components/Notification/Notification';
import Profile from '../../Components/Profile/Profile';

export type RouteParams =
  | {
      id: undefined;
    }
  | Record<string, string | any>;

const UsersPage = (): JSX.Element => {
  const params = useParams<RouteParams>();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const item: string = `${params.id}`;
  }, [ dispatch, params.id ]);
  return (
    <React.Fragment>
      <Notification />
      <Profile id={params.id} />
    </React.Fragment>
  );
};

export default UsersPage;
