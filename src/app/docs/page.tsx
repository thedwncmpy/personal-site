import DocumentList from "@/components/documents";
import Header from "@/components/header";

export default function Blog() {
  return (
    <div>
      <Header title="docs" />
      <div className="hidden mt-8 leading-10 md:block">
        press <span className="word-decoration text-light-green">/</span> &bull;{" "}
        <span className="word-decoration text-light-green">use ctrl / ⌘ j</span>{" "}
        and <span className="word-decoration text-light-green">ctrl / ⌘ k</span>{" "}
        or <span className="word-decoration text-light-green">&#8595;</span> and{" "}
        <span className="word-decoration text-light-green">&#8593;</span> to
        navigate
      </div>
      <DocumentList />
    </div>
  );
}
