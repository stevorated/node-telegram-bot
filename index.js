require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const { TOKEN, SERVER_URL } = process.env;

const port = process.env.PORT || 5000;
const api = `https://api.telegram.org/bot${TOKEN}`;

const endpoint = `/webhook/${TOKEN}`;

const webhookUrl = SERVER_URL + endpoint;

const app = express();

app.use(bodyParser.json());

const init = async () => {
  const res = await axios.get(`${api}/setWebhook?url=${webhookUrl}`);

  console.log(res.data);
};

app.post(endpoint, async (req, res) => {
  console.log(req.body);

  return res.send();
});

app.listen(port, async () => {
  console.log(`app is running on http://localhost:${port}`);

  await init();
});
