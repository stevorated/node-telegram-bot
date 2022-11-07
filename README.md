# Node Telegram bot

## setup

1. Install node dependencies
   `npm i`
   or
   `npm install`
2. install ngrok [click here to download](https://ngrok.com/download), download according to the instruction for your os (i.e windows).

3. Run ngrok
   and copy the Forwarding address

```
Forwarding                    https://copy.this.link.and.paste.in.env.file -> http://localhost:5000
```

3. Create a dotenv file `.env` in root directory of your project.

```
TOKEN=YOUR_TOKEN_FROM_BOTFATHER_GOES_HERE
SERVER_URL=FORWARDING_ADDRESS_GOES_HERE
```

4. Start the project either in dev mode

```
node run dev
```

or in production mode

```
node run start
```

node any message you send to the bot will be logged to the console, and sent back to the client.
