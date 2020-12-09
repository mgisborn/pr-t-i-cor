const express = require("express");
const bodyParser = require("body-parser");
const FormData = require("form-data");
const axios = require("axios");
const { response } = require("express");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.json({ type: "text/*" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  return res.status(200).json({
    status: "ok",
  });
});

app.post("/authenticate", async (req, res) => {
  try {
    const { client_id, redirect_uri, client_secret, code } = req.body;
    const accessTokenResponse = await axios.post(
      `https://github.com/login/oauth/access_token`,
      {
        client_id,
        redirect_uri,
        client_secret,
        code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const { access_token, scope, token_type } = accessTokenResponse.data;
    console.log(accessTokenResponse.data)

    const userInfoResponse = await axios.get("https://api.github.com/user", {
      params: {
        access_token,
        scope,
        token_type,
      },
      headers: {
          "Authorization": `Bearer ${access_token}`
      }
    });
    res.status(200).json({
        user: userInfoResponse.data,
        access_token,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
