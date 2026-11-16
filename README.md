# Mohammad Bilal Sikandar — Express Portfolio Website (Assignment 2)

## About the Project

This is my personal portfolio website for INFR3120 Web and Scripting Programming.

For this assignment I rebuilt my Assignment 1 portfolio using Node.js, Express and EJS templates. It has four pages: Home, About Me, Projects, and Contact.

## Links

- **Live Website:** https://expressjs-portfolio-e1vi.onrender.com
- **GitHub Repository:** https://github.com/Bilal682-7/expressjs-portfolio

## Website Pages

- **Home (`views/index.ejs`):** An introduction about me and my three areas of interest.
- **About Me (`views/about.ejs`):** My education, skills, experience, photo, and introduction video.
- **Projects (`views/projects.ejs`):** Four academic projects shown as Bootstrap cards.
- **Contact (`views/contact.ejs`):** My contact information and a message form with HTML5 validation.

## How the Project Is Built

- **Express Generator:** The project was created with `npx express-generator --view=ejs portfolio-site`, which set up `app.js`, `bin/www`, `routes/`, `views/` and `public/`.
- **Routes:** All four routes are in `routes/index.js`. Each one uses `res.render` to display a view.
- **Views:** Each page is a separate `.ejs` file in `views/`.
- **Partials:** The shared header and footer are in `views/partials/`. Every page includes them with `<%- include('partials/header') %>` and `<%- include('partials/footer') %>`.
  - `header.ejs` has the `<head>`, Bootstrap, Font Awesome and the navbar.
  - `footer.ejs` has the GitHub and LinkedIn links and the Bootstrap script.
- **Static files:** Images, videos and CSS are in the `public/` folder (`public/images`, `public/videos`, `public/stylesheets`). Express serves them with `express.static`, so paths start with `/`, like `/images/Profile.jpg`.

## Bootstrap and Font Awesome

I used **Bootstrap 5** for the navbar, grid layout, cards, list groups, and form styling. The layout is responsive: the navbar collapses into a menu on small screens, and the cards stack into one column on phones.

I used **Font Awesome 6** icons in the navbar, the cards, the skills list, the contact section, and the footer links.

Both are loaded from a CDN in `views/partials/header.ejs`. My own styles are in `public/stylesheets/custom.css`.

## Reused From Assignment 1

My page text, images, introduction video, colour scheme, gradients and contact form fields come from my own Assignment 1, as allowed by the instructor. The views were rewritten as new `.ejs` files. My three Assignment 1 CSS files for desktop, tablet and mobile were replaced by Bootstrap's responsive grid, and `custom.css` keeps the same colours.

## Colours and Gradients

The main colours are carried over from Assignment 1:

- `#0B1426`: dark navy, used for the main background.
- `#172554`: navy blue, used in the navbar and backgrounds.
- `#2563EB`: bright blue, used for buttons and highlights.
- `#5EEAD4`: light teal, used for headings and accents.
- `#E2E8F0`: light grey, used for the main text.

The navbar uses `linear-gradient(135deg, #0b1426, #172554, #1e40af)` and the Home page hero uses `linear-gradient(to right, #172554, #0f2944)`.

## Code Sources and Citations

- **Express Generator:** generated project structure (`app.js`, `bin/www`, the route and view setup). https://expressjs.com/en/starter/generator.html
- **Bootstrap 5.3.3** (CDN): navbar, grid, cards and form styling. https://getbootstrap.com
- **Font Awesome 6.5.2** (CDN): icons. https://fontawesome.com
- **INFR3120 course materials:** Node.js and Express concepts from the MEAN stack lecture slides. Used weeks 4 and onwards course material for reference and help in drafting parts of this assignment. 
- **Claude (Anthropic AI assistant):** helped me initially draft and also understand parts of the EJS partials, the routes, the page templates and `custom.css`.

## Testing

- Clicked every page from the navbar on the live site.
- Checked that images, the video, CSS and icons load on the live site.
- Checked the layout on a phone-sized screen using Chrome DevTools.
- Checked the contact form's required fields, email validation and phone number validation.
- Checked that the GitHub and LinkedIn links in the footer open the correct profiles.

## Deployment

The site is deployed on Render as a Web Service connected to my GitHub repository.

- **Build command:** `npm install`
- **Start command:** `npm start`

## Run Locally

1. `npm install`
2. `npm start`
3. Open http://localhost:3000