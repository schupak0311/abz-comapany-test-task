import callWebApi from "../helpers/webApiHelper";

const API_URL = "https://frontend-test-assignment-api.abz.agency/api/v1";

export const getCurrentUser = async () => {
  try {
    const response = await callWebApi({
      endpoint: API_URL + "/users/1",
      type: "GET"
    });
    return response.json();
  } catch (e) {
    return null;
  }
};

export const getUsers = async page => {
  try {
    const response = await callWebApi({
      endpoint: API_URL + `/users?page=${page}&count=6`,
      type: "GET"
    });
    return response.json();
  } catch (e) {
    return null;
  }
};

export const registration = async request => {
  const response = await callWebApi({
    endpoint: API_URL + "/users",
    type: "POST",
    attachment: request
  });
  return response.json();
};

export const getToken = async () => {
  try {
    const response = await callWebApi({
      endpoint: API_URL + `/token`,
      type: "GET"
    });
    return response.json();
  } catch (e) {
    return null;
  }
};

export const getUserById = async id => {
  try {
    const response = await callWebApi({
      endpoint: API_URL + `/users/${id}`,
      type: "GET"
    });
    return response.json();
  } catch (e) {
    return null;
  }
};

export const getPositions = async () => {
  try {
    const response = await callWebApi({
      endpoint: API_URL + "/positions",
      type: "GET"
    });
    return response.json();
  } catch (e) {
    return null;
  }
};
