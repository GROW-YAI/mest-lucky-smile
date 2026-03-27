# Lucky Smile - Sustainable Food Preservation Landing Page

## Project Overview

**Lucky Smile** is a modern, responsive landing page website for a sustainable food preservation business founded by Janet Tweneboah. The website showcases innovative solutions for preserving traditional African food products including tigernut, pepper, okro, and prekese while maintaining their nutritional value and flavor.

### Purpose
The website aims to:
- Promote sustainable food preservation methods that reduce food waste
- Showcase eco-friendly packaging and nutrient-rich dried/powdered products
- Highlight the community impact and job creation initiatives
- Provide information about products and services for health-conscious individuals and families
- Enable potential customers and partners to connect with the business

### Main Features
- **Hero Section**: Eye-catching introduction with gradient backgrounds and call-to-action buttons
- **About Product Section**: Detailed information about sustainable preservation, eco-friendly packaging, nutrient-rich products, and community impact
- **About Innovator Section**: Information about the founder Janet Tweneboah
- **Showcase Section**: Display of products and success stories
- **Contact Section**: Contact form and information for inquiries
- **Accessibility Widget**: Integrated Boafo accessibility widget to make the site accessible to all users, including those with disabilities

### Technologies Used
- **React 19** - Modern JavaScript library for building user interfaces
- **Vite** - Next-generation frontend build tool for fast development
- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- **React Router DOM 7** - Declarative routing for React applications
- **React Icons & Lucide React** - Icon libraries for beautiful UI elements
- **Boafo Accessibility Widget** - Third-party accessibility solution for inclusive web experiences
- **ESLint** - Code linting for maintaining code quality

### Accessibility
This project uses the **Boafo Accessibility Widget** to ensure the website is accessible to all users, including those with visual, motor, cognitive, or other disabilities. The widget provides features like:
- Screen reader compatibility
- Keyboard navigation support
- Font size adjustments
- Color contrast options
- Reading guides and more

---

## How to Get Your Boafo API Key

To use the Boafo Accessibility Widget in this project, you need to obtain an API key:

1. Visit [https://boafo.co](https://boafo.co)
2. Register for an account or log in if you already have one
3. Navigate to your dashboard
4. Generate or copy your API key
5. Keep this key secure - you'll need it for the setup process

---

## How to Integrate the Boafo Widget

For detailed instructions on integrating the Boafo Accessibility Widget into your project, please refer to the official integration guide:

**[Boafo Widget Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)**

This comprehensive guide covers:
- Widget installation and configuration
- Customization options
- API key setup
- Best practices for accessibility implementation

---

## Setup Instructions

Follow these steps to set up and run the project locally:

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- A package manager (npm, yarn, or pnpm)

### Step 1: Clone the Repository

```bash
git clone https://github.com/GROW-YAI/mest-lucky-smile.git
cd mest-lucky-smile
```

### Step 2: Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

Or using pnpm:
```bash
pnpm install
```

### Step 3: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file in your text editor

3. Replace `your_key_here` with your actual Boafo API key:
   ```
   VITE_BOAFO_API_KEY=boafo_your_actual_key_here
   ```

4. Save the file

**Important**: Never commit your `.env` file to version control. It contains sensitive information and is already included in `.gitignore`.

### Step 4: Run the Development Server

```bash
npm run dev
```

The application will start and be available at:
```
http://localhost:5173/
```

### Step 5: Build for Production

When you're ready to deploy:

```bash
npm run build
```

The production build will be generated in the `dist/` directory.

### Step 6: Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```
mest-lucky-smile/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, and other assets
│   ├── components/        # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── BoafoWidgetInitializer.jsx
│   ├── layouts/           # Layout components
│   │   └── RootLayout.jsx
│   ├── pages/             # Page components
│   │   └── home/
│   │       ├── index.jsx
│   │       └── sections/
│   │           ├── Hero.jsx
│   │           ├── AboutProduct.jsx
│   │           ├── AboutInnovator.jsx
│   │           ├── Showcase.jsx
│   │           └── Contact.jsx
│   ├── types/             # TypeScript type definitions
│   ├── App.jsx            # Main App component
│   ├── App.css            # Global styles
│   ├── index.css          # Index styles
│   └── main.jsx           # Application entry point
├── .env                   # Environment variables (not tracked by Git)
├── .env.example           # Example environment variables
├── .gitignore             # Git ignore rules
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry point
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

---

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or inquiries about this project, please reach out through the contact form on the website.

---

Built with ❤️ for sustainable communities