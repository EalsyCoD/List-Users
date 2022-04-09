export interface RootState {
  users: UserInitialState;
  filter: FilterInitialState;
  edituser: EditUserState;
  edit: EditProfileState;
  loader: LoaderState;
  notification: NotificationState;
}

export type NotificationState = {
  message: string | null;
  status: number | null;
};

export type NotificationAction = {
  type: string;
  payload: NotificationState;
};

export type DispatchNotificationType = (
  args: NotificationAction
) => NotificationAction;

export type ICard = {
  id: number;
  name: string;
  username: string;
  email: string;
  company: Company;
  address: UserAddress;
  phone: number;
  website: string;
};

export type Company = {
  name: string;
};

export type LoaderState = {
  status: boolean;
};

export type EditProfileState = {
items: IUsers[],
id?: number,
}

export type IUsers = {
  id: number;
  name: string;
  username: string;
  email: string;
  company: Company;
  address: UserAddress;
  phone: number;
  website: string;
}

export type LoaderAction = {
  type: string;
  payload: LoaderState;
};

export type DispatchLoaderType = (args: LoaderAction) => LoaderAction;

export type EditState = {
  users: Array<string>;
  id?: number;
};

export type EditAction = {
  type: string;
  payload: EditProfileState;
};

export type FilterInitialState = {
  filter: [];
};

export type FilterAction = {
  type: string;
  payload: FilterInitialState;
};

export type DispatchFilter = (args: FilterAction) => FilterAction;

export type UserInitialState = [
  {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: number;
      geo: {
        lat: number;
        lng: number;
      };
    };
    phone: number;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
];

export type UserAction = {
  type: string;
  payload: UserInitialState;
};

export type UserAddress = {
  street: string;
  city: string;
  zipcode: number;
};

export type EditUserState = {
  items: ICard[];
  id?: number,
};

export type EditUserAction = {
  type: string;
  payload: EditUserState;
};

export type DispatchUserType = (args: UserAction) => UserAction;
