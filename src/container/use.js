import React, { Component } from 'react';
import { Row, Button } from 'react-miniui';

export default class UsePage extends Component {
  componentDidMount() {
    if (window.hljs) {
      window.hljs.highlightAll()
    }
  }

  render() {
    return(
      <div className="markdown-section">
        <h1>react-miniui</h1>
        <h2 className="section-head">Installation</h2>
        <pre><code className="language-javascript">{`npm install react-miniui --save`}
        </code></pre>
        <h2 className="section-head">Usage</h2>
        <p>在 <code>.scss</code> 中使用 <code>@import</code> 导入样式文件</p>
        <pre><code className="language-javascript">{`@import "~react-miniui/dist/miniui.css";`}
        </code></pre>
        <p>或者在 <code>.js</code> 中使用 <code>import</code></p>
        <pre><code className="language-javascript">{`import 'react-miniui/dist/miniui.css';`}
        </code></pre>

        <pre><code className="language-javascript">{`import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-miniui';

export default class ButtonPage extends Component {
  handleClick() {
    console.log('cilck!');
  }
  render() {
    return(
      <div>
          <Button color="blue" onClick={this.handleClick.bind(this)}>click</Button>
          <ButtonGroup>
            <Button color="green">button1</Button>
            <Button className="active" color="green">button2</Button>
            <Button color="green">button3</Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}`}
        </code></pre>
        </div>
    )
  }
}
