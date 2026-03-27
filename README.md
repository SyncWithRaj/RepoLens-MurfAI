# RepoLens AI Engine - Understand your Codebase faster than ever!

![RepoLens AI Engine](https://img.shields.io/badge/RepoLens-AI_Engine-58a6ff?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=nodedotjs)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-4DB33D?style=for-the-badge&logo=mongodb)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-AI-4285F4?style=for-the-badge&logo=google)
![Qdrant](https://img.shields.io/badge/Qdrant-Vector_DB-FF5252?style=for-the-badge)

**Understand your codebase. Faster than ever.**

RepoLens utilizes advanced AI vector embeddings to visually map and comprehend your entire repository. Stop reading thousands of lines of code—start asking questions and get exact, contextual explanations instantly. Built for High-Velocity Teams, Engineers, Architects, and New Hires to navigate, analyze, and comprehend massive codebases without opening a single IDE window.

> **Supported Languages:** Currently supports **JavaScript**, **TypeScript**, **CSS**, and **HTML** repositories. We built the extraction pipeline to be highly modular and will extend support to more languages very soon!

---

## ✨ Key Features

1. **Intelligent Indexing & Parsing**
   Paste your repository URL and let our cluster extract, parse, and embed every function and structure using Abstract Syntax Trees (ASTs). Supports JS, TS, HTML, and CSS environments.
2. **Contextual Chat AI**
   Ask natural language questions like "Where is the authentication logic?" and get exact code snippets, file references, and architectural explanations contextually synthesized via **RAG** (Retrieval-Augmented Generation).
3. **Unified Workspace & Advanced Graph Visualization**
   Visualize your deeply nested architecture as an interconnected **2D Force-Graph**. Our graph visualization accurately maps the proper relationships and dependencies between files and folders, enabling you to instantly grasp the project's structure, identify bottlenecks, and intuitively navigate the entire codebase. Slide open the integrated **Monaco code editor**, file browser, and chat to seamlessly switch paradigms.
4. **Interactive Voice Calls & Seamless Conversational Agent**
   Includes a dedicated calling pipeline designed for the lowest latency and best conversational experience. Call the AI agent natively in your browser to explore your architectural queries hands-free! 
   *Pipeline:* **Speech-to-Text (STT) using AssemblyAI ➔ LLM / RAG Synthesis ➔ Text-to-Speech (TTS) using Murf AI**.
5. **Vector-Powered Code Search**
   Replaces legacy regex and raw text indexing with a high-dimensional vector space. RepoLens understands the *intent* behind the code, instantly leaping across modules and microservices to give you factual architectural answers.
6. **Security & Sandboxing**
   Zero data retention on disk. Your codebase is parsed ephemerally, embedded securely into the vector database, and never utilized for general LLM training.

---

## 🏗 System Design & Architecture

Our architecture is expressly designed to provide high-speed semantic search, interactive visualization, and conversational code analysis while keeping server overhead to an absolute minimum.

### The Challenge: Storage & Disk Bottlenecks
In early iterations, cloning remote repositories natively onto the server's disk to serve files and feed the codebase into an AI caused critical **storage bottlenecks**. Storing raw files persistently on a production filesystem becomes impossible to scale when numerous users are processing massive monorepos. 

### Our Infrastructure Solution: Ephemeral Parsing & State Persistence
To resolve disk bloat, we overhauled the system workflow to utilize an **ephemeral cloning pipeline** alongside **robust MongoDB data models**.

**Workflow Pipeline:**
**`Login` ➔ `Paste Repo Link` ➔ `Clone to /tmp` ➔ `AST Parse` ➔ `Persist Metadata to DB` ➔ `Delete Clone` ➔ `Chat/Call Contextually`**

1. **Ephemeral Clone**: When a user inputs a repository link, the server securely clones the repository into an isolated, temporary `/tmp` environment.
2. **AST Parsing Validation**: We parse support files (JavaScript, TypeScript, CSS, HTML), generating full Abstract Syntax Trees (ASTs). This gives the system a deterministic breakdown of all modules, functions, classes, and their relationships.
3. **Smart Database Modeling (MongoDB)**: Instead of keeping the file on disk, we serialize vital repository data into strict MongoDB Models:
   - **`File Tree & Contents Model`**: We store the entire hierarchical file tree and the text contents of the files directly in MongoDB. *Why?* So our frontend Monaco Code Editor and file explorer can instantly retrieve and display code via an API endpoint, completely eliminating the need to serve the file from the server's disk.
   - **`Code Entities & Relationships Model`**: The extracted relationships between files and functions are persisted in MongoDB. *Why?* To power our interactive 2D Force-Graph visualization in real-time. Storing these node-links in the database avoids having to repetitively re-parse ASTs every time the user opens the visualizer.
   - **`Chat History & Profiles Model`**: Retains user sessions, settings, and complex previous AI interactions.
4. **Vector Embedding (Qdrant)**: The distilled AST node representations are converted into high-dimensional vectors and securely sent to our **Qdrant Vector Database**.
5. **Garbage Collection (Cleanup)**: Immediately after extraction and DB serialization, the physical repository stored in `/tmp` is wiped clean. This strictly confines storage to databases and vector-stores, saving massive amounts of block storage on our production servers.
6. **Retrieval-Augmented Generation (RAG)**: When a user asks a question, we query Qdrant to find semantically relevant code chunks and map them back to our MongoDB structural records to construct a highly factual prompt. The Gemini LLM then streams the explanation to the chat UI or routes it through the AssemblyAI / MurfAI voice pipeline.

---

## 🛠 Technology Stack

### Frontend (User Interface & Visualization)
- **Framework**: [Next.js 16](https://nextjs.org/) & **React 19**
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Visuals & Editing**: 
  - `@monaco-editor/react` (integrated web IDE)
  - `react-force-graph-2d` (interactive file/folder dependency mapping)
  - `lucide-react` (beautiful iconography)
  - `react-resizable-panels` (fluid slide-out workspace UI)

### Backend (Core Processing & API)
- **Framework**: **Node.js** with **Express** (written in **TypeScript**)
- **Authentication**: **Passport.js** (GitHub OAuth2 via `passport-github2`)
- **Database**: **MongoDB** with **Mongoose** (user profiles, file trees, relationships, chat history)
- **Git & AST Processing**: `simple-git` (ephemeral cloning), `ts-morph` (AST generation).

### AI & Machine Learning Infrastructure
- **LLM Engine**: **Google Gemini AI** (`@google/generative-ai`, `@langchain/google-genai`)
- **Vector Database**: **Qdrant** (`qdrant-client`, `@qdrant/js-client-rest`)
- **Call / Voice Chat Integration**: 
  - Text-to-Speech (TTS): **Murf AI**
  - Speech-to-Text (STT): **AssemblyAI**
  
---

## 🚀 Getting Started

Ensure you have **Node.js 20+**, **MongoDB**, and **Docker** installed on your system.

### 0. Clone repository
```bash
git clone https://github.com/raj-ribadiya/repolens-murfai.git
```

### 1. Set Up Qdrant Vector DB via Docker Compose 🐳 
Instead of downloading or configuring Qdrant manually through the Docker Engine or Docker Desktop UI, you can spin it up directly and easily using our included `docker-compose.yml` file.

1. Navigate to the root folder:
   ```bash
   cd repolens-murfai
   ```
2. Start the Qdrant container in detached mode but first uncomment the code in docker-compose file:
   ```bash
   docker-compose up -d
   ```
   *This commands isolates and starts the Qdrant instance locally, binding it safely to ports `6333` and `6334`.*

### 2. Backend Setup
1. Open a new terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up Environment Variables:
   Create a `.env` file in the `backend` directory. Ensure you include your database and ML keys (MongoDB URL, Gemini API Key, Qdrant URL, Assembly AI key, Murf AI key, Session Secrets, etc.).

   ```bash
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   JWT_SECRET=supersecretkey

   GOOGLE_API_KEY=your_gemini_api_key
   QDRANT_URL=http://localhost:6333

   MURF_API_KEY=your_murfai_api_key
   ASSEMBLYAI_API_KEY=your_assembly_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Next.js development server:
   ```bash
   npm run dev
   ```

### 4. Open the Application
Navigate to `http://localhost:3000` to access the RepoLens AI Engine workspace!

---

## 📂 Core Directory Structure

```text
repolens-murfai/
├── docker-compose.yml       # Quick-start Qdrant Vector DB configuration
├── backend/
│   ├── src/
│   │   ├── config/          # Configurations (Passport, DB)
│   │   ├── controllers/     # API logic (Repository, Query, Authentication)
│   │   ├── middlewares/     # Error Handlers, Auth Protection
│   │   ├── models/          # MongoDB Schemas (User, ChatHistory, FileTree, CodeEntities)
│   │   ├── modules/         # Parsing and Scanning logic written here (astParser, indexing)
│   │   ├── routes/          # Express Routes (/api/v1/...)
│   │   ├── services/        # Core business & AI logic (LangChain, Qdrant integration)
│   │   ├── utils/           # Helper scripts (Tokenizers, formatters)
│   │   └── server.ts        # Backend Entry Point
│   └── package.json
│
└── frontend/
    ├── app/                 # Next.js 16 App Router (Landing, Chat, Graph, Layout)
    ├── components/          # Reusable UI Components (ChatPanel, GraphView, Editor)
    ├── lib/                 # Utility functions & axios instances
    └── package.json
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/raj-ribadiya/repolens-murfai/issues). 

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

*Designed for Enterprise Security. Built for Developers.*