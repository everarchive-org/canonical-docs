---
title: The Community College Journey From Backup to Preservation
sidebar_position: 2
---

# 2.5.40 The Community College Journey: From Backup to True Preservation

**Persona:** "David," the overworked, sole IT Director at a suburban community college.
**Work:** Moving the college's critical administrative and student records from a simple, non-compliant nightly backup system to a genuine, auditable digital preservation archive.

---

### **Primitives & Technologies Demonstrated**

*   **Ingestion Primitives (Automation & Intelligence):**
    *   `Policy-Based Ingestion`: The core of the solution for David.
    *   `Template-Based Object Creation` (using the "Student Records" and "Administrative Files" templates)
    *   `AI-Assisted Metadata Extraction` (for identifying PII)
    *   `Automated "Good Enough" QC`
*   **Core Concepts:**
    *   `Preservation-as-a-Utility`: An ultra-simple, low-cost on-ramp to true digital preservation.
    *   `Compliance by Default`: Making it easy to adhere to legal and accreditation requirements.
*   **Schema Projector Lenses:**
    *   `Accreditation Audit Report Generator`
    *   `Records Retention Dashboard`
*   **Licensing & Economic Primitives:**
    *   `Predictable, Flat-Rate Pricing`
*   **Standards & Compliance:**
    *   `State Records Retention Schedule Compliance`
    *   `FERPA (Family Educational Rights and Privacy Act) Compliance`
    *   `Regional Accreditation (e.g., HLC, MSCHE) Evidence Generation`

---

### **Part 1: The Ingestion Experience - From World to Archive**

#### **The Curation Narrative: The Compliance Mandate**
David is an IT generalist, not an archivist. His world is helpdesk tickets, network switches, and fighting malware. His "archiving" strategy for the college's critical records—student transcripts, financial aid forms, board meeting minutes—is a nightly backup to a local NAS server. He's just been handed a terrifying report from the college's regional accreditation body: "The institution's current data backup procedures are insufficient for long-term records retention and do not meet the standards for digital preservation. This is a critical finding that must be remediated within 12 months." David has no budget, no staff, and no idea what "digital preservation" even means beyond a good backup.

**The Ingestion Process: The "Set and Forget" Workflow**
David's solution cannot be a new, complex system he has to manage. It has to be an automated utility. He signs up for EverArchive's lowest-cost "Preservation Utility" tier.

1.  **Template & Policy:** During a one-hour onboarding call with an EverArchive Steward, they set up two crucial templates.
    *   **"Student Records" Template:** This applies a **Policy**: "Ingest all files. Use AI to detect and flag potential FERPA-protected PII. Set a default retention period of 75 years. Make all files private and accessible only to the Registrar's Office."
    *   **"Board Minutes" Template:** This applies a **Policy**: "Ingest all files. Make them publicly searchable after a 1-year rolling embargo."
2.  **The "Magic Folder" Ingestion:** David doesn't use a complex interface. The EverArchive tool creates two special, monitored folders on his existing network drive: `_TO_ARCHIVE_STUDENT_RECORDS` and `_TO_ARCHIVE_BOARD_MINUTES`.
3.  **The Action:** David's only task is to drag and drop the relevant files from the college's main server into these folders at the end of each semester. That's it.
4.  **The Automation:** Overnight, the EverArchive system automatically ingests the files from the magic folders. It runs **`Automated QC`** to check for corruption, applies the relevant **`Policy`**, and creates a simple, secure Deep Authorship Package for that semester's records.

**The Layers of an Administrative Archive:**
*   **Surface Layer:** A simple manifest listing the ingested files and their preservation status. For the Board Minutes, the public-facing text of the minutes after the embargo period expires.
*   **Process Layer:** An immutable, timestamped log of every action taken on the files: ingestion date, fixity checks, format migrations (e.g., a `.doc` file from 2005 being automatically converted to a more stable PDF/A).
*   **Core Layer:** The encrypted original files, along with a secure report from the AI tool flagging any documents that may contain sensitive PII, for future review by the college's legal counsel.

