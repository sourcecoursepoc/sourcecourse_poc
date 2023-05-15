import {
  DB_CONNECTION_REQUEST,
  DB_CONNECTION_SUCCESS,
  DB_CONNECTION_FAILURE,
} from "./actionTypes";

import {
  DBConnectionPostRequest,
  DBConnectionPostSuccess,
  DBConnectionSuccessPayload,
  DBConnectionPostFailure,
  DBConnectionFailurePayload,
} from "./types";


export const dBConnectionPostAction = (name: any, description: any, connectionURL: any, username: any, password:any ): DBConnectionPostRequest => {
  console.log("dBConnectionPostAction");
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
  console.log("dBConnectionPostSuccess");
  return {
    type: DB_CONNECTION_SUCCESS,
    payload: { response },
  };
}

export const dBConnectionPostFailure = (error: any): DBConnectionPostFailure => {
  console.log("dBConnectionPostFailure");
  return {
    type: DB_CONNECTION_FAILURE,
    payload: { error },
  };
}

  