import { useState } from "react"
import { marked } from 'marked';
import './App.scss';

function App() {
  const [text, setText] = useState(`
  # This is a Heading 1 Example
  ## This is a Heading 2 Example
  [What is renewable energy](https://www.un.org/en/climatechange/what-is-renewable-energy)

  Inline Code example:
  \`function exampleOfSomething(){
    return somethingOfValue;
  }\`
  \`\`\`
  Block Code example:
  {
    "Movie": "Sisu",
    "Type": "Action",
    "Date": 2023
  }
  \`\`\`
  List example:
  - First Item
  - Second Item
  - Third Item

  Blockquote example:
  > blockquote

  ![alt text](image.jpg)

  **This is bold text**
  `)

  marked.setOptions({breaks: true})
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="h1title">Markdown Previewer</h1>
        <textarea name="" id="editor" cols="30" rows="10" onChange={(event) => {setText(event.target.value);}}value={text}></textarea>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(text)}}></div>
        
      </header>
    </div>
  );
}

export default App;
