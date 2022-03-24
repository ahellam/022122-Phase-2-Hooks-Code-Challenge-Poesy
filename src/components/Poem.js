import React from "react";

function Poem({title, content, author, id, handleClick, isRead}) {
  
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={() => handleClick(id)}>{isRead? "read" : "mark as read"}</button>
    </div>
  );
}

export default Poem;
