import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Mouse Mammary RNA-Seq Analysis"
              description="Analyzed RNA-seq data to identify differentially expressed genes linked to breast cancer."
              ghLink="https://github.com/Sravz2433/Mouse-Mammary-RNA-Seq-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Evolutionary Tree Reconstruction of Ebolavirus"
              description="Reconstructed the evolutionary history of Ebolavirus using phylogenetic analysis techniques."
              ghLink="https://github.com/Sravz2433/Evolutionary-Tree-Reconstruction-of-Ebolavirus"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Genomic Variant Classification for MECP2 Mutation Pathogenicity"
              description="Developed ML models to classify pathogenic MECP2 mutations linked to Rett Syndrome."
              ghLink="https://github.com/Sravz2433/Genomic-Variant-Classification-for-MECP2-Mutation-Pathogenicity"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Deletion-Insertion Analysis with RNN"
              description="Developed an RNN-based model to predict deletion-insertion effects in MECP2 and FOXG1 genes."
              ghLink="https://github.com/Sravz2433/Deletion-Insertion-Analysis-with-RNN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Computational Drug Discovery with Random Forest"
              description="Built a Random Forest-based regression model to predict drug-target interactions."
              ghLink="https://github.com/Sravz2433/Computational-Drug-Discovery-with-Random-Forest"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="FASTA to 3D Protein Structure Prediction"
              description="Developed a pipeline to predict 3D protein structures from FASTA sequences using AlphaFold and MODELLER."
              ghLink="https://github.com/Sravz2433/FASTA-to-3D-Protein-Structure-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="DNA Sequence GC Content Calculator"
              description="Created a Python script to calculate GC content across large DNA sequences to study genome stability."
              ghLink="https://github.com/Sravz2433/DNA-Sequence-GC-Content-Calculator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
