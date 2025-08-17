# MYL Web v1.1

A modern web application built with React, TypeScript, and Vite, featuring a comprehensive UI component library and email integration.

## 🚀 Features

- **Modern Stack**: React 18 + TypeScript + Vite
- **UI Components**: Radix UI primitives with shadcn/ui
- **Styling**: Tailwind CSS with custom animations
- **Email Integration**: EmailJS for contact forms
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: React Router DOM
- **Charts**: Recharts for data visualization
- **Theme Support**: Dark/Light mode with next-themes

## 📦 Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Library**: Radix UI + shadcn/ui
- **Forms**: React Hook Form + Zod
- **Email**: EmailJS
- **Icons**: Lucide React
- **Charts**: Recharts

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MYL_WEB_v1.1/MYL-Web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Email Setup
Configure EmailJS for contact forms by following the setup guide in `EMAILJS_SETUP.md`.

### Environment Variables
Create a `.env` file in the root directory with your configuration:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📁 Project Structure

```
MYL-Web/
├── public/              # Static assets
│   ├── lovable-uploads/ # Uploaded images
│   ├── favicon.ico      # Site favicon
│   ├── myl-logo.svg     # Company logo
│   └── robots.txt       # SEO robots file
├── src/                 # Source code
│   ├── assets/          # Course images and static assets
│   ├── components/      # Reusable components
│   │   ├── layout/      # Layout components
│   │   └── ui/          # UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and database
│   ├── pages/           # Page components
│   │   ├── About.tsx    # About page
│   │   ├── Contact.tsx  # Contact page
│   │   ├── Courses.tsx  # Courses listing
│   │   └── ...
│   ├── App.tsx          # Main app component
│   └── main.tsx         # App entry point
├── components.json      # shadcn/ui configuration
├── tailwind.config.ts   # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🎨 UI Components

This project uses shadcn/ui components built on top of Radix UI primitives. Available components include:

- Accordion, Alert Dialog, Avatar
- Button, Card, Checkbox
- Dialog, Dropdown Menu, Form
- Navigation Menu, Popover, Select
- Tabs, Toast, Tooltip
- And many more...

## 📧 Email Integration

The project includes EmailJS integration for contact forms. See `EMAIL_TROUBLESHOOTING.md` for common issues and solutions.

## 📚 Course Content

The application features course pages for:
- AWS Cloud Computing
- Python Programming
- Linux Administration
- Ansible Automation
- Google Cloud Platform

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 🆘 Troubleshooting

- **Port 8080 in use**: Change the port in `vite.config.ts` or kill the process using port 8080
- **Email not working**: Check `EMAIL_TROUBLESHOOTING.md` for common solutions
- **Build issues**: Ensure all dependencies are installed with `npm install`

For more detailed troubleshooting, check the individual documentation files in the project root.