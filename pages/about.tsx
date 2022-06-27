import { Layout } from "../components/layout";
import LinkPreview from "../components/link-preview";

export default function About() {
  return (
    <Layout>
      <h1 className="font-serif text-4xl font-bold my-4">About</h1>
      <h3 className="font-serif text-xl my-4">故意留白</h3>
      {/* <LinkPreview url="https://twitter.com/pengx17" />
      <h3 className="font-serif text-lg my-4">
        <a href="https://pengx17.github.io/" target="_blank" rel="noreferrer">
          Archived Blog
        </a>
      </h3> */}
    </Layout>
  );
}
