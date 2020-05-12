import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-miniui';
// import { Button, ButtonGroup } from '../../../react-miniui/dist/index.js';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import shlStyle from '../highlighter.config.js';


export default class ButtonPage extends Component {
  render() {
    const colors = [
      'red',
      'orange',
      'yellow',
      'green',
      'teal',
      'blue',
      'pink',
      'brown',
      'gray',
      'black'
    ]
    const size = [
      'mini',
      'tiny',
      'small',
      'medium',
      'large',
      'big',
    ]
    const icons = [
      'minus',
      'plus',
      'close',
      'check',
      'cloud-download',
      'cloud-upload',
      'social-github',
      'flag'
    ]
    return(
      <div>
        <h1>Button</h1>
        <div>
          <Button type="basic"><i className="icon-cloud-download"></i> download</Button>
          <Button type="basic" size="small"><i className="icon-cloud-download"></i> 下载</Button>
        </div>
        <h3>Import Button Component</h3>
          <SyntaxHighlighter {...shlStyle}>
{
`import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-miniui';`
}
          </SyntaxHighlighter>

        <h3>Basic</h3>
        <div className="row">
          {colors.map(v => <Button type="basic" key={v} color={v}>{v}</Button>)}
          <Button type="basic">deffault</Button>
        </div>
        <SyntaxHighlighter {...shlStyle}>{`[ 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'pink', 'brown', 'gray', 'black'].map(v => (
  <Button type="basic" key={v} color={v}>{v}</Button>
))`}
        </SyntaxHighlighter>
        <h3>Color</h3>
        <div className="row">
          {colors.map(v => <Button key={v} color={v}>{v}</Button>)}
          <Button>deffault</Button>
        </div>
        <SyntaxHighlighter {...shlStyle}>{`[ 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'pink', 'brown', 'gray', 'black'].map(v => (
  <Button key={v} color={v}>{v}</Button>
))`}
        </SyntaxHighlighter>
        <h3>Size</h3>
        <div className="row">
          {size.map((v, i) => <Button key={v} size={v} color={colors[i]}>{v}</Button>)}
        </div>
        <SyntaxHighlighter {...shlStyle}>{`['mini', 'tiny','small','medium','large','big'].map(v => (
  <Button size={v} key={v} color="red">{v}</Button>
))`}
        </SyntaxHighlighter>
        <h3>With icon </h3>
        <div className="row">
          {size.map((v, i) => <Button key={v} icon={`icon-${icons[i]}`} size={v} color={colors[i]}>{v}</Button>)}
        </div>
        <SyntaxHighlighter {...shlStyle}>{`<Button icon="icon-cloud-upload" size="big" color="blue">upload</Button>`}
        </SyntaxHighlighter>
        <h3>Disabled & Loading</h3>
        <div className="row">
          <Button key="disabled" disabled color="green">disabled</Button>
          <Button key="loading" loading color="red">loading</Button>
        </div>
        <SyntaxHighlighter {...shlStyle}>{`<Button key="disabled" disabled color="green">disabled</Button>
<Button key="loading" loading color="red">loading</Button>`}
        </SyntaxHighlighter>
        <h3>Circle</h3>
        <div className="row">
          <Button space="circle" color="teal"><i className="icon-social-twitter"></i></Button>
          <Button space="circle" color="green"><i className="icon-social-facebook"></i></Button>
          <Button space="circle" color="red"><i className="icon-social-github"></i></Button>
        </div>
        <SyntaxHighlighter {...shlStyle}>{`<Button space="circle" color="teal"><i className="icon-social-twitter"></i></Button>`}
        </SyntaxHighlighter>
        <h3>Button groups</h3>
        <div className="row">
          <ButtonGroup>
            <Button>button1</Button>
            <Button className="active">button2</Button>
            <Button>button3</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="green">button1</Button>
            <Button className="active" color="green">button2</Button>
            <Button color="green">button3</Button>
          </ButtonGroup>
        </div>
        <SyntaxHighlighter {...shlStyle}>{`<ButtonGroup>
  <Button color="green">button1</Button>
  <Button className="active" color="green">button2</Button>
  <Button color="green">button3</Button>
</ButtonGroup>`}
        </SyntaxHighlighter>
      </div>
    )
  }
}
