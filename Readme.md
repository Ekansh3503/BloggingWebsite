# Blog Website

## Overview

This project is a simple blog website built with Node.js, Express.js, EJS, and MongoDB. It allows users to create, read, and view blog posts. The website also includes static pages for "About" and "Contact" information.

## Features

- Home page with a list of all blog posts
- Compose new blog posts
- View individual blog posts
- About page with information about the blog
- Contact page for user inquiries

## Installation

### Prerequisites

- Node.js (v12.x or later)
- npm (v6.x or later)
- MongoDB (local or cloud instance)

### Steps

1. Clone the repository
   ```sh
   git clone https://github.com/your-username/blog-website.git
   cd blog-website
   ```

2. Install the dependencies
   ```sh
   npm install
   ```

3. Start the MongoDB server if you are running a local instance
   ```sh
   mongod
   ```

4. Run the application
   ```sh
   node app.js
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

### Home Page

The home page displays the `homeStartingContent` and a list of all blog posts. Each post includes a title and an excerpt of its content.

### Compose Page

Navigate to `/compose` to create a new blog post. Fill in the title and content of the post and submit the form. The new post will be saved to the database and displayed on the home page.

### Post Page

Click on a blog post title on the home page to view the full post. The post page displays the title and full content of the post.

### About Page

Navigate to `/about` to view information about the blog and its purpose.

### Contact Page

Navigate to `/contact` to view contact information and a form to reach out to the blog administrators.

## Directory Structure

```
blog-website/
│
├── app.js              # Main application file
├── package.json        # npm dependencies and scripts
├── views/              # EJS templates
│   ├── about.ejs       # About page template
│   ├── compose.ejs     # Compose page template
│   ├── contact.ejs     # Contact page template
│   ├── home.ejs        # Home page template
│   └── post.ejs        # Individual post page template
├── public/             # Static files (CSS, images, etc.)
│   └── styles.css      # Stylesheet
├── README.md           # Project overview and instructions
└── .gitignore          # Files and directories to be ignored by git
```

## Dependencies

- express: Web framework for Node.js
- body-parser: Middleware to parse incoming request bodies
- ejs: Embedded JavaScript templating
- mongoose: MongoDB object modeling tool

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgements

- Inspiration for the project came from various blogging platforms and tutorials available online.