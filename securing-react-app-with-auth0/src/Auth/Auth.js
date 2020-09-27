import auth0 from "auth0-js";
const REDIRECT_ON_LOGIN_LOCATION = "redirect_on_login";

export default class Auth {
  constructor(history) {
    this.history = history;
    this.userProfile = null;
    this.requestedScopes = "openid profile email read:courses";
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENTID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK,
      responseType: "token id_token",
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      scope: this.requestedScopes,
    });
  }

  login = () => {
    localStorage.setItem(
      REDIRECT_ON_LOGIN_LOCATION,
      JSON.stringify(this.history.location.pathname)
    );

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
        const resirectLocation =
          REDIRECT_ON_LOGIN_LOCATION === "undifined"
            ? "/"
            : JSON.parse(localStorage.getItem(REDIRECT_ON_LOGIN_LOCATION));

        this.setSession(authResult);
        this.history.push(resirectLocation);
      } else {
        alert("Error accures! Please open console to see details.");
        this.history.push("/");
        console.log(err);
      }
      localStorage.removeItem(REDIRECT_ON_LOGIN_LOCATION);
    });
  }

  setSession(authResult) {
    const expiresAtDate = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    const scopes = authResult.scope || this.requestedScopes || "";

    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAtDate);
    localStorage.setItem("scopes", JSON.stringify(scopes));
  }

  isAuthenticated() {
    const expires_at = JSON.parse(localStorage.getItem("expires_at"));

    return new Date().getTime() < expires_at;
  }

  removeSession() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("scopes");
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

  userHasScope(scopes) {
    const grantedScopes = (
      JSON.parse(localStorage.getItem("scopes")) || ""
    ).split(" ");

    return scopes.every((scope) => grantedScopes.includes(scope));
  }
}
