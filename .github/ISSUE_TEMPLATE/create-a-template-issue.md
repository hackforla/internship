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
We need to create a template issue for [Replace NAME OF ISSUE TEMPLATE (named in the format as `TWE: Role: Direct Object: Action Verb`)] so that we have a consistent, transparent, defined, and self-supporting structure for people creating them.

### Action Items
#### Customize this issue
 - Customize this issue by adding the Name of Issue Template. 
    - _Note: An issue template's name is different from the issue title created from the template._
    - [ ] Search for `[Replace NAME OF ISSUE TEMPLATE]` by using the browser search (**Mac**: ⌘+F; **PC**: Ctrl+F)
    - [ ] Replace the keyword string (including text and the brackets) below with the name of your issue template according to the template naming convention: `TWE: Role: Direct object: Action verb`
        - The role is the primary owner of the issue template (e.g., Research, Design, Product)
        - Direct object should be the item that we're updating or working on (e.g., Wiki, Interviews, Roadmap)
        - Action verb should be the main descriptor of the action items (e.g., Update, Create, Transcribe)

#### Customize the issue settings (located in right sidebar)
Change the issue settings to ensure the issue is properly categorized and easy to manage.
- [ ] Under Assignees, assign yourself.
- [ ] Under Projects, choose gear, choose Repository, and choose TWE: Project Board.
- [ ] Add the milestone: Project Management
- [ ] Add a feature label specific to what the template is related to, if available.  If not clear what you should use, ask product.

#### Customize template draft
Create a draft of new template, which will be known as our "draft".
- [ ] Copy resource 1.01 Content to copy for draft to a new comment on this issue.
- [ ] In your draft, fill out the top part (called front matter) with the following information.  See resource 1.02 Front Matter Resources section below for definitions and examples.
    - [ ] Name
    - [ ] About
    - [ ] Title
    - [ ] Labels
- [ ] Define any Dependencies (or remove the dependency section if there is no dependency)
- [ ] Customize the Overview section
- [ ] Fill out the Action Items section (in your draft) by defining the steps that are required to be done, keeping the following in mind:
   - [ ] The person working on this issue might be new to the org, so the issue should be able to be worked on without any prior knowledge
   - [ ] If the person needs to add links, or put documents in specific locations, the place where they can do that action must be linked in the resources section
      - [ ] The links in the resources section provided by the issue creator should be in the same order as the Action Items 
      - [ ] Refer to resource 1.03 Example Action Items for Finding Wiki Page and Template for an example of how to write clear instructions that avoid compound steps (steps within a step).
   - [ ] Number each resource in the order each resource appears in the Action Items
       - [ ] Group resources into numbers and decimals (e.g., Resource 1.01, Resource 2.01)
       - [ ] Group the resources based on whether they are available when making the issues or they need to be created from this issue
           - If the resource is available, then group it under the **Resources for creating this issue** section (e.g., Resource 1.01, Resource 1.02, Resource 1.03)
           - If the resource will be delivered or created from this issue, then group it under the **Resource links gathered during the making of this issue** section (e.g., Resource 2.01, Resource 2.02, Resource 2.03)
- [ ] If documents or folders (sheets, docs, presentations, dashboard, etc.) will be created, find the document template that should be used by checking resource 1.04 WIKI Templates by role pages.  
  - [ ] If there is a template
     - [ ] Add a link to the template into the ` #### Resources for creating this issue`  section of your draft
  - [ ] If there is no template yet
    - [ ] Put a placeholder into the` #### Resources for creating this issue`  section of the draft `[TWE: Template Issue: [Role]: [Replace ACTION VERB][Replace DIRECT OBJECT]`
