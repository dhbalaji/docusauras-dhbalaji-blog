---
title: Enterprise React
sidebar_position: 1
description: Contains notes from Steve Kinney testing course and others
---

## Enterprise Software Overview

Enterprise software refers to expansive projects characterized by several key attributes:

1. **Scope and Scale:** Enterprise software encompasses solutions with significant scope, often transcending the scale of weekend projects.

2. **Longevity:** Distinguished by a prolonged lifespan, in contrast to transient weekend endeavors.

3. **Collaborative Development:** It involves contributions from multiple developers, incorporating thorough code reviews and safeguarding through extensive test cases.

4. **Evolutionary Development:** Typically, it progresses incrementally from prototype to production, adapting to changing requirements.

5. **Infrastructure and Coding Standards:** It adheres to specific infrastructure requirements and coding standards to ensure compatibility within the enterprise ecosystem.

6. **Extended Maintenance:** Involves a protracted maintenance phase, addressing hidden edge cases and ensuring sustained functionality.

7. **Adaptability:** If its lifespan extends, there may be a need for rewriting using a new technology stack.

8. **Alignment with Enterprise Architecture:** It seamlessly fits into the enterprise information architecture, incorporating elements such as authentication and authorization.

Automation is paramount in the context of enterprise software development, consistently adhering to rules without succumbing to human emotions or lapses in decision-making.

Maintenance of code is a delicate balance, requiring the management of application integrity while enhancing code authored by predecessors over time.

Refactoring is the art of modifying code without altering its functionality, and code reviews, though not easily scalable, are critical for ensuring precision and quality, even in the minutest details.

## Principles of a Well-Architected Application

A well-architected application adheres to a set of principles encompassing various facets:

- **Testing:**
    - Unit tests
    - Component tests
    - Integration tests
    - End-to-end tests
    - Smoke tests
    - Health checks

- **Static Analysis:**
    - Typescript analysis
    - Linting
    - Code formatting

- **Build Process:**
    - Code review checks
    - Automated checks for the aforementioned points
    - Continuous Integration/Continuous Deployment (CI/CD) practices

- **Separation of Concerns:**
    - Business logic isolated from the view layer

- **Deployment Infrastructure:**
    - Utilization of CDN
    - Implementation of edge networks
    - Integration with cloud services

- **Design Processes:**
    - Proactive thinking instead of reactive responses
    - Error reporting as opposed to relying on screenshots
    - Automatic dependency updates

- **Considerations:**
    - Managing technical debt
    - Evaluating cognitive costs

## Sustainable Architecture Components

Sustainable architecture is built upon the pillars of:

1. **Patterns:**
    - Architectural patterns
    - State management patterns
    - Abstraction patterns

2. **Processes:**
    - Rigorous code reviews
    - Blueprints and design documents

3. **Systems:**
    - Comprehensive testing strategies
    - Efficient build systems
    - Robust static analysis

## Core Technologies

The technology stack comprises:

1. Typescript
2. React
3. Testing library
4. Vitest
5. Playwright
6. GitHub Actions/Jenkins

Advisory: Pragmatism and realism should take precedence over mere philosophical considerations.

## Maintainability and Testing

The discussion on maintainability and testing is integral:

- **Unit Tests (Developer Tests):**
    - Swift execution, tied to code or component implementation
    - Limited confidence in the overall system

- **End-to-End Tests (Real World Tests):**
    - Slower execution, validating the user perspective in the browser
    - Higher confidence in system behavior

- **Integration Tests (Pseudo Real World Tests):**
    - Test parts of systems collectively, with mocks and abstractions
    - Evaluate interactions among components

- **Component Tests (What It Does Tests):**
    - Pertains to component-based libraries like React
    - Focuses on specific components and their functionalities
    - Includes assessments of CSS and visual appearance

The **feedback loop** acts as the crucial link connecting developers with test results, ensuring a continuous improvement cycle.

### Unit testing

> Unit testing is first line of defense



