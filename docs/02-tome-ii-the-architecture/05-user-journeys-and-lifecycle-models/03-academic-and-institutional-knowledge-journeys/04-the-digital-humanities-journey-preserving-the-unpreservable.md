---
title: The Digital Humanities Journey Preserving the Unpreservable
sidebar_position: 2
---

# 2.5.41 The Digital Humanities Journey: "Preserving the Unpreservable"

**Persona:** "The Lit-Graph Lab," a Digital Humanities (DH) research team at an R1 University.
**Work:** "Victorian Web," a five-year project to map the hidden social and intellectual networks of 19th-century British authors.

---

### **Primitives & Technologies Demonstrated**

*   **Ingestion Primitives (Automation & Intelligence):**
    *   `Template-Based Object Creation` (using the "Digital Humanities Project" template)
    *   `Policy-Based Ingestion`
    *   `AI-Assisted Metadata Extraction` (Named Entity Recognition)
    *   `Development Tool Integration` (Git, for analysis scripts)
*   **Core Concepts:**
    *   `Complex Digital Object Preservation`: Archiving not just files, but databases, software, and interactive visualizations.
    *   `Reproducible Research` (for humanities data)
    *   `Verifiable intellectual lineage`
*   **Schema Projector Lenses:**
    *   `Interactive Network Graph Explorer`
    *   `Live Project Website`
    *   `Reproducible Paper`
    *   `API for Computational Access`
*   **Licensing & Economic Primitives:**
    *   `Educational Use Licensing`
*   **Standards & Compliance:**
    *   `NSF DMSP Compliance` (as DH projects are often grant-funded)

---

### **Part 1: The Ingestion Experience - From World to Archive**

#### **The Curation Narrative: The Fragility of Digital Scholarship**
The Lit-Graph Lab's "Victorian Web" project is a masterpiece of digital scholarship. It consists of a massive graph database tracking every letter sent between authors, every mention of one author in another's diary, and every shared acquaintance. They've built custom Python scripts for analysis and a beautiful, interactive 3D visualization for exploring the network. But they have a huge problem: how do they preserve *this*? Their university's institutional repository is designed for PDFs and datasets, not for living, interactive, multi-part digital creations. They fear their years of work will become an inaccessible, un-runnable folder of code and data within a decade.

**The Ingestion Process: Archiving an Ecosystem, Not Just Files**
The DH lab uses EverArchive as their primary research and preservation environment.

1.  **The Object for "Victorian Web":**
    *   **Surface Layer (The Final Product):** The final, published scholarly paper summarizing their findings. A link to the live, interactive visualization of the network graph. A "guided tour" video that walks users through the project's key discoveries.
    *   **Process Layer (The Verifiable Journey):** This layer contains the entire "research kitchen."
        *   **The Source Texts:** The complete set of digitized Victorian letters, diaries, and books they analyzed.
        *   **The Database:** The Neo4j graph database file containing the structured network data.
        *   **The Code:** The full Git repository of their Python analysis scripts.
        *   **The Methodology:** A detailed document explaining their data cleaning, entity recognition, and relationship-building process.
    *   **Core Layer (The Deep Context):**
        *   **The "Gray Area":** A private folder containing their research notes on ambiguous or unconfirmed relationships they couldn't include in the final data.
        *   **Team Debates:** Transcripts of their lab meetings where they argued over how to define an "intellectual influence" versus a simple "acquaintance."
        *   **Funding Documents:** The original grant proposal that funded the project.

**The Interlinking (The Semantic Weave):**
*   A connection in the graph database between Charles Dickens and Wilkie Collins (**Process**) is linked to the specific letters they exchanged (**Process**) and to a lab meeting transcript where the team debates the nature of their professional rivalry (**Core**).
*   The visualization of the network (**Surface**) is explicitly linked to the Python script that generates it (**Process**), ensuring the rendering logic is preserved with the data.

---

### **Part 2: The Publishing Experience - The Living Document**

