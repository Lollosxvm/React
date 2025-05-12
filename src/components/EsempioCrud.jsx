import React, { useState, useEffect } from 'react';

function PostsCrud() {
  // 1) Stati locali
  const [posts, setPosts] = useState([]); // array di post
  const [loading, setLoading] = useState(false); // loading indicator
  const [error, setError] = useState(null); // eventuali errori

  // 2) Effetto per il fetch iniziale (READ)
  useEffect(() => {
    fetchPosts();
  }, []); // dipendenze vuote → esegue solo al montaggio

  // --- FUNZIONI CRUD ---

  // READ: recupera tutti i post
  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) throw new Error(`Errore ${res.status}`);
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // CREATE: aggiunge un nuovo post
  const createPost = async (newPost) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      });
      const created = await res.json();
      // aggiorno lo stato localmente
      setPosts((prev) => [created, ...prev]);
    } catch (err) {
      console.error('Create failed:', err);
    }
  };

  // UPDATE: modifica un post esistente
  const updatePost = async (id, updatedFields) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedFields),
        }
      );
      const updated = await res.json();
      setPosts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...updated } : p))
      );
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  // DELETE: elimina un post
  const deletePost = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  // --- RENDERING ---

  if (loading) return <p>Caricamento in corso…</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h1>CRUD di Post</h1>

      {/* Bottone di esempio per CREATE */}
      <button
        onClick={() =>
          createPost({
            title: 'Nuovo titolo',
            body: 'Testo del post',
            userId: 1,
          })
        }
      >
        Aggiungi post
      </button>

      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: 16 }}>
            <h3>
              #{post.id} – {post.title}
            </h3>
            <p>{post.body}</p>

            {/* Esempio di UPDATE */}
            <button
              onClick={() =>
                updatePost(post.id, { title: post.title + ' (upd)' })
              }
            >
              Aggiorna titolo
            </button>

            {/* Esempio di DELETE */}
            <button
              onClick={() => deletePost(post.id)}
              style={{ marginLeft: 8, color: 'red' }}
            >
              Elimina
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsCrud;
