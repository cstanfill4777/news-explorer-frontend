# NewsExplorer

NewsExplorer is a responsive web application that allows users to search for recent news articles, browse search results, and save articles to a personal collection.

This project is the Stage 1 frontend implementation of the TripleTen Web Development final project.

## Live Website

https://cstanfill4777-news-explorer.netlify.app/

## Features

- Search for recent news articles using NewsAPI.
- Display search results with article images, titles, descriptions, dates, and sources.
- Load additional articles using the **Show more** button.
- Display loading, empty-result, and API error states.
- Responsive layouts for desktop, tablet, and mobile.
- Sign-up and sign-in modals with form validation.
- Simulated authentication and saved-article functionality.
- Protected route for saved articles.

## Technologies

- React
- JavaScript
- Vite
- React Router
- CSS
- NewsAPI
- Netlify

## Running Locally

Clone the repository and install dependencies:

```bash
npm install
```

Create a `.env.local` file in the project root containing:

```env
VITE_NEWS_API_KEY=your_newsapi_key
```

Start the development server:

```bash
npm run dev
```

To check the code and create a production build:

```bash
npm run lint
npm run build
```

## API Configuration

The application uses the NewsAPI `/v2/everything` endpoint during local development.

In production, it uses the NewsAPI proxy specified by TripleTen:

https://nomoreparties.co/news/v2/everything

**Known external service issue:** During deployment testing on October 11, 2026, the course-provided production proxy failed to respond, producing connection-closed and connection-timeout errors. Local NewsAPI requests were verified to work. Production search availability depends on the course-provided proxy being accessible.

## Project Pitch Video

Video link: To be added.

## Repository

https://github.com/cstanfill4777/news-explorer-frontend