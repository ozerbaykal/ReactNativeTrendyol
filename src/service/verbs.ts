import Client from './instance';

export const getRequest = async (params: object, URL: string) => {
  const response = await Client.get(URL, {params});
  return response;
};

export const postRequest = async (payload: object, URL: string) => {
  const response = await Client.post(URL, payload);
  return response;
};
