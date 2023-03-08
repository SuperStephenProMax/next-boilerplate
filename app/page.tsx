import { allPosts } from 'contentlayer/generated';

export default async function BlogPage() {
  return (
    <section>
      {allPosts
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          post.title
        ))}
    </section>
  );
}

