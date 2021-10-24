export const baseUrl =
  window.location.hostname === "localhost"
    ? `http://localhost:5000`
    : "https://passportjs-auth-server.herokuapp.com/";
export const api = `${baseUrl}/api`;
