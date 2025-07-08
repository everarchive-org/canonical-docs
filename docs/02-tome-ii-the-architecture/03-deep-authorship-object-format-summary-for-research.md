---
title: Deep Authorship Object Format Summary for Research
sidebar_position: 2
---

# Deep Authorship Package (DAP) Format: A Comprehensive Summary for Comparative Analysis

**Version:** 2.0 (Ratified)
**Purpose:** This document provides a detailed, one-page summary of the EverArchive Deep Authorship Package (DAP) format. It is intended for use in research prompts to compare its features and philosophy against existing digital preservation and packaging standards (e.g., BagIt, OCFL, RO-Crate, DROID, etc.).

---

### **1. Core Philosophy: Preserving Cognitive & Emotional Lineage**

The DAP format is fundamentally different from traditional archival containers. Its primary design goal is not just to preserve bitstreams, but to preserve the **entire cognitive and emotional lineage of a creative work.** It is architected on the "Deep Authorship" principle, which posits that the *process* of creation (the struggle, the dead ends, the breakthroughs) is as valuable as the final *product*.

The format is explicitly designed to solve the "context collapse" problem, where a digital file is separated from the *how* and *why* of its creation.

### **2. Foundational Innovation: The Three-Layer Memory Model**

Every DAP object is structured around a mandatory three-layer model that separates creative artifacts by their level of privacy, refinement, and intent. This is the core innovation that distinguishes it from other formats.

*   **The Core Layer (`/core`) - The Private Sanctum:**
    *   **Content:** The raw, unfiltered, and unstructured stream of consciousness. Voice notes, fleeting ideas, emotional annotations, private journal entries related to the work.
    *   **Technical Implementation:** All content within this directory is **mandatorily encrypted client-side** using a zero-knowledge protocol (EES-1.0: CRYSTALS-Kyber + AES-256-GCM). The creator is the sole keyholder. The archive stores this layer as an opaque, encrypted blob.
    *   **Purpose:** To provide a safe space for authentic, un-surveilled creative thought, preserving the most vulnerable parts of the process.

*   **The Process Layer (`/process`) - The Verifiable Journey:**
    *   **Content:** The semi-private, structured evidence of the work's evolution. This includes version diffs (git-style patches), decision logs, collaborator contributions, annotations on drafts, and tool usage data.
    *   **Technical Implementation:** Stored in plaintext or with granular, capability-based encryption. Designed to create a machine-readable, auditable graph of the work's development.
    *   **Purpose:** To establish **unbreakable provenance** and provide the rich, contextual data needed for future research and ethical AI training. It answers the question "How was this made?"

*   **The Surface Layer (`/surface`) - The Intentional Work:**
    *   **Content:** The polished, final artifact(s) the creator intends to share publicly. The final PDF, the master audio track, the high-resolution image.
    *   **Technical Implementation:** Stored in plaintext and described by rich public metadata.
    *   **Purpose:** To present the final work to the world, but intrinsically linked to its deeper context.

### **3. Physical & Logical Structure**

*   **Physical Container:** A standard **ZIP (.zip)** archive. This ensures maximum cross-platform compatibility and accessibility with ubiquitous, open-source tools.
*   **Canonical Directory Structure:** Every DAP must contain `/core`, `/process`, and `/surface` directories, alongside a root `manifest.json`.
*   **The `manifest.json`:** This is the heart of the object. It's a cryptographically signed JSON-LD file that acts as both the table of contents and the integrity seal.
    *   **Key Fields:** `dapVersion`, `dapId` (UUID), `creatorDid` (W3C DID), `parentDap` (for version chaining), `storageProofs` (Arweave/IPFS TX IDs), and a complete `fileIndex` with SHA-256 hashes for every file in the archive.
    *   **Integrity:** The manifest itself is hashed and then the hash is signed by the `creatorDid`, proving authenticity and preventing tampering.

### **4. Key Differentiating Features**

1.  **Sovereign, Zero-Knowledge Encryption by Default:** Unlike formats that treat encryption as an optional layer, the DAP *mandates* it for the most sensitive data (`/core`), making privacy an architectural feature, not an afterthought. The user-centric key management (with social recovery via TSS) is a core part of the spec.

2.  **Semantic, Not Just Structural:** The format heavily uses **JSON-LD** for its metadata, making it inherently part of the semantic web. It's designed to be understood by machines, enabling discovery not just by filename but by concept, emotion, and relationship.

3.  **Time-Interpretability & Future-Proofing:** The format is designed to outlive its own software. It includes protocols for **proactive format migration** (e.g., flagging at-risk formats like JPEG and recommending migration to JPEG XL, while preserving the original) and **cultural translation guides** (e.g., encoding dates relative to astronomical events).

4.  **Built-in Consent & Rights Management:** The `metadata/permissions.json` file is a canonical part of the object. It provides granular, machine-readable consent toggles for activities like **AI training**, remixing, and post-completion release, turning the object itself into a rights management tool.

5.  **Immutable Version Chaining:** New versions of a work are created as *new* DAP objects that point back to the `parentDap`. This creates a blockchain-like, immutable chain of provenance that is ideal for content-addressed storage networks.

### **5. Summary for a Research Prompt**

When asking an AI to compare this to another standard, you can use this summary:

> "The DAP format is a ZIP-based archival container designed to preserve the entire creative process. Its key innovations are:
>
> 1.  A mandatory **three-layer structure** separating private/encrypted "Core" process, semi-private "Process" evolution, and public "Surface" work.
> 2.  **Creator-sovereign, zero-knowledge encryption** is a fundamental, non-optional feature for the Core layer.
> 3.  It uses **JSON-LD** for all metadata, making it semantically rich and machine-readable.
> 4.  It includes a canonical `permissions.json` file for **granular, in-built consent management** for things like AI training.
> 5.  It is designed for **immutable versioning** on content-addressed networks.
>
> How does this approach to structure, sovereignty, semantics, and rights management compare to the features and philosophy of [*INSERT STANDARD NAME HERE*, e.g., RO-Crate]? What are the primary overlaps, and what unique problems does the DAP format attempt to solve that the other does not?"