import auth0 from "auth0-js";

export default class Auth {
  constructor(history) {
    this.history = history;
    this.userProfile = null;
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENTID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email",
    });
  }

  login = () => {
    this.auth0.authorize();
  };

  logout = () => {
    this.auth0.logout({
      clientID: process.env.REACT_APP_AUTH0_CLIENTID,
      redirectUri: process.env.REACT_APP_AUTH0_LOGOUT,
    });
    this.userProfile = null;
    this.removeSession();
  };

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        //Permanenet solution
        this.setSession(authResult);
        this.history.push("/");
      } else {
        alert("Error accures! Please open console to see details.");
        this.history.push("/");
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    const expiresAtDate = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAtDate);
  }

  isAuthenticated() {
    const expires_at = JSON.parse(localStorage.getItem("expires_at"));

    return new Date().getTime() < expires_at;
  }

  removeSession() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  getAccessTocken() {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) return accessToken;

    throw new Error("No access token found!");
  }

  getUserProfile = (cb) => {
    if (this.userProfile) return cb(this.userProfile);
    this.auth0.client.userInfo(this.getAccessTocken(), (err, profile) => {
      if (profile) this.userProfile = profile;
      cb(profile, err);
    });
  };
}
