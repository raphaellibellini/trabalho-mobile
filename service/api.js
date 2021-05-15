class Api {
  constructor() {
    this.baseUrl = "http://localhost:9090/myhero";
    //this.baseUrl = "https://trabalho-mobile-backend.herokuapp.com/myhero";
  }

  getUrl(path) {
    let url = `${this.baseUrl}${path}`;
    return url;
  }
}

export default (new Api()); // singleton object