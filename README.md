# Cloud Media Engine

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

A modern, high-performance cloud media engine and authenticated image gallery built with the T3 Stack. This platform leverages the Next.js App Router and React Server Components (RSCs) to provide seamless asset management, fully type-safe cloud database integration, and rapid edge deployments.

## 🚀 Key Features

* **Modern Full-Stack Paradigm:** Harnesses Next.js React Server Components to push heavy rendering and data-fetching to the server, drastically minimizing client-side JavaScript payloads for lightning-fast performance.
* **Secure Authentication:** Integrated with Clerk for robust OAuth workflows, ensuring media assets are strictly protected and user sessions are managed securely across the application.
* **Type-Safe Database Access:** Utilizes Vercel Postgres paired with Drizzle ORM for fully typed, highly optimized database queries and reliable schema migrations.
* **Automated CI/CD:** Fully integrated GitHub Actions and Vercel deployment pipelines for automated testing, continuous delivery, and high availability.

## 🛠 Tech Stack

* **Framework:** Next.js (App Router), React
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Database & ORM:** PostgreSQL (Vercel Postgres), Drizzle ORM
* **Authentication:** Clerk
* **Infrastructure:** Vercel, GitHub Actions

## 📂 Project Structure

```text
cloud-media-engine/
├── src/
│   ├── app/                    # Next.js App Router (Pages, Layouts, APIs)
│   ├── components/             # Reusable React UI components
│   ├── server/                 # Server-side logic and database schemas (Drizzle)
│   └── styles/                 # Tailwind CSS globals
├── public/                     # Static assets
├── drizzle.config.ts           # Drizzle ORM configuration
├── next.config.js              # Next.js compiler and build configuration
└── tailwind.config.ts          # Tailwind design system constraints
```
## ⚙️ Local Development Setup

**Prerequisites:**

* Node.js (v18+)

* npm, yarn, or pnpm

* A Clerk account (for authentication keys)

* A Vercel Postgres instance (or local PostgreSQL database)

**Installation & Execution**

1. Clone the repository:  

    >Bash
    ```
    git clone [https://github.com/criscoded/cloud-media-engine.git](https://github.com/criscoded/cloud-media-engine.git)
    cd cloud-media-engine
    ```

2. Install dependencies:

    >Bash
    ```
    npm install
    Configure Environment Variables:
    Create a .env.local file in the root directory and add your unique keys:
    ```
3. Configure Environment Variables:

    > Code example
    ```
    # Authentication (Clerk)
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
    CLERK_SECRET_KEY=your_secret_key

    # Database (Vercel Postgres)
    POSTGRES_URL=your_postgres_connection_string
    ```
    
4. Run Database Migrations:

    Push your Drizzle schema to the database:

    > Bash
    ```
    npm run db:push
    ```
    
5. Start the development server:

    > Bash
    ```
    npm run dev
    ```  
    Open http://localhost:3000 in your browser to view the application.

## ![Project Roadmap](https://img.shields.io/badge/Project_Roadmap-2EA44F?style=for-the-badge&logo=github&logoColor=white)

[x] Initial scaffold and mock data implementation

[x] Database schema design and Vercel Postgres integration

[x] Clerk authentication setup

[x] Image upload functionality

[x] Production deployment via Vercel

[x] Global error handling with Sentry

## 📝 License

Distributed under the MIT License. See LICENSE for more information.

## ![Acknowledgments](https://img.shields.io/badge/Acknowledgments-EA4AAA?style=for-the-badge&logo=github-sponsors&logoColor=white)

This project was initially inspired by guidance from Theo Browne's YouTube videos and uses some of the services he has created.  
You can find more of his work here: https://github.com/t3dotgg
