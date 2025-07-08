---
title: project-and-product-roadmap
sidebar_position: 4
---

### **Tome IV, Document 4.1**

# EverArchive Infrastructure Implementation Roadmap

**Document ID:** RDM-IMPL-1.0
**Version:** 1.0 (Ratification Draft)
**Date:** 2025-06-19
**Status:** Canonical Reference

---

### **Preamble**

This document outlines the phased implementation strategy for building EverArchive infrastructure from canonical architecture to operational preservation network. It details the project phases, key milestones, infrastructure deployment strategy, and the requirements for initial tools. This is the master plan for building civilizational memory infrastructure.

---

### **Article I: The Phased Implementation Roadmap**

The development and launch of EverArchive will proceed in four distinct, sequential phases. Each phase has a clear focus, a primary milestone, and a set of key deliverables.

#### **Phase 0: Pre-Launch Foundation (Duration: 3 Months)**

*   **Focus:** Preparing the ground. Securing the legal, financial, and partnership foundations before a single line of code for the main product is written.
*   **Primary Milestone:** Initial grant funding secured; First three institutions committed to infrastructure support through MOUs.
*   **Key Deliverables:**
    1.  **Legal & Governance:** Non-profit entity established. Governance Constitution ratified by the founding board. Open-source license for DAP spec selected and approved.
    2.  **Financial:** First major grant proposal submitted. Endowment fund legally structured.
    3.  **Infrastructure Adoption:** Initial conversations with 10 institutions; MOUs signed with 3 early adopters (e.g., a university library, an artist estate, a digital art museum) for infrastructure testing.
    4.  **Technical:** Finalize DAP v2.0 specification and publish for community review.

#### **Phase 1: MVP & Pilot Program (Duration: 6 Months)**

*   **Focus:** Building the core tool and validating it with a high-need user group. The goal is to solve a real, immediate problem for a specific persona.
*   **Primary Milestone:** Successful infrastructure pilot with &gt;100 creators from academic research community, validating the preservation tools and workflows.
*   **Key Deliverables:**
    1.  **Product (MVP):** The **EverArchive Capture Tool** for desktop. It will be a local-first application focused exclusively on the "zero-to-DAP" workflow, including sovereign key management, layered data entry (Core, Process, Surface), and user-initiated upload to their own storage.
    2.  **Community:** Onboarding of the pilot user cohort. Establishment of a private feedback forum and support channel.
    3.  **Infrastructure:** A basic, public-facing **EverArchive Index** that can display the `Surface` metadata of DAP objects archived during the pilot.

#### **Phase 2: Ecosystem Growth & Discovery (Duration: 12 Months)**

*   **Focus:** Expanding from a single tool to a functioning ecosystem. Making the archived content discoverable and useful.
*   **Primary Milestone:** The public launch of the EverArchive Index with over 10,000 discoverable DAP objects and a functioning research API.
*   **Key Deliverables:**
    1.  **Technology:** Launch of the **Schema Projector** (v1), the **Canonical API** (v1), and a public DAP viewer.
    2.  **Infrastructure Network:** Onboarding of 10+ institutions as infrastructure users, moving from pilot to full implementation.
    3.  **Community:** Launch of the first public Steward Training Program. Election of the first Working Groups.
    4.  **Product:** Release of v2 of the Capture Tool, incorporating pilot feedback and expanding to a second creator persona (e.g., Investigative Journalist).

#### **Phase 3: Scale & Standardization (Duration: 24 Months)**

*   **Focus:** Achieving network effects and establishing the DAP format as a trusted standard.
*   **Primary Milestone:** The EverArchive ecosystem achieves operational sustainability through its hybrid economic model, no longer solely dependent on initial grant funding.
*   **Key Deliverables:**
    1.  **Standardization:** Active engagement with standards bodies (W3C, IETF) and formal partnerships with major creative software companies to integrate DAP export functionality.
    2.  **Governance:** The first full election of the EverArchive Assembly.
    3.  **Economic:** The Endowment Fund reaches 25% of its target capitalization. Institutional Partnership revenue covers a significant portion of operational costs.
    4.  **Global Reach:** The platform is internationalized, and regional stewardship communities are established.

---

### **Article II: Infrastructure Adoption Strategy for Phase 1**

#### **Section 1: Target Persona (MVP)**

