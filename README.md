# LakeWatch

An interactive web application for exploring lakes and waterways across Alberta. Users can browse waterbodies on an interactive map, view detailed site information, and leave comments — with full admin moderation controls.

**Built by:** Ashley Anderson, Dusan Barudzija, Fred Deng, Saad Foda, & Brighton Gosinet

---

## Features

- **Interactive map** — explore Alberta lakes and waterways via React Leaflet
- **Lake detail pages** — view water quality data, site descriptions, and photos
- **User accounts** — register, log in, and manage your profile
- **Comments** — authenticated users can post and delete their own comments
- **Admin dashboard** — admins can manage users, waterbodies, and moderate comments
- **Search** — filter waterbodies by name in real time
- **Live weather** — current conditions (temperature, humidity, wind) for each lake via OpenWeatherMap

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite, React Leaflet |
| Backend | Node.js, Express |
| Database | MongoDB Atlas (Mongoose) |
| Auth | express-session, bcrypt |
| Weather | OpenWeatherMap API |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster
- An [OpenWeatherMap](https://openweathermap.org/api) API key (free tier works)

### Installation

```bash
# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

### Environment Setup

Copy the example env file and fill in your values:

```bash
cp server/.env.example server/.env
```

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `SESSION_SECRET` | Secret used to sign session cookies |
| `PORT` | Port the API listens on (default: `3001`) |
| `OPENWEATHER_API_KEY` | OpenWeatherMap API key for live weather data |

### Running the App

**Start the API server:**

```bash
cd server
node server.js
# API available at http://localhost:3001
```

**Start the frontend** (separate terminal):

```bash
cd client
npm run dev
# App available at http://localhost:5173
```

## Test Accounts

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@test.com | admin |
| User | sampleuser1234@email.com | abc123 |

New accounts can also be registered through the application.
