import auth0 from "auth0-js";

export default class Auth {
  constructor(history) {
    this.history = history;
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
    this.auth0.logout();
    this.removeSession();
    this.history.push("/");
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
}
