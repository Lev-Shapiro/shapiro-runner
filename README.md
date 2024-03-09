# Shapiro Runner Extension

## Language Purposes

As a developer and a fan of Ben Shapiro I was wondering what can I do in my CS classes instead of learning, so I've decided to make my personal programming language that in its domain uses Ben Shapiro's virtue.

This programming language is actively expanding ( until I get kicked from CS course ) and if you still didn't understand - this language was made for unknown reasons and for unknown purposes. If you have any ideas why it was made - contact me, I'll be happy to know. Thanks!

## What's added

1. `.shapiro` language runner

This extension allows to run scripts with ".shapiro" extension. Consider also adding Shapiro highlighting extension in VSC.

## Getting Started

In order to run this extension you should open the command palette ( Cmd + Shift + P ) and search for command "Run Shapiro Script", then select in your builtin VSC terminal 'Shapiro Language' option and see the result of what you wrote

1. Install [Shapiro](https://marketplace.visualstudio.com/items?itemName=Lev.shapiro) and [Shapiro Runner](https://marketplace.visualstudio.com/items?itemName=Lev.shapiro-runner) extensions
2. Reload VSC to apply all changes
3. Create a file `main.shapiro` ( other `.shapiro` files the compiler won't read currently )
4. Write code ( Documentation is provided in the next section )
5. Open Command Palette ( Cmd + Shift + P )
6. Run "Run Shapiro Script"
7. Open the built-in terminal of VSC and select the tab Output
8. If you wrote `render(...)` in the file and don't see anything printed - select "Shapiro Language" at the right selecting menu

## Documentation

### Variables

1. `based`

- Constant variable
- Example: `based var1 is 5` or `based var1 is "Hello"`

2. `fact`

- Constant variable
- Example: `fact var1 is 5` or `fact var1 is "Hello"`

3. `feeling`

- Variable that can be changed
- Example: `feeling var1 is 5` or `feeling var1 is "Hello"`

### Reassign value

4. `actually`

- Reassign value of a variable ( not const )
- Example:

  ```
  assume a is 5

  render(a) => expected 5

  actually a is 10

  render(a) => expected 10
  ```

### Functions

5. `render`

- Console to the output tab function
- Example: `render(a + b)` or `render("Hello" + " World " + 55)`

## Contact Me

Feel free to contact me, I'll be happy to talk and hear some new ideas or improvements:

- shapirolev2@gmail.com
- [Facebook](https://www.facebook.com/lev.shapiro.921)
- Discord: levshapiro
