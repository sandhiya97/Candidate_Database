

// app/layout.js

import './globals.css';

export const metadata = {
  title: 'Candidate Database',
  description: 'A candidate management system',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <div className="container">
            <h1 className="navbar-brand">Candidate Database</h1>
            <nav className="navbar-links">
              <div className="button-group space-x-4">
              <button className="btn btn-admin"><a href="/admin">Admin</a></button>
              <button className="btn btn-recruiter" ><a href="/recruiter">Recruiter</a></button>
              </div>
            </nav>
          </div>
        </header>
        <main className="container">
          {children}
        </main>
        <footer className="footer">
          <p>&copy; 2024 Candidate Database Application</p>
        </footer>
      </body>
    </html>
  );
}

