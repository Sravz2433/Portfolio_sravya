import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import BlogCard from "./BlogCards";
import Particle from "../Particle";

function Blogs() {
  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="blog-heading">
          My Recent <strong className="purple">Blogs</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few blogs I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              isBlog={false}
              title="Mouse Mammary RNA-Seq Analysis"
              description="Analyzed RNA-seq data to identify differentially expressed genes linked to breast cancer."
              readLink="/blogs/mouse-mammary-rna-seq"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              isBlog={false}
              title="Evolutionary Tree Reconstruction of Ebolavirus"
              description="Reconstructed the evolutionary history of Ebolavirus using phylogenetic analysis techniques."
              readLink="/blogs/ebolavirus-evolution"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              isBlog={false}
              title="Genomic Variant Classification for MECP2 Mutation Pathogenicity"
              description="Developed ML models to classify pathogenic MECP2 mutations linked to Rett Syndrome."
              readLink="/blogs/mecp2-mutation"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              isBlog={false}
              title="Deletion-Insertion Analysis with RNN"
              description="Developed an RNN-based model to predict deletion-insertion effects in MECP2 and FOXG1 genes."
              readLink="/blogs/deletion-insertion-analysis"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              isBlog={false}
              title="Computational Drug Discovery with Random Forest"
              description="Built a Random Forest-based regression model to predict drug-target interactions."
              readLink="/blogs/drug-discovery-rf"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              isBlog={false}
              title="FASTA to 3D Protein Structure Prediction"
              description="Developed a pipeline to predict 3D protein structures from FASTA sequences using AlphaFold and MODELLER."
              readLink="/blogs/fasta-to-3d-structure"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              isBlog={false}
              title="DNA Sequence GC Content Calculator"
              description="Created a Python script to calculate GC content across large DNA sequences to study genome stability."
              readLink="/blogs/gc-content-calculator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
