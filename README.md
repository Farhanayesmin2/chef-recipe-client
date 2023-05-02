### Food Cusine

# At first, I create a new React app with Vite and follow this step:

1.npm create vite@latest top-chef-recipes -- --template react

2. npm install react-router-dom localforage match-sorter sort-by

3. npm run dev ,i use this command for start my project on live

# Secondly, I install tailwind css

### For react vite follow few steps,

1.  npm install -D tailwindcss postcss autoprefixer

2.  npx tailwindcss init -p

3.  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}", ],

@tailwind base;

@tailwind components;

@tailwind utilities;

### After that, I install Flowbite - Tailwind CSS component library and react icons

- npm install flowbite flowbite-react
- plugins: [
  require('flowbite/plugin')
  ]
- npm install react-icons --save

# For Authentication, i use in this project firebase authentication.
- npm install firebase
