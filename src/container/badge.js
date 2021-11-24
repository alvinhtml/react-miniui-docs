import React, { Component } from 'react';
import { Badge, Button } from 'react-miniui';

export default class BadgePage extends Component {
  componentDidMount() {
    if (window.hljs) {
      window.hljs.highlightAll()
    }
  }

  render() {
    return(
      <div className="markdown-section">
        <h1>Badge</h1>
        <h2 className="section-head">大小</h2>
        <h1>标题 H1.h1 2.5714em 36px <Badge color="red" >New</Badge></h1>
        <h2>标题 H2.h2 2.1428em 30px <Badge color="red" >New</Badge></h2>
        <h3>标题 H3.h3 1.7142em 24px <Badge color="red" >New</Badge></h3>
        <h4>标题 H4.h4 1.2857em 18px <Badge color="red" >New</Badge></h4>
        <h5>标题 H5.h5 1.0000em 14px <Badge color="red" >New</Badge></h5>
        <h6>标题 H6.h6 0.8571em 12px <Badge color="red" >New</Badge></h6>
        <pre><code className="language-javascript">{`import { Badge, Button } from 'react-miniui';

<Badge color="red" >New</Badge>`}
        </code></pre>
        <h2 className="section-head">with Button</h2>
        <p>
          <Button color="red">
            Profile <Badge color="white">1</Badge>
          </Button>
          <Button color="blue">
            Profile <Badge color="red">17</Badge>
          </Button>
        </p>
        <pre><code className="language-javascript">{`import { Badge, Button } from 'react-miniui';

<Button color="blue">
  Profile <Badge color="red">17</Badge>
</Button>`}
        </code></pre>
      </div>
    )
  }
}
