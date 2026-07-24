const prepareHeaders = (headers: any) => {
  window.localStorage.getItem('auth-token') &&
    headers.set('Authorization', `Bearer ${window.localStorage.getItem('auth-token')}`);
  headers.set('Content-Type', 'application/json');

  return headers;
};

export default prepareHeaders;
