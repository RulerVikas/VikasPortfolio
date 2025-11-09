# Vikas Portfolio

Modern personal portfolio built with React and React Router. It showcases About, Skills, Experience, Projects, Certificates, and Contact sections, plus interactive WebGL effects and a 3D model viewer.

## Live Deployment (Vercel)

Once deployed, your site will be available at a Vercel URL (for example, `https://vikas-portfolio.vercel.app/`). See the steps below to deploy.

## Tech Stack

- React 18 and React Router v6
- Styling: Bootstrap 5 and custom CSS
- Visuals: WebGL fluid splash (`webgl-fluid`), custom Aurora shader (`ogl`), and 3D model viewer (`@google/model-viewer`)
- Icons: Font Awesome

## Features

- About page with highlight cards: Education, Specialization, Passion
- 3D model viewer showcasing `/ROBOT 3.glb` with environment lighting
- Projects: Individual and Team projects with preview/code links
- Experience section with internship and role summaries
- Smooth “Back to Top” button and animated visuals

## Getting Started

Prerequisites: Node.js 18+ and npm.

```bash
npm install
npm start
```

- Development server runs at `http://localhost:3000`.
- Build for production:

```bash
npm run build
```

## Project Scripts

- `npm start` — start development server
- `npm run build` — production build to `build/`
- `npm test` — run tests (if any configured)

## Folder Structure

- `src/components/` — UI components (Navbar, ModelViewer, WebGLSplashCursor, MagicBento, Aurora, BackToTop)
- `src/pages/` — page components (Home, About, Skills, Experience, Projects, Certificates, Contact)
- `public/` — static assets (`index.html`, `ROBOT 3.glb` and textures)
- `App.css` — global styles

## Deploy to Vercel

1) Push your repository to GitHub: `RulerVikas/VikasPortfolio`.
2) Sign in at https://vercel.com and click “New Project”.
3) Import the GitHub repo and configure:
   - Framework Preset: “Create React App” (or “Other”)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `build`
4) Click “Deploy”. After the build completes, Vercel gives a live URL.

### Client-side Routing on Vercel

This app uses React Router. If deep links like `/about` show 404s after refresh, add a `vercel.json` with a rewrite to `index.html`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Commit it to the repo and redeploy.

## Environment Variables

No secrets are required. If you add APIs later, configure variables in Vercel under Project Settings → Environment Variables.

## Acknowledgements

- `@google/model-viewer` for 3D model rendering
- `webgl-fluid` and `ogl` for interactive visuals
- Bootstrap and Font Awesome for UI and icons

## License

Personal project — all rights reserved. Contact me for reuse permissions.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
