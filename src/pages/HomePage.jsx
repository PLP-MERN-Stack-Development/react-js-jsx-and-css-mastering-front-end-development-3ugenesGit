import React from 'react';
import Button from '../components/Button.jsx'; // Import the Button
import Card from '../components/Card.jsx';   // Import the Card

function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="p-6">
        <h1 className="text-3xl font-bold mb-2">Welcome</h1>
        <p>
          Use the navigation to explore Tasks and Posts.
        </p>
      </Card>

      {/* Button Showcase */}
      <Card title="Reusable Button Components">
        <p className="mb-4">
          Here are the button variants you created. They are fully reusable and
          customizable via props.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="primary"
            onClick={() => console.log('Primary clicked!')}
          >
            Primary Button
          </Button>
          <Button
            variant="secondary"
            onClick={() => console.log('Secondary clicked!')}
          >
            Secondary Button
          </Button>
          <Button
            variant="danger"
            onClick={() => console.log('Danger clicked!')}
          >
            Danger Button
          </Button>
        </div>
      </Card>

      {/* Content Section */}
      <Card title="Component Architecture">
        <p>
          You've successfully created a reusable `Card` component. You can wrap
          any content you want inside it, and it will be displayed in this clean,
          boxed layout.
        </p>
        <p className="mt-4">
          The `Navbar` and `Footer` are now part of a `Layout` component, which
          wraps all your pages to ensure a consistent look and feel across the
          entire application.
        </p>
      </Card>

      <Card>
        <h1 className="text-3xl font-bold mb-2">Welcome</h1>
        <p>
          Use the navigation to explore Tasks and Posts.
        </p>
      </Card>
    </div>
  );
}

export default Home;