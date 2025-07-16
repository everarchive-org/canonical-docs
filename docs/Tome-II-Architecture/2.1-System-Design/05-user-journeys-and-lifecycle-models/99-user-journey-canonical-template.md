---
title: User Journey Canonical Template
sidebar_position: 999
---

# _User Journey Canonical Template
**Version:** 1.4 (Consolidated)
**Date:** 2025-06-25
**Status:** Authoritative Template
**Purpose:** This document provides the standard, comprehensive template for creating all Deep Authorship Journey documents. Its purpose is to ensure that each journey narrative is complete, consistent, and explores the full lifecycle of a creative work, while also explicitly identifying the core concepts and technologies demonstrated.

---
# [Journey Title: e.g., 2.5.X The [Persona]'s Journey: "[Work Title]"]
**Persona:** [e.g., A professional digital illustrator, a legacy institution, a university research lab.]
**Work:** [A short, evocative description of the creative work or collection at the center of this journey.]
---
### **Primitives & Technologies Demonstrated**
*(This front-matter section explicitly lists the key building blocks showcased in this specific journey. All primitives should be drawn from the `[2.6 - Master Primitives List.md](26---master-primitives-listmd)` document. This helps us track which features are being illustrated by which stories.)*
*   **Ingestion Primitives (Manual & Assisted):**
    *   [List relevant primitives]
*   **Ingestion Primitives (Automation & Intelligence):**
    *   [List relevant primitives]
*   **Core Concepts:**
    *   [List relevant primitives]
*   **Schema Projector Lenses:**
    *   [List relevant primitives]
*   **Licensing & Economic Primitives:**
    *   [List relevant primitives]
*   **Standards & Compliance:**
    *   [List relevant primitives]
---
### **Part 1: The Ingestion Experience - From World to Archive**
*(This section details how the work and its context are captured and structured. It answers the question: "How does this get into EverArchive?")*
#### **The Creation/Curation Narrative**
*(A short, evocative story describing the creation or curation of the work. This sets the scene and establishes the core "why" for this specific journey.)*
**The Surface Layer (The Final Product):**
*   **What it is:** [Describe the final, polished artifact(s). Be specific about file types, formats, and what a user would see first. e.g., "A high-resolution .png file of the final illustration and a 500-word artist's statement in Markdown."]
**The Process Layer (The Verifiable Journey):**
*   **What's inside:** [List the types of process artifacts. e.g., "Layered source files, version histories, reference photos, transcripts of feedback, drafts with tracked changes."]
*   **The Capture Experience:** [Describe *how* the Process Layer was built. Was it an ambient, automated process via a plugin? A deliberate curatorial act by an institution? This should feel tangible and real.]
**The Core Layer (The Deep Context / Private Sanctum):**
*   **What's inside:** [List the types of raw, private, or deeply contextual artifacts. e.g., "Encrypted voice memos of the creator's self-doubt, private journal entries, unedited interview recordings, links to inspirational material."]
*   **The Capture Experience:** [Describe *how* the Core Layer was captured. e.g., "Via a global hotkey, the mobile app's 'Quick Capture' feature, a secure private journal within the tool."]
---
### **Part 2: The Publishing Experience - The Living Document**
*(This section details the immediate, practical utility of EverArchive as a "Create Once, Publish Everywhere" platform during the work's active life. It answers the question: "How does this help me share my work *today*?")*
#### **The Publishing Workflow & The Schema Projector**
*   **The Creator's/Steward's Action:** [Describe the simple action the creator takes to publish their work. e.g., "While the project is still a work-in-progress, the creator designates the `Surface Layer` content as 'live' and shares a single, permanent EverArchive link with their followers."]
*   **The Schema Projector in Action:** [Explain how the Schema Projector dynamically renders the *current state* of the `Surface Layer` content into various formats on demand. This is the core of the "living document" concept.]
    *   **Web View:** [e.g., The default "HTML Projector" renders the latest version of the content as a constantly updated blog post or portfolio page.]
    *   **Specialized View:** [e.g., The "GIS Projector" renders architectural data as a map layer for city planning software.]
*   **The "Living Update" Experience:** [Describe how, when the creator saves a new version of their `Surface Layer` content, all the published views update automatically. The single link they shared now points to the new version, but the history is preserved.]
*   **The Value Proposition:** [Concisely explain the value unlocked. e.g., "The creator is liberated from the tedious cycle of re-exporting and re-uploading content to multiple platforms. They focus on their canonical source, and EverArchive handles the presentation, making it a powerful tool for *active* projects, not just finished ones."]
---
### **Part 3: The Archival Act - Defining a Permanent Legacy**
*(This section details the crucial step of formal preservation after the work is "finished." It answers the question: "How does the creator/institution define the rules for this object's long-term future?")*
**The Archival Workflow:**
*(Describe the moment the creator/steward decides the work is "done" and initiates the final preservation. e.g., "Upon completing the final version, the creator initiates the 'Preserve v1.0' workflow...")*
**The Permissions & Consent Configuration:**
*   **Sovereign Permissions:** [Detail the access settings for each layer for the permanent archive. e.g., "Core Layer: Private, with post-completion release. Process Layer: Educational Use Only."]
*   **Composable Media & Licensing:** [Detail the specific rights granted for reuse. e.g., "A sub-folder of texture brushes is licensed CC-BY-NC. A piano stem is licensed for commercial remixing via an on-chain offer file."]
*   **AI Training Consent:** [Detail the granular AI consent settings. e.g., "YES to non-commercial research analysis. NO to generative use."]
**The Finalization:**
*(Describe the final technical step. e.g., "With one click, these rules are bundled, signed, and the v1.0 object is immutably preserved on the network. The 'live' link now points to this permanent version.")*
---
### **Part 4: The Consumption Experience - A Multi-Faceted Afterlife**
*(This section details how different future users interact with the *archived* object, demonstrating the long-term value unlocked.)*
#### **Consumption Scenario A: The Human Connection**
*   **Consumer Persona:** [e.g., An aspiring art student, a researcher, a journalist, a city engineer.]
*   **The Discovery & Access:** [Describe how they find the archived work and what level of access they have.]
*   **The "Aha!" Moment:** [Describe the specific, transformative insight they gain by accessing the Process or Core layers of the *archived* version.]
*   **The Value Proposition:** [Concisely explain the long-term value unlocked for human understanding.]
#### **Consumption Scenario B: The AI / Agentic Web Connection**
*   **Consumer Persona:** [e.g., A museum curation AI, a drug discovery AI, a legacy system analyst.]
*   **The Task & Access:** [Describe what the AI is trying to accomplish with the archived object, respecting its permissions.]
*   **The Synthesis & Insight:** [Describe what the AI produces from the archived data.]
*   **The Value Proposition:** [Concisely explain the long-term value unlocked for AI/agentic systems.]
#### **Consumption Scenario C (Optional): The Composable Creation**
*   **Consumer Persona:** [e.g., A remix artist, an open-source developer, a community activist.]
*   **The Discovery & Licensing:** [Describe how they find and acquire rights to the composable assets in the *archived* object.]
*   **The Act of Creation:** [Describe how they incorporate the material into a new work.]
*   **The Value Proposition (The Attribution Chain):** [Explain how this creates a new object with a verifiable, on-chain link back to the archived source.]
---
### **Conclusion: The Value of the Complete Journey**
*(A brief, powerful summary that reiterates the value created by preserving the full lifecycle of this specific work—from its dynamic "living" phase to its permanent "archived" state—for all stakeholders.)*