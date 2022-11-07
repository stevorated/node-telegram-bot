# Node Telegram bot

## setup

1. Install node dependencies
   `npm i`
   or
   `npm install`
2. Install ngrok, [click here to download](https://ngrok.com/download). go through the download process according to the instruction for your os (i.e windows).

3. Start ngrok on port 5000
```
ngrok http 5000
```

4. Copy the Forwarding address from the log you get from ngrok in the terminal

```
Forwarding                    https://copy.this.link.and.paste.in.env.file -> http://localhost:5000
```

5. Create a dotenv file `.env` in root directory of your project.

```
TOKEN=YOUR_TOKEN_FROM_BOTFATHER_GOES_HERE
SERVER_URL=FORWARDING_ADDRESS_GOES_HERE
```

6. Start the project either in development mode

```
node run dev
```

Or in production mode

```
node run start
```

now any message you send to the bot will be logged to the console, and sent back to the client.
