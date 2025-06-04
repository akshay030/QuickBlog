# QuickBlog

QuickBlog is a full-stack blogging platform that allows users to read, search, and comment on blogs, while providing an admin dashboard for blog management. It features AI-powered content generation, image uploads, and a modern React frontend.

## Features

- Browse, search, and filter blogs by category
- Add and moderate comments (admin approval required)
- Admin dashboard for managing blogs and comments
- AI-powered blog content generation (Gemini API)
- Image uploads with ImageKit integration
- Responsive UI built with React, Vite, and Tailwind CSS
- MongoDB for data storage

## Project Structure

```
QuickBlog/
│
├── Client/         # React frontend (Vite)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── server/         # Express backend (Node.js)
│   ├── configs/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or cloud)
- [ImageKit](https://imagekit.io/) account (for image uploads)
- [Google Gemini API](https://ai.google.dev/) key (for AI content)

### Setup

#### 1. Clone the repository

```sh
git clone https://github.com/akshay030/QuickBlog.git
cd QuickBlog
```

#### 2. Configure Environment Variables

- Copy `.env` files in both `Client/` and `server/` and fill in the required values.

#### 3. Install Dependencies

**Client:**
```sh
cd Client
npm install
```

**Server:**
```sh
cd ../server
npm install
```

#### 4. Run the Application

**Start the backend:**
```sh
npm run server
```

**Start the frontend:**
```sh
cd ../Client
npm run dev
```

- Client: [http://localhost:5173](http://localhost:5173)
- Server: [http://localhost:3000](http://localhost:3000)

## Deployment

- The project includes `vercel.json` files for both client and server for deployment on [Vercel](https://vercel.com/).

## License

This project is licensed under the ISC License.

---

**Made with ❤️ for learning and sharing.**