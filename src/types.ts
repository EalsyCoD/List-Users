export interface RootState {
    users: UserInitialState
    filter: FilterInitialState
}

export type FilterInitialState ={
  filter: any
}

export type FilterAction = {
  type: string,
  payload: FilterInitialState
}

export type DispatchFilter = (args: FilterAction) => FilterAction

export type UserInitialState = [{
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: number,
    geo: {
      lat: number,
      lng: number
    }
  },
  phone: number,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
}
}]



export type UserAction = {
  type: string,
  payload: UserInitialState
}



export type DispatchUserType = (args: UserAction) => UserAction