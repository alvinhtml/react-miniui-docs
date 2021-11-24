import React, {Component, useState, useEffect} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

// import {ActiveModal} from 'react-miniui';
import {
  Miniui
} from 'react-miniui';
// import 'react-miniui/dist/miniui.css';
import '../../react-miniui/dist/miniui.css';

import './scss/page.scss';

import ButtonPage from './container/button.js';
import FormPage from './container/form.js';
import ColumnPage from './container/column.js';
import IconPage from './container/icon.js';
import TextPage from './container/text.js';
import UsePage from './container/use.js';
import BadgePage from './container/badge.js';
import DropdownPage from './container/dropdown.js';
import OverlayPage from './container/overlay.js';
import ModalPage from './container/modal.js';
import SheetPage from './container/sheet.js';
import TabsPage from './container/tabs.js';

class Header extends Component {
  render() {
    return(
      <header className="mui header flex">
        <div className="flex-control-label">
          <h1 className="logo"><span className="color-red">M</span><span className="color-green">ini</span><span className="color-teal">UI</span></h1>
        </div>
        <div className="flex-controls">
          <div className="links">
            <a href="https://www.npmjs.com/package/react-miniui" target="_blank">
              <svg height="16" viewBox="0 0 780 250"><path fill="#231F20" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path></svg>
            </a>
            <a href="https://github.com/alvinhtml/react-miniui" target="_blank">
              <svg height="24" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
          </div>
        </div>
      </header>
    )
  }
}


class SlideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false
    }
  }

  render() {
    return(
      <div className={`miniui-summary ${this.state.fixed ? 'fixed' : ''}`}>
        <ul>
          <li className="header">用法</li>
          <li>
            <ul>
              <li><Link to="/use"><span>Use</span><span className="comment">安装和使用</span></Link></li>
            </ul>
          </li>
          <li className="header">基础</li>
          <li>
            <ul>
              <li><Link to="/text"><span>Text</span><span className="comment">文字</span></Link></li>
              <li><Link to="/icon"><span>Icon</span><span className="comment">图标</span></Link></li>
              <li><Link to="/badge"><span>Badge</span><span className="comment">徽章</span></Link></li>
              <li><Link to="/button"><span>Button</span><span className="comment">按钮</span></Link></li>
              <li><Link to="/input"><span>Input</span><span className="comment">输入框</span></Link></li>
            </ul>
          </li>
          <li className="header">布局</li>
          <li>
            <ul>
              <li><Link to="/column"><span>Grid</span><span className="comment">栅格</span></Link></li>
            </ul>
          </li>
          <li className="header">功能</li>
          <li>
            <ul>
              <li><Link to="/tabs"><span>Tabs</span><span className="comment">选项卡</span></Link></li>
              <li><Link to="/dropdown"><span>Dropdown</span><span className="comment">下载菜单</span></Link></li>
              <li><Link to="/overlay"><span>Overlay</span><span className="comment">弹出浮层</span></Link></li>
              <li><Link to="/modal"><span>Modal</span><span className="comment">弹出窗口</span></Link></li>
              <li><Link to="/sheet"><span>Sheet</span><span className="comment">弹出面板</span></Link></li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

class Home extends Component {
  constructor(){
    super();
    this.mref = React.createRef();
  }
  componentDidMount() {
    // console.log("this.mref", this.mref.current);
  }
  render() {
    return (
      <div>
        home
      </div>
    )
  }
}


class Main extends Component {
  render() {
    return(
      <div className="miniui-body">
        <Switch>
          <Route exact path='/' component={UsePage}/>
          <Route path='/use' component={UsePage}/>
          <Route path='/text' component={TextPage}/>
          <Route path='/button' component={ButtonPage}/>
          <Route path='/input' component={FormPage}/>
          <Route path='/column' component={ColumnPage}/>
          <Route path='/icon' component={IconPage}/>
          <Route path='/badge' component={BadgePage}/>
          <Route path='/dropdown' component={DropdownPage}/>
          <Route path='/overlay' component={OverlayPage}/>
          <Route path='/modal' component={ModalPage}/>
          <Route path='/sheet' component={SheetPage}/>
          <Route path='/tabs' component={TabsPage}/>
        </Switch>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return(
      <main className="main flex">
        <div className="flex-control-label">
          <SlideBar />
        </div>
        <div className="flex-controls">
          <Main />
        </div>
      </main>
    )
  }
}

render(
  <BrowserRouter>
    <div className="flex flex-direction-column">
      <Header />
      <App />
      <Miniui />
    </div>
  </BrowserRouter>,
document.getElementById('webApplication'))
