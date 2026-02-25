
import { Header } from "../components/Header"
import { Footer } from "../components/Footer";
export const About= () => {
    return(
            
             <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
                <Header />
             <section style={{ padding: "40px 20px", textAlign: "center", backgroundColor: "#f5f5f5" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>About Me</h1>
        <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem", color: "#555" }}>
          I am a Junior Software Developer passionate about building responsive web applications and learning new technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section style={{ padding: "40px 20px", backgroundColor: "#fff" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", textAlign: "center" }}>Skills</h2>
        <ul style={{ display: "flex", justifyContent: "center", gap: "20px", listStyle: "none", flexWrap: "wrap", padding: 0 }}>
          <li style={{ padding: "10px 20px", border: "1px solid #ccc", borderRadius: "8px" }}>React</li>
          <li style={{ padding: "10px 20px", border: "1px solid #ccc", borderRadius: "8px" }}>TypeScript</li>
          <li style={{ padding: "10px 20px", border: "1px solid #ccc", borderRadius: "8px" }}>Node.js</li>
          <li style={{ padding: "10px 20px", border: "1px solid #ccc", borderRadius: "8px" }}>PostgreSQL</li>
        </ul>
      </section>

      {/* Contact / Info Section */}
      <section style={{ padding: "40px 20px", backgroundColor: "#f5f5f5", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Contact Info</h2>
        <p>Email: yourname@example.com</p>
        <p>Location: Nepal</p>
      </section>
                <Footer/>
                </div>
    );
};
