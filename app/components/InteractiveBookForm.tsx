'use client'
import { useState } from 'react';
import { Book } from "../types";

export default function InteractiveBookForm() {
  const [title, setTitle] = useState('');
  
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
} 