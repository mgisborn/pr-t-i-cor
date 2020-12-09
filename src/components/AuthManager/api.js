import { PROXY_URL, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from "../../config";

export class AuthApi {
  static async getAccessToken({ code }) {
    const response = await fetch(PROXY_URL, {
      method: "POST",
      body: JSON.stringify({
        code,
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        client_secret: CLIENT_SECRET
      }),
    });
    const body = await response.json();
    return body;
  }
}
