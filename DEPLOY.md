# Deploying to GitHub Pages

This guide outlines the steps to build and deploy your React developer portfolio to GitHub Pages.

## Step 1: Update the Base Path

1. Open `vite.config.js`.
2. Locate the line: `base: '/portfolio/',`
3. Replace `/portfolio/` with your exact GitHub repository name wrapped in forward slashes.
   * *Example*: If your repository is `https://github.com/your-username/my-portfolio`, update the base to:
     ```javascript
     base: '/my-portfolio/',
     ```
   * *Important*: If you are using a **custom domain** (e.g. `yourname.com`) instead of the default `username.github.io/repo`, set the base path to `'/'` (root).

## Step 2: Add Your Assets

1. **Resume PDF**: Replace the placeholder at `public/resume.pdf` with your actual PDF resume. Make sure it is named exactly `resume.pdf`.
2. **Profile Image (Optional)**: If you'd like to show an avatar image in the Hero section instead of the text initials:
   * Drop your image file (e.g., `avatar.jpg` or `avatar.png`) in the `public/` directory.
   * Open `src/sections/Hero.jsx`, search for `avatar.jpg`, and uncomment the `<img>` tag block.

## Step 3: Run the Deploy Script

1. Open your terminal in the project directory (`d:\Jagadeesh-Portfolio`).
2. Run the deployment command:
   ```bash
   npm run deploy
   ```
3. This command will:
   * Automatically run `predeploy` (which builds the production files into the `dist/` directory).
   * Create or update a local `gh-pages` branch.
   * Push the built assets in `dist/` directly to the `gh-pages` branch of your remote repository.

## Step 4: Enable GitHub Pages in Your Repository Settings

1. Go to your repository page on GitHub.
2. Click on **Settings** (the gear icon on the top tab).
3. In the left sidebar, under the **Code and automation** section, click on **Pages**.
4. Under **Build and deployment**:
   * Set **Source** to **Deploy from a branch**.
   * Under **Branch**, select `gh-pages` from the dropdown list, and ensure the folder is set to `/ (root)`.
   * Click **Save**.
5. Give GitHub 1 to 2 minutes to compile. A box will appear at the top of the Pages screen showing your live URL (e.g., `https://your-username.github.io/my-portfolio/`).
