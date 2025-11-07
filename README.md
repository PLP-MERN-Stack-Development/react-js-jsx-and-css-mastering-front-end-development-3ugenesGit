# React.js, JSX, and CSS: Mastering Front-End Development

This project serves as a comprehensive learning and development environment for mastering front-end development using React.js, JSX, and CSS. It demonstrates key React concepts, including component-based architecture, state management with Context API, routing, and custom hooks, alongside modern CSS practices with Tailwind CSS.

## Features

- **Component-Based Architecture**: Organized and reusable UI components.
- **React Router**: Seamless navigation between different sections of the application (Home, Tasks, Posts).
- **Theme Management**: Dark/Light mode toggle using React Context API and `localStorage` for persistence.
- **Custom Hooks**: Implementation of custom hooks like `useLocalStorage` for state persistence and `fetchPosts` for data fetching.
- **Responsive Design**: Built with Tailwind CSS for a utility-first approach to styling and responsive layouts.
- **Task Management**: A dedicated section for managing tasks.
- **Post Display**: A section to display posts, likely fetched from an API.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool that provides an extremely fast development experience.
- **React Router**: Declarative routing for React.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **JavaScript (ES6+)**

## Project Structure

The project follows a standard React application structure:

```
src/
├── assets/             # Static assets like images
├── components/         # Reusable UI components (e.g., Button, Card, Navbar, Footer, TaskManager)
├── context/            # React Context API for global state management (e.g., ThemeContext)
├── hooks/              # Custom React hooks (e.g., useLocalStorage, fetchPosts)
├── pages/              # Top-level components representing different views/routes (e.g., HomePage, PostPage, TaskPage)
├── App.jsx             # Main application component, sets up routing and theme provider
├── main.jsx            # Entry point of the React application
├── index.css           # Global styles
└── App.css             # Application-specific styles
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed.

- [Node.js](https://nodejs.org/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/3ugenes/react-js-jsx-and-css-mastering-front-end-development.git
    cd react-js-jsx-and-css-mastering-front-end-development
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```

### Running the Development Server

To start the development server and view the application in your browser:

```bash
npm run dev
# or yarn dev
```

The application will typically be available at `http://localhost:5173` (or another port if 5173 is in use).

# Live Link

https://react-routes-task-manager.netlify.app/tasks

## Usage

- Navigate through the application using the links in the Navbar.
- Toggle between Light and Dark mode using the button in the Navbar.
- Explore the Home, Tasks, and Posts pages.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
