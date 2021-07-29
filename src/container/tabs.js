import React, { Component } from 'react';
import { Row, Col, Tabs, Tab } from 'react-miniui';
// import { Row, Col, Tabs, Tab } from '../../../react-miniui/dist/index.js'; // test;
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import shlStyle from '../highlighter.config.js';

export default class columnPage extends Component {
  render() {

    return(
      <div>
        <h1 className="section-head">Use Tabs</h1>
        <SyntaxHighlighter {...shlStyle}>{`import { Tab, Tabs } from 'react-miniui';`}
        </SyntaxHighlighter>
        <h2>Tabs</h2>
        <Row className="demo-row">
          <Col span="12">
            <Tabs defaultActiveKey={2}>
              <Tab eventKey={1} title="Tab 1">Tab Body 1</Tab>
              <Tab eventKey={2} title="Tab 2">Tab Body 2</Tab>
              <Tab eventKey={3} title="Tab 3">Tab Body 3</Tab>
            </Tabs>
          </Col>
        </Row>

      <SyntaxHighlighter {...shlStyle}>{`<Tabs defaultActiveKey={2}>
  <Tab eventKey={1} title="Tab 1">Tab Body 1</Tab>
  <Tab eventKey={2} title="Tab 2">Tab Body 2</Tab>
  <Tab eventKey={3} title="Tab 3">Tab Body 3</Tab>
</Tabs>`}
        </SyntaxHighlighter>
        <h3>Attributes</h3>
        <h4>Tabs</h4>
        <Row>
          <table className="table-block">
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>defaultActiveKey</td>
                <td>默认激活的 tab 项</td>
                <td>string</td>
                <td>--</td>
                <td>第一个 Tab 的 eventKey</td>
              </tr>
              <tr>
                <td>onSelect</td>
                <td>切换Tab后的回调</td>
                <td>Function</td>
                <td>--</td>
                <td>--</td>
              </tr>
            </tbody>
          </table>
        </Row>
        <h4>Tab</h4>
        <Row>
          <table className="table-block">
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>eventKey</td>
                <td>每一项的唯一标识</td>
                <td>string</td>
                <td>--</td>
                <td>--</td>
              </tr>
              <tr>
                <td>title</td>
                <td>选项卡标题</td>
                <td>string</td>
                <td>--</td>
                <td>--</td>
              </tr>
            </tbody>
          </table>
        </Row>
      </div>
    )
  }
}
