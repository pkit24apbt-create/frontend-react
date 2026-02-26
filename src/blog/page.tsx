const apiUrl = import.meta.env.VITE_BACKEND_URL;
import { Header } from "../components/Header"
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";


interface Post{
    id: number;
    title: string;
    body: string;
    userId: number;
}
export const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);


    useEffect(() => {
        const fetchPosts = async () => {
            try{
            // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const response = await fetch(`${apiUrl}/api/posts`);
            const data: Post[] = await response.json();
          
            setPosts(data);

        }
        catch(error){
            console.error("Error fetching posts:", error);
        }
        };
           fetchPosts(); 
        }, []);
       
    return(
                <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>
                <Header/>
                <section style={{ padding: "40px 20px", textAlign: "center", backgroundColor: "#f5f5f5" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Blog</h1>
        <p>Read the latest posts and updates!</p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "40px 20px",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#fff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{post.title}</h2>
            <p style={{ marginBottom: "10px", color: "#555" }}>{post.body}</p>
            <p style={{ fontSize: "0.9rem", color: "#999" }}>User ID: {post.userId}</p>
          </div>
        ))}
      </section>

                <Footer/>
                </div>
    );
};