export default function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          width: "100%",
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 2rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HEADER / HERO */}
        <header style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#5FA8D3",
              marginBottom: "1.25rem",
            }}
          >
            Software Developer · Project Manager
          </p>
          <h1
            style={{
              fontSize: "clamp(2.6rem, 6vw, 3.75rem)",
              fontWeight: 600,
              color: "#1B4965",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            Edward Robinson
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: 300,
              color: "#4a6a7a",
              lineHeight: 1.5,
              maxWidth: 520,
            }}
          >
            Retiree looking to get back into tech AI-style
          </p>
          <div
            style={{
              marginTop: "2.5rem",
              width: 48,
              height: 3,
              backgroundColor: "#5FA8D3",
              borderRadius: 2,
            }}
          />
        </header>

        <main style={{ flex: 1 }}>
          {/* ABOUT */}
          <section style={{ paddingBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#1B4965",
                marginBottom: "1.5rem",
              }}
            >
              About
            </h2>
            <p
              style={{
                fontSize: "1.075rem",
                lineHeight: 1.85,
                color: "#2D2D2D",
                maxWidth: 680,
                fontWeight: 300,
              }}
            >
              I'm a retired project manager based in DC who got into tech through
              a series of jobs after college. I'm learning to build tools that
              make local government more accessible. When I'm not at my laptop,
              I'm probably taking a nap or exploring the city with friends.
            </p>
          </section>

          {/* THREE THINGS */}
          <section style={{ paddingBottom: "5rem" }}>
            <h2
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#1B4965",
                marginBottom: "1.75rem",
              }}
            >
              What I'm Interested in Building with The Upskilling Labs
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  number: "01",
                  text: "Learning an array of AI topics and tools",
                },
                {
                  number: "02",
                  text: "Networking with like-minded folks",
                },
                {
                  number: "03",
                  text: "Eventually build my own app",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                    backgroundColor: "#FFFFFF",
                    borderRadius: 8,
                    padding: "1.4rem 1.6rem",
                    borderLeft: "3px solid #5FA8D3",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "#5FA8D3",
                      paddingTop: "0.2rem",
                      flexShrink: 0,
                    }}
                  >
                    {item.number}
                  </span>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "#2D2D2D",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#ddeaf2",
          borderTop: "1px solid #c8dde9",
          padding: "2rem",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 800,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: "#4a6a7a",
              fontWeight: 400,
            }}
          >
            Built at The Upskilling Labs
          </p>
        </div>
      </footer>
    </div>
  );
}
