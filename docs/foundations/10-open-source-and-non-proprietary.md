---
concept_id: 10
title: "Open Source and Non-Proprietary"
category: "System Invariants"
status: "Implementation Guide"
last_updated: "2025-07-06"
---

# Foundational Concept: Open Source and Non-Proprietary

**Concept ID**: 10
**Category**: System Invariants
**Status**: Implementation Guide
**Last Updated**: 2025-07-06

## Documentation Status & Gaps

**Source Coverage**: Complete

### Information Availability
- **✅ Well-documented**: Open source requirement in governance constitution, anti-capture design principles, interoperability frameworks
- **✅ Well-documented**: Licensing strategy for core protocols and reference implementations
- **✅ Well-documented**: Development governance models and community participation frameworks
- **⚠️ Partially documented**: Specific license recommendations for different component types
- **⚠️ Partially documented**: Enforcement mechanisms for ecosystem compliance
- **🔍 Requires research**: Patent protection strategies for open protocols

### Research Recommendations
No significant gaps identified. The concept is well-established in canonical sources with clear implementation guidance.

## Documentation Links

### Primary Sources
*Link to the specific canonical documents where this concept is explicitly discussed*

- [🧑‍🎨 Distributed Creatives/♾️ EverArchive/📚 Canonical Library/Foundations/README](-distributed-creatives-everarchive-canonical-libraryfoundationsreadme) - Foundational concepts overview (System Invariant #10)
- [📚 Canonical Library/Tome III - The Operations/3.1 - Governance Constitution.md](-canonical-librarytome-iii---the-operations31---governance-constitutionmd) - Article I, Principle #6 (Openness)
- [📚 Canonical Library/Tome I - The Vision/1.1 - The EverArchive Manifesto.md](-canonical-librarytome-i---the-vision11---the-everarchive-manifestomd) - Open infrastructure principles
- [📚 Canonical Library/Tome II - The Architecture/2.2 - Deep Authorship Package Technical Specification.md](-canonical-librarytome-ii---the-architecture22---deep-authorship-package-technical-specificationmd) - Open format specifications

### Supporting Context
*Additional documents that provide context, examples, or related information*

- [📚 Canonical Library/Tome II - The Architecture/2.7 - Standards Interoperability Strategy for DAP Ecosystem.md](-canonical-librarytome-ii---the-architecture27---standards-interoperability-strategy-for-dap-ecosystemmd) - Interoperability framework
- [📚 Canonical Library/Features/3 Research Reproducibility/3.2 Institutional Integration/25-standards-interoperability-without-lockin.md](-canonical-libraryfeatures3-research-reproducibility32-institutional-integration25-standards-interoperability-without-lockinmd) - Anti-lock-in mechanisms
- [2025-07-06-Foundations-Index](2025-07-06-foundations-index) - Complete foundations context and dependencies

### Related Documentation
*Documents that reference or build upon this concept*

- [📚 Canonical Library/Tome II - The Architecture/2.1 - Canonical Architecture.md](-canonical-librarytome-ii---the-architecture21---canonical-architecturemd) - How open protocols enable distributed infrastructure
- [📚 Canonical Library/Tome III - The Operations/3.6 - Technical Evolution Framework.md](-canonical-librarytome-iii---the-operations36---technical-evolution-frameworkmd) - Community-driven evolution processes

## Overview

The Open Source and Non-Proprietary invariant ensures that EverArchive's core infrastructure remains permanently accessible, modifiable, and uncontrolled by any single entity. This foundational concept prevents ecosystem capture while enabling distributed innovation, long-term format viability, and universal interoperability. Unlike traditional open source projects that may later become proprietary, this invariant makes openness a constitutional requirement that cannot be changed without fundamental reconsideration of EverArchive's mission.

This concept addresses the civilizational threat of digital formats becoming inaccessible due to proprietary control, ensuring that humanity's creative memory remains readable and preservable regardless of corporate or institutional failures. By making openness a system invariant rather than a policy preference, EverArchive creates mathematical guarantees of long-term accessibility.

Within the System Invariants category, this concept works alongside Zero-Knowledge Encryption and Permanent Preservation Guarantee to create a foundation of trust: creators can be confident their work will remain accessible (through open formats), private (through encryption), and permanent (through preservation guarantees), with no single entity able to compromise these promises.

## Concept Specifications

### Core Definition & Requirements
*What this concept means and what it requires to be properly implemented*

The Open Source and Non-Proprietary invariant mandates that all core protocols, data formats, and reference implementations remain open source under permissive licenses. This creates legal and technical impossibility for any entity to capture or control the EverArchive ecosystem.

**Core Requirements:**
1. **Protocol Openness**: All core protocols (DAP format, API specifications, discovery algorithms) must be published under open licenses
2. **Reference Implementation Availability**: Complete reference implementations must be available under permissive open source licenses
3. **Format Transparency**: All data formats must be fully documented with open specifications
4. **Interoperability Standards**: Translation layers between proprietary and open formats must be open source
5. **Governance Transparency**: All governance processes, decisions, and technical evolution must be publicly documented

### Essential Characteristics
*The non-negotiable aspects that define this concept*

1. **Constitutional Protection**: Open source requirement is enshrined in governance constitution as inviolable principle, requiring supermajority to modify
2. **Permissive Licensing**: Core components use licenses that permit commercial use, modification, and distribution without copyleft requirements
3. **No Capture Mechanisms**: No part of the core infrastructure can be made proprietary retroactively through licensing changes or corporate acquisition
4. **Community Governance**: Technical evolution happens through transparent community processes with no single entity controlling decisions
5. **Format Immortality**: Open documentation ensures formats remain readable even if original maintainers disappear

### Boundaries & Constraints
*What this concept does NOT include, and what would violate it*

- **What it is NOT**: Not a prohibition on proprietary applications built on open protocols; not a requirement for all content to be open access
- **Violation conditions**: Making core protocols proprietary; introducing licensing fees for reference implementations; restricting access to format specifications; centralizing governance under single entity control
- **Non-negotiable elements**: Core DAP format specification; reference implementation availability; interoperability layer openness; governance transparency

### Technical Implications
*For concepts with technical aspects: specific technical requirements, standards, or constraints*

**Format Specifications:**
- DAP format must be fully specified in open JSON-LD schema
- All compression algorithms must use open standards (ZSTD, not proprietary)
- Cryptographic implementations must use standard libraries with open specifications
- API definitions must be published in OpenAPI format

**Reference Implementations:**
- Complete DAP creation/reading libraries in multiple languages
- Schema Projector translation engine with open source core
- Discovery API reference server implementation
- Preservation workflow reference tools

**Interoperability Requirements:**
- Bidirectional translation between DAP and established archival formats
- Open source adapters for institutional systems integration
- No lock-in mechanisms that prevent data export

## Application & Expression

### How This Concept Manifests
*The different ways this concept appears in EverArchive systems and decisions*

1. **Technical Architecture**: Open protocols enable distributed implementation without central control
   - **Example**: Multiple organizations can run independent DAP storage nodes using open specifications
   - **Impact**: Prevents single point of failure and enables global preservation network

2. **Governance Structure**: Constitutional requirement prevents retroactive capture
   - **Example**: Governance constitution explicitly prohibits making core protocols proprietary
   - **Impact**: Creates legal framework ensuring perpetual openness regardless of organizational changes

3. **Development Process**: Community-driven evolution with transparent decision-making
   - **Example**: Technical standards evolve through open EverArchive Proposal System (EAPS)
   - **Impact**: Ensures innovation serves community needs rather than corporate interests

### Implementation Approaches
*For concepts that have technical implementations*

**Approach 1: Copyleft vs Permissive Licensing Strategy**
- **Context**: Different components require different licensing approaches
- **Method**: 
  - Core protocols: MIT/Apache 2.0 for maximum adoption
  - Reference implementations: MIT/Apache 2.0 for commercial compatibility
  - Community tools: GPL/AGPL for ecosystem protection
  - Documentation: Creative Commons BY-SA for knowledge sharing
- **Benefits**: Balances adoption with ecosystem protection
- **Considerations**: Must clearly distinguish between different component types

**Approach 2: Format Specification Governance**
- **Context**: Ensuring format specifications remain open and evolvable
- **Method**: 
  - Version-controlled specification repository with public access
  - Community review process for format changes
  - Backwards compatibility requirements
  - Reference implementation requirement for format changes
- **Benefits**: Prevents format capture while enabling evolution
- **Considerations**: Balance between stability and innovation

**Approach 3: Anti-Capture Legal Framework**
- **Context**: Legal mechanisms preventing retroactive proprietary capture
- **Method**: 
  - Perpetual open source licensing with no revocation rights
  - Governance constitution requiring supermajority for openness changes
  - Patent non-assertion covenants for core technologies
  - Community ownership of core intellectual property
- **Benefits**: Creates legal impossibility of capture
- **Considerations**: Must coordinate across multiple jurisdictions

### Decision-Making Applications
*For concepts that guide decisions rather than technical implementation*

- **Partnership Evaluation**: Assess whether potential partners' practices align with open source principles
- **Technology Selection**: Prefer open source dependencies and avoid proprietary lock-in
- **Governance Decisions**: Ensure all governance processes remain transparent and community-driven
- **Resource Allocation**: Prioritize open source development over proprietary solutions
- **Standard Adoption**: Choose open standards for interoperability and avoid proprietary formats

### Common Misapplications
- **Conflating Access with Openness**: Making content publicly accessible isn't the same as open source infrastructure
- **Symbolic Openness**: Publishing some code while keeping core protocols proprietary
- **Governance Theatre**: Appearing to have open governance while maintaining central control
- **License Washing**: Using open source licenses while restricting practical use through patents or terms

## Dependencies & Relationships

### Depends On
- **[Creator Sovereignty](creator-sovereignty)**: Open source enables sovereignty by preventing capture and ensuring exportability
- **[Permanent Preservation Guarantee](permanent-preservation-guarantee)**: Open formats are essential for long-term preservation and accessibility
- **[Antifragility Design Philosophy](antifragility-design-philosophy)**: Open systems become stronger through distributed participation

### Enables
- **[Storage Trinity Architecture](storage-trinity-architecture)**: Open protocols enable multiple storage implementations
- **[Schema Projector Framework](schema-projector-framework)**: Open translation layers prevent lock-in to proprietary formats
- **[Infrastructure not Platform](infrastructure-not-platform)**: Open source is essential for infrastructure that enables rather than captures

### Feature Integration
- **Standards Interoperability**: Open source translation layers prevent vendor lock-in
- **Discovery Systems**: Open APIs enable diverse discovery interfaces and innovations
- **Preservation Tools**: Open implementations ensure preservation workflows remain accessible

### Cross-Concept Interactions
This concept creates a foundation of trust that enables other foundational concepts to function. Creator Sovereignty depends on open source to prevent capture of creator data. Permanent Preservation Guarantee relies on open formats to ensure long-term accessibility. The Infrastructure not Platform principle requires open protocols to enable value creation by others rather than capturing it centrally.

## Use Cases & Examples

### Use Case 1: Institutional Adoption Without Lock-In
**Context**: Research university wants to implement EverArchive for faculty research preservation
**Implementation**: University uses open DAP specifications and reference implementations to build custom integration with existing systems
**Outcome**: Institution maintains full control over its data and processes while benefiting from EverArchive infrastructure
**Example**: University of Michigan implements DAP storage using open specifications, integrating with existing DAMS through open Schema Projector, maintaining ability to export all data if priorities change

### Use Case 2: Community Innovation on Open Protocols
**Context**: Developer community wants to create new discovery interfaces for creative works
**Implementation**: Developers use open APIs and format specifications to build innovative applications
**Outcome**: Ecosystem growth through community innovation without requiring permission from central authority
**Example**: Independent developers create specialized discovery tools for poetry, music, and visual art using open DAP APIs, with innovations feeding back into core protocol development

### Use Case 3: Long-Term Format Viability
**Context**: Concern about format obsolescence affecting century-scale preservation
**Implementation**: Open specifications ensure format remains interpretable even if original maintainers disappear
**Outcome**: Format immortality through community stewardship and open documentation
**Example**: In 2075, original EverArchive organization no longer exists, but DAP format remains fully usable because complete specifications and reference implementations are publicly available

### User Journey Touchpoints
- **Creator Journey**: Creators trust the system knowing their work won't be held hostage by proprietary formats
- **Researcher Journey**: Researchers can build custom tools knowing APIs and formats will remain accessible
- **Librarian Journey**: Librarians can implement preservation workflows knowing they won't be locked into vendor solutions
- **Developer Journey**: Developers can innovate on open protocols without permission or licensing fees

### Institutional Adoption Patterns
Institutions typically adopt EverArchive through gradual integration, starting with pilot projects using open reference implementations, then customizing for local needs using open specifications, and finally contributing improvements back to the community. The open source nature removes adoption barriers and enables institutional sovereignty over their preservation processes.

## Validation & Assessment

### How to Recognize Proper Implementation
*Signs that this concept is being correctly applied*

1. **Complete Specification Availability**: All format specifications, protocol definitions, and API documentation are publicly accessible
2. **Reference Implementation Completeness**: Working implementations of all core functionality are available under permissive licenses
3. **Community Governance**: Technical decisions happen through transparent community processes with no single entity veto power
4. **Interoperability Success**: Third parties can successfully implement compatible systems using public specifications
5. **No Capture Mechanisms**: No part of the system can be made proprietary retroactively

### Assessment Questions
*Questions to ask to determine if this concept is being honored*

- **Can any entity unilaterally make core protocols proprietary?** (Should be impossible)
- **Are complete specifications publicly available for all core formats?** (Must be yes)
- **Can third parties implement compatible systems without permission?** (Must be yes)
- **Is technical evolution governed by transparent community processes?** (Must be yes)
- **Can users export their data in open formats?** (Must be yes)

### Warning Signs
*Indicators that this concept is being violated or compromised*

- **Specification Secrecy**: Core format specifications or protocol definitions are not publicly available
- **Reference Implementation Gaps**: Key functionality only available through proprietary implementations
- **Governance Centralization**: Technical decisions made by single entity without community input
- **License Restrictions**: Core protocols require licensing fees or have restrictive terms
- **Export Limitations**: Users cannot export data in open formats or migrate to alternative systems

### Measurement Approaches
*For concepts that can be measured or monitored*

- **Specification Completeness**: Percentage of core functionality with public specifications
- **Implementation Diversity**: Number of independent implementations of core protocols
- **Community Participation**: Number of organizations participating in governance processes
- **Interoperability Success**: Rate of successful third-party integrations
- **Format Accessibility**: Percentage of archived content accessible through open tools

## Evolution & Maintenance

### Concept Evolution
This concept maintains its essential nature while evolving through improved implementation strategies. The core requirement of openness remains constant, but the methods for achieving and protecting openness may improve over time. Evolution focuses on strengthening anti-capture mechanisms and improving interoperability rather than changing the fundamental commitment to openness.

### Backward Compatibility
All evolution must maintain backward compatibility with existing open specifications. New versions of formats or protocols must be implementable using previously published specifications, and legacy content must remain accessible through open tools. This ensures that openness commitment extends to all previously created content.

### Migration Strategies
When protocols evolve, migration tools must be provided under open source licenses. Users must be able to migrate their content between format versions using open tools, preventing lock-in to any particular version. Migration processes themselves must be documented and implementable by third parties.

### Long-term Sustainability
The openness commitment must survive organizational changes, including dissolution of the original EverArchive organization. This requires distributing governance across multiple entities, ensuring specifications are maintained by the community, and creating legal frameworks that prevent retroactive capture of previously open protocols.

### Version Management
Different versions of protocols and formats must be clearly distinguished and documented. Version management must be transparent and community-driven, with clear migration paths between versions. All versions must remain implementable using open specifications, preventing version lock-in.

## Related Concepts

### Within Same Category
- **[Zero-Knowledge Encryption for Core Layer](zero-knowledge-encryption-for-core-layer)**: Open encryption implementations ensure privacy guarantees remain verifiable
- **[Permanent Preservation Guarantee](permanent-preservation-guarantee)**: Open formats are essential for long-term preservation viability

### Cross-Category Dependencies
- **[Creator Sovereignty](creator-sovereignty)**: Open source prevents capture that would undermine creator control
- **[Infrastructure not Platform](infrastructure-not-platform)**: Open protocols enable infrastructure that serves rather than captures
- **[Schema Projector Framework](schema-projector-framework)**: Open translation layers prevent interoperability lock-in

### Emergent Properties
When combined with other foundational concepts, openness creates trust cascades: creators trust the system because they can verify its openness, institutions adopt because they can avoid lock-in, and developers innovate because they can build on open protocols. This creates a virtuous cycle of ecosystem growth.

## FAQ

### Implementation Questions
1. **Q**: What specific licenses should be used for different components?
   **A**: Core protocols and reference implementations should use permissive licenses (MIT/Apache 2.0) for maximum adoption. Community tools may use copyleft licenses (GPL/AGPL) for ecosystem protection. Documentation should use Creative Commons BY-SA for knowledge sharing.

2. **Q**: How do we prevent someone from creating proprietary extensions that fragment the ecosystem?
   **A**: Through strong core specifications, reference implementations, and community governance. While proprietary extensions are allowed, they cannot modify core protocols, and the community maintains canonical implementations that serve as the ecosystem foundation.

3. **Q**: What happens if a commercial entity tries to embrace-extend-extinguish the open protocols?
   **A**: Constitutional protection and community governance make this impossible. Core protocols cannot be made proprietary, and the community maintains canonical implementations. Commercial entities can build on the protocols but cannot capture them.

### Conceptual Questions
1. **Q**: Why is open source a system invariant rather than just a policy preference?
   **A**: Because the long-term preservation mission requires formats and protocols to remain accessible even if organizations fail. By making openness a constitutional requirement, we ensure the infrastructure survives any single entity's decisions.

2. **Q**: How does open source relate to creator privacy and control?
   **A**: Open source applies to the infrastructure (formats, protocols, tools) not the content. Creators maintain full control over their work through encryption and permissions, while the infrastructure remains open to prevent capture.

## Complete Reference Index

### Canonical Library References
*All EverArchive canonical documents referenced in this concept document*

#### Tome I - The Vision
- [📚 Canonical Library/Tome I - The Vision/1.1 - The EverArchive Manifesto.md](-canonical-librarytome-i---the-vision11---the-everarchive-manifestomd) - Lines 69-70 - "Every tool is open source, every protocol documented, every standard freely available"
- [📚 Canonical Library/Tome I - The Vision/1.0 - Essence and Vision.md](-canonical-librarytome-i---the-vision10---essence-and-visionmd) - Infrastructure principles section

#### Tome II - The Architecture
- [📚 Canonical Library/Tome II - The Architecture/2.2 - Deep Authorship Package Technical Specification.md](-canonical-librarytome-ii---the-architecture22---deep-authorship-package-technical-specificationmd) - Section 1.2 - Interoperability principle based on open standards
- [📚 Canonical Library/Tome II - The Architecture/2.7 - Standards Interoperability Strategy for DAP Ecosystem.md](-canonical-librarytome-ii---the-architecture27---standards-interoperability-strategy-for-dap-ecosystemmd) - Open interoperability framework

#### Tome III - The Operations
- [📚 Canonical Library/Tome III - The Operations/3.1 - Governance Constitution.md](-canonical-librarytome-iii---the-operations31---governance-constitutionmd) - Article I, Principle #6 - "All core protocols, formats, and reference software implementations shall be open-source"
- [📚 Canonical Library/Tome III - The Operations/3.6 - Technical Evolution Framework.md](-canonical-librarytome-iii---the-operations36---technical-evolution-frameworkmd) - Community-driven technical evolution

#### Features Documentation
- [📚 Canonical Library/Features/3 Research Reproducibility/3.2 Institutional Integration/25-standards-interoperability-without-lockin.md](-canonical-libraryfeatures3-research-reproducibility32-institutional-integration25-standards-interoperability-without-lockinmd) - Anti-lock-in mechanisms

#### Other Canonical Sources
- [🧑‍🎨 Distributed Creatives/♾️ EverArchive/📚 Canonical Library/Foundations/README](-distributed-creatives-everarchive-canonical-libraryfoundationsreadme) - System Invariant #10 definition
- [2025-07-06-Foundations-Index](2025-07-06-foundations-index) - Complete foundational concepts context

### External References
*Non-EverArchive sources referenced*

- Open Source Initiative (OSI) License Definitions - License classification standards
- W3C Open Standards Principles - Interoperability standards framework
- Internet Architecture Board RFC 5218 - Open protocol design principles

### Cross-References Within This Document
*Other foundational concepts referenced*

- [05-creator-sovereignty](05-creator-sovereignty) - How openness enables sovereignty
- [09-permanent-preservation-guarantee](09-permanent-preservation-guarantee) - How open formats enable preservation
- [06-infrastructure-not-platform](06-infrastructure-not-platform) - How openness enables infrastructure approach

---

*Note: This document represents the constitutional requirement for openness in EverArchive's infrastructure, ensuring no single entity can capture or control the ecosystem that preserves humanity's creative memory.*