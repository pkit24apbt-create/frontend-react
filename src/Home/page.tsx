
import { Header } from "../components/Header"
import { Footer } from "../components/Footer";
export const Home = () => {
    return(
               <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>
                <Header/>
                 <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Welcome to My Portfolio</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 30px" }}>
          Hi! I’m a Junior Software Developer passionate about creating beautiful and functional web applications.
        </p>
        <a
          href="/contact"
          style={{
            display: "inline-block",
            padding: "12px 25px",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Contact Me
           </a>
      </section>

      {/* Short About / Intro Section */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "15px" }}>About Me</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>
          I specialize in building responsive web apps using React, TypeScript, and Node.js. 
          I love learning new technologies and turning ideas into real projects.
        </p>
      </section>
                <Footer/>
                </div>
    );
};