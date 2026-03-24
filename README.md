# NeoFlix

NeoFlix is a web application for movie enthusiasts. It allows users to **search for movies, view detailed information, and save their favorite films** directly in the browser using local storage.

## Features

- Search for movies by title or genre
- View detailed movie information (overview, rating, release date, related movies)
- Save favorite movies to local storage for easy access later
- Fetches real-time data from the TMDb API

## Technologies Used

- ReactJS, CSS, Axios
- [TMDb API](https://www.themoviedb.org/documentation/api) for movie data
- Local Storage for saving user favorites

## Setup & Installation

1. **Clone the repository:**

```bash
git clone https://github.com/rickgianotten/NeoFlix.git
```
2. **Intall dependencies**
```bash
npm install
```

3. **Get a TMDb API key:**

    - Go to [TMDb API](https://www.themoviedb.org/documentation/api)
    - Sign up for a free account if you don’t have one
    - Navigate to your account settings → API → Create a new API key
    - Copy your API key

4. **Create a .env file:**

```bash
cp .env.example .env
```    

5. **Add your API key**

```bash
VITE_API_KEY= your TMDB api key
VITE_API_BEARER_TOKEN= your TMDB api bearer token
```

6. **Start the server**

```bash
npm run dev
```