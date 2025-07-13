# Portfolio Application

## Overview

This is a modern React-based portfolio website built for a frontend developer named Samruddha Shambharkar. The application showcases a developer's skills, projects, experience, and provides a contact form for potential clients or employers. It features a dark theme with neon accent colors, smooth animations, and interactive elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints
- **Development**: tsx for TypeScript execution in development

### Design System
- **Component Library**: Custom components built with Radix UI primitives
- **Theme**: Dark theme with electric blue (#00F5FF), neon purple, and neon green accents
- **Typography**: JetBrains Mono for code/technical elements, Inter for body text
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Animated introduction with typing animation and profile image
- **About Section**: Personal information with animated counters
- **Skills Section**: Animated progress bars for technical skills
- **Projects Section**: Interactive project cards with hover effects
- **Experience Section**: Timeline-style experience display
- **Contact Section**: Form with validation and submission handling
- **Custom Cursor**: Interactive cursor that responds to hover states
- **Particle Background**: Animated background particles for visual interest

### Backend Routes
- **Contact API** (`POST /api/contact`): Handles contact form submissions with validation
- **Static File Serving**: Serves the built React application in production

### UI Components (shadcn/ui)
Comprehensive set of accessible UI components including:
- Form controls (Input, Textarea, Button, Checkbox, etc.)
- Navigation components (Tabs, Accordion, etc.)
- Feedback components (Toast, Alert, etc.)
- Layout components (Card, Separator, etc.)

## Data Flow

### Contact Form Flow
1. User fills out contact form with name, email, and message
2. Frontend validates form data client-side
3. Form submission triggers API call to `/api/contact`
4. Backend validates data and simulates processing
5. Success/error response updates UI with toast notification

### Animation Flow
- Framer Motion provides intersection-based animations
- Custom hooks manage typing animations and counters
- Scroll-triggered animations enhance user experience

## External Dependencies

### Core Dependencies
- **React Ecosystem**: react, react-dom, @types/react
- **Build Tools**: vite, @vitejs/plugin-react, typescript
- **Styling**: tailwindcss, autoprefixer, postcss
- **UI Library**: @radix-ui/* components, class-variance-authority
- **Animation**: framer-motion
- **HTTP Client**: @tanstack/react-query for data fetching
- **Form Handling**: react-hook-form, @hookform/resolvers
- **Routing**: wouter
- **Icons**: lucide-react
- **Utilities**: clsx, tailwind-merge, date-fns

### Backend Dependencies
- **Server**: express, @types/express
- **Database ORM**: drizzle-orm, drizzle-kit
- **Database Driver**: @neondatabase/serverless
- **Session Store**: connect-pg-simple
- **Validation**: zod, drizzle-zod

### Development Dependencies
- **TypeScript**: Full TypeScript support across frontend and backend
- **Development Server**: Vite dev server with HMR
- **Replit Integration**: Custom plugins for Replit environment

## Deployment Strategy

### Development
- Uses Vite development server with hot module replacement
- Express server runs concurrently serving API routes
- TypeScript compilation handled by tsx for development

### Production
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/`
3. **Static Serving**: Express serves built React app as static files
4. **Database**: PostgreSQL via Neon Database (serverless)

### Database Schema
- **Users Table**: Basic user management with username/password
- **Migrations**: Managed through Drizzle Kit
- **Environment**: DATABASE_URL required for database connection

### Environment Configuration
- **Development**: NODE_ENV=development
- **Production**: NODE_ENV=production
- **Database**: DATABASE_URL for PostgreSQL connection
- **Replit**: Special handling for Replit environment variables

The application is designed to be deployed on Replit with automatic database provisioning and includes proper error handling, logging, and development tooling for a smooth development experience.
