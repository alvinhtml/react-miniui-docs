import React, { Component } from 'react';
import { Row, Col, Input, Textarea, Icon, FormGroup, Button, Select, Option} from 'react-miniui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import shlStyle from '../highlighter.config.js';

export default class ButtonPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'default'
    }
  }

  handlelChange(e: Object) {
    const value = e.target.value;
    this.setState({
      value
    })
  }

  render() {

    const size = [
      'tiny',
      'small',
      'medium',
      'large',
      'big',
    ];

    return(
      <div>
        <h1>Form 表单</h1>
        <SyntaxHighlighter {...shlStyle}>{`import {Row, Col, Input, Textarea, Icon, FormGroup, Button, Select, Option} from 'react-miniui';`}
        </SyntaxHighlighter>
        <h2>Ipnut text</h2>
        <Row>
          <Col span="3"><Input block="true" onChange={this.handlelChange.bind(this)} type="text" value={this.state.value} color="default" placeholder="input text" /></Col>
          <Col span="3"><Input block="true" type="text" color="green" placeholder="input text" /></Col>
          <Col span="3"><Input block="true" type="text" color="yellow" placeholder="input text" /></Col>
          <Col span="3"><Input block="true" type="text" color="red" placeholder="input text" /></Col>
        </Row>
        <SyntaxHighlighter {...shlStyle}>{`<Row>
  <Col span="3"><Input block="true" onChange={this.handlelChange.bind(this)} type="text" value={this.state.value} color="default" placeholder="input text" /></Col>
  <Col span="3"><Input block="true" type="text" color="green" placeholder="input text" /></Col>
  <Col span="3"><Input block="true" type="text" color="yellow" placeholder="input text" /></Col>
  <Col span="3"><Input block="true" type="text" color="red" placeholder="input text" /></Col>
</Row>`}
        </SyntaxHighlighter>
        <h2>addonBefore && addonAfter</h2>
        <Row>
          <Col span="6"><Input block="true" addonBefore={<Icon className="icon-magnifier" />} type="text" color="green" placeholder="input text" /></Col>
          <Col span="6"><Input block="true" addonAfter={<Icon icon="icon-plus" />} type="text" color="red" placeholder="input text" /></Col>
        </Row>
        <SyntaxHighlighter {...shlStyle}>{`<Input block="true" addonBefore={<Icon className="icon-magnifier" />} type="text" color="green" placeholder="input text" />
<Input block="true" addonAfter={<Icon icon="icon-plus" />} type="text" color="red" placeholder="input text" />`}
        </SyntaxHighlighter>
        <h2>Size</h2>
        <Row>
          {size.map((v, i) => <Col span="2"><Input block="true" key={v} type="text" placeholder={v} size={v} /></Col>)}
        </Row>
        <SyntaxHighlighter {...shlStyle}>{`// 'tiny', 'small', 'medium', 'large', 'big'

<Input type="text" size="small" />`}
        </SyntaxHighlighter>
        <h2>Disabled</h2>
        <Row>
          <Col span="6"><Input block="true" type="text" disabled col="col-span6" placeholder="disabled" defaultValue="disabled input" /></Col>
        </Row>
        <SyntaxHighlighter {...shlStyle}>{`<Input block="true" type="text" disabled col="col-span6" placeholder="disabled" defaultValue="disabled input" />`}
        </SyntaxHighlighter>
        <h2>Form Group</h2>
        <Row>
          <Col span="6">
            <FormGroup>
              <Button>{`http://`}</Button>
              <Input type="text" />
              <Select color="green">
                <Option value=".com">.com</Option>
    						<Option value=".org">.org</Option>
    						<Option value=".net">.net</Option>
              </Select>
            </FormGroup>
          </Col>
          <Col span="6">
            <FormGroup>
              <Input type="text" />
              <Button color="gray">Search</Button>
            </FormGroup>
          </Col>
        </Row>
        <SyntaxHighlighter {...shlStyle}>{`<Row>
  <Col span="6">
    <FormGroup>
      <Button color="grey">http://</Button>
      <Input type="text" />
      <Select>
        <Option value=".com">.com</Option>
        <Option value=".org">.org</Option>
        <Option value=".net">.net</Option>
      </Select>
    </FormGroup>
  </Col>
  <Col span="6">
    <FormGroup>
      <Input type="text" />
      <Button color="blue">Search</Button>
    </FormGroup>
  </Col>
</Row>`}
        </SyntaxHighlighter>
        <h2>文本框</h2>
        <Row>
          <Col span="10"><Textarea block="true" type="text" placeholder="disabled" defaultValue="textarea" /></Col>
        </Row>
        <SyntaxHighlighter {...shlStyle}>{`<Textarea block="true" type="text" placeholder="disabled" defaultValue="textarea" />`}
        </SyntaxHighlighter>
      </div>
    );
  }
}
