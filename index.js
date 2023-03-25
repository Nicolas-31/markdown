
const App =() =>  {
  const [text, setText] = React.useState(`
# H1
## H2
[title](https://www.example.com)
\`code\`
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
- First item
- Second item
- Third item
![alt text](image.jpg)
 **bold text**
 > blockquote
`);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="App text-center p-4">
      <textarea
        id="editor"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></textarea>

      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      ></div>
    </div>
  );
}






ReactDOM.render(<App />, document.getElementById("app"));