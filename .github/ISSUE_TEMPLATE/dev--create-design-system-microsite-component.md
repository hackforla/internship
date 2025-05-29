---
name: 'Dev: Create Design System Microsite Component'
about: This issue helps you structure your template issue to be consistent with our
  other template issues in Design System Component Creation
title: 'WE: Dev: Design System: Create [Replace with NAME OF COMPONENT]'
labels: 'complexity: medium, feature: board / google drive / tools, feature: design
  system, milestone: missing, Participant Type: TWE Team Member, role: engineering,
  size: 1pt'
assignees: ''

---

#### Instructions for creating this issue
The person who creates this issue should use these links to add links to the resources section and customize this issue
- Customize the issue
    - [ ] Copy and paste entire template text in this issue into text editor (ie., "TextEdit" on _Mac_, "Wordpad" on _PC_)
    - Use Find/Replace (**Mac:** ⌘+F or **PC**: Ctrl+F) to search for and replace the keyword strings (including text and the brackets) below with the appropriate values 
    - [ ] Search for [Replace with NAME OF COMPONENT]
       - [ ] Replace with the component name (removing the brackets in the process)
    - [ ] Search for [Replace with LINK TO DESIGN ISSUE FROM EPIC]
       - [ ] Replace with the design issue link from the epic comment in resource 1.09 (removing the brackets in the process)
- Customize the issue settings (located in right sidebar)
    - [ ] Add the milestone: 05.02.04 Development Build Microsite pages
       - [ ] Remove the corresponding missing label
    - [ ] Under Projects, choose gear, choose "Repository," and choose TWE: Project Board.
- Customize dependencies 
    - [ ] If the design issue is closed/released to dev, delete dependency section
    - [ ] If the design issue is open, add the issue link to Dependencies
    - [ ] Add any other issue or reason that would prevent the action items from being completed
- Remove this section.
    - [ ] Delete this section when all the checkboxes above are complete (i.e., the issue assignee will never see this part)

### Dependencies
[Find the dependency from this table https://github.com/hackforla/internship/issues/455#issuecomment-2057437256 and replace this text with the link to the issue in a bullet]

### Overview
We need to create Design System [Replace with NAME OF COMPONENT] Component HTML and SASS / connect Figma design to finished code, and build microsite page so that developers can see and easily change component examples, states, code and location.

#### Assumptions
- You have read the [CONTRIBUTING.md](https://github.com/hackforla/internship-website-design-system/blob/main/CONTRIBUTING.md) in the Design System repo
  - You have set up your development environment for working with the Internship Design System Repository: https://github.com/hackforla/internship-website-design-system
  - You will continue to follow the instructions in CONTRIBUTING.md file

### Action Items
- [ ] Review the Microsite page mockup you will be working from (Resource 1.01)
- [ ] Name the Branch you create [Replace with NAME OF COMPONENT]
- [ ] Determine if any JavaScript needs to be included to style this component (see Resource 1.02 for examples of included JavaScript).  If you do need to use JS, don't forget to update the wiki page
- [ ] Include necessary files in the `/docs` folder (Resource 1.03) and project config file `mkdocs.yml` (Resource 1.04)
- [ ] Determine what variables are needed for this component and add them to variables.scss (Resource 1.05)
- [ ] Code Microsite component page
   - file locations
     - [ ] md file goes into the /docs folder (Resource 1.03) 
     - [ ] SASS file goes into the /docs/components/sass/components folder (Resource 1.06)
   - [ ] Create variables in sass sheet as necessary, add color varialbles with name determined by HTML Color Codes (Resource 1.07, 1.08)
   - [ ] Create component classes and states within the page
   - [ ] Include Files via code snippets to create the code section (see Resource 1.09 for details)
   - [ ] Add links to SASS and Markdown files below the code (see examples in Resource 1.10)
- [ ] Review template frontend for errors 
- [ ] Make a PR
- Once PR is merged
   - [ ] connect component in Figma to GitHub Files (Resource 1.10)
   - [ ] Add links to `Resources gathered during the completion of this issue` section
      - [ ] 2.01 MD file(s) created
      - [ ] 2.02 SASS file(s) created
      - [ ] 2.03 link to Header Microsite page on live site: If the site is live when this issue is worked on.

### Resources
#### Resources for working on this issue
- 1.01 Design Reference
   -  [Figma, [Replace with NAME OF COMPONENT] Microsite page]
   - [Design Systems Figma](https://www.figma.com/file/TTRS2FWXsrymHYpPJL1IdH/Internship-Team-Main-file?type=design&node-id=2%3A45&mode=design&t=jgMN8QdoLnh9F7MT-1)
- 1.02 WIKI: [Design system microsite JavaScript](https://github.com/hackforla/internship/wiki/Design-system-microsite-javascript)
- 1.03 MKdocs folder: [/docs](https://github.com/hackforla/internship-website-design-system/tree/main/docs) on repo
- 1.04 MDdocs config file: [mkdocs.yml](https://github.com/hackforla/internship-website-design-system/blob/main/mkdocs.yml) on repo
- 1.05 variables file: [/docs/components/sass/abstracts/_variables.scss](https://github.com/hackforla/internship-website-design-system/tree/main/docs/components/sass/abstracts) on repo
- 1.06 SASS file folder: [/docs/components/sass/components](https://github.com/hackforla/internship-website-design-system/tree/main/docs/components/sass/components)
- 1.07 Variables SASS Sheet: [/docs/components/sass/abstracts/variables.sss](https://github.com/hackforla/internship-website-design-system/tree/main/docs/components/sass/abstracts/variables.scss)
- 1.08 HTML Color Code Names: [HTMLColorCodes.com](https://htmlcolorcodes.com)
- 1.09 WIKI: [How to Create a Design System Microsite Page using Snippets](https://github.com/hackforla/internship/wiki/How-to-Create-a-Design-System-Microsite-Page-using-Snippets)
- 1.10 e.g., 
   - below the CSS tab, it would say CSS: https://github.com/hackforla/internship-website-design-system/blob/main/docs/components/sass/components/_[Replace with NAME OF COMPONENT].scss
   - below the HTML tab it would say HTML: https://github.com/hackforla/internship-website-design-system/blob/main/docs/[Replace with NAME OF COMPONENT].md
- 1.11 [Connect component in Figma to GitHub Files](https://github.com/hackforla/internship/wiki/Connect-component-in-Figma-to-GitHub-Files)
- 1.12 Original Design Issue: [Replace with LINK TO DESIGN ISSUE FROM EPIC]
   - Microsite Epic Issue with list of design issues: #https://github.com/hackforla/internship/issues/455#issuecomment-2057437256

#### Resources gathered during the completion of this issue
- 2.01 MD file(s) created: [[Replace with NAME OF COMPONENT].md] - link the name to the file in the repo
- 2.02 SASS file(s) created: [[Replace with NAME OF COMPONENT].scss] - link the name to the file in the repo
- 2.03 link to Header Microsite page on live site: [Replace with NAME OF COMPONENT](Replace with - link to the live URL If the site is live when this issue is worked on.
