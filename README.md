This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `Run npm install in root directory`

Installs all the server dependencies

### `Run npm install in client directory`

Installs all the client dependencies

### `Run npm run dev in root directory`

Starts both frontend and backend servers

### `Download ngrok from https://ngrok.com/download`

Run ngrok http 5000 in cmd within the ngrok folder( To make localhost public )

## Other steps

---

Create a Shopify store and configure a webhook to post to ‘{your_current_ngrok_domain}/api/orders’
Example: https://03d077f4.ngrok.io/api/orders
Change the API calls accordingly in the frontend files – App.js and /components/EditForm.js
You are good to go!
