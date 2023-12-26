import Link from 'next/link';

const BlogPage: React.FC = () => (
  <main>
    <h1>The Blog</h1>
    <ul>
      <li>
        <Link href="/blog/post-1">Post 1</Link>
      </li>
      <li>
        <Link href="/blog/post-2">Post 2</Link>
      </li>
    </ul>
    <p></p>
  </main>
);

export default BlogPage;
