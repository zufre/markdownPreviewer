import React from "react";
import "./App.css";
import marked from "marked";

const initialMarkdown = `
### Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List

- list item one
- list item two
- list item three

### Links

[FreeCodeCamp](https://learn.freecodecamp.org)

[Google](https://www.google.com "World's Most Popular Search Engine")

### Text Decorations

*italic*

**bold**

***bold and italic***

### Images

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Fernando_noronha.jpg/267px-Fernando_noronha.jpg 'Islands in Tropics')

### Blockquote

> To be, or not to be. That is a stupid question.

### Code

\`npm install create-react-app -g\`

\`\`\`
function addTwoNumbers(a, b) {
  return a + b
}
const name = 'Benjamin'
const age = 37
const number = Math.random() * 10
\`\`\`
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: initialMarkdown
    };
  }

  handleChange = e => this.setState({ markdown: e.target.value });

  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <div className="container">
          <div className="left">
            <textarea
              id="editor"
              value={this.state.markdown}
              onChange={this.handleChange}
            />
          </div>
          <div className="right">
            <div
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
