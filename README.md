# Thimira Sadeesha — Developer Portfolio

A modern, high-performance developer portfolio built with Next.js 14, React, Tailwind CSS, and Framer Motion. This portfolio showcases projects dynamically sourced from GitHub, features a custom animated cursor trail, a fully functional contact form, and smooth page transitions.

## ✨ Features

- **Next.js 14 (App/Pages Router):** Optimized for static generation and blazing fast page loads.
- **Dynamic GitHub Projects:** Uses `getStaticProps` (SSG) to fetch and display curated GitHub repositories seamlessly during the build process.
- **Interactive Cursor Trail:** A smooth, reactive canvas-based cursor trail animation that enhances the visual experience.
- **Advanced Animations:** Fluid page transitions, text reveals, and scroll-linked animations powered by Framer Motion.
- **Contact Form Integration:** Fully functional contact form built securely with Nodemailer.
- **Responsive & Accessible Design:** Crafted with Tailwind CSS to ensure a beautiful experience on mobile, tablet, and desktop devices.
- **Dark/Light Mode:** First-class support for theme switching with `next-themes`.
- **SEO Optimized:** Utilizes `next-seo` to ensure maximum metadata visibility for search engines.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React 18)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms & Validation:** [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup)
- **Email Service:** [Nodemailer](https://nodemailer.com/about/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Language:** TypeScript

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

You need [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ThimiraSadeesha/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add the following keys. This is required for the contact form to function locally:
   ```env
   GMAIL_USER=your_gmail_address@gmail.com
   GMAIL_APP_PASSWORD=your_16_character_app_password
   ```
   *(Note: You must generate an App Password from your Google Account settings.)*

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   Navigate to `http://localhost:3000` in your browser.

## 📦 Building for Production

This project is optimized for **Static Site Generation (SSG)**. To create an optimized production build, run:

```bash
npm run build
```

This command will:
1. Fetch the latest repositories from your curated GitHub list.
2. Compile all files into static HTML/CSS/JS.
3. Automatically generate a `sitemap.xml` and `robots.txt` file setup for search engine crawling.

You can then test the production build locally with:
```bash
npm run start
```

## 📬 Contact

**Thimira Sadeesha**
- [GitHub](https://github.com/ThimiraSadeesha)
- [Medium](https://sadeesha.medium.com/)
- [LinkedIn](#) *(Add your link here)*
