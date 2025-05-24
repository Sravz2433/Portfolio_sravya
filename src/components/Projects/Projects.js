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
              ghLink="https://github.com/Sravz2433/mouse-mammary-rna-seq-analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Evolutionary Tree Reconstruction of Ebolaviruses"
              description="Built an evolutionary tree using genomic sequences to study diversity and transmission patterns."
              ghLink="https://github.com/Sravz2433/ebolavirus-tree"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Comprehensive Analysis of SARS-CoV-2"
              description="Conducted genome assembly, variant classification, and structural prediction of SARS-CoV-2 spike protein."
              ghLink="https://github.com/Sravz2433/sars-cov2-analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="E. coli Protein Visualization and Analysis"
              description="Investigated key structural and functional properties of E. coli proteins using computational tools."
              ghLink="https://github.com/Sravz2433/Ecoli-Protein-Visualization"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Rett Syndrome Pathogenicity Classifier"
              description="Classify whether a given MECP2 mutation is benign or pathogenic using various ML and DL techniques."
              ghLink="https://github.com/Sravz2433/MECP2-Analysis"
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
              title="Drug Discovery using ML"
              description="Built machine learning models to predict drug-target interactions and accelerate drug discovery processes."
              ghLink="https://github.com/Sravz2433/Drug-Discovery-ML"
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
              title="Protein Domain Identification with BLAST"
              description="Automated protein domain annotation using BLAST against known domain databases."
              ghLink="https://github.com/Sravz2433/protein-domain-annotation"
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

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Bioinformatics Tools and Pipelines"
              description="Consolidated various bioinformatics workflows, including sequence alignment and variant analysis, into reusable Python scripts."
              ghLink="https://github.com/Sravz2433/Bioinformatics"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;