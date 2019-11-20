import React, { Component } from 'react';
import { Button } from 'react-miniui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import shlStyle from '../highlighter.config.js';

export default class UsePage extends Component {
  render() {
    return(
      <div>
        <h1>react-miniui</h1>
        <h2 className="section-head">Installation</h2>
        <SyntaxHighlighter {...shlStyle}>{`npm install react-miniui --save`}
        </SyntaxHighlighter>
        <h2 className="section-head">Usage</h2>
        <SyntaxHighlighter {...shlStyle}>{`import React, { Component } from 'react';
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
        </SyntaxHighlighter>
        </div>
    )
  }
}
