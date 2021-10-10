# Redux

* Easy to test because Redux makes you to have a common structure.

* Efficient for team work because everyone should follow the specific rules.

* So many codes...

## When to use Redux ?
Redux is most useful when in cases when:

* You have large amounts of application state that are needed in many places in the app
* The app state is updated frequently
* The logic to update that state may be complex
* The app has a medium or large-sized codebase, and might be worked on by many people
* You need to see how that state is being updated over time

## Installation 
  * npm i @reduxjs/toolkit react-redux
  * yarn add @reduxjs/toolkit react-redux

  @reduxjs/toolkit  => to use Redux
  react-redux => for connecting state management structure to react components

## Immutability

  ###  Immutable (Primitive Values)      

  - undefined

  - Boolean

  - Number

  - String

  - BigInt

  - Symbol

  - null  

  ### Mutable ({...copy }, [...copy] Object.assign({}, copy)) 

  - Object
  - Array
  - Map
  - Set
  - Date
  - Function
  - "new" keyword
