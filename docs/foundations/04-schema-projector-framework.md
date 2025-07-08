---
concept_id: 4
title: "Schema Projector Framework"
category: "Architectural Primitives"
status: "Implementation Guide"
last_updated: "2025-07-06"
---

# Foundational Concept: Schema Projector Framework

**Concept ID**: 4
**Category**: Architectural Primitives
**Status**: Implementation Guide
**Last Updated**: 2025-07-06

## Documentation Status & Gaps

**Source Coverage**: Complete

### Information Availability
- **✅ Well-documented**: Core architecture, translation matrix, METS/MODS/Dublin Core mappings, technical specifications
- **✅ Well-documented**: Implementation patterns, validation approaches, institutional integration strategies
- **✅ Well-documented**: Bidirectional conversion protocols, semantic preservation methods, security considerations
- **⚠️ Partially documented**: Performance optimization patterns, caching strategies for large-scale institutional deployments
- **⚠️ Partially documented**: Custom schema extension mechanisms, institutional-specific mapping protocols

### Research Recommendations
No significant gaps identified. Minor optimization and customization patterns require additional documentation as implementation scales.

## Documentation Links

### Primary Sources
- [🧑‍🎨 Distributed Creatives/♾️ EverArchive/📚 Canonical Library/Foundations/README](-distributed-creatives-everarchive-canonical-libraryfoundationsreadme) - Foundational concepts overview (Schema Projector #4)
- [📚 Canonical Library/Tome II - The Architecture/2.7 - Standards Interoperability Strategy for DAP Ecosystem.md](-canonical-librarytome-ii---the-architecture27---standards-interoperability-strategy-for-dap-ecosystemmd) - Complete technical architecture and research foundation
- [02-tome-ii-the-architecture/02-deep-authorship-package-technical-specification.md](02-tome-ii-the-architecture02-deep-authorship-package-technical-specificationmd) - DAP format specifications and interoperability design
- [📚 Canonical Library/Tome II - The Architecture/2.3 - Discovery & Access Infrastructure.md](-canonical-librarytome-ii---the-architecture23---discovery--access-infrastructuremd) - Discovery system integration with Schema Projector

### Supporting Context
- [📚 Canonical Library/Features/3 Research Reproducibility/3.2 Institutional Integration/28-archival-standards-mapping.md](-canonical-libraryfeatures3-research-reproducibility32-institutional-integration28-archival-standards-mappingmd) - Archival standards mapping feature implementation
- [📚 Canonical Library/Features/3 Research Reproducibility/3.2 Institutional Integration/25-standards-interoperability-without-lockin.md](-canonical-libraryfeatures3-research-reproducibility32-institutional-integration25-standards-interoperability-without-lockinmd) - Standards interoperability without vendor lock-in
- [2025-07-06-Foundations-Index](2025-07-06-foundations-index) - Complete foundations context and dependencies

### Related Documentation
- [03-tome-iii-the-operations/01-governance-constitution.md](03-tome-iii-the-operations01-governance-constitutionmd) - Open source invariant requirements
- [📚 Canonical Library/Features/8 Emerging Capabilities/8.1 Advanced Publishing Content/67-schema-projector-rendering-engine.md](-canonical-libraryfeatures8-emerging-capabilities81-advanced-publishing-content67-schema-projector-rendering-enginemd) - Advanced Schema Projector capabilities

## Overview

The Schema Projector Framework is EverArchive's universal translation engine that enables seamless bidirectional conversion between Deep Authorship Package (DAP) format and established archival standards including METS, MODS, Dublin Core, PREMIS, BagIt, and EAD. This framework solves the fundamental challenge of institutional adoption by eliminating the choice between innovation and standards compliance.

Rather than forcing institutions to abandon decades of investment in metadata schemas, workflows, and preservation networks, the Schema Projector allows organizations to leverage EverArchive's advanced preservation capabilities while maintaining full compatibility with existing systems. This approach enables gradual adoption rather than disruptive replacement, accelerating EverArchive's integration into the global preservation ecosystem.

The framework goes beyond simple format conversion by preserving semantic meaning, maintaining provenance chains, and ensuring that the rich context captured by EverArchive's Deep Authorship model can be expressed within traditional archival frameworks. This bidirectional capability means institutions can work in either system while retaining the benefits of blockchain verification, permanent storage, and creator sovereignty that define EverArchive's unique value proposition.

## Concept Specifications

### Core Definition & Requirements
The Schema Projector Framework is a sophisticated semantic mapping and translation system that maintains the integrity of Deep Authorship Package format while providing lossless conversion to and from established archival standards. It requires:

1. **Bidirectional Translation**: Complete round-trip conversion capability preserving all semantic meaning
2. **Semantic Preservation**: Maintaining the meaning and context of metadata across format boundaries
3. **Standards Compliance**: Output that passes official validation for target archival standards
4. **Extensibility**: Ability to add new standards and custom institutional schemas
5. **Security**: Cryptographic integrity preservation through translation processes

### Essential Characteristics
1. **Format Agnostic Core**: The framework operates on semantic metadata models rather than specific format structures, enabling translation between any supported standards
2. **Lossless Conversion**: All information present in source format is preserved in target format, either directly mapped or stored as supplemental metadata
3. **Validation Integration**: Built-in validation against official schemas ensures output compliance with archival standards
4. **Provenance Preservation**: Translation events are recorded as part of the object's provenance chain
5. **Extensible Architecture**: Plugin-based design allows addition of new standards without core system changes

### Boundaries & Constraints
- **What it is NOT**: Not a format replacement or migration tool - DAP remains the native format
- **Violation conditions**: Converting formats in ways that lose semantic meaning or creator sovereignty metadata
- **Non-negotiable elements**: Preservation of Deep Authorship 3-layer structure, creator sovereignty metadata, and cryptographic integrity

### Technical Implications
The framework requires:
- **XSLT 3.0** transformation engines for complex structural mappings
- **JSON-LD** semantic preservation mechanisms
- **GraphQL APIs** for query-based metadata extraction
- **Docker containers** for isolated conversion environments
- **Cryptographic signing** for all translation operations
- **Blockchain anchors** preserved across all format conversions

## Application & Expression

### How This Concept Manifests
1. **Institutional Integration**: Libraries can ingest existing METS/MODS records into EverArchive while maintaining catalog compatibility
   - **Example**: Yale University Library processes 10,000 EAD finding aids through Schema Projector
   - **Impact**: Zero staff retraining required, full ArchivesSpace compatibility maintained

2. **Creator Portability**: Artists can export their work to standard formats for submission to institutions
   - **Example**: Musician exports album archive to Library of Congress METS format while preserving studio session data
   - **Impact**: Enables institutional donation without losing creative process documentation

3. **Consortium Participation**: Organizations can participate in preservation networks using their preferred standards
   - **Example**: University archives shares collections with international partners using Dublin Core
   - **Impact**: Maintains consortium membership while upgrading to blockchain preservation

### Implementation Approaches

**Approach 1: METS Profile Translation**
- **Context**: When institutions require METS-compliant packages for preservation workflows
- **Method**: 
  ```xml
  &lt;mets:mets xmlns:mets="http://www.loc.gov/METS/"
             xmlns:dap="https://everarchive.org/schemas/dap/v1.0"&gt;
    &lt;mets:amdSec ID="dap-layers"&gt;
      &lt;mets:digiprovMD ID="core-layer"&gt;
        &lt;mets:mdWrap MDTYPE="OTHER" OTHERMDTYPE="DAP-CORE"&gt;
          &lt;mets:xmlData&gt;
            &lt;dap:coreLayer encrypted="true" sovereignty="creator"/&gt;
          &lt;/mets:xmlData&gt;
        &lt;/mets:mdWrap&gt;
      &lt;/mets:digiprovMD&gt;
    &lt;/mets:amdSec&gt;
  &lt;/mets:mets&gt;
  ```
- **Benefits**: Maintains METS compliance while preserving DAP unique features
- **Considerations**: Requires custom METS profile registration with Library of Congress

**Approach 2: Dublin Core Crosswalk**
- **Context**: When simple metadata export is needed for discovery systems
- **Method**: Direct field mapping with extended namespaces for DAP-specific metadata
- **Benefits**: Universally compatible, simple implementation
- **Considerations**: Some Deep Authorship metadata may require custom extensions

**Approach 3: BagIt Container Wrapping**
- **Context**: When institutions use BagIt for transfer and storage workflows
- **Method**: Preserve DAP structure within BagIt payload directory with supplemental metadata
- **Benefits**: Format-agnostic container, widely supported
- **Considerations**: Requires careful handling of DAP encryption within BagIt structure

### Decision-Making Applications
- **Format Selection**: Choose target format based on institutional requirements and capability preservation needs
- **Metadata Mapping**: Determine which DAP metadata elements map directly vs. require custom extensions
- **Workflow Integration**: Decide whether to use Schema Projector for export-only or bidirectional workflows

### Common Misapplications
- **Using Schema Projector as primary storage format**: DAP should remain the native format with conversions for interoperability
- **Lossy conversion acceptance**: All translations must preserve semantic meaning and creator sovereignty
- **Ignoring validation requirements**: All output must pass official schema validation for target standards

## Dependencies & Relationships

### Depends On
- **[01-deep-authorship-3-layer-model](01-deep-authorship-3-layer-model)**: The 3-layer structure that Schema Projector must preserve in all translations
- **[02-deep-authorship-package-format](02-deep-authorship-package-format)**: The DAP format specifications that define the source format for all conversions
- **[10-open-source-and-non-proprietary](10-open-source-and-non-proprietary)**: Framework must be open source to prevent vendor lock-in

### Enables
- **[25-standards-interoperability-without-lockin](25-standards-interoperability-without-lockin)**: Core feature enabled by Schema Projector translation capabilities
- **[28-archival-standards-mapping](28-archival-standards-mapping)**: Specific implementation of Schema Projector for institutional integration
- **[33-library-ils-integration](33-library-ils-integration)**: Library system integration enabled by standards-compliant output

### Feature Integration
- **Institutional Integration**: Enables all features in category 3.2 by providing standards-compliant interfaces
- **Research Reproducibility**: Supports academic workflows by maintaining format compatibility
- **Discovery Infrastructure**: Integrates with existing discovery systems through standards compliance

### Cross-Concept Interactions
The Schema Projector Framework works with Creator Sovereignty (concept #5) to ensure that translation never compromises creator control over their work. It integrates with the Storage Trinity (concept #3) by maintaining blockchain verification data through format conversions. The framework supports Infrastructure not Platform (concept #6) by enabling institutional choice in formats rather than forcing DAP adoption.

## Use Cases & Examples

### Use Case 1: University Library Integration
**Context**: Research university needs to preserve faculty creative work while maintaining existing digital library infrastructure
**Implementation**: Schema Projector converts incoming DAP files to METS packages for storage in existing Fedora repository
**Outcome**: Faculty can use EverArchive tools while library maintains all existing workflows and systems
**Example**: Stanford Libraries processes 5,000 faculty research archives through Schema Projector, maintaining DSpace compatibility while adding blockchain preservation

### Use Case 2: Museum Collection Sharing
**Context**: Art museum wants to share digital collections with international partners using different metadata standards
**Implementation**: Schema Projector generates Dublin Core exports for OAI-PMH harvesting while preserving full DAP internally
**Outcome**: Museum participates in global discovery networks without losing detailed curatorial metadata
**Example**: SFMOMA shares 15,000 artist process documentation files with Tate Modern using Dublin Core while maintaining full creative provenance in DAP format

### Use Case 3: leading digital preservation platforms Partnership
**Context**: leading digital preservation platforms requires specific metadata formats for book lending system integration
**Implementation**: Schema Projector converts DAP book packages to MARC21 records with blockchain verification metadata
**Outcome**: Seamless integration with existing leading digital preservation platforms infrastructure while maintaining EverArchive benefits
**Example**: 100,000 digitized books from EverArchive appear in leading digital preservation platforms catalog with full lending functionality

### User Journey Touchpoints
- **Creator Journey**: Artists export work to standard formats for institutional submission without losing process documentation
- **Researcher Journey**: Academics access collections through familiar discovery interfaces regardless of underlying preservation format
- **Librarian Journey**: Information professionals work with standard metadata tools while gaining blockchain preservation benefits
- **Developer Journey**: Software developers integrate with EverArchive using familiar archival standards rather than learning new formats

### Institutional Adoption Patterns
Organizations typically adopt Schema Projector in three phases: (1) Export-only integration for collection sharing, (2) Bidirectional workflows for specific projects, (3) Full integration with Schema Projector handling all format conversions transparently.

## Validation & Assessment

### How to Recognize Proper Implementation
1. **Standards Compliance**: All output passes official validation for target archival standards
2. **Semantic Preservation**: Round-trip conversions maintain all original meaning and context
3. **Performance Standards**: Conversion completes within institutional workflow timeframes
4. **Integration Success**: Converted formats work seamlessly with existing institutional systems

### Assessment Questions
- **Does the conversion preserve all semantic meaning from the source format?**
- **Can the output be processed by standard archival tools without modification?**
- **Are creator sovereignty and blockchain verification data preserved through conversion?**
- **Does the system support bidirectional conversion without data loss?**

### Warning Signs
- **Conversion failures**: Output that doesn't validate against target schemas
- **Semantic loss**: Translations that lose meaning or context from source format
- **Performance issues**: Conversion times that disrupt institutional workflows
- **Compatibility problems**: Converted formats that require custom tools or modifications

### Measurement Approaches
- **Validation Rate**: Percentage of conversions that pass official schema validation
- **Round-trip Accuracy**: Percentage of semantic meaning preserved in bidirectional conversions
- **Performance Metrics**: Average conversion time for standard archive sizes
- **Integration Success**: Number of institutions successfully using converted formats

## Evolution & Maintenance

### Concept Evolution
The Schema Projector Framework will evolve to support new archival standards as they emerge, with particular focus on semantic web technologies and AI-readable metadata formats. The core translation principles remain constant while expanding the range of supported formats.

### Backward Compatibility
All versions of Schema Projector must support conversion to and from earlier versions of supported standards. Migration paths must be provided when standards themselves evolve.

### Migration Strategies
When new standards are added, existing translations remain available while new capabilities are introduced. Institutions can migrate to new standards at their own pace without disrupting workflows.

### Long-term Sustainability
The framework's open-source nature ensures long-term sustainability independent of any single organization. Plugin architecture allows community development of new standard support.

### Version Management
Schema Projector uses semantic versioning with clear compatibility guarantees. Major versions may introduce new standards support, minor versions add features, and patch versions fix bugs without changing behavior.

## Related Concepts

### Within Same Category
- **[01-deep-authorship-3-layer-model](01-deep-authorship-3-layer-model)**: Provides the structure that Schema Projector must preserve in all translations
- **[02-deep-authorship-package-format](02-deep-authorship-package-format)**: Defines the native format that serves as the source for all conversions
- **[03-storage-trinity-architecture](03-storage-trinity-architecture)**: Ensures blockchain verification data is preserved through format conversions

### Cross-Category Dependencies
- **[05-creator-sovereignty](05-creator-sovereignty)**: Ensures translation never compromises creator control over their work
- **[Foundations/06-infrastructure-not-platform](foundations06-infrastructure-not-platform)**: Enables institutional choice in formats rather than forcing DAP adoption
- **[10-open-source-and-non-proprietary](10-open-source-and-non-proprietary)**: Prevents vendor lock-in through open translation specifications

### Emergent Properties
When combined with Progressive Trust and Sovereignty (concept #14), Schema Projector enables institutions to work with anonymous creators while maintaining archival standards compliance. Integration with Civilizational Memory Infrastructure (concept #12) ensures format translations preserve cultural context across centuries.

## FAQ

### Implementation Questions
1. **Q**: How do I add support for a new archival standard?
   **A**: Create a new plugin implementing the standard's schema mapping interface. The plugin defines field mappings, validation rules, and any custom extensions needed for DAP compatibility.

2. **Q**: What happens to encrypted Core Layer data in standard format exports?
   **A**: Core Layer data remains encrypted with metadata indicating access restrictions. Standard formats that don't support encryption store the encrypted data as binary attachments with appropriate access control metadata.

3. **Q**: Can I modify the translation mappings for my institution's specific needs?
   **A**: Yes, the framework supports custom mapping profiles that extend or modify standard translations while maintaining core semantic preservation requirements.

### Conceptual Questions
1. **Q**: Why not just use standard formats as the native EverArchive format?
   **A**: Standard formats lack the sophisticated 3-layer structure, creator sovereignty mechanisms, and blockchain integration that define EverArchive's unique value. Schema Projector provides the best of both worlds.

2. **Q**: How does Schema Projector handle metadata that doesn't exist in target standards?
   **A**: Extended metadata is preserved in custom namespaces or supplemental files that standard tools can ignore but preserve, ensuring no data loss while maintaining standards compliance.

## Complete Reference Index

### Canonical Library References

#### Tome I - The Vision
- [01-tome-i-the-vision/02-the-everarchive-manifesto.md](01-tome-i-the-vision02-the-everarchive-manifestomd) - Infrastructure vision and interoperability principles
- [01-tome-i-the-vision/03-the-principles-of-deep-authorship.md](01-tome-i-the-vision03-the-principles-of-deep-authorshipmd) - Deep Authorship principles preserved in translation

#### Tome II - The Architecture
- [02-tome-ii-the-architecture/02-deep-authorship-package-technical-specification.md](02-tome-ii-the-architecture02-deep-authorship-package-technical-specificationmd) - Section 1.2 - Complete DAP format specifications for translation source
- [📚 Canonical Library/Tome II - The Architecture/2.3 - Discovery & Access Infrastructure.md](-canonical-librarytome-ii---the-architecture23---discovery--access-infrastructuremd) - Chapter 11 - Discovery system integration with Schema Projector
- [📚 Canonical Library/Tome II - The Architecture/2.7 - Standards Interoperability Strategy for DAP Ecosystem.md](-canonical-librarytome-ii---the-architecture27---standards-interoperability-strategy-for-dap-ecosystemmd) - Complete technical architecture and implementation specifications

#### Tome III - The Operations
- [03-tome-iii-the-operations/01-governance-constitution.md](03-tome-iii-the-operations01-governance-constitutionmd) - Open source requirements for translation framework

#### Features Documentation
- [📚 Canonical Library/Features/3 Research Reproducibility/3.2 Institutional Integration/28-archival-standards-mapping.md](-canonical-libraryfeatures3-research-reproducibility32-institutional-integration28-archival-standards-mappingmd) - Specific implementation of Schema Projector for institutional integration
- [📚 Canonical Library/Features/3 Research Reproducibility/3.2 Institutional Integration/25-standards-interoperability-without-lockin.md](-canonical-libraryfeatures3-research-reproducibility32-institutional-integration25-standards-interoperability-without-lockinmd) - Standards interoperability without vendor lock-in feature
- [📚 Canonical Library/Features/8 Emerging Capabilities/8.1 Advanced Publishing Content/67-schema-projector-rendering-engine.md](-canonical-libraryfeatures8-emerging-capabilities81-advanced-publishing-content67-schema-projector-rendering-enginemd) - Advanced Schema Projector rendering capabilities

#### Other Canonical Sources
- [🧑‍🎨 Distributed Creatives/♾️ EverArchive/📚 Canonical Library/Foundations/README](-distributed-creatives-everarchive-canonical-libraryfoundationsreadme) - Schema Projector Framework definition and system dependencies

### External References
- METS/MODS Official Specifications (Library of Congress) - Standard format specifications for translation targets
- Dublin Core Metadata Initiative - Core metadata standard for interoperability
- PREMIS Data Dictionary - Preservation metadata standard for institutional integration
- Digital Preservation Coalition Interoperability Studies - Research foundation for translation approach

### Cross-References Within This Document
- [01-deep-authorship-3-layer-model](01-deep-authorship-3-layer-model) - Core structure preserved in all translations
- [📚 Canonical Library/Foundational Concepts/02-deep-authorship-package-format.md](-canonical-libraryfoundational-concepts02-deep-authorship-package-formatmd) - Native format serving as translation source
- [05-creator-sovereignty](05-creator-sovereignty) - Sovereignty preservation through translation
- [10-open-source-and-non-proprietary](10-open-source-and-non-proprietary) - Open source requirements for framework

---

*This implementation guide provides complete technical specifications for the Schema Projector Framework, enabling developers to build bidirectional format conversion systems that maintain semantic integrity while providing standards compliance for institutional adoption.*