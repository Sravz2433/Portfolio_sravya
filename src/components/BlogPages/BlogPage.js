import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

const blogsData = {
  "mouse-mammary-rna-seq": {
    title: "Mouse Mammary RNA-Seq Analysis",
    content: "Analyzed RNA-seq data to identify differentially expressed genes linked to breast cancer. This project explores gene expression changes in various conditions, helping researchers understand genetic influences on cancer development.",
    date: "March 28, 2025",
    author: "Sravya Sri Mallampali"
  },
  "ebola-evolutionary-tree": {
    title: "Evolutionary Tree Reconstruction of Ebolavirus",
    content: "Reconstructed the evolutionary history of Ebolavirus using phylogenetic analysis techniques. This helps in understanding virus mutations and potential outbreak predictions.",
    date: "March 20, 2025",
    author: "Sravya Sri Mallampali"
  },
  "mecp2-mutation-analysis": {
    title: "Genomic Variant Classification for MECP2 Mutation Pathogenicity",
    content: "Developed ML models to classify pathogenic MECP2 mutations linked to Rett Syndrome. This project applies machine learning to analyze genetic variations for disease identification.",
    date: "March 15, 2025",
    author: "Sravya Sri Mallampali"
  }
};

function BlogPage() {
  const { blogId } = useParams();
  const blog = blogsData[blogId];

  if (!blog) {
    return <Container className="text-center">Blog not found.</Container>;
  }

  return (
    <Container fluid className="blog-page">
      <Particle />
      <Container>
        <h1 className="blog-heading">{blog.title}</h1>
        <p className="blog-meta">
          <strong>By:</strong> {blog.author} | <strong>Date:</strong> {blog.date}
        </p>
        <p className="blog-content">{blog.content}</p>
      </Container>
    </Container>
  );
}

export default BlogPage;
