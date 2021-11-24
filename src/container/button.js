import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-miniui';



export default class ButtonPage extends Component {
  componentDidMount() {
    if (window.hljs) {
      window.hljs.highlightAll()
    }
  }

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
      <div className="markdown-section">
        <h1>Button</h1>
        <p>
          <Button type="basic"><i className="icon-cloud-download"></i> download</Button>
          <Button type="basic" size="small"><i className="icon-cloud-download"></i> 下载</Button>
        </p>
        <h3>Import Button Component</h3>
          <pre><code className="language-javascript">
{
`import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-miniui';`
}
          </code></pre>

        <h3>Basic</h3>
        <p>
          {colors.map(v => <Button type="basic" key={v} color={v}>{v}</Button>)}
          <Button type="basic">deffault</Button>
        </p>
        <pre><code className="language-javascript">{`[ 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'pink', 'brown', 'gray', 'black'].map(v => (
  <Button type="basic" key={v} color={v}>{v}</Button>
))`}
        </code></pre>
        <h3>Color</h3>
        <p>
          {colors.map(v => <Button key={v} color={v}>{v}</Button>)}
          <Button>deffault</Button>
        </p>
        <pre><code className="language-javascript">{`[ 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'pink', 'brown', 'gray', 'black'].map(v => (
  <Button key={v} color={v}>{v}</Button>
))`}
        </code></pre>
        <h3>Size</h3>
        <p>
          {size.map((v, i) => <Button key={v} size={v} color={colors[i]}>{v}</Button>)}
        </p>
        <pre><code className="language-javascript">{`['mini', 'tiny','small','medium','large','big'].map(v => (
  <Button size={v} key={v} color="red">{v}</Button>
))`}
        </code></pre>
        <h3>With icon </h3>
        <p>
          {size.map((v, i) => <Button key={v} icon={`icon-${icons[i]}`} size={v} color={colors[i]}>{v}</Button>)}
        </p>
        <pre><code className="language-javascript">{`<Button icon="icon-cloud-upload" size="big" color="blue">upload</Button>`}
        </code></pre>
        <h3>Disabled & Loading</h3>
        <p>
          <Button key="disabled" disabled color="green">disabled</Button>
          <Button key="loading" loading color="red">loading</Button>
        </p>
        <pre><code className="language-javascript">{`<Button key="disabled" disabled color="green">disabled</Button>
<Button key="loading" loading color="red">loading</Button>`}
        </code></pre>
        <h3>Circle</h3>
        <p>
          <Button space="circle" color="teal"><i className="icon-social-twitter"></i></Button>
          <Button space="circle" color="green"><i className="icon-social-facebook"></i></Button>
          <Button space="circle" color="red"><i className="icon-social-github"></i></Button>
        </p>
        <pre><code className="language-javascript">{`<Button space="circle" color="teal"><i className="icon-social-twitter"></i></Button>`}
        </code></pre>
        <h3>Button groups</h3>
        <p>
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
        </p>
        <pre><code className="language-javascript">{`<ButtonGroup>
  <Button color="green">button1</Button>
  <Button className="active" color="green">button2</Button>
  <Button color="green">button3</Button>
</ButtonGroup>`}
        </code></pre>
      </div>
    )
  }
}