- [ ] Get sign-off by Product on the draft
- [ ] Create the template issue on the repo if needed
- [ ] Add the link to the new issue template once created to resource 2.01.  Find by clicking on the **Get started** button to the right of the new template listed on [new issue page](https://github.com/hackforla/internship/issues/new/choose)
- [ ] Update the appropriate place in the wiki for your template (see resources section)

### Resources/Instructions

#### Resources for creating this issue
- 1.01 Content to copy for draft
```
Draft of template issue for `[Replace NAME OF ISSUE TEMPLATE]`
---
**name:** TWE: Template Issue: [Replace ROLE]: [Replace ACTION VERB][Replace DIRECT OBJECT]
**about:** This issue helps you structure your template issue to be consistent with our other template issues in [Replace DIRECT OBJECT]
** title:** TWE: [Replace ROLE]: [Replace DIRECT OBJECT]: [Replace ACTION VERB]
**labels:** 'feature: board / google drive / tools, feature: missing, milestone: missing, role: missing, size: missing', 'Participant Type: missing', 'complexity: missing'
**assignees:**

---
#### Instructions for creating this issue
The person who creates this issue should use these links to add links to the resources section and customize this issue
- Customize the issue
    - [ ] Copy and paste entire template text in this issue into text editor (ie., "TextEdit" on _Mac_, "Wordpad" on _PC_)
    - Use Find/Replace (**Mac:** ⌘+F or **PC**: Ctrl+F) to search for and replace the keyword strings (including text and the brackets) below with the appropriate values 
    - [ ] Search for `[Replace`
    - [ ] Replace with whatever the keyword or information is asking for.
- Customize the issue settings (located in right sidebar)
    - [ ] Under Labels, add labels for any labels identified as missing
    - [ ] Remove the corresponding missing labels
    - [ ] Under Projects, choose gear, choose "Repository," and choose TWE: Project Board.
    - [ ] Add the milestone: [Replace MILESTONE]
    - [ ] Add a feature label specific to what the template is related to, if available. If not clear what you should use, ask product.
- Customize dependencies 
    - [ ] If no dependencies, delete dependency section
    - [ ] If dependencies, add the dependencies (any issue or reason that would prevent the action items from being completed)
- Remove this section.
    - [ ] Delete this section when all the checkboxes above are complete (i.e., the issue assignee will never see this part)

### Dependencies

### Overview
We need to [Replace ACTION VERB] [Replace DIRECT OBJECT] for [Replace REASON].

### Action Items
A STEP BY STEP LIST OF ALL THE TASK ITEMS THAT YOU CAN THINK OF NOW EXAMPLES INCLUDE: Research, reporting, coding, etc.

### Resources
#### Resources for creating this issue
- 1.01
- 1.02

#### Resources gathered during the completion of this issue
- 2.01
- 2.02
```

- 1.02 Front Matter Resources
   <details>
   <summary>Front Matter Fields and Meaning</summary>

   - name: (name that appear on the new issue tab)
   - about: (is the description that appears next to the issue template on the new issue tab)
   - title: (the title that appears when the issue is created.  User then customizes this title for their issue)
       - Use the naming convention: TWE: Role: Direct object: Action verb
       - If more than one word should go into the direct object spot, use multiple square brackets with the keyword (see example below)
   - labels: (choose the labels that will be the same each time, and choose missing labels for the ones that depend on content)
   - assignees:  
   </details>
   <details>
   <summary>Front Matter Field Example</summary>

   - name: 'TWE: Template Issue: Research: Create Roadmap'
   - about:  This issue helps you structure your template issue to be consistent with our other template issues in roadmap
   - title: 'TWE: Research: IS[Replace YY]: RP[Replace 000]: [Replace TYPE OF PARTICIPANT] [Replace TYPE OF RESEARCH METHOD]: Roadmap : Create'
   - labels: 'feature: research', 'feature: roadmap', 'milestone: missing', 'role: UI/UX research', 'Participant Type: missing', 'Research 000: missing', 'complexity: missing'
   - 'size: 0.50pt'
   - assignees: ''
   </details>

- 1.03 Example Action Items for Finding Wiki Page and Template
   <details>
   <summary>Example Action Items</summary>

   ```
   ### Action Items
   - Customize wiki page
        - [ ] Go to link 1.01 Internship Wiki, Join the team page
        - [ ] Find wiki page for this issue by looking at role pages.
        - [ ] Copy the link for the wiki page.
        - [ ] Add the link to Resource 2.01
           - [ ] Add the name of the link in square brackets
           - [ ] Add the URL in parenthesis without a space between the square bracket and parenthesis
   - Customize document template.
       - [ ] Go to link 1.02 Design Process Overview
       - [ ] Find document template that should be used in this issue.
       - [ ] Copy the link for the template.
       - [ ] Add the link to Resource 2.02
           - [ ] Add the name of the link in square brackets
           - [ ] Add the URL in parenthesis without a space between the square bracket and parenthesis
   ```

   </details>

   <details>
   <summary>Example Resource Lists</summary>

   ```
   ### Resources for creating this issue
   - 1.01. [Internship Wiki, Join the team page](https://github.com/hackforla/internship/wiki/Joining-the-Team)
   - 1.02. [Design Process Overview](https://github.com/hackforla/internship/wiki/Design-Process-Overview)

   ### Resource links gathered during the making of this issue
   - 2.01. [Wiki page for [Replace TYPE OF ROLE]]
   - 2.02. [TWE: Template: [Replace NAME OF TEMPLATE]]
   ```

   </details>

- 1.04 WIKI Templates by role pages
   - [TWE: WIKI: UX Research Guides Templates](https://github.com/hackforla/internship/wiki/UX-Research-Guides-Templates) 
   - [Design](https://github.com/hackforla/internship/wiki/Design-Process-Overview)
   - [Product](https://github.com/hackforla/internship/wiki/Product)
   - [Business Analyst / Data Science]
   - [Software Engineer]
   - [Marketing]
   - default document templates, in case you don't have one yet, can be found on the [Design Process Overview page](https://github.com/hackforla/internship/wiki/Design-Process-Overview)

#### Resources gathered during the completion of this issue
- 2.01 [TWE: [Replace ROLE]: [Replace DIRECT OBJECT]: [Replace ACTION VERB]]([Replace LINK])
