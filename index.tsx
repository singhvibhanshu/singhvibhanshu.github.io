import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const profilePicBase64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAfASURBVHhe7d1/s95VHMfx7yYniZFESAxpTCGGEt4gRhJDIpSoiEYkKEpChFhIIB4QDxIKHgkSmgAiVUhCCIFACh5SjGDBkyQSjcZDGmMSQyI5kZzc+3y+6hzb/fn83s/e57xPzvc5vN/nd5/n+exzPmfv7L3vN3s8Hmf8t7u7+/PDw8P/fPny5d9ubm7+5dKlS7+en5//xefz+S/29/f/8sMPP/zbrVu3/rK9vf3Xy5cv/3VjY+OvDx48+NXVq1cv3Gw2/+rSpUu/nJ6e/uX+/v5fvb29/+zh4eGfsiz71dvb27/89ttv/3Z4ePiT/f39n+7u7v5VluXf3tzc/Mvbb7/9F9vb2395fn7+19PT07/s7u7+5eHh4R9ubm7+5YEHHvhrc3PzL7a3t//y9PT0Lz/88MP/2NjY+Mszzzzzm5qaGl6GZVgGZYBlWAYlWIZlWIZlWAZlsBRWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRmWYRm//f/3//v/39/f/9/5f9f/Xw/4fl/1+GZZgGZbAUVmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZlmEZ-all/gAAAABJRU5ErkJggg==";

const App = () => (
  <div className="container">
    <header>
      <img
        src={profilePicBase64}
        alt="Profile"
        className="profile-pic"
        aria-label="A pixelated, black and white anime-style drawing of a person with dark hair."
      />
      <div className="header-content">
        <h1>snwy.me</h1>
        <nav aria-label="Main navigation">
          <ul>
            <li>
              <a href="https://github.com/snwy" target="_blank" rel="noopener noreferrer">
                [github]
              </a>
            </li>
            <li>
              <a href="https://x.com/snwy_me" target="_blank" rel="noopener noreferrer">
                [x]
              </a>
            </li>
            <li>
              <a href="#">[store]</a>
            </li>
            <li>
              <a href="#">[youtube]</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <hr />
      <section className="content-section" aria-labelledby="about-heading">
        <p>
          hey, i'm snwy. i'm a software engineer who's interested in programming
          language design and theory. i'm also interested in distributed
          systems, machine learning, and the future of computing.
        </p>
        <p>i dropped out of high school in 2024 and got my GED to pursue a career.</p>
        <p>
          go to my github to look at some of the things i've made!
        </p>
      </section>

      <hr />
      <section className="content-section" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="sr-only">Contact Me</h2>
        <p>contact me:</p>
        <ul className="contact-list">
          <li>
            [email: <a href="mailto:snwy@snwy.me">snwy@snwy.me</a>]
          </li>
          <li>
            [x: <a href="https://x.com/snwy_me" target="_blank" rel="noopener noreferrer">@snwy_me</a>]
          </li>
          <li>[discord: snwy]</li>
        </ul>
      </section>
      <hr />
    </main>

    <footer>
      <p>thanks for visiting!</p>
    </footer>
  </div>
);

// This is a helper class for screen readers.
const style = document.createElement('style');
style.textContent = `
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;
document.head.appendChild(style);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
