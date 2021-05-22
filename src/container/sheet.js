import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import shlStyle from '../highlighter.config.js';

import {
  Row,
  Col,
  OverlayTrigger,
  Popovers,
  Tooltip,
  Button,
  Input,
  Icon,
  openSheet
} from '../../../react-miniui/dist/index.js';
// } from 'react-miniui';

class SheetExample extends Component {
  render() {
    return (
      <div>
        <h3>文本内容</h3>
        <p>不要为明天忧虑，天上的飞鸟，不耕种也不收获，上天尚且要养活它；田野里的百合花，从不忧虑它能不能开花，是不是可以开得和其它一样美，但是它就自然的开花了，开得比所罗门皇冠上的珍珠还美。你呢，忧虑什么呢？人比飞鸟和百合花贵重多了，上帝会弃你不顾吗？</p>
        <ul className="mui">
            <li>每当你想评论他人时，要记住，这世上并不是所有人都有你拥有的那些优势</li>
            <li>珍惜现在的一切，缅怀过去的所有
                <ul className="mui">
                    <li>生当如夏花，只为绚烂一瞬</li>
                    <li>存在或不存在，这是问题所在。</li>
                    <li>人生得意须尽欢，莫使金樽空对月。</li>
                </ul>
                <ol className="mui">
                    <li>你将余生写一首长诗，却不能提及一个与她有关的字</li>
                    <li>我们已经很难遇到喜欢的人，何必为难自己不去买喜欢的东西</li>
                </ol>
                <dl className="mui">
                    <dt>将进酒-李白</dt>
                    <dd>君不见，黄河之水天上来，奔流到海不复回。</dd>
                    <dd>君不见，高堂明镜悲白发，朝如青丝暮成雪。</dd>
                </dl>
            </li>
        </ul>
        <h3>表单</h3>
        <Row>
          <Col span="6"><Input block="true" addonBefore={<Icon className="icon-magnifier" />} type="text" color="green" placeholder="input text" /></Col>
          <Col span="6"><Input block="true" addonAfter={<Icon icon="icon-plus" />} type="text" color="red" placeholder="input text" /></Col>
        </Row>
      </div>
    );
  }
}



export default class SheetPage extends Component {

  handleClick() {

  }

  render() {

    // console.log("Modal", Modal);

    return(
      <div>
        <Row>
          <Button onClick={() => openSheet('弹出面板示例', <SheetExample />)}>Show Sheet</Button>
        </Row>
        <h1>Sheet</h1>
        <Row>
          要使用 Modal, 需要先在 root Component 下添加 &lt;Miniui /&gt; 组件.
        </Row>
          <SyntaxHighlighter {...shlStyle}>{`import {Miniui} from 'react-miniui';


render(
  <BrowserRouter>
    <div className="flex flex-direction-column">
      <App />
      <div><Miniui /></div>
    </div>
  </BrowserRouter>,
document.getElementById('webApplication'))`}
          </SyntaxHighlighter>
          <Row>
            在需要弹出 Modal 的页面, 导入 Modal 相关的组件
          </Row>
          <SyntaxHighlighter {...shlStyle}>{`import {
  Button,
  openSheet,
  closeSheet
} from 'react-miniui';`}
          </SyntaxHighlighter>
        <h3>Sheet position</h3>

        <h3>Modal Size</h3>
        <Row>
          <Button onClick={() => openSheet('弹出面板示例', <SheetExample />)}>Show Big Modal</Button>
        </Row>
      </div>
    )
  }
}