#### **The Publishing Workflow & The Schema Projector**
*   **The Steward's Action:** The Lit-Graph Lab uses the EverArchive object as their official project website from the very beginning. They share the public link with the wider DH community.
*   **The Schema Projector in Action:**
    *   **Live Project Website:** The default projector renders a complete project site. It shows their published paper (from the Surface Layer), includes a blog of their research updates (also from the Surface Layer), and, most importantly, embeds the interactive network graph visualization.
    *   **API for Computational Access:** A different researcher wants to build on their data. They access the object's `/api` endpoint. The "API Projector" provides a clean, documented JSON-LD feed of the entire graph database from the Process Layer, allowing other machines to "talk" directly to their research.
*   **The "Living Update" Experience:** The team discovers a new collection of letters and adds 20 new relationships to their graph database. They save the new database file to their object. **Instantly**, the interactive visualization on their project website updates to show the new connections, and the data available via the API is refreshed.
*   **The Value Proposition:** This solves a massive problem for digital projects. The public-facing artifact is no longer a separate entity that must be manually updated. It is a **direct, live rendering of the research itself.** This ensures the public output is never out of sync with the underlying data.

---

### **Part 3: The Archival Act - Defining a Permanent Legacy**

**The Archival Workflow:**
The grant ends, and the lab archives the `v2.0` "Final" version of the project.

**The Permissions & Consent Configuration:**
*   **Sovereign Permissions:** The Surface and Process Layers are made public under an educational license. The Core Layer (internal debates, unconfirmed data) is restricted to the original lab members and future institutional archivists.
*   **NSF DMSP Compliance:** The archival act triggers the **`NSF DMSP Report Generation`** projector, which creates the final report for their grant, complete with permanent links to the archived data, code, and publications, satisfying their legal requirements.

---

### **Part 4: The Consumption Experience - A Multi-Faceted Afterlife**

#### **Consumption Scenario A: The Human Connection (The Graduate Student)**
*   **Consumer Persona:** A literature PhD student in 2050.
*   **The Discovery & Access:** She accesses the "Victorian Web" object.
*   **The "Aha!" Moment:** While exploring the interactive graph, she notices a surprisingly weak link between two authors who were known to be close friends. Intrigued, she dives into the **Core Layer**, to which she has research access. She finds the lab's meeting notes and discovers their long debate about this exact link. They couldn't find a primary source letter, so they downgraded the connection from "friendship" to "acquaintance" in the final data.
*   **The Value Proposition:** The student now has a new research project: to find the "missing letter" that would prove the stronger connection. The archive's transparency about its own "gray areas" and decision-making process has sparked new, human-led research decades later.

#### **Consumption Scenario B: The AI / Agentic Web Connection (The Digital Curator)**
*   **Consumer Persona:** A museum's AI curator, tasked with creating an exhibit about Charles Dickens.
*   **The Task & Access:** The AI ingests the "Victorian Web" object and the objects for Dickens's novels.
*   **The Synthesis & Insight:** The AI uses the **Schema Projector's "Interactive Network Graph Explorer"** as a primary tool. It traces all of Dickens's connections. It finds his correspondence with a specific social reformer (**Process**). It then cross-references the topics of those letters with the manuscript drafts of *Bleak House* and discovers that entire sections of the novel's critique of the legal system were directly influenced by this previously under-appreciated correspondence.
*   **The Value Proposition:** The AI curates a new section of the exhibit called "Dickens the Activist," showcasing the direct link between his private conversations and his public literary output. It has used the preserved relational data to generate a new, richer understanding of a canonical author, revealing his work as a product of a dynamic social network, not just solitary genius.

---

### **Conclusion: The Value of the Complete Journey**
For the Digital Humanities lab, EverArchive is the only platform that can preserve their work in its true, native form: not as a collection of static files, but as a complex, interconnected digital ecosystem. It is their research tool, their live publishing platform, and their permanent, reproducible archive. For future scholars, it ensures that this invaluable digital scholarship remains accessible, usable, and verifiable, preventing the brilliant work of today from becoming the broken links and un-runnable code of tomorrow.