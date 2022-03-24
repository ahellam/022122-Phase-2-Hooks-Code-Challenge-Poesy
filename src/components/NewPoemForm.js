import { useState } from "react";

function NewPoemForm({onAddPoem}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      title,
      author,
      content,
      id: Math.random() 
    }
    // console.log(formData)

    fetch("http://localhost:8004/poems", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)      
    })
    .then(res => res.json())
    .then(onAddPoem(formData))

    
    setTitle("")
    setAuthor("")
    setContent("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-poem-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your masterpiece here..."
        rows={10}
      />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
