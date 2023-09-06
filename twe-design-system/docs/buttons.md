---
hide:
  - toc
---
# **BUTTONS**

=== "Small"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <a href="#" class= "btn-sm btn">Button</a> 
        </div>
    </div>
    # **STATES**
    <div class="btn-grid-3">
        <div class="grid-items">Hover<br></div>
        <div class="grid-items">Focused</div>
        <div class="grid-items">Disabled</div>
        <div class="grid-items"> 
            <a href="#"class="btn-sm btn hover">Button</a> 
        </div>
        <div class="grid-items"> 
            <a href="#" class= "btn-sm btn focus">Button</a> 
        </div>
        <div class="grid-items"> 
            <a href="#" class="btn-sm btn disabled">Button</a> 
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
=== "Medium"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <a href="#" class="btn-md btn ">Button</a> 
        </div>
    </div>
    # **STATES**
    <div class="btn-grid-3">
        <div class="grid-items">Hover<br></div>
        <div class="grid-items">Focused</div>
        <div class="grid-items">Disabled</div>
        <div class="grid-items"> 
            <a href="#" class="btn-md btn hover">Button</a> 
        </div>
        <div class="grid-items"> 
            <a href="#" class="btn-md btn focus">Button</a> 
        </div>
        <div class="grid-items"> 
            <a href="#" class="btn-md btn disabled">Button</a> 
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
=== "Large"
    <div class="btn-grid-1">
        <div class="grid-items"> 
            <a href="#" class="btn-lg btn">Button</a> 
        </div>
    </div>
    # **STATES**
    <div class="btn-grid-3">
        <div class="grid-items">Hover<br></div>
        <div class="grid-items">Focused</div>
        <div class="grid-items">Disabled</div>
        <div class="grid-items"> 
            <a href="#" class="btn-lg btn hover">Button</a> 
        </div>
        <div class="grid-items"> 
            <a href="#" class="btn-lg btn focus">Button</a> 
        </div>
        <div class="grid-items"> 
            <a href="#" class="btn-lg btn disabled">Button</a> 
        </div>
    </div>
    <br>

    === "HTML"

        ``` html
        <a href="#"><div class="btn-lg ">Button</div></a>

        <a href="#"><div class="btn-lg btn-hover">Button</div></a>

        <a href="#"><div class="btn-lg btn-focused">Button</div></a>

        <a href="#"><div class="btn-lg btn-disabled">Button</div></a>
        
        ```

    === "CSS"

        ``` css

        .btn-lg{
            background-color: #247984;
            height: 72px;
            border-radius: 100px;
            padding: 0px 72px;
            color: white;
            line-height: 72px;
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