*   **Persona:** **"The Academic Historian"**
*   **Rationale:** This persona was selected for the pilot due to a confluence of factors:
    *   **High Pain Point:** They face a severe risk of losing decades of unstructured research notes, annotations, and draft manuscripts.
    *   **Innate Need for Provenance:** Their professional discipline requires meticulous tracking of sources and the evolution of arguments, which aligns perfectly with the DAP Process Layer.
    *   **Technical Disposition:** They are generally comfortable with specialized software (e.g., Zotero, Scrivener, Obsidian) but are not necessarily crypto-native, making them an excellent test case for the usability of sovereign key management.
    *   **Institutional Connection:** They are embedded in universities and libraries—our key institutional partners.

#### **Section 2: Value Proposition & Messaging**

*   **Core Message:** "Secure your life's work. Preserve the journey behind your research. The EverArchive Capture Tool is a private, sovereign digital shoebox for the notes, drafts, and 'aha' moments that become your legacy."
*   **Key Benefits (for this persona):**
    *   **Never Lose a Note Again:** A single, searchable, permanent home for all your research materials.
    *   **Trace Your Argument's DNA:** Automatically capture the evolution of your thesis from first note to final publication.
    *   **Own Your Legacy:** Your research archive is encrypted with your key, on your device, and stored in your own permanent storage account. We never see your data.

#### **Section 3: Channels & Outreach**

*   **Primary Channel:** Direct partnership with university libraries and history departments identified in Phase 0.
*   **Secondary Channels:**
    *   Presentations at major academic conferences (e.g., American Historical Association).
    *   Targeted articles in scholarly publications (e.g., *The Chronicle of Higher Education*).
    *   Engagement in niche online forums and communities for historians and researchers.

---

### **Article III: Product Requirements Document (PRD) - MVP Capture Tool**

*   **Product Name:** EverArchive Capture Tool v1.0 ("The Scholar's Vault")
*   **Target User:** The Academic Historian
*   **Core User Problem:** "I have decades of research notes, interview transcripts, and manuscript drafts scattered across Word documents, physical notebooks, and Zotero. I have no unified way to preserve them, and I live in fear of losing the context and connections between them."

#### **Section 1: Feature Set & Prioritization**

| Feature ID | Feature Name | Description | Priority |
| :--- | :--- | :--- | :--- |
| P1-F01 | **Sovereign Identity & Key Setup** | A guided, high-security wizard for creating a DID and generating/backing up a master encryption key (mnemonic phrase). Must be clear that loss is irrecoverable. | **P0 (Must Have)** |
| P1-F02 | **DAP Project Creation** | User can create a new, local, encrypted DAP project container for a specific research topic. | **P0 (Must Have)** |
| P1-F03 | **Core Layer Capture** | A simple, always-on-top text/markdown scratchpad for capturing "fleeting notes" and unstructured thoughts. All entries are automatically timestamped and saved to the encrypted `core/` layer. | **P0 (Must Have)** |
| P1-F04 | **Process/Surface Layer Capture** | User can import and manage versioned documents (e.g., `.md`, `.docx`) into the `process/` and `surface/` layers. | **P0 (Must Have)** |
| P1-F05 | **Manual Annotation** | User can select any file or text block and add a contextual annotation (e.g., "This is the quote that sparked the whole thesis"). | **P1 (Should Have)** |
| P1-F06 | **User-Initiated Archival** | A simple interface to connect the user's Arweave wallet and upload the completed DAP to the network. The tool handles the transaction and records the TX ID. | **P1 (Should Have)** |
| P1-F07 | **Consent Dashboard** | A settings panel where the user can configure the three tiers of data use consent for their DAP. Defaults to "Archival Only." | **P2 (Could Have)** |
| P1-F08 | **Social Recovery Setup** | An optional flow for setting up Shamir's Secret Sharing with designated Guardians. This is explicitly for key recovery, not data access. | **P2 (Could Have)** |

#### **Section 2: Out of Scope for MVP**

*   Advanced search within the tool (local search will be basic).
*   DAP viewing and consumption features.
*   Direct collaboration features.
*   The Schema Projector (export functionality).
*   Integration with any oracles or automated systems.

The MVP is laser-focused on one thing: **getting a single user's rich, layered creative process securely into a DAP object and onto permanent storage.**

---

### **Conclusion: From Blueprint to Build**

This roadmap provides a clear, sequenced, and risk-aware path for the implementation of the EverArchive. It prioritizes foundational work, validates assumptions through a targeted pilot, and builds the ecosystem layer by layer. It is ambitious yet achievable, providing a concrete plan for the first three years of the project's journey toward building a permanent home for human memory.