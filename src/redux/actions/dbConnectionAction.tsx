import {
  DB_CONNECTION_REQUEST,
  DB_CONNECTION_SUCCESS,
  DB_CONNECTION_FAILURE,
} from "./actionTypes";

import {
  DBConnectionPostRequest,
  DBConnectionPostSuccess,
  DBConnectionPostFailure,
} from "./types";


export const dBConnectionPostAction = (name: any, description: any, connectionURL: any, username: any, password:any ): DBConnectionPostRequest => {
  return {
    type: DB_CONNECTION_REQUEST,
    name,
    description,
    connectionURL,
    username,
    password
  };
}

export const dBConnectionPostSuccess = (response: any): DBConnectionPostSuccess => {
  return {
    type: DB_CONNECTION_SUCCESS,
    payload: { response },
  };
}

export const dBConnectionPostFailure = (error: any): DBConnectionPostFailure => {
  return {
    type: DB_CONNECTION_FAILURE,
    payload: { error },
  };
}

  