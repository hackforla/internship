---
hide:
  - toc
---
# **DROPDOWNS**

# **CLASS**

=== "Drop Down"
    <div class="btn-grid-1">
        <div class="grid-items-flex">
            <label class= "dropdowns-label">Label</Label>
                <div class="select-wrapper">
                    <div class="select">
                        <div class="select__trigger"><span>Placeholder</span>
                            <div class="arrow"></div>
                        </div>
                        <div class="custom-options">
                            <span class="custom-option selected" data-value="placeholder1">Placeholder</span>
                            <span class="custom-option" data-value="placeholder2">Placeholder2</span>
                            <span class="custom-option" data-value="placeholder3">Placeholder3</span>
                        </div>
                    </div>
                </div> 
        </div>
    </div>
    # **STATES**
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items-flex">
                <label class= "dropdowns-label">Label</Label>
                <div class="select-wrapper">
                    <div class="select">
                        <div class="select__trigger"><span>Placeholder</span>
                            <div class="arrow"></div>
                        </div>
                        <div class="custom-options">
                            <span class="custom-option selected" data-value="placeholder1">Placeholder</span>
                            <span class="custom-option" data-value="placeholder2">Placeholder2</span>
                            <span class="custom-option" data-value="placeholder3">Placeholder3</span>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        === "HTML"

            ``` html
            <a href="#" class="btn-sm ">Button</a>

            <a href="#" class="btn-sm hover">Button</a>

            <a href="#" class="btn-sm focus">Button</a>

            <a href="#" class="btn-sm disabled">Button</a>
            
            ```
        === "CSS"

            ``` css
            .btn-sm{
                background-color: #247984;
                height: 40px;
                border-radius: 20px;
                padding: 0px 32px;
                color: white;
                line-height: 40px;
                width: fit-content;
            }

            .btn .hover{
                background: #0D5761;
            }
            .btn .focused{
                border-color: #0D5761;
                outline-color: #0D5761;
            }
            .btn .disabled{
                background: #c6c6c6;
            }
            
            ```
    === "Selected"
        <div class="btn-grid-1">
            <div class="grid-items-flex">
                <label class= "dropdowns-label">Label</Label>
                <select class="dropdowns selected">
                    <option>Placeholder</option>
                    <option>Placeholder 2</option>
                    <option>Placeholder 3</option>
                </select> 
            </div>
        </div>
        
        === "HTML"

            ``` html
            <a href="#" class="btn-sm ">Selected</a>

            <a href="#" class="btn-sm hover">Button</a>

            <a href="#" class="btn-sm focus">Button</a>

            <a href="#" class="btn-sm disabled">Button</a>
            
            ```
        === "CSS"

            ``` css

            .btn-sm{
                background-color: #247984;
                height: 40px;
                border-radius: 20px;
                padding: 0px 32px;
                color: white;
                line-height: 40px;
                width: fit-content;
            }

            .btn .hover{
                background: #0D5761;
            }
            .btn .focused{
                border-color: #0D5761;
                outline-color: #0D5761;
            }
            .btn .disabled{
                background: #c6c6c6;
            }
            
            ```
=== "Drop Down Item"
    <div class="btn-grid-1">
        <div class="grid-items-flex">
            <label class= "dropdowns-label">Label</Label>
            <select class="dropdowns">
                <option>Placeholder</option>
            </select> 
        </div>
    </div>
    # **STATES**
    === "Hover"
        <div class="btn-grid-1">
            <div class="grid-items-flex">
                <label class= "dropdowns-label">Label</Label>
                <select class="dropdowns hover">
                    <option>Placeholder</option>
                    <option>Placeholder 2</option>
                    <option>Placeholder 3</option>
                </select> 
            </div>
        </div>
        === "HTML"

            ``` html
            <a href="#" class="btn-sm ">Button</a>

            <a href="#" class="btn-sm hover">Button</a>

            <a href="#" class="btn-sm focus">Button</a>

            <a href="#" class="btn-sm disabled">Button</a>
            
            ```
        === "CSS"

            ``` css
            .btn-sm{
                background-color: #247984;
                height: 40px;
                border-radius: 20px;
                padding: 0px 32px;
                color: white;
                line-height: 40px;
                width: fit-content;
            }

            .btn .hover{
                background: #0D5761;
            }
            .btn .focused{
                border-color: #0D5761;
                outline-color: #0D5761;
            }
            .btn .disabled{
                background: #c6c6c6;
            }
            
            ```
    === "Selected"
        <div class="btn-grid-1">
            <div class="grid-items-flex">
                <label class= "dropdowns-label">Label</Label>
                <select class="dropdowns selected">
                    <option>Placeholder</option>
                    <option>Placeholder 2</option>
                    <option>Placeholder 3</option>
                </select> 
            </div>
        </div>
        
        === "HTML"

            ``` html
            <a href="#" class="btn-sm ">Selected</a>

            <a href="#" class="btn-sm hover">Button</a>

            <a href="#" class="btn-sm focus">Button</a>

            <a href="#" class="btn-sm disabled">Button</a>
            
            ```
        === "CSS"

            ``` css

            .btn-sm{
                background-color: #247984;
                height: 40px;
                border-radius: 20px;
                padding: 0px 32px;
                color: white;
                line-height: 40px;
                width: fit-content;
            }

            .btn .hover{
                background: #0D5761;
            }
            .btn .focused{
                border-color: #0D5761;
                outline-color: #0D5761;
            }
            .btn .disabled{
                background: #c6c6c6;
            }
            
            ```