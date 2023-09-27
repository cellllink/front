import { ApiHttpService } from "../base.http.service";

class AuthHttpService extends ApiHttpService {
  login() {
    this.post("/auth/login", {
      account: "care",
      password: "card",
    }).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.error(err),
    });
  }
}

export const authHttpService = new AuthHttpService();
