---
tool_id: 20
title: "Spatial Explorer"
category: "Consumption & Access"
status: "Specification Complete"
last_updated: "2025-07-06"
---
# Software Tool: EverArchive Spatial Explorer
**Tool ID**: 20  
**Category**: Consumption & Access  
**Development Status**: Specification Complete  
**Last Updated**: July 6, 2025
## Tool Overview
### Primary Purpose
*An immersive 3D application for VR, AR, and desktop that allows users to explore and interact with preserved digital objects and their creative lineage in a native spatial environment.*
The Spatial Explorer transforms the archive from a flat list of files into a navigable, interactive "memory palace." It is designed to provide a context-rich way to experience 3D assets (like game environments, architectural models, and VR art) and to visualize the complex relationships within any creative project as a spatial graph.
### Target Users & Contexts
*Who uses this tool and in what scenarios*
- **Primary Users**: VR/AR artists, game historians, architects, museum curators, and researchers studying 3D data.
- **Secondary Users**: The general public exploring a museum's virtual collection, students learning about complex systems, creators reviewing their own work.
- **Use Contexts**: A game historian "walking through" the different preserved versions of a level from an indie game; an architecture student exploring a BIM model's construction sequence; a museum visitor interacting with a 3D scan of a fragile sculpture.
### Consolidated Capabilities
*The main things this tool enables users to accomplish*
1. **Native 3D Asset Interaction**: View, manipulate, and explore preserved 3D models, scenes, and environments in a high-performance 3D viewer that supports common formats (glTF, USD, FBX).
2. **Spatial Lineage Visualization**: Renders the "lineage graph" from `EverScan` as an interactive, 3D force-directed graph, allowing users to spatially navigate the connections between drafts, source files, and final works.
3. **Immersive Process Replay**: For supported assets, it enables an immersive "making-of" experience, replaying the creation process (e.g., showing a 3D model being built up layer by layer) within the 3D space.
4. **Augmented Reality Overlay**: Using AR-capable devices (like the `Biometric Scanner` glasses or mobile phones), users can overlay preserved digital objects onto the real world.
## User Journey Enablement
### Workflow Transformation
*How this tool changes what's possible for users*
**Before This Tool**:
- Preserved 3D assets are just files in a list. To view them, a user must download them and open them in specialized, external software, losing all archival context.
- The complex relationships within a project are represented as a flat list or a 2D diagram, which is difficult to comprehend.
- Experiencing a preserved VR artwork is impossible without downloading it and running it as a standalone, disconnected application.
**With This Tool**:
- 3D assets can be experienced instantly and natively within the archive, complete with all their associated metadata and provenance.
- The history and structure of a project become an intuitive, explorable "galaxy" of connected ideas.
- A user can seamlessly transition from viewing a 3D model to exploring its entire creative history in the same application.
- A physical museum exhibit can be enhanced with AR overlays of an object's earlier versions or internal structure.
### Source Scenario Examples
*Concrete examples from source materials showing tool value*
#### **Scenario 1: The Virtual Reality Artist's Retrospective**
- **Source Context**: The roadmap item for "Multi-reality creation environments" and "Spatial computing interfaces."
- **Challenge Addressed**: A VR artist's work is ephemeral, tied to specific hardware and platforms that will become obsolete. How can their work be experienced in the future?
- **Value Delivered**: The Spatial Explorer provides a future-proof environment to load and run the preserved VR scene. A visitor in 2050 can put on a headset and experience the artwork as intended, and then "step out" of the piece to browse the artist's sketches and code in a virtual gallery surrounding the artwork.
- **Source Reference**: Original Index Roadmap (`Spatial computing interfaces`, `Multi-reality creation environments`)
## Institutional & Scale Benefits
### Organizational Value
*How this tool serves institutional and group needs*
- **Unlocks New Collections**: Makes complex 3D/VR/AR collections, which are currently very difficult to preserve and display, a first-class citizen of the archive.
- **New Engagement Models**: Offers museums and libraries a powerful new way to create immersive, interactive digital exhibits that can reach a global audience.
- **Future-Proofing**: Provides a standardized platform for experiencing multi-reality content, ensuring it remains accessible even as specific hardware and software platforms disappear.
## Ecosystem Integration & Synergies
### EverArchive Tool Relationships
*How this tool works with other EverArchive tools to create compound value*
- **EverArchive Storage Manager**: The Explorer streams 3D asset data directly from the `Storage Manager`'s high-speed IPFS cache.
- **EverScan**: It uses data from `EverScan` to build its spatial lineage graphs, transforming the raw relationship data into a visual, navigable experience.
- **EverArchive Content Projector**: Can be considered a specialized, 3D version of the `Content Projector`. While the standard projector creates 2D outputs (web pages, slides), the Spatial Explorer projects the object into an interactive 3D scene.
- **EverArchive Biometric Scanner**: The AR glasses specified in the `Biometric Scanner` document would be a primary client device for this Explorer's augmented reality features.
### Workflow Integration Points
*How this tool fits into broader user workflows*
- **Input Sources**: 3D model files (glTF, etc.), scene descriptions, lineage graph data from `EverScan`, user navigation input (VR controllers, mouse/keyboard).
- **Output Destinations**: Renders high-resolution frames to a VR/AR headset or a desktop display.
## Foundation Technical Concept
### Core Functional Requirements
*What this tool must do to deliver the value proposition*
- **Essential Function 1**: A high-performance 3D rendering engine (e.g., built on Three.js, Babylon.js, or a game engine like Bevy/Godot) capable of running on desktop and in-browser for VR/AR.
- **Essential Function 2**: A data pipeline that can efficiently stream large 3D assets and complex graph data from the EverArchive backend.
- **Essential Function 3**: A flexible and intuitive interaction model that works across different modalities (mouse/keyboard, VR controllers, AR hand tracking).
### Integration Requirements
*How this tool must connect to deliver ecosystem value*
- **API Integration**: Must connect to the EverArchive API to fetch asset files, metadata, and the lineage data provided by `EverScan`.
- **Hardware Integration**: For VR/AR modes, it must integrate with standard APIs like WebXR to support a wide range of headsets and devices.
### Success Metrics
*How to measure if this tool delivers its intended value*
- **User Success Indicator 1**: Average session duration for 3D collections is significantly higher in the Spatial Explorer than for the same collections in a traditional 2D file-list interface.
- **User Success Indicator 2**: High user adoption for specific use cases, e.g., "90% of architecture schools with EverArchive use the Spatial Explorer in their history courses."
- **Performance Metric**: The explorer can load and interactively display a 1-million-polygon model or a 10,00-node lineage graph at a stable 60+ frames per second.
## Source References & Traceability
### Original Concept Origin
*The original concept that motivated this tool's creation*
- **Spatial computing interfaces:** [EverArchive Software & Tools Index](everarchive-software--tools-index) (This tool directly implements this concept).
- **Multi-reality creation environments:** [EverArchive Software & Tools Index](everarchive-software--tools-index) (This tool is the primary environment for *consuming* multi-reality content, and could evolve to include creation).
### Cross-Tool References
*Other EverArchive tools that create synergies*
- **EverScan**: [📚 Canonical Library/Software-Tools/17-EverScan.md](-canonical-librarysoftware-tools17-everscanmd)
- **EverArchive Content Projector**: [📚 Canonical Library/Software-Tools/01-Content-Projector.md](-canonical-librarysoftware-tools01-content-projectormd)
- **EverArchive Biometric Scanner**: [📚 Canonical Library/Software-Tools/03-Biometric-Scanner.md](-canonical-librarysoftware-tools03-biometric-scannermd)
