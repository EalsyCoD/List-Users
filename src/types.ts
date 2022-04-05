export interface RootState {
  users: UserInitialState;
  filter: FilterInitialState;
  edituser: EditUserState
  edit: EditState
}


export type EditState = {
  users: any,
  id?: number,
  
}

export type EditAction = {
  type: string
  payload: EditState
}

export type FilterInitialState = {
  filter: any;
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
  id: number,
  name: string,
  username: string,
  email: string,
  address: UserAddress,
  phone: number,
  website: string,
}

export type EditUserAction = {
  type: string;
  payload: EditUserState;
};

export type DispatchUserType = (args: UserAction) => UserAction;
