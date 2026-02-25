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
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const result = await response.json();
            const data: Post[] = result.data;
            
            setPosts(data);

        }
        catch(error){
            console.error("Error fetching posts:", error);
        }
        };
           fetchPosts(); 
        }, []);
       
    return(
            <div>
                <Header/>

                <div>Blog
                    {posts.map((post, index) =>{
                     return(
                        <div key={index}>
                         <h2>{post.title}</h2>  
                         <p>{post.body}</p> 
                         <p> {post.userId}</p>
                         </div>
                     )   
                    })}
                </div>
                <Footer/>
                </div>
    );
};