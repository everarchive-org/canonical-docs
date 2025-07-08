---
concept_id: 02
title: "Deep Authorship Package (DAP) Format"
category: "Architectural Primitives"
status: "Implementation Guide"
last_updated: "2025-07-06"
---

# Foundational Concept: Deep Authorship Package (DAP) Format

**Concept ID**: 02
**Category**: Architectural Primitives
**Status**: Implementation Guide
**Last Updated**: 2025-07-06

## Documentation Status & Gaps

**Source Coverage**: Complete

### Information Availability
- **✅ Well-documented**: Complete technical specification in Tome II 2.2, including file formats, encryption standards, directory structure, and validation requirements
- **✅ Well-documented**: leading digital preservation platforms integration and book lending infrastructure specifications
- **✅ Well-documented**: Identity verification and progressive trust framework
- **✅ Well-documented**: Cryptographic security protocols and post-quantum protection

### Research Recommendations
No significant gaps identified. The DAP format specification is comprehensively documented with complete technical implementation details.

## Documentation Links

### Primary Sources
- [🧑‍🎨 Distributed Creatives/♾️ EverArchive/📚 Canonical Library/Foundations/README](-distributed-creatives-everarchive-canonical-libraryfoundationsreadme) - Foundational concepts overview (Concept #2)
- [02-tome-ii-the-architecture/02-deep-authorship-package-technical-specification.md](02-tome-ii-the-architecture02-deep-authorship-package-technical-specificationmd) - Complete technical specification v2.4
- [02-tome-ii-the-architecture/01-canonical-architecture.md](02-tome-ii-the-architecture01-canonical-architecturemd) - Storage Trinity integration
- [01-tome-i-the-vision/03-the-principles-of-deep-authorship.md](01-tome-i-the-vision03-the-principles-of-deep-authorshipmd) - Three-layer model principles

### Supporting Context
- [02-zero-knowledge-creative-privacy](02-zero-knowledge-creative-privacy) - Zero-knowledge encryption implementation
- [03-storage-trinity-architecture](03-storage-trinity-architecture) - Storage Trinity integration
- [2025-07-06-Foundations-Index](2025-07-06-foundations-index) - Complete foundations context and dependencies

### Related Documentation
- [04-discovery-and-access-infrastructure](04-discovery-and-access-infrastructure) - Schema Projector interoperability
- [03-tome-iii-the-operations/01-governance-constitution.md](03-tome-iii-the-operations01-governance-constitutionmd) - Creator sovereignty enforcement

## Overview

The Deep Authorship Package (DAP) format is the atomic unit of the entire EverArchive system - a sovereign, time-interpretable, and self-contained data container that implements the Deep Authorship 3-Layer Model with mandatory encryption, cryptographic signatures, and comprehensive metadata preservation. Every piece of creative memory in EverArchive is stored, transmitted, and processed as a DAP, making it the universal currency of the ecosystem.

The DAP format solves the fundamental problem of preserving not just creative outputs, but the complete creative process - including private thoughts, iterative development, and contextual metadata. It provides mathematical guarantees for creator sovereignty through zero-knowledge encryption while maintaining interoperability with existing archival standards through the Schema Projector framework.

As an architectural primitive, the DAP format serves as the foundation for all other EverArchive capabilities. Storage systems store DAPs, discovery systems index DAPs, sharing systems transmit DAPs, and governance systems apply policies to DAPs. Without this format, EverArchive would be just another backup system rather than a comprehensive creative memory preservation infrastructure.

## Concept Specifications

### Core Definition & Requirements

The Deep Authorship Package is a ZIP-compressed archive containing three encrypted layers (Core, Process, Surface) with cryptographic integrity guarantees, creator attribution, and comprehensive metadata. Every DAP MUST:

1. **Implement the 3-Layer Model**: Core (private), Process (semi-private), Surface (public) directories with appropriate access controls
2. **Provide Cryptographic Integrity**: SHA-256 file hashes, manifest signatures, and tamper-evident seals
3. **Enforce Creator Sovereignty**: Zero-knowledge encryption for Core layer with creator-only key control
4. **Ensure Long-term Viability**: Open formats, post-quantum cryptography, and migration-friendly structure
5. **Maintain Interoperability**: JSON-LD metadata and Schema Projector compatibility with archival standards

### Essential Characteristics

1. **Self-Contained**: A DAP contains all information necessary for its own interpretation, including cryptographic keys, metadata schemas, and format specifications
2. **Immutable**: Once created, a DAP's content cannot be modified - changes require creating a new version with parentDap linkage
3. **Sovereign**: Creator maintains absolute control over access, encryption keys, and usage permissions through cryptographic enforcement
4. **Time-Interpretable**: Comprehensive temporal metadata enables understanding the creative process across decades or centuries
5. **Cryptographically Verified**: All content is signed, hashed, and authenticated to prevent tampering and ensure attribution

### Boundaries & Constraints

- **What it is NOT**: The DAP format is not a collaboration tool, real-time editor, or version control system - it preserves completed states of creative work
- **Violation conditions**: Storing Core layer content in plaintext, omitting cryptographic signatures, or breaking the 3-layer directory structure violates the specification
- **Non-negotiable elements**: Zero-knowledge encryption for Core layer, cryptographic integrity verification, and creator sovereignty enforcement cannot be compromised

### Technical Implications

**File Format**: ZIP archive with ZSTD compression for optimal balance of compatibility and efficiency

**Encryption Standard**: EverArchive Encryption Standard (EES-1.0) with AES-256-GCM content encryption and post-quantum Kyber key protection

**Metadata Format**: JSON-LD for semantic interoperability with archival standards and future-proofing

**Storage Requirements**: Content-addressable storage with permanent availability guarantees across Storage Trinity

## Application & Expression

### How This Concept Manifests

1. **Creative Capture Tools**: Every tool that creates content for EverArchive outputs a valid DAP
   - **Example**: A writing app auto-generates DAPs containing draft text (Core), revision history (Process), and final document (Surface)
   - **Impact**: Ensures universal compatibility across all EverArchive tools and systems

2. **Storage Infrastructure**: All three Storage Trinity components store and retrieve DAPs as atomic units
   - **Example**: Arweave stores DAPs as single transactions, IPFS addresses them by content hash, Physical Vaults archive them as complete packages
   - **Impact**: Guarantees preservation integrity and enables seamless migration between storage systems

3. **Discovery Systems**: Search and recommendation engines index DAP metadata while respecting encryption boundaries
   - **Example**: Public Surface layer metadata is indexed for search while Core layer remains cryptographically protected
   - **Impact**: Enables discovery without compromising creator sovereignty

### Implementation Approaches

**Approach 1: Native DAP Creation**
- **Context**: Used by EverArchive-native tools and applications
- **Method**: Direct creation of DAP structure with manifest.json, encrypted layers, and cryptographic signatures
- **Benefits**: Full feature support, optimal performance, complete sovereignty enforcement
- **Considerations**: Requires understanding of DAP specification and encryption protocols

**Approach 2: Schema Projector Import**
- **Context**: Used when importing existing content from archival systems
- **Method**: Transform METS, MODS, Dublin Core, or PREMIS metadata into DAP format with data loss analysis
- **Benefits**: Enables institutional adoption without format migration requirements
- **Considerations**: Some DAP features may not be available for imported content

**Approach 3: Hybrid Preservation**
- **Context**: Used by institutions wanting both native and standard formats
- **Method**: Maintain content in both DAP and institutional formats with synchronization
- **Benefits**: Backward compatibility with existing systems plus progressive enhancement
- **Considerations**: Requires managing format consistency and migration strategies

### Decision-Making Applications

- **Tool Development**: All EverArchive tools must support DAP creation, validation, and processing
- **Storage Design**: Storage systems must handle DAPs as atomic units with integrity guarantees
- **Integration Planning**: Institutional adoption strategies must account for DAP interoperability requirements
- **Security Architecture**: All access controls and encryption must respect DAP layer boundaries

### Common Misapplications

- **Storing Core Layer in Plaintext**: Violates creator sovereignty and zero-knowledge requirements
- **Modifying Existing DAPs**: Breaks immutability - create new versions with parentDap linkage instead
- **Ignoring Cryptographic Verification**: Compromises integrity and attribution guarantees
- **Breaking Layer Boundaries**: Mixing Core/Process/Surface content violates the architectural model

## Dependencies & Relationships

### Depends On

- **[01-deep-authorship-3-layer-model](01-deep-authorship-3-layer-model)**: DAP format implements the 3-layer architecture as its foundational structure
- **[08-zero-knowledge-encryption-for-core-layer](08-zero-knowledge-encryption-for-core-layer)**: Zero-knowledge encryption is mandatory for Core layer implementation
- **[05-creator-sovereignty](05-creator-sovereignty)**: Creator sovereignty principles guide all DAP access control and permission systems

### Enables

- **[03-storage-trinity-architecture](03-storage-trinity-architecture)**: Storage Trinity operates on DAPs as atomic preservation units
- **[04-schema-projector-framework](04-schema-projector-framework)**: Schema Projector translates between DAP and standard archival formats
- **[11-memory-vs-backup-paradigm](11-memory-vs-backup-paradigm)**: DAP format enables memory preservation rather than mechanical backup

### Feature Integration

- **Creative Control Features**: All creator control capabilities operate through DAP permissions and encryption
- **Archival & Preservation Features**: All preservation guarantees apply to DAP integrity and availability
- **Discovery & Access Features**: All discovery systems index DAP metadata while respecting layer boundaries
- **Institutional Features**: All institutional tools must support DAP creation, validation, and processing

### Cross-Concept Interactions

The DAP format serves as the technical implementation bridge between philosophical principles and practical capabilities. It transforms abstract concepts like Creator Sovereignty and Process over Product into concrete technical requirements like zero-knowledge encryption and comprehensive metadata preservation. The format's design embodies the Infrastructure not Platform principle by providing open, interoperable standards rather than proprietary formats.

## Use Cases & Examples

### Use Case 1: Academic Research Paper
**Context**: Researcher preserving complete paper development process
**Implementation**: Core layer contains private notes and hypotheses, Process layer contains draft versions and peer feedback, Surface layer contains final published paper
**Outcome**: Future researchers can understand the complete development process while respecting confidential elements
**Example**: A climate science paper DAP preserves the researcher's initial doubts (Core), methodology iterations (Process), and final publication (Surface) with cryptographic attribution

### Use Case 2: Book Lending System
**Context**: Library implementing blockchain-based digital lending
**Implementation**: DAP contains bibliographic metadata, lending smart contracts, and encrypted book content with time-bound access controls
**Outcome**: "One copy, one user" digital lending with automated royalty distribution and patron privacy protection
**Example**: Seattle Public Library lends digital books through DAPs that automatically return after 14 days with cryptographic enforcement

### Use Case 3: Software Development Project
**Context**: Developer preserving complete coding process for educational purposes
**Implementation**: Core layer contains private problem-solving thoughts, Process layer contains commit history and debugging sessions, Surface layer contains final codebase
**Outcome**: Students can learn from complete development process while respecting developer's private thoughts
**Example**: A machine learning algorithm DAP preserves the developer's initial confusion (Core), experimental attempts (Process), and final implementation (Surface)

### User Journey Touchpoints

- **Creator Journey**: Creators use DAP-compatible tools to capture and preserve their complete creative process
- **Researcher Journey**: Researchers discover and access DAP Surface layers while respecting encryption boundaries
- **Librarian Journey**: Librarians manage DAP collections using familiar metadata standards through Schema Projector
- **Developer Journey**: Developers implement DAP support in tools using the complete technical specification

### Institutional Adoption Patterns

Institutions typically adopt DAP format through progressive enhancement: starting with Schema Projector import of existing collections, then gradually implementing native DAP creation for new content, and finally transitioning to full DAP-native workflows with complete feature utilization.

## Validation & Assessment

### How to Recognize Proper Implementation

1. **Cryptographic Integrity**: All DAPs have valid SHA-256 hashes, manifest signatures, and tamper-evident seals
2. **Layer Enforcement**: Core layer content is encrypted, Process layer respects access controls, Surface layer is appropriately public
3. **Metadata Completeness**: All required manifest.json fields are present and valid according to specification
4. **Format Compliance**: Directory structure, file naming, and compression follow DAP specification exactly

### Assessment Questions

- **Is the Core layer encrypted with creator-only keys?**: Validates zero-knowledge encryption requirement
- **Can the DAP be validated without external dependencies?**: Verifies self-contained nature
- **Are all files referenced in manifest.json present with correct hashes?**: Confirms integrity guarantees
- **Does the DAP maintain immutability while enabling versioning?**: Ensures proper version management

### Warning Signs

- **Plaintext Core Layer Content**: Indicates violation of creator sovereignty and zero-knowledge requirements
- **Missing Cryptographic Signatures**: Compromises attribution and integrity guarantees
- **Invalid Manifest Hashes**: Suggests tampering or implementation errors
- **Broken Layer Boundaries**: Violates the fundamental 3-layer architectural model

### Measurement Approaches

- **Validation Pass Rate**: Percentage of DAPs that pass complete specification validation
- **Integrity Verification**: Success rate of cryptographic hash and signature verification
- **Encryption Compliance**: Percentage of Core layers properly encrypted with zero-knowledge standards
- **Metadata Completeness**: Coverage of required fields in manifest.json and metadata files

## Evolution & Maintenance

### Concept Evolution

The DAP format evolves through versioned specifications that maintain backward compatibility while adding new capabilities. Version 2.4 added leading digital preservation platforms integration and book lending features while preserving all v2.0 functionality. Future versions may add enhanced metadata schemas, additional encryption algorithms, or expanded interoperability standards.

### Backward Compatibility

All DAP format versions maintain strict backward compatibility - tools that read v2.0 DAPs continue to work with v2.4 DAPs. New features are added as optional extensions rather than breaking changes, ensuring long-term preservation viability.

### Migration Strategies

DAP migration involves creating new versions with parentDap linkage rather than modifying existing packages. This preserves immutability while enabling format evolution. Automated migration tools can upgrade metadata schemas while maintaining all existing content and cryptographic guarantees.

### Long-term Sustainability

The DAP format's long-term sustainability depends on open specifications, standard compression and encryption algorithms, and JSON-LD metadata that can be interpreted decades into the future. Post-quantum cryptography protects against future computational advances.

### Version Management

DAP versions are managed through the dapVersion field in manifest.json, parentDap linkage for content versions, and semantic versioning for specification updates. This enables both content evolution and format evolution without breaking existing implementations.

## Related Concepts

### Within Same Category

- **[01-deep-authorship-3-layer-model](01-deep-authorship-3-layer-model)**: DAP format implements the 3-layer architecture as its core organizational principle
- **[03-storage-trinity-architecture](03-storage-trinity-architecture)**: Storage Trinity stores DAPs as atomic units across three preservation layers
- **[04-schema-projector-framework](04-schema-projector-framework)**: Schema Projector enables DAP interoperability with standard archival formats

### Cross-Category Dependencies

- **[05-creator-sovereignty](05-creator-sovereignty)**: Creator sovereignty principles guide all DAP access control and permission systems
- **[08-zero-knowledge-encryption-for-core-layer](08-zero-knowledge-encryption-for-core-layer)**: Zero-knowledge encryption is mandatory for Core layer implementation
- **[10-open-source-and-non-proprietary](10-open-source-and-non-proprietary)**: DAP specification must remain open and non-proprietary for long-term viability

### Emergent Properties

When combined with other foundational concepts, DAP format enables sophisticated capabilities: Creator Sovereignty + DAP Format = mathematically guaranteed privacy; Storage Trinity + DAP Format = permanent preservation with integrity; Schema Projector + DAP Format = universal archival interoperability.

## FAQ

### Implementation Questions

1. **Q**: How do I create a valid DAP from scratch?
   **A**: Create a ZIP archive with the required directory structure (manifest.json, metadata/, core/, process/, surface/), encrypt Core layer content using EES-1.0 standard, generate SHA-256 hashes for all files, and sign the manifest with creator's cryptographic key.

2. **Q**: Can I modify an existing DAP?
   **A**: No, DAPs are immutable. Create a new DAP with updated content and set its parentDap field to reference the original version. This preserves provenance while enabling evolution.

3. **Q**: How do I handle large files in DAPs?
   **A**: Use content-addressable storage with IPFS CIDs for large files, storing only references in the DAP. This enables efficient deduplication while maintaining DAP completeness.

### Conceptual Questions

1. **Q**: Why use ZIP format instead of something more modern?
   **A**: ZIP ensures maximum compatibility across platforms and decades. More modern formats may not be supported by future systems, while ZIP has universal support and stable specifications.

2. **Q**: How does DAP format differ from traditional archival formats?
   **A**: DAP format preserves creative process (not just outputs), enforces creator sovereignty through cryptography, and includes emotional/contextual metadata. Traditional formats focus on bibliographic description rather than creative memory.

## Complete Reference Index

### Canonical Library References

#### Tome I - The Vision
- [01-essence-and-vision](01-essence-and-vision) - North Star principles and core beliefs driving DAP design
- [01-tome-i-the-vision/02-the-everarchive-manifesto.md](01-tome-i-the-vision02-the-everarchive-manifestomd) - "We are not building a better backup" philosophy reflected in DAP architecture
- [01-tome-i-the-vision/03-the-principles-of-deep-authorship.md](01-tome-i-the-vision03-the-principles-of-deep-authorshipmd) - Four foundational principles implemented in DAP format

#### Tome II - The Architecture
- [02-tome-ii-the-architecture/02-deep-authorship-package-technical-specification.md](02-tome-ii-the-architecture02-deep-authorship-package-technical-specificationmd) - Complete v2.4 technical specification with all implementation details
- [02-tome-ii-the-architecture/01-canonical-architecture.md](02-tome-ii-the-architecture01-canonical-architecturemd) - Storage Trinity integration and technical primitives
- [04-discovery-and-access-infrastructure](04-discovery-and-access-infrastructure) - Schema Projector interoperability framework

#### Tome III - The Operations
- [03-tome-iii-the-operations/01-governance-constitution.md](03-tome-iii-the-operations01-governance-constitutionmd) - Creator sovereignty and open source requirements for DAP format

#### Features Documentation
- [02-zero-knowledge-creative-privacy](02-zero-knowledge-creative-privacy) - Zero-knowledge encryption implementation in Core layer
- [📚 Canonical Library/Features/Archival & Preservation/Immutable Storage](-canonical-libraryfeaturesarchival--preservationimmutable-storage) - DAP integration with Storage Trinity architecture

#### Other Canonical Sources
- [🧑‍🎨 Distributed Creatives/♾️ EverArchive/📚 Canonical Library/Foundations/README](-distributed-creatives-everarchive-canonical-libraryfoundationsreadme) - Complete foundational concepts overview including DAP format positioning
- [🧑‍🎨 Distributed Creatives/♾️ EverArchive/📚 Research/Technical Architecture/Centering the Archive/EverArchive Operational Manual](-distributed-creatives-everarchive-researchtechnical-architecturecentering-the-archiveeverarchive-operational-manual) - Technical implementation details and code examples

### External References
- ZIP File Format Specification (PKWARE) - Physical container format standard
- JSON-LD 1.1 Specification (W3C) - Metadata format standard
- AES-256-GCM Specification (NIST) - Content encryption standard
- CRYSTALS-Kyber (NIST PQC) - Post-quantum key protection standard

### Cross-References Within This Document
- [01-deep-authorship-3-layer-model](01-deep-authorship-3-layer-model) - Architectural foundation for DAP structure
- [05-creator-sovereignty](05-creator-sovereignty) - Philosophical foundation for DAP access controls
- [08-zero-knowledge-encryption-for-core-layer](08-zero-knowledge-encryption-for-core-layer) - Technical requirement for Core layer implementation

---

*This document provides complete implementation guidance for the Deep Authorship Package format - the atomic unit that enables EverArchive's transformation of creative storage into creative memory preservation.*