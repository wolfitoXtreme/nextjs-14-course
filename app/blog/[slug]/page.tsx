const BlogPost = ({ params, params: { slug } }: PageProps) => (
  <main>
    <h1>Blog Post... {slug}</h1>
    <pre>{JSON.stringify(params, null, 2)}</pre>
  </main>
);

export default BlogPost;
