# **STATES**
<div class="input-main">
    <div class="grid-1-5">
        <div class="textarea-vari">DEFAULT</div>
        <div>
            <div class = "textarea-field-container">
                <label for ="label">Label</label>
                <textarea class ="textarea-box default" placeholder="Placeholder"></textarea>
            </div>
        </div>
        <div class="textarea-vari">HOVER</div>
        <div>
            <div class = "textarea-field-container">
                <label for ="label">Label</label>
                <textarea class ="textarea-box hover" type="textarea" placeholder="Placeholder"></textarea>
            </div>
        </div>
        <div class="textarea-vari">FOCUSED</div>
        <div>
            <div class = "textarea-field-container">
                <label for ="label">Label</label>
                <textarea class ="textarea-box focused" type="textarea" placeholder="Placeholder"></textarea>
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
