---
title: The Graduate School Journey Archiving a Million Theses
sidebar_position: 999
---

# 2.5.42 The Graduate School Journey: Archiving a Million Theses

**Persona:** "State University Graduate School," specifically the administrative office responsible for managing the submission, approval, and archiving of thousands of Electronic Theses and Dissertations (ETDs) each year.
**Work:** A university-wide system for ingesting and preserving the complete scholarly record of its graduate students.

---

### **Primitives & Technologies Demonstrated**

*   **Ingestion Primitives (Automation & Intelligence):**
    *   `Template-Based Object Creation` (The "ETD Submission" template)
    *   `Policy-Based Ingestion`
    *   `Guided Ingest & QC Workflow` (The student submission portal)
    *   `AI-Assisted Metadata Extraction` (from student-provided data)
*   **Core Concepts:**
    *   `Creator Sovereignty` (for student authors)
    *   `Reproducible Research`
    *   `Posthumous Release / Embargo Management`
*   **Schema Projector Lenses:**
    *   `Institutional Repository (IR) Viewer`
    *   `NSF DMSP Report Generation`
    *   `Library Catalog Integration (MARC Record Export)`
*   **Licensing & Economic Primitives:**
    *   `Composable Licensing (CC)` (student-selected)
*   **Standards & Compliance:**
    *   `OAIS Model Alignment`
    *   `FERPA Compliance`

---

### **Part 1: The Ingestion Experience - From World to Archive**

#### **The Curation Narrative: The Administrative Nightmare of ETDs**
The graduate school administration office faces a recurring, high-volume challenge. Every semester, hundreds of students must submit their final theses and dissertations. The current workflow is a chaotic nightmare of emailed PDFs, confusing web forms, and manual metadata entry by staff into a clunky, outdated Institutional Repository (IR). Students are frustrated by the process, and administrators spend hundreds of hours checking formats and chasing down supplementary data. The university needs a streamlined, student-centric system that empowers students as creators while ensuring their work is preserved to professional archival standards from the moment of submission.

**The Ingestion Process: The Empowered Submission**
The university implements EverArchive as its new "ETD Submission and Preservation Portal."

1.  **The Student's Journey:** A PhD student, "Maria," has just successfully defended her dissertation. Instead of a confusing checklist of forms, she is directed to a single portal.
2.  **The Guided Ingest Workflow:** The portal is a wizard that walks her through creating a Deep Authorship Package for her dissertation.
    *   **Template:** She selects the "PhD Dissertation (STEM)" **Template**, which pre-configures the required structure.
    *   **Upload:** The interface prompts her: "Upload your final, approved dissertation PDF." This becomes the **Surface Layer**.
    *   **Supplementary Data:** The next screen asks: "Does your dissertation depend on supplementary data or code? Please upload it here." Maria drags in her 50GB raw experimental dataset and the Python scripts she used for analysis. This becomes the **Process Layer**. The system automatically runs **`Good Enough QC`**, verifying file integrity.
    *   **Metadata:** The system uses **`AI-Assisted Metadata Extraction`** to pull her name, her advisor's name, and the abstract from the PDF, pre-filling the metadata form for her to confirm.
3.  **The Empowerment Moment (Permissions):** Maria, as the creator, is now presented with the permissions panel for her own work.
    *   **Embargo:** She sets a 2-year embargo on her raw dataset (Process Layer) to give her time to publish further papers, after which it will become public. The final dissertation (Surface Layer) is made immediately public.
    *   **Licensing:** She is given a clear choice of Creative Commons licenses and chooses a `CC BY-NC`.
    *   **ORCID:** She connects her ORCID iD, creating a permanent link between her identity and her work.

**The Result:** The administrative burden is lifted from the staff and transformed into an empowering, value-added process for the student. The submission is no longer just a PDF; it's a complete, reproducible research object, perfectly structured for long-term preservation from the moment of its creation.

---

### **Part 2: The Publishing Experience - The Living Document**

#### **The Publishing Workflow & The Schema Projector**
*   **The Steward's Action:** This is fully automated. As soon as Maria's submission is approved by her advisor through the portal, the object's `Surface Layer` is designated as "live."
*   **The Schema Projector in Action:**
    *   **Institutional Repository View:** The "IR Projector" renders the object as a clean, professional page within the university's official repository. It displays the abstract, the download link for the PDF, and a note that says "Supplementary Data (Embargoed until [Date])."
    *   **Library Catalog Integration:** Simultaneously, the "MARC Record Projector" generates a standard cataloging record and sends it via an API to the main university library catalog, making her dissertation discoverable there.
*   **The "Living Update" Experience:** Two years later, Maria's embargo on her dataset expires. The system **automatically** updates the object's permissions. The IR webpage now displays a "Download Dataset" button. No human intervention is required.
*   **The Value Proposition:** The university's IR is no longer a static, manually updated system. It is a dynamic, policy-driven platform that handles access control and updates automatically, dramatically reducing administrative workload and ensuring compliance with authors' wishes.

---

### **Part 3: The Archival Act - Defining a Permanent Legacy**

**The Archival Workflow:**
The archival act occurs at the moment of submission. Every student's work is "born-archival," created from the start in a format designed for permanent, verifiable preservation.

---

### **Part 4: The Consumption Experience - A Multi-Faceted Afterlife**

#### **Consumption Scenario A: The Human Connection (The Future Student)**
*   **Consumer Persona:** Another PhD student, five years later, building on Maria's work.
*   **The Discovery & Access:** He finds Maria's dissertation in the university repository.
*   **The "Aha!" Moment:** He is trying to replicate a key graph in her paper. He can't get his code to work. Frustrated, he clicks the "View Supplementary Data" button. He accesses the **Process Layer** and downloads not just her raw data, but the exact Python script she used to generate the graph. He discovers she used a specific, non-obvious library version. By using the same dependency, he is able to perfectly replicate her results.
*   **The Value Proposition:** This fulfills the promise of **truly reproducible research**. The preservation of the *entire process*—the data and the code—saves the new student weeks of frustration and allows him to confidently build upon a verifiable foundation, accelerating the pace of science.

#### **Consumption Scenario B: The AI / Agentic Web Connection (The Funder's Compliance AI)**
*   **Consumer Persona:** An AI auditor working for the National Science Foundation (NSF).
*   **The Task & Access:** The AI is tasked with auditing the university's compliance with the open data mandates for all dissertations that resulted from NSF-funded research.
*   **The Synthesis & Insight:** Instead of requesting manual reports from the university, the AI queries the EverArchive repository's public API. It asks: "For all dissertations funded by Grant #XXXX, verify that the underlying datasets have been made public after their embargo period." The EverArchive system returns a cryptographically signed list of all relevant dissertations, the status of their embargoes, and direct links to the public datasets.
*   **The Value Proposition:** The compliance and reporting process is transformed from a manual, time-consuming audit into an instant, automated, and machine-verifiable query. This saves immense resources for both the university and the funding agency, and provides a new level of trust and transparency in the scientific ecosystem.

---

### **Conclusion: The Value of the Complete Journey**
For the university administration, EverArchive transforms the chaotic ETD submission process into a streamlined, value-added workflow that offloads work and empowers students. For the students, it gives them unprecedented control over their own intellectual property and ensures their full research contribution is preserved. For the university library, it creates a richer, more valuable, and more easily managed collection. It turns a bureaucratic requirement into a powerful engine for creating born-archival, reproducible, and permanent scholarly records.