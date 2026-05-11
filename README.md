# Task Manager Application

<div align="center">

![Task Manager](https://img.shields.io/badge/Angular-21.1.4-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, full-featured Task Management Application built with **Angular** and **Tailwind CSS**. Manage your daily tasks efficiently with an intuitive and responsive user interface.

[Features](#features) • [Tech Stack](#tech-stack) • [Installation](#installation) • [Usage](#usage) • [Project Structure](#project-structure) • [Contributing](#contributing)

</div>

---

## 📋 Overview

Task Manager is a professional task management application designed to help users organize, track, and manage their daily tasks. Built with the latest Angular framework and styled with modern Tailwind CSS, this application provides a seamless user experience with glassmorphism UI design patterns.

---

## ✨ Features

- ✅ **Create, Read, Update, Delete (CRUD) Tasks** - Full task management capabilities
- ✅ **Task Filtering & Sorting** - Easily organize and find your tasks
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ✅ **Modern UI/UX** - Glassmorphism design with smooth animations
- ✅ **Form Validation** - Reactive Forms for robust input validation
- ✅ **Task Status Tracking** - Track task completion status
- ✅ **User-Friendly Navigation** - Intuitive navbar and routing
- ✅ **Real-time Updates** - Instant task updates across the application
- ✅ **Local Storage** - Persist tasks in browser local storage

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework:** Angular v21.1.4 - Latest Angular with standalone components
- **Language:** TypeScript 5.9 - Type-safe JavaScript development
- **Styling:** Tailwind CSS 4.1 - Utility-first CSS framework
- **Forms:** Reactive Forms - Advanced form handling and validation
- **Routing:** Angular Router - Client-side navigation
- **Testing:** Vitest & Jasmine - Unit testing frameworks
- **Build Tool:** Angular CLI - Development and production builds

### **Development Tools**
- Node.js & npm - Package management
- TypeScript Compiler - Type checking
- PostCSS - CSS processing
- ESLint & Prettier - Code formatting and linting (configured)

---

## 📁 Project Structure

```
task-manager-app/
├── src/
│   ├── app/
│   │   ├── component/
│   │   │   ├── alltask/           # Task list display component
│   │   │   ├── navbar/            # Navigation component
│   │   │   └── tashform/          # Task form component
│   │   ├── pages/
│   │   │   ├── task/              # Main task page
│   │   │   └── tast-form/         # Task form page
│   │   ├── services/
│   │   │   └── task.ts            # Task business logic service
│   │   ├── app.ts                 # Root component
│   │   ├── app.routes.ts          # Route definitions
│   │   ├── app.config.ts          # App configuration
│   │   └── app.html               # Root template
│   ├── index.html                 # HTML entry point
│   ├── main.ts                    # Application bootstrap
│   └── styles.css                 # Global styles
├── public/                        # Static assets
├── angular.json                   # Angular CLI configuration
├── package.json                   # Project dependencies
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # This file
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18+ and npm v9+
- **Angular CLI** v21+ (install globally: `npm install -g @angular/cli`)
- **Git** (optional, for cloning)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/task-manager-app.git
   cd task-manager-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:4200`

4. **Build for production:**
   ```bash
   npm run build
   ```
   Build artifacts will be stored in the `dist/` directory.

---

## 💻 Usage

### Running the Application

**Development Mode:**
```bash
npm start
```
Runs the app in development mode with live reloading on file changes.

**Production Build:**
```bash
npm run build
```
Creates an optimized production build.

**Watch Mode:**
```bash
npm run watch
```
Builds the app in watch mode for continuous compilation.

**Run Tests:**
```bash
npm test
```
Executes unit tests using Vitest.

---

## 🧩 Component Overview

### **Navbar Component** (`navbar/`)
- Top navigation bar
- Application branding
- Navigation links
- Responsive mobile menu

### **Task Form Component** (`tashform/`)
- Input fields for task details
- Form validation
- Submit functionality
- Clear/Reset options

### **All Tasks Component** (`alltask/`)
- Display list of all tasks
- Task status indicators
- Edit/Delete actions
- Filter and sort options

### **Task Service** (`services/task.ts`)
- CRUD operations for tasks
- State management
- Local storage integration
- Data transformation

---

## 📝 Key Features Explained

### Task Management
- Add new tasks with title, description, and priority
- Edit existing tasks
- Mark tasks as complete/incomplete
- Delete tasks
- View all tasks in a sorted list

### Form Validation
- Required field validation
- Email format validation (if applicable)
- Dynamic error messages
- Real-time validation feedback

### Responsive Design
- Mobile-first approach
- Adapts to all screen sizes
- Touch-friendly interface
- Optimized performance on low-bandwidth networks

---

## 🧪 Testing

The project includes test files for all components and services:

```bash
# Run all tests
npm test

# Run tests with coverage
ng test --code-coverage

# Run tests in watch mode
ng test --watch
```

Test files are located alongside components:
- `*.spec.ts` - Unit tests

---

## 📦 Dependencies

### Main Dependencies
- `@angular/core` - Angular core framework
- `@angular/forms` - Reactive forms module
- `@angular/router` - Routing module
- `rxjs` - Reactive programming library
- `tslib` - TypeScript helper library

### Dev Dependencies
- `@angular/cli` - Development server and build tool
- `@angular/build` - Angular build system
- `typescript` - TypeScript compiler
- `tailwindcss` - CSS framework
- `vitest` - Unit testing framework
- `postcss` - CSS transformations

See [package.json](package.json) for the complete list.

---

## 🎯 Best Practices Implemented

- ✅ **Component Composition** - Reusable, focused components
- ✅ **Service Layer** - Centralized business logic
- ✅ **Reactive Programming** - RxJS observables for data flow
- ✅ **Type Safety** - Full TypeScript typing
- ✅ **Responsive Design** - Mobile-first CSS approach
- ✅ **Code Organization** - Clear folder structure
- ✅ **Component Testing** - Unit tests for components
- ✅ **Accessibility** - Semantic HTML and ARIA labels

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/task-manager-app.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```

4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**

### Code Style Guidelines
- Use 2 spaces for indentation
- Follow Angular style guide
- Use TypeScript strict mode
- Write meaningful commit messages
- Keep components focused and single-responsibility

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- Angular Team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- The open-source community for inspiration and tools

---

## 📧 Support

If you have any questions or suggestions, please feel free to:
- Open an issue on GitHub
- Contact the author
- Check existing issues and discussions

---

## 🔄 Future Enhancements

- [ ] Backend integration with REST API
- [ ] User authentication and authorization
- [ ] Task categories and tags
- [ ] Priority levels and due dates
- [ ] Task reminders and notifications
- [ ] Dark mode theme
- [ ] Task sharing and collaboration features
- [ ] Cloud storage integration

---

**Made with ❤️ by [Your Name]**
