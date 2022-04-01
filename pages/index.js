import { Row, Col } from "react-bootstrap";
import GridItem from "components/grid-item";
import { getAllPosts } from "lib/api";
import Layout from "components/layout";
import Intro from "components/intro";
import moment from "moment";

export default function Home({ posts }) {
  return (
    <Layout>
      <Row>
        <Col md="12">
          <Intro />
        </Col>
      </Row>

      <hr />

      <pre>{/*JSON.stringify(posts, null, 2)*/}</pre>
      <Row className="mb-5">
        {posts.map((post, index) => (
          <Col md="4" key={index}>
            <GridItem post={post} key={index} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
