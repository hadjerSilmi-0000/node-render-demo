# node-render-demo

A simple Node.js and Express web application deployed on [Render](https://render.com), a Platform as a Service (PaaS) provider.

This project was made for **Lab No. 04: Deploy a Web Application on a PaaS Platform**, part of the DevOps & Cloud Computing course (5th-year Software Engineering, UMBB Boumerdes).

## Live demo

https://node-render-demo-tsej.onrender.com/

> The app runs on Render's free tier. If nobody has visited it for a while, the first request can take up to 50 seconds while the instance wakes up.

## Tech stack

- Node.js
- Express
- Git and GitHub
- Render (PaaS)

## Project structure

```
node-render-demo/
├── index.js         # Express server
├── package.json     # Project info, dependencies and start script
├── package-lock.json
└── .gitignore       # Excludes node_modules/ and .env
```

## Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/hadjerSilmi-0000/node-render-demo.git
   cd node-render-demo
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the app:

   ```bash
   npm start
   ```

4. Open http://localhost:3000 in your browser.

## How the deployment works

1. The code is pushed to this GitHub repository.
2. Render pulls the code from the `main` branch.
3. Render runs the build command: `npm install`.
4. Render runs the start command: `npm start`.
5. Render gives the app a public HTTPS URL.

Every new push to `main` triggers an automatic redeploy.

The app reads its port from `process.env.PORT`, because Render decides which port to use. If the variable is not set (local development), it falls back to port `3000`.
