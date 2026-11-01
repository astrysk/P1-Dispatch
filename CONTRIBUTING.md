# Contributing to Dispatch

Thank you for your interest in contributing to **Dispatch**.

Dispatch is an exploration of pickup reliability in India's
manufacturing logistics ecosystem. We welcome thoughtful suggestions,
research, feedback, and improvements that help make the product
direction and supporting documentation stronger.

This repository is intended to invite community input. Contributions are
submitted through GitHub Pull Requests (PRs) and reviewed by the project
maintainer.

## 1. What You Can Contribute

We welcome constructive contributions in areas such as:

-   **Problem discovery and research:** Industry context, user pain
    points, research findings, and evidence about pickup reliability.
-   **Product strategy:** Product vision, positioning, goals, value
    proposition, and alternative approaches.
-   **Requirements and planning:** Feature suggestions, user stories,
    workflows, use cases, and product requirements.
-   **UI/UX:** User journeys, usability feedback, wireframe suggestions,
    and interface improvements.
-   **Technical architecture:** Architecture feedback, technology
    recommendations, data structures, and technical considerations.
-   **Business model and go-to-market:** Pricing ideas, business models,
    customer segments, partnerships, and launch suggestions.
-   **Testing and quality:** Gaps, edge cases, inconsistencies, risks,
    and ways to validate proposed workflows.
-   **General feedback:** Corrections, questions, alternative
    perspectives, and other relevant suggestions.

Please keep contributions relevant to Dispatch and explain the reasoning
behind your suggestions.

## 2. Branching Policy --- Read Before Opening a PR

The repository has two main branches:

  -----------------------------------------------------------------------
  Branch                              Purpose
  ----------------------------------- -----------------------------------
  `main`                              Official, stable version of the
                                      Dispatch documentation

  `astrysk-dispatch-stack`            Community suggestions, proposed
                                      changes, and contribution review
  -----------------------------------------------------------------------

**All community contribution Pull Requests must target
`astrysk-dispatch-stack`. Do not target `main`.**

The `main` branch is reserved for the official project documentation.
The project maintainer decides which accepted contributions, if any,
should later be incorporated into `main`.

When opening a PR, check the **base branch** carefully:

-   **Base repository:** The official Dispatch repository
-   **Base branch:** `astrysk-dispatch-stack`
-   **Head repository:** Your fork
-   **Compare branch:** Your contribution branch

PRs opened against `main` are not considered community submissions under
this policy. They may be closed with a request to reopen or retarget the
contribution to `astrysk-dispatch-stack`.

This is a contribution policy; GitHub may still allow users to select
`main` as a PR target. Please follow the instructions above.

## 3. How to Contribute

### Step 1: Fork the Repository

Use GitHub's **Fork** option to create your own copy of the official
Dispatch repository.

### Step 2: Clone Your Fork

Replace the placeholders with your GitHub username and the repository
name:

``` bash
git clone https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
cd REPOSITORY-NAME
```

### Step 3: Get the Contribution Branch

Fetch the latest branches from your fork and switch to
`astrysk-dispatch-stack`:

``` bash
git fetch origin
git switch astrysk-dispatch-stack
git pull origin astrysk-dispatch-stack
```

If the branch is not present in your fork, check that your fork includes
the latest branches from the official repository.

### Step 4: Create a Separate Branch for Your Suggestion

Create a focused branch from `astrysk-dispatch-stack`:

``` bash
git switch -c docs/short-description
```

Examples:

-   `research/competitor-analysis`
-   `docs/product-strategy-feedback`
-   `suggestions/pickup-workflow`
-   `improvements/requirements`

Use a descriptive branch name that reflects the change.

### Step 5: Make and Commit Your Changes

Keep your changes focused and preserve the repository's existing
structure and Markdown formatting.

``` bash
git add .
git commit -m "Add suggestion for [topic]"
```

### Step 6: Push Your Branch to Your Fork

``` bash
git push -u origin docs/short-description
```

Replace `docs/short-description` with the name of your branch.

### Step 7: Open a Pull Request

On GitHub, open a Pull Request from your fork to the official Dispatch
repository.

Before submitting, verify that the **base branch is
`astrysk-dispatch-stack`** and the compare branch is your contribution
branch.

Include a clear title and explain:

1.  What you are suggesting or changing.
2.  Which problem, opportunity, or user need it addresses.
3.  Why you believe the change would improve Dispatch.
4.  Any supporting research, references, examples, or assumptions.

## 4. Contribution Quality Guidelines

To make suggestions useful and easy to review:

-   Be specific and constructive.
-   Explain the reasoning behind a proposed change.
-   Support factual or research-based claims with credible sources where
    possible.
-   Distinguish verified findings from assumptions or personal opinions.
-   Keep each PR focused on one topic or a closely related set of
    changes.
-   Follow the existing document structure and formatting.
-   Avoid deleting or substantially rewriting existing material without
    explaining the reason.
-   Do not include confidential, personal, or proprietary information.
-   Do not present a suggestion as an approved product decision.

## 5. Review and Acceptance

The project maintainer reviews contributions submitted to
`astrysk-dispatch-stack`. During review, the maintainer may:

-   Accept the suggestion.
-   Ask questions or request clarification.
-   Request revisions or supporting evidence.
-   Suggest an alternative approach.
-   Decline the contribution if it is outside the project's scope or
    does not meet its needs.

A PR being submitted or reviewed does not guarantee acceptance or
inclusion in Dispatch.

Accepted contributions merged into `astrysk-dispatch-stack` remain
proposed or community-informed material until the maintainer decides
whether they should be incorporated into the official documentation in
`main`.

The project maintainer retains final authority over project direction
and changes to the official documentation.

## 6. Questions and Discussions

If you are unsure whether an idea is in scope, explain the idea and its
relevance in your PR description. Keep discussion respectful, specific,
and focused on improving Dispatch.

## 7. Thank You

Thank you for taking the time to explore Dispatch and share your
perspective. Thoughtful research, constructive criticism, and practical
suggestions are all valuable contributions.

**Explore. Suggest. Contribute. Improve.**
