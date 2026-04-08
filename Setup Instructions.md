# Himalaya's Beckon - Setup & Demonstration Guide

This modern Single Page Application (SPA) is built using React and Vite. To demonstrate this website on any computer (not just your local development machine) without breaking it, you cannot simply double-click the `index.html` file. Because it simulates a secure backend fetch for the Treks and Expeditions, it requires a web server to run correctly. 

Follow one of the two guides below to experience the site in its true form.

---

## Option 1: Live Web Deployment (Recommended)
The absolute best way to demonstrate the website on *any* computer or mobile device in the world is to create a production build and host it. Because this is a static frontend, hosting is completely free and requires zero server configuration.

**Via Netlify Drop (Fastest method):**
1. Open up your terminal (Command Prompt/PowerShell/Terminal) inside this project folder.
2. Run the build command to compile your React code into pure, optimized web assets:
   ```bash
   npm run build
   ```
3. You will notice a new folder named `dist/` has been created in your project. This folder contains the entire production-ready website.
4. Go to [Netlify Drop](https://app.netlify.com/drop) in your web browser.
5. Drag and drop that `dist/` folder directly onto the page.
6. Netlify will instantly deploy your site and provide you with a live, public URL that you can send to anyone!

---

## Option 2: Local Setup for Developers
If you are passing the source code files to another computer or another developer who wants to run the system exactly as programmed locally:

### Step 1: Install Node.js
Ensure the target computer has Node.js installed. If not, download and install the LTS version from [nodejs.org](https://nodejs.org/).

### Step 2: Install Project Dependencies
Open your terminal to the directory containing these project files, and run the following command to download the securely pegged React and Framer Motion dependencies:
```bash
npm install
```

### Step 3: Run the Local Server
Boot up the Vite development server by running:
```bash
npm run dev
```
The terminal will output a local network address (typically `http://localhost:5173`). Have the user open this specific URL in their browser (Chrome/Edge/Firefox) to view the incredibly smooth, responsive application exactly as intended!

*Pro Tip: If you want to view the local server on your phone while connected to the same Wi-Fi network, start the server using `npm run dev -- --host` instead!*
