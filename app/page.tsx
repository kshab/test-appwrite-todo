'use client';

import { Client, Databases } from 'appwrite';
import styles from './page.module.css'

export default function Home() {
  const fetchTodos = async () => {
    const client = new Client();

    client
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
      .setProject(process.env.NEXT_PUBLIC_PROJECT_ID as string);

    const databases = new Databases(client);

    const res = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID as string,
      process.env.NEXT_PUBLIC_COLLECTION_ID as string
    );
    const todos = res.documents;

    console.log(todos);
  };

  const login = (event: any) => {
    event.preventDefault();
    const name = event.target[0].value;
    const password = event.target[1].value;
  };

  fetchTodos();

  return (
    <main className={styles.main}>
      <h2>Test</h2>

      <form onSubmit={login}>
        <label htmlFor='name'></label>
        <input type="text" name='name' />

        <label htmlFor='password'></label>
        <input type="password" name='password' />

        <input type="submit" value='submit' />
      </form>
    </main>
  )
}
