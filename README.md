
# Student Science & Technology Festival Web Page

This project is a single-page web application built with React, but without any build tools like Vite or Create React App.

## Core Concept: Buildless React

To ensure the project runs directly in the browser without any compilation step, it follows two key principles:

1.  **No JSX:** Browsers cannot read JSX syntax (`<div />`). All components have been written using pure JavaScript with `React.createElement()`.
2.  **CDN Imports:** React and ReactDOM are loaded directly from a CDN (`https://esm.sh`) inside each JavaScript file.

This approach makes the project extremely lightweight and simple to deploy on any static hosting service.

## How to Deploy to Vercel

1.  **Upload to GitHub:** Make sure all the files in this project, including `vercel.json`, are in a GitHub repository.
2.  **Import to Vercel:**
    *   Log in to Vercel and select "Add New..." -> "Project".
    *   Import the GitHub repository you just created.
3.  **Deploy:**
    *   Vercel will automatically detect the `vercel.json` file.
    *   You do not need to change any settings.
    *   Simply click the **"Deploy"** button.

The `vercel.json` file is configured to treat this project as a collection of static files, which ensures all files are served correctly.
