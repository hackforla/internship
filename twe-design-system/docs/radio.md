---
hide:
  - toc
---
# **RADIO BUTTONS**
=== "Button Unselected"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <input type="radio">
            <label for="option">Option</label>
        </div>
    </div>
    <br>
    # **STATES**
    <div class="btn-grid-4">
        <div class="grid-items">Default<br></div>
        <div class="grid-items">Hover</div>
        <div class="grid-items">Pressed</div>
        <div class="grid-items">Disabled</div>
        <div class="grid-items"> 
            <input type="radio" >
            <label for="option">Option</label>
        </div>
        <div class="grid-items"> 
            <input type="radio" class="hover">
            <label for="option">Option</label>
        </div>
        <div class="grid-items"> 
            <input type="radio">
            <label for="option" class="pressed">Option</label>
        </div>
        <div class="grid-items"> 
            <input disabled type="radio">
            <label for="option">Option</label>
        </div>
    </div>
    <br>

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
=== "Button Selected"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <input type="radio" class="radio-btn">
            <label for="option">Option</label>
        </div>
    </div>
    <br>
    # **STATES**
    <div class="btn-grid-4">
        <div class="grid-items">Default<br></div>
        <div class="grid-items">Hover</div>
        <div class="grid-items">Pressed</div>
        <div class="grid-items">Disabled</div>
        <div class="grid-items"> 
            <input type="radio" >
            <label for="option">Option</label>
        </div>
        <div class="grid-items"> 
            <input type="radio" class="hover">
            <label for="option">Option</label>
        </div>
        <div class="grid-items"> 
            <input type="radio">
            <label for="option" class="pressed">Option</label>
        </div>
        <div class="grid-items"> 
            <input type="radio" class="disabled">
            <label for="option">Option</label>
        </div>
    </div>
    <br>
    === "HTML"

        ``` html
        <a href="#" class="btn-md btn">Button</a>

        <a href="#" class="btn-md btn hover">Button</a>

        <a href="#" class="btn-md btn focus">Button</a>

        <a href="#" class="btn-md btn disabled">Button</a>
        
        ```

    === "CSS"

        ``` css

        .btn-md{
            background-color: #247984;
            height: 60px;
            border-radius: 60px;
            padding: 0px 50px;
            line-height: 60px;
            width: fit-content;
        }

        .btn .hover{
            background: #0D5761;
        }
        .btn .focus{
            border-color: #0D5761;
            outline-color: #0D5761;
        }
        .btn .disabled{
            background: #c6c6c6;
        }
        
        ```       