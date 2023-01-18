import { Button } from 'antd';

export default function About({ posts }) {
  return (
    <div>
      <h1>About Page {posts.val1}</h1>
      <Button href="../" type="link">
        back
      </Button>
    </div>
  );
}

// pre statc data get, will call when page build
export async function getStaticProps({ params }) {
  const posts = {
    val1: 'test value' + params.id,
  };
  return {
    props: {
      posts,
    },
  };
}

// pre path get, will call when page build
export async function getStaticPaths() {
  const postsPath = [
    {
      id: '1',
    },
    {
      id: '2',
    },
  ];

  const paths = postsPath.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}
