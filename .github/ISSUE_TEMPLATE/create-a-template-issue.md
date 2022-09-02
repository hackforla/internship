---
name: Create a template issue
about: This issue helps you structure your template issue to be consistent with our
  other template issues
title: 'TWE: Create Template Issue: [name of template]'
labels: 'feature: board / google drive / tools, feature: missing, milestone: missing,
  role: missing, size: missing'
assignees: ''

---

### Overview
We need to create a template issue for [replace with name of template issue] so that we have consistent, transparent, defined and self-supporting structure for people creating them.

### Action Items
- [ ] Add to the Project Board
- [ ] Add the milestone: Project Management
- [ ] Add a feature label specific to what the template is related to, if available.  If not clear what you should use, ask product.
- [ ] Any place you see `[replace...]` replace both the text and the brackets with what it is asking for
- [ ] Create a draft of new template by copying the content block below to a comment on this issue, which will be known as our Draft
- [ ] In your draft, Fill out the top part (called front matter) with the info it needs.  See the Resources section below for definition and example.
- [ ] Define any Dependencies (or remove the dependency section)
- [ ] Customize the Overview section
- [ ] Fill out the Action Items section (in your draft) by defining the steps that are required to be done, keeping the following in mind:
   - [ ] The person working on this issue might be new to the org, so the issue should be able to be worked on without any prior knowledge
   - [ ] If the person needs to add links, or put documents in specific locations, the place where they can do that action must be linked in the resources section
      - [ ] the links provided by the issue creator should be in the same order as the Action Items 
- [ ] If documents or folders (sheets, docs, presentations, dashboard, etc.) will be created, find the document template that should be used by checking the WIKI Templates by role pages.  
  - [ ] if there is a template
     - [ ] Add a link to the template into the ` ### Resources`  section of your draft
  - [ ] if there is not template yet
     - [ ] Go to [Templates & Product Branding](https://github.com/hackforla/internship/wiki/Design-Process-Overview) - then add that specific template link under the ` ### Resources`  section (in this top comment) for yourself so that you can create a template later
    - [ ] then put a placeholder into the` ### Resources`  section of the draft `[TWE: Template: [replace with name of type]]`
- [ ] Get sign-off by product on the draft
- [ ] Create the template issue on the repo
- [ ] Update the appropriate place in wiki for your template (see resources section)

### Resources/Instructions
#### WIKI Templates
- by role pages
  - [TWE: WIKI: UX Research Guides Templates](https://github.com/hackforla/internship/wiki/UX-Research-Guides-Templates) 
  - [Design]
  - [Product]
  - [Engineering]
- default document templates, in case you don't have one yet can found on the [Design Process Overview page](https://github.com/hackforla/internship/wiki/Design-Process-Overview)

#### Content to copy for draft
```
Draft of [replace with name of type] template issue
---
name: TWE: Create Template Issue: [replace with name of template]
about: 
title: TWE: [replace with action verb] [replace with name of template]
labels: 'feature: board / google drive / tools', 'feature: missing', 'size: missing', 'role: missing', 'milestone: missing'
assignees: 
---
# Instructions for creating this issue
The person who creates this issue should use these links to add links to the resources section and customize this issue
- [ ] Find WIKI page for this issue by looking at role pages [Internship Wiki, Join the team page](https://github.com/hackforla/internship/wiki/Joining-the-Team) - then add the appropriate link to the resources section
- [ ] Find document template that should be used [Templates & Product Branding](https://github.com/hackforla/internship/wiki/Design-Process-Overview) - then add that specific template link into the resources section
- [ ] If no dependencies, delete dependency section
- [ ] any place you see `[replace...]` replace both the text and the brackets with what it is asking for (including in the front matter above but not where it says name, but not where it says title.
- [ ] add appropriate labels and remove the corresponding missing labels
- [ ] delete this section when all the checkboxes above are complete (i.e., the issue assignee will never see this part)

### Dependencies

### Overview
WE NEED TO DO X FOR Y REASON

### Action Items
A STEP BY STEP LIST OF ALL THE TASK ITEMS THAT YOU CAN THINK OF NOW EXAMPLES INCLUDE: Research, reporting, etc.

### Resources
```
### Resources
<details>
<summary>Front Matter Fields and Meaning</summary>

- name: (name that appear on the new issue tab)
- about: (is the description that appears next to the issue template on the new issue tab
- title: (the title that appears when the issue is created.  User then customizes this title for their issue)
- labels: (choose the labels that will be the same each time, and choose missing labels for the ones that depend on content)
- assignees: 
</details>

<details>
<summary>Front Matter Field example</summary>

- name: 'Research: Roadmap'
- about: The start of a new roadmap
- title: 'TWE: Research Roadmap [name of type]'
- labels: 'feature: research, feature: roadmap, milestone: missing, role: UI/UX research,
-   size: 0.50pt'
- assignees: ''
</details>
