# Academic Management System for Course Inclusions and Evaluation of Requirements at ITCR

## Project Description

This project develops an automated academic management system for the School of Computer Engineering at the Technological Institute of Costa Rica (ITCR). The system is designed to streamline course inclusion processes, prerequisite waivers, replacing current manual Google Forms methods with a centralized, efficient platform.

## Key Features

- **Student Portal**:
  - Submit inclusion and evaluatin of requirements requests
  - Real-time request tracking
  - Email notifications
  - Request history

- **Coordinator Dashboard**:
  - Request review/approval system
  - Advanced filtering options
  - Visual analytics
  - Reviewer assignment

- **Administrative Tools**:
  - System-wide request monitoring
  - CSV report generation
  - Institutional planning tools

- **Admin Console**:
  - User/Role management
  - System configuration
  - Technical maintenance

## Technology Stack

**Frontend**: React + Material UI  
**Backend**: Node.js + Express.js  
**Database**: PostgreSQL (Supabase)  
**Version Control**: GitHub  
**Hosting**: Vercel (Monorepo Configuration)

## Installation and Development

### Local Development

```bash
# Clone repository
git clone https://github.com/FelixMe25/HostearDS.git
cd HostearDS

# Install all dependencies (root, API, and frontend)
npm run install:all

# Run both frontend and backend concurrently
npm run dev

# Or run them separately:
# Backend only
npm run dev:api

# Frontend only  
npm run dev:frontend
```

### Manual Installation (Alternative)

```bash
# Backend setup
cd API
npm install
npm run dev

# Frontend setup (new terminal)
cd frontend
npm install
npm start
```

## Deployment to Vercel

This project is configured as a monorepo for Vercel deployment:

### 1. Environment Variables

Create these environment variables in your Vercel dashboard:

**Frontend variables:**
- `REACT_APP_API_URL`: Your Vercel app URL + `/api` (e.g., `https://your-app.vercel.app/api`)

**Backend variables:**
- `FRONTEND_URL`: Your Vercel app URL (e.g., `https://your-app.vercel.app`)
- `NODE_ENV`: `production`
- Add your Supabase configuration variables

### 2. Deploy Steps

1. Connect your GitHub repository to Vercel
2. Set the framework preset to "Other"
3. Set build command: `npm run build:frontend`
4. Set output directory: `frontend/build`
5. Add environment variables
6. Deploy

### 3. Update API URLs

After deployment, update the API URL in:
- `frontend/src/config/config.js` (production API_URL)
- `API/index.js` (add your Vercel domain to allowedOrigins)

## Project Structure

```
HostearDS/
├── package.json          # Root package.json with monorepo scripts
├── vercel.json           # Vercel deployment configuration
├── API/                  # Backend Node.js + Express
│   ├── package.json
│   ├── index.js
│   └── src/
├── frontend/             # React frontend
│   ├── package.json
│   ├── public/
│   └── src/
└── README.md
```
