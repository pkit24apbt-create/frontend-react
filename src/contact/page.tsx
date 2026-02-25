
import { Header } from "../components/Header"
import { Footer } from "../components/Footer";
export const Contact = () => {
    return(
            
                <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>

                <Header/>
                <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Contact Me</h1>
        <p>Feel free to drop a message or reach me via email!</p>
      </section>

      {/* Contact Info */}
      <section style={{ textAlign: "center", marginBottom: "30px" }}>
        <p>Email: parbatir861@gmail.com</p>
        <p>Location: Pokhara,Nepal</p>
      </section>

      {/* Contact Form */}
      <section style={{ maxWidth: "400px", margin: "0 auto 40px" }}>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </form>
      </section>

                <Footer/>
            </div>
    );
};

