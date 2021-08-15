## HTML Notes

- Folder on desktop called treasurehunt
- Opened text editor of choice
- Create a new file name index.html
- Naming conventions - no spaces, lowercase
- Boilerplate - html + tab
- Little blue dot means you have unsaved data
- Keyboard shortcuts - save, refresh, cut, copy, paste
- Image from google: tools >> usage rights >> creative common
- Copy image address
- Lists ul, ol and they take nested li
- A tags take href attributes
- Ids are labels for tags
- Navigating to an id uses a hash mark
- Tables have nested table rows (tr) and table rows have nested table delimiters (td)


## JS Notes


## CSS Notes
- CSS - Cascading styling sheets
- Responsible for the presentation layer
- There are couple ways to apply styles - inline (right in your html file) or separate file. We'll use a separate file because there's a concept of "Separation of Concerns".
This allows us to make it predictable for developers to understand where they need to look for the thing that they're looking to change
- To connect a CSS file to your HTML file, add a link tag inside your <head>:  `<link rel="stylesheet" href="style.css">`
- Selectors are a way to target an html element
- Rules are created using key-value pairs
- General CSS rule looks like: 
```css 
h1 {
  color: pink;
}
```
- To create spacing around elements, you'll need to understand the [Box Model](https://www.w3schools.com/css/css_boxmodel.asp)
- To class attribute for multiple elements
```css 
.list-item {
  color: cadetblue;
}
```

- To use id attribute for a single element 
```css
#warning {
  color: red;
}
```
- To target the state of an element, use a pseudo-selector
```css
td:hover {
  background-color: darkgoldenrod;
}
```