---

### **Part 2: The Publishing Experience - The Living Document**

#### **The Publishing Workflow & The Schema Projector**
*   **The Steward's Action:** This is mostly automated. The policy David set ensures that as the 1-year embargo on board meeting minutes expires, they automatically become part of the object's public `Surface Layer`.
*   **The Schema Projector in Action:**
    *   **Public Records Portal:** The "Records Portal Projector" renders all the public minutes on a simple, searchable webpage hosted by EverArchive. The college just links to it from their main website.
*   **The Value Proposition:** David doesn't need to be a webmaster or manage a separate system for public records requests. The archive handles the legally mandated public access automatically based on the policy he set once.

---

### **Part 3: The Archival Act - Defining a Permanent Legacy**

**The Archival Workflow:**
The archival act is continuous and automated. Every time David drops files into the folders, a new, permanent, and verifiable preservation event occurs. The "legacy" is not a single project, but the ongoing, legally-mandated history of the institution.

**The Key Moment: The Audit**
Six months later, the accreditation body returns for a follow-up. They ask David to prove that he has a compliant digital preservation system in place.

**The "Compliance Report Generation":**
*   David logs into his EverArchive dashboard. He clicks "Generate Report for Accreditation."
*   The **"Accreditation Audit Projector"** goes to work. It scans the Process Layer of all his archived objects and generates a PDF report containing:
    1.  A list of all preserved records.
    2.  The complete, timestamped log of every fixity check run on every file, proving they are free from bit rot.
    3.  A log of all format migrations performed to ensure long-term readability.
    4.  A statement of the geo-redundant storage plan.
*   **The Value Proposition:** David hands the auditors a professional, comprehensive report that directly addresses their findings. He has moved from "insufficient backup" to a model preservation program that exceeds requirements, all with minimal effort and cost. He is the hero of the audit.

---

### **Part 4: The Consumption Experience - A Multi-Faceted Afterlife**

#### **Consumption Scenario A: The Human Connection (The Alumna)**
*   **Consumer Persona:** An alumna from the class of 2015 who needs an official copy of her transcript for a job application.
*   **The Discovery & Access:** The college's new online transcript request form is powered by the EverArchive API. She authenticates her identity.
*   **The "Aha!" Moment:** The system instantly finds her records in the preserved "Student Records 2015" object, verifies her identity against the metadata, and serves her a cryptographically signed, official digital transcript in seconds.
*   **The Value Proposition:** What used to be a multi-day manual process involving a staff member searching through old network drives is now an instant, secure, self-service operation. The college saves time and money, and the alumna gets a far better experience.

#### **Consumption Scenario B: The AI / Agentic Web Connection (The Institutional Researcher AI)**
*   **Consumer Persona:** An AI assistant for an institutional research officer studying long-term student success patterns.
*   **The Task & Access:** The AI is granted permissioned, anonymized access to 20 years of "Student Records" objects.
*   **The Synthesis & Insight:** The AI ingests the decades of data. It correlates anonymized course enrollment data, financial aid records, and graduation rates. It discovers a powerful, non-obvious insight: "Students who took a specific remedial math course in their first semester had a 30% higher graduation rate over a 10-year period compared to students with similar backgrounds who did not."
*   **The Value Proposition:** The preserved administrative records have become a powerful dataset for improving future student outcomes. The AI's insight leads to a change in college policy that significantly boosts graduation rates for the next generation of students. The "boring" work of records retention has become the fuel for data-driven institutional improvement.

---

### **Conclusion: The Value of the Complete Journey**
For David and the community college, EverArchive is not a complex, aspirational project; it's a simple, affordable utility that solves a critical, immediate compliance problem. It provides "preservation in a box," allowing them to meet their legal and accreditation mandates without needing a dedicated staff or budget. It transforms a major institutional risk into a point of pride and, unexpectedly, into a valuable source of data for future planning. It proves that true digital preservation can and should be accessible to everyone.