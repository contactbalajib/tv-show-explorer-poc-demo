# 🎬 TV Show Explorer (Angular 17)

A production-grade POC built with **Angular 17 (standalone)** that explores TV shows from the public **TVMaze API**. It features search functionality, detailed show information with cast & episodes, local reviews management with NgRx state management, and comprehensive HTTP logging.

## ✨ Features
- **Search Shows** (GET `/search/shows?q=`) with real-time search and loading states
- **Show Details** (GET `/shows/:id`) with comprehensive show information
- **Cast Information** (GET `/shows/:id/cast`) displaying show cast members
- **Episodes Listing** (GET `/shows/:id/episodes`) with episode details
- **Local Reviews System**: Create, edit, and delete reviews stored in localStorage
- **State Management**: NgRx Store for reviews management
- **HTTP Logging**: Custom interceptor with request/response logging and dummy headers
- **Responsive Design**: Mobile-first responsive layout
- **Type Safety**: Full TypeScript models for Show, Episode, Cast, and Reviews
- **Error Handling**: Comprehensive error states and user feedback

> Built with Angular 17 standalone components and modern Angular features including signals and functional interceptors.

## 🧰 Tech Stack
- **Angular 17** (standalone APIs, signals, functional interceptors)
- **RxJS** for reactive programming and API handling
- **NgRx Store** for state management (reviews)
- **TypeScript** with strict type checking
- **HTTP Interceptors** for logging and request/response enhancement
- **Karma + Jasmine** for unit testing
- **CSS Grid & Flexbox** for responsive design

## ▶️ Getting Started
```bash
# 1) Install Node 18+ and npm
# 2) Install dependencies
npm install

# 3) Run development server
npm start  # opens http://localhost:4200

# 4) Run unit tests
npm test

# 5) Build for production
npm run build-prod
```

## 📁 Project Structure
```
src/app/
├── core/
│   ├── interceptors/
│   │   └── logging.interceptor.ts    # HTTP logging with dummy headers
│   ├── models/                       # TypeScript interfaces
│   │   ├── show.model.ts
│   │   ├── episode.model.ts
│   │   ├── cast.model.ts
│   │   └── review.model.ts
│   └── services/
│       └── tvmaze-api.service.ts     # API client service
├── features/
│   ├── search/
│   │   ├── search.page.ts            # Search page component
│   │   └── show-card.component.ts    # Show card component
│   ├── show-detail/
│   │   └── show-detail.page.ts       # Show detail page
│   └── reviews/
│       ├── reviews.page.ts           # Reviews page
│       └── review-form.component.ts  # Review form component
├── state/
│   └── reviews/                      # NgRx store for reviews
│       ├── actions.ts
│       ├── reducer.ts
│       └── selectors.ts
├── app.component.ts                  # Root component
├── app.routes.ts                     # Route configuration
└── main.ts                           # Bootstrap configuration
```

## 🔌 API
- Base: `https://api.tvmaze.com`
- Docs: https://www.tvmaze.com/api

## 🧪 Sample Tests
- `show-card.component.spec.ts` – component creation
- `search.page.spec.ts` – page creation
- `tvmaze-api.service.spec.ts` – verifies API request URL
- `reviews.page.spec.ts` – page with store

## 📱 Responsiveness
- Responsive CSS grid scales 1–4 columns
- Sticky header with simple nav

## ♿ Accessibility
- Form controls include labels/placeholders and inline error messaging

## 🔧 HTTP Interceptor Features
- **Request Enhancement**: Adds `X-App-Request-ID` header to all outgoing requests
- **Response Logging**: Logs response times and headers for debugging
- **Development Only**: Interceptor only runs in development mode
- **Comprehensive Logging**: Color-coded console output with emojis for easy debugging

## 📝 Notes
- This project omits `node_modules` for size; run `npm install` first
- HTTP interceptor adds dummy headers for enhanced logging without CORS issues
- Reviews are persisted in localStorage with NgRx state management
- All components use Angular 17 standalone APIs and modern features

---
Made for the TV Show Explorer POC.

## 📱 Responsiveness
- Responsive CSS grid scales 1–4 columns
- Sticky header with simple nav

## ♿ Accessibility
- Form controls include labels/placeholders and inline error messaging

## � HTTP Interceptor Features
- **Request Enhancement**: Adds `X-App-Request-ID` header to all outgoing requests
- **Response Logging**: Logs response times and headers for debugging
- **Development Only**: Interceptor only runs in development mode
- **Comprehensive Logging**: Color-coded console output with emojis for easy debugging

## �📝 Notes
- This project omits `node_modules` for size; run `npm install` first
- HTTP interceptor adds dummy headers for enhanced logging without CORS issues
- Reviews are persisted in localStorage with NgRx state management
- All components use Angular 17 standalone APIs and modern features

---
Made for the TV Show Explorer POC.
