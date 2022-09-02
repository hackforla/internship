---
name: Create a template issue
about: This issue helps you structure your template issue to be consistent with our
  other template issues
title: 'TWE: Create Template Issue: [name of template]'
labels: 'feature: board / google drive / tools, feature: missing, milestone: missing,
  role: missing, size: missing'
assignees: ''

---

# Instructions for creating this issue
The person who creates this issue should use these links to add links to the resources section and customize this issue
- [ ] Add the milestone: Project Management
- [ ] Add a feature label specific to what the template is related to, if available.  If not clear what you should use, ask product.
- [ ] Find WIKI page for this issue by looking at role pages [Internship Wiki, Join the team page](https://github.com/hackforla/internship/wiki/Joining-the-Team) - then add the appropriate link to the resources section
- [ ] If documents or folders (sheets, docs, presentations, dashboard, etc.) will be created, find the document template that should be used by checking the WIKI Templates by role pages.  
  - [ ] if there is a template
     - [ ] Add a link to the template into the ` ### Resources`  section if the template block
  - [ ] if there is not template yet
     - [ ] Go to [Templates & Product Branding](https://github.com/hackforla/internship/wiki/Design-Process-Overview) - then add that specific template link under the ` ### Resources`  section for yourself so that you can create a template
    - [ ] then put a placeholder into the` ### Resources`  section of the template block `[TWE: Template: [replace with name of type]]`
- [ ] If documents or folders (sheets, docs, presentations, dashboard, etc.) will be created, find the document template that should be used [Templates & Product Branding](https://github.com/hackforla/internship/wiki/Design-Process-Overview) - then add that specific template link under the ` ### Resources`  section inside the template block
- [ ] If no dependencies, delete dependency section
- [ ] Any place you see `[replace...]` replace both the text and the brackets with what it is asking for
- [ ] Delete this section when all the checkboxes above are complete (i.e., the issue assignee will never see this part)

### Overview
We need to create a template issue for [replace with name of template issue] so that we have consistent, transparent, defined and self-supporting structure for people creating them.

### Action Items
- [ ] Create a draft by copying the template content below (which tells us labels, titles, action items, etc.) to a comment on this issue
- [ ] Fill out the top part (called front matter) with the info it needs.  See the Resources section below for definition and example.
- [ ] Define any Dependencies (or remove the dependency section)
- [ ] Customize the Overview section
- [ ] Fill out the Action Items section (in your comment) by defining the steps that are required to be done, keeping the following in mind:
   - [ ] The person working on this issue might be new to the org, so the issue should be able to be worked on without any prior knowledge
   - [ ] If the person needs to add links, or put documents in specific locations, the place where they can do that action must be linked in the resources section
      - [ ] the links provided by the issue creator should be in the same order as the Action Items 
- [ ] Get sign-off by product on the draft
- [ ] Create the template issue on the repo
- [ ] Update the appropriate place in wiki for your template (see resources section)

### Resources/Instructions
#### WIKI Templates by role pages
- [TWE: WIKI: UX Research Guides Templates](https://github.com/hackforla/internship/wiki/UX-Research-Guides-Templates) 
- [Design]
- [Product]
- [Engineering]

### template
```
Draft of [replace with name of type] template issue
---
name: TWE: Create Template Issue: [replace with name of template]
about: 
title: TWE: [action verb] [name of template]
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
