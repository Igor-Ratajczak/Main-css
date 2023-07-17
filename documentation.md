# Main CSS Library Documentation

## How use this library?

- You must add to class **property**-**value**, but if property is e.g. "text-decoration" that will be class **text-d-_value_**.
- In a class that has a negative value, e.g. "word-spacing: -5px;" the class looks like ".word-s--5px".

For example:

<div class="html-code">
```html
<div class="text-d-underline text-d-red text-d-2px">Example text.</div>
```
<div class="copy grid-cl-3-4">
    <img src="./copy.svg" alt="copy icon">
</div>
</div>
### This code creates text with a 5 pixel red underline:
<div class="example" translate="no">
    <div class="text-d-underline text-d-red text-d-2px">Example text.</div>
</div>

## Exceptions

<ul translate="no">
    <li>
        <ul>position
            <li>absolute</li>
            <li>relative</li>
            <li>fixed</li>
            <li>static</li>
            <li>sticky</li>
        </ul>
    </li>
    <li>
        <ul>display
            <li>block</li>
            <li>contents</li>
            <li>flex</li>
            <li>flexbox</li>
            <li>flow-root</li>
            <li>grid</li>
            <li>inline</li>
            <li>inline-block</li>
            <li>inline-flex</li>
            <li>inline-flexbox</li>
            <li>inline-table</li>
            <li>list-item</li>
            <li>none</li>
            <li>ruby</li>
            <li>ruby-base</li>
            <li>ruby-base-container</li>
            <li>ruby-text</li>
            <li>ruby-text-container</li>
            <li>run-in</li>
            <li>table</li>
            <li>table-caption</li>
            <li>table-cell</li>
            <li>table-column</li>
            <li>table-column-group</li>
            <li>table-footer-group</li>
            <li>table-header-group</li>
            <li>table-row</li>
            <li>table-row-group</li>
        </ul>
    </li>
    <li>
        <ul>align
            <li>cnt</li>
            <li>items</li>
            <li>self</li>
        </ul>
    </li>
    <li>
        <ul>justify
            <li>cnt</li>
            <li>items</li>
            <li>self</li>
        </ul>
    </li>    
    <li>
        <ul>text-overflow
            <li>clip</li>
            <li>ellipsis</li>
        </ul>
    </li>    
    <li>cl-gap-value</li>
    <li>row-gap-value</li>
    <li>font-style-value</li>
</ul>
### This code create div with display flex:

<div class="html-code">
```html

<!-- div with display flex -->

<div class="flex">
    <div class="red"></div>
    <div class="blue"></div>
</div>
```
<div class="copy grid-cl-3-4">
    <img src="./copy.svg" alt="copy icon">
</div>
</div>

<div class="example" translate="no">
    <div class="flex">
        <div class="red"></div>
        <div class="blue"></div>
    </div>
</div>
### This code create div with display grid:
<div class="html-code">
```html
<!-- div with display grid -->

<div class="grid">
    <div class="red"></div>
    <div class="blue"></div>
</div>
```
<div class="copy grid-cl-3-4">
    <img src="./copy.svg" alt="copy icon">
</div>
</div>

<div class="example" translate="no">
    <div class="grid">
        <div class="red"></div>
        <div class="blue"></div>
    </div>
</div>
### This code create div with align:
<div class="html-code">
```html
<!-- div with align -->
<div class="grid red align-cnt-center" style="width:5em; height:5em;">
    <div class="blue" style="width:2em; height:2em;"></div>
</div>
```
<div class="copy grid-cl-3-4">
    <img src="./copy.svg" alt="copy icon">
</div>
</div>

<div class="example" translate="no">
    <div class="grid red align-cnt-center" style="width:5em; height:5em;">
        <div class="blue" style="width:2em; height:2em;"></div>
    </div>
</div>
### This code create div with justify:
<div class="html-code">
```html
<!-- div with justify -->

<div class="grid">
    <div class="grid red" style="width:5em; height:5em;">
        <div class="blue justify-self-center" style="width:2em; height:2em;"></div>
    </div>
</div>
```
<div class="copy grid-cl-3-4">
    <img src="./copy.svg" alt="copy icon">
</div>
</div>

<div class="example" translate="no">
    <div class="grid red" style="width:5em; height:5em;">
        <div class="blue justify-self-center" style="width:2em; height:2em;"></div>
    </div>
</div>
## What is not in the library?

### The library doesn't have properties like:

- background
- color
- margin
- padding
- property that has a value using calc()
- and all the other properties that are not here
