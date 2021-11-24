import React, { Component } from 'react';
import { Row, Col, OverlayTrigger, Popovers, Tooltip,  Button } from 'react-miniui';

export default class OverlayPage extends Component {
  componentDidMount() {
    if (window.hljs) {
      window.hljs.highlightAll()
    }
  }
  
  render() {
    return(
      <div className="markdown-section">
        <h1>Overlay</h1>
          <pre><code className="language-javascript">{`import {Row, Col, OverlayTrigger, Popovers, Tooltip,  Button} from 'react-miniui';`}
          </code></pre>
        <h3>Overlay position</h3>
        <Row>
          {['left', 'top', 'right', 'bottom'].map(v => (
            <Col key={v} span='2'>
              <OverlayTrigger
                position={v}
                overlay={<Tooltip>hello world, {v}</Tooltip>}
              >
                <span><abbr>{v}</abbr></span>
              </OverlayTrigger>
            </Col>
          ))}
        </Row>
        <pre><code className="language-javascript">{`<Row>
  {['left', 'top', 'right', 'bottom'].map(v => (
    <Col key={v} span='2'>
      <OverlayTrigger
        position={v}
        overlay={<Tooltip>hello world, {v}</Tooltip>}
      >
        <span><abbr>{v}</abbr></span>
      </OverlayTrigger>
    </Col>
  ))}
</Row>`}
        </code></pre>
        <h3>Overlay colors</h3>
        <Row>
          {['dark', 'white', 'red', 'yellow'].map(v => (
            <Col key={v} span='2'>
              <OverlayTrigger
                overlay={<Tooltip color={v}>hello world, {v}</Tooltip>}
              >
                <Button color={v}>{v}</Button>
              </OverlayTrigger>
            </Col>
          ))}
        </Row>
        <pre><code className="language-javascript">{`<Row>
  {['dark', 'white', 'red', 'yellow'].map(v => (
    <Col key={v} span='2'>
      <OverlayTrigger
        overlay={<Tooltip color={v}>hello world, {v}</Tooltip>}
      >
        <Button color={v}>{v}</Button>
      </OverlayTrigger>
    </Col>
  ))}
</Row>`}
        </code></pre>
        <h3>Overlay title</h3>
        <Row>
          {['dark', 'white', 'red', 'yellow'].map(v => (
            <Col key={v} span='2'>
              <OverlayTrigger
                overlay={
                  <Popovers color={v} title={v}>
                    <ul className="mui">
                      <li>生当如夏花，只为绚烂一瞬</li>
                      <li>存在或不存在，这是问题所在。</li>
                      <li>人生得意须尽欢，莫使金樽空对月。</li>
                    </ul>
                  </Popovers>
                }
              >
                <span><abbr>{v}</abbr></span>
              </OverlayTrigger>
            </Col>
          ))}
        </Row>
        <pre><code className="language-javascript">{`<Row>
  {['dark', 'white', 'red', 'yellow'].map(v => (
    <Col key={v} span='2'>
      <OverlayTrigger
        overlay={
          <Popovers color={v} title={v}>
            <ul className="mui">
              <li>生当如夏花，只为绚烂一瞬</li>
              <li>存在或不存在，这是问题所在。</li>
              <li>人生得意须尽欢，莫使金樽空对月。</li>
            </ul>
          </Popovers>
        }
      >
        <span><abbr>{v}</abbr></span>
      </OverlayTrigger>
    </Col>
  ))}
</Row>`}
        </code></pre>
        <h3>Overlay trigger 'hover' & 'click'</h3>
        <Row>
          {['hover', 'click'].map(v => (
            <Col key={v} span='2'>
              <OverlayTrigger
                trigger={v}
                overlay={
                  <Popovers color="yellow" title={v}>
                    hello world, {v}
                  </Popovers>
                }
              >
                <Button color="blue">{v}</Button>
              </OverlayTrigger>
            </Col>
          ))}
        </Row>
        <pre><code className="language-javascript">{`<Row>
  {['hover', 'click'].map(v => (
    <Col key={v} span='2'>
      <OverlayTrigger
        trigger={v}
        overlay={
          <Popovers color="yellow" title={v}>
            hello world, {v}
          </Popovers>
        }
      >
        <Button color="blue">{v}</Button>
      </OverlayTrigger>
    </Col>
  ))}
</Row>`}
        </code></pre>
      </div>
    )
  }
}
