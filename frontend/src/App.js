import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <h2>Welcome!</h2>
          <p>This is a simple website template using React.</p>
        </section>
        <section>
          <h2>About Us</h2>
          <p>Here you can add some information about your website or organization.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
