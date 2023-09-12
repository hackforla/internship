# **STATES**
<div class="input-main">
    <div class="grid-1-5">
        <div class="input-vari">DEFAULT</div>
        <div>
            <div class = "input-field-container">
                <label for ="label">Label</label>
                <input class ="input-box default" type="text" placeholder="Placeholder"></input>
                <p>Hint text</p>
            </div>
        </div>
        <div class="input-vari">HOVER</div>
        <div>
            <div class = "input-field-container">
                <label for ="label">Label</label>
                <input class ="input-box hover" type="text" placeholder="Placeholder"></input>
                <p>Hint text</p>
            </div>
        </div>
        <div class="input-vari">FOCUSED</div>
        <div>
            <div class = "input-field-container">
                <label for ="label">Label</label>
                <input class ="input-box focused" type="text" placeholder="Placeholder"></input>
                <p>Hint text</p>
            </div>
        </div>
        <div class="input-vari">ALERT</div>
        <div>
            <div class = "input-field-container">
                <label for ="label">Label</label>
                <input class ="input-box alert" type="text" placeholder="Placeholder"></input>
                <p>Hint text</p>
            </div>
        </div>
        <div class="input-vari">SUCCESS</div>
        <div>
            <div class = "input-field-container">
                <label for ="label">Label</label>
                <input class ="input-box success" type="text" placeholder="Placeholder"></input>
                <p>Hint text</p>
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
