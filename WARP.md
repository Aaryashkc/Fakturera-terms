# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview

This is a bilingual (English/Swedish) terms and conditions application built with a React/Vite frontend and Express.js/PostgreSQL backend. The application displays legal terms content in both languages, with the frontend handling language switching and the backend serving localized content from a Supabase PostgreSQL database.

## Development Commands

### Backend Development
```bash
# Start backend server in development mode (with nodemon)
npm run dev

# Start backend server in production mode
npm start

# Seed database with initial terms content
npm run seed
```

### Frontend Development
```bash
# Navigate to frontend directory first
cd frontend

# Install dependencies
npm install

# Start development server (typically runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

### Full Stack Development
The backend typically runs on port 5001 (configurable via PORT env var) and the frontend on port 5173. CORS is configured to allow requests from the frontend development server and production deployment.

## Architecture

### Backend Architecture
- **MVC Pattern**: Model-View-Controller architecture with clear separation
  - `models/` - Sequelize ORM models for database entities
  - `controllers/` - Business logic and request handling
  - `routes/` - Express route definitions
  - `libs/` - Database connection and configuration utilities

- **Database**: PostgreSQL via Supabase with Sequelize ORM
  - Single `Terms` model with fields: `lang` (enum: 'en'|'sv'), `title`, `button`, `text`
  - Uses SSL connection with specific dialectOptions for Supabase

- **API Structure**: RESTful API with single endpoint `/api/terms?lang=en|sv`

### Frontend Architecture
- **React 19** with **Vite** build tool and React Router for routing
- **State Management**: Zustand store (`useTermsStore`) for API state management
- **Styling**: Custom CSS with utility classes (`.container-7xl` mimics Tailwind's max-width pattern)

### Key Frontend Patterns
- **Language Context**: `App.jsx` manages current language state and passes it down through props
- **Localized Navigation**: `navLinks` object contains language-specific navigation labels
- **Dynamic API Calls**: Terms content fetched from backend based on current language selection
- **Environment-aware API**: Different API base URLs for development vs production

### Data Flow
1. User selects language in `Navbar` component
2. Language change propagates up to `App.jsx` via `onLanguageChange` callback
3. New language passed down to `Terms` page component
4. `Terms` component triggers API call via `useTermsStore.fetchTerms(language)`
5. Backend returns localized content based on `lang` query parameter
6. Frontend renders content using `dangerouslySetInnerHTML` for HTML terms

## Environment Configuration

### Required Environment Variables
- `PORT` - Backend server port (defaults to development configuration)
- `SUPABASE_DB_URL` - Full PostgreSQL connection string for Supabase database

### CORS Configuration
Backend is configured to accept requests from:
- `http://localhost:5173` (local development)
- `https://fakturera-terms-eight.vercel.app` (production frontend)

Frontend API configuration:
- Development: `http://localhost:5001`
- Production: `https://fakturera-terms-3.onrender.com`

## Database Schema

### Terms Table
```sql
CREATE TABLE Terms (
  id SERIAL PRIMARY KEY,
  lang ENUM('en', 'sv') NOT NULL,
  title VARCHAR(255) NOT NULL,
  button VARCHAR(255) NOT NULL,
  text TEXT NOT NULL,
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP
);
```

## Key Files for Understanding

### Backend Entry Points
- `backend/server.js` - Main server configuration and startup
- `backend/models/term.model.js` - Database schema definition
- `backend/controller/term.controller.js` - API logic for terms retrieval

### Frontend Entry Points
- `frontend/src/App.jsx` - Root component with language state management
- `frontend/src/Store/useTermsStore.js` - API state management with Zustand
- `frontend/src/Pages/Terms.jsx` - Main terms display component

### Configuration Files
- `frontend/vite.config.js` - Vite build configuration
- `frontend/eslint.config.js` - ESLint configuration with React-specific rules
- Both `package.json` files contain the npm scripts and dependencies

## Development Notes

### Database Seeding
Use `npm run seed` to populate the database with initial English and Swedish terms content. The seed script will drop existing data and recreate the schema.

### Language Support
The application currently supports English ('en') and Swedish ('sv'). Adding new languages requires:
1. Updating the ENUM in `term.model.js`
2. Adding new seed data in `seed.js`
3. Adding language-specific navigation labels in `App.jsx`
4. Updating the language selector UI in `Navbar.jsx`

### Content Security
The frontend renders terms content using `dangerouslySetInnerHTML`. Content should be trusted and properly sanitized before storage in the database.
