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
```javascript
// Primitive Data Types
// Number
// String
// Boolean
// Undefined
// Null

// Numbers
5
7
-100
6.3

// Number operations
500 + 1
50 - 2
70 * 2
9 / 3

// Modulo "mod"  --> Remainder
9 % 2

// Order of operations
7 * (8 + 11) - 3

// Strings
"Hello! My name is Churro!"
"1000"

// Single / double quotes
'cat'
"Mina's dog"

// concatenation (return a single string)

"Churro" + "banana" // "Churrobanana"
"Churro" + " banana" // "Churro banana"

// Escaping characters
"Mina\"s d\"og" 

// Booleans
true
false

// comparisons ==
4 == 4 // true
4 === 4

"4" == 4 // true -- loose equality
"4" === 4 // false

"4" !== 4 // true -- strict equality
"4" != 4 // false -- loose equality

// Null and Undefined  (nothing)
null
undefined

// Variables
var catName = "Raisins"  // assigning a value to a variable
var age = 3 // storing a number
var isCute = true

// string concatenation
"Have you met " + catName + "?"
// string interpolation
`Have you met ${catName}?`

age = 100  // reassign a value

// Built-in methods
alert("WARNING") 
prompt("How old are you?")

typeof(3)  // "number"

"learn academy".charAt(5) // " "   --> counting starts at 0
"learn academy".length // 13
"learn academy".includes("learn") // true

// Relational Operators
2 > 0 // true
4 < 8 // true
0 >= 3 // false
0 <= 3 // true

// Logical Operators
// && - and -- both must be true
0 == 0 && 3 == 3 // true    -- true && true  -> true
0 == 0 && 3 == 5 // false   -- true && false -> false

// || - or -- only one of the statements need to be true
true || false  // true
false || false  // false

// bang operator
!(true && false)  // true


// type coercion
"2" + 2  // "22"
!3 // false
!0 // true

// Conditional statements
// if/else
if (5 > 0) {
  alert("YES! Five is greater than zero")
} else {
  alert("WRONG!")
}

if (5 < 0) {
  alert("YES! Five is greater than zero")
} else if (10 > 100) {
  alert("CORRECT")
} else {
  alert("if all else fails, restart")
}

// Functions
// reusable sets of instructions
// parameter - placeholder for data that gets passed into function
// parameter != variable

const ageChecker = (age) => {
  if (age >= 35) {
    return "You can run for president!"
  } else if (age >= 30) {
    return "You can run for senator!"
  } else if (age >= 25) {
    return "You can run for house of representative!"
  } else {
    return "Stay informed!"
  }
}

ageChecker(20)

var myAge = 36

ageChecker(myAge)

const sayHello = () => {
  var name = prompt("Hello, what's your name?");

  alert(`Nice to meet you ${name}!`)
}

sayHello()
```

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