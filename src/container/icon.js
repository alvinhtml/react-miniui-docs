import React, { Component } from 'react';
import { Icon } from 'react-miniui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import shlStyle from '../highlighter.config.js';

export default class IconPage extends Component {
  render() {

    return(
      <div>
        <h1>SIMPLE LINE ICONS</h1>
          <SyntaxHighlighter {...shlStyle}>{`import { Icon } from 'react-miniui';

<Icon icon="icon-user" />`}
          </SyntaxHighlighter>
        <div className="flex flex-wrap">
          <div className="demo-icon"><Icon icon="icon-user icons" /><span>user</span></div>
          <div className="demo-icon"><Icon icon="icon-people icons" /><span>people</span></div>
          <div className="demo-icon"><Icon icon="icon-user-female icons" /><span>user-female</span></div>
          <div className="demo-icon"><Icon icon="icon-user-follow icons" /><span>user-follow</span></div>
          <div className="demo-icon"><Icon icon="icon-user-following icons" /><span>user-following</span></div>
          <div className="demo-icon"><Icon icon="icon-user-unfollow icons" /><span>user-unfollow</span></div>
          <div className="demo-icon"><Icon icon="icon-login icons" /><span>login</span></div>
          <div className="demo-icon"><Icon icon="icon-logout icons" /><span>logout</span></div>
          <div className="demo-icon"><Icon icon="icon-emotsmile icons" /><span>emotsmile</span></div>
          <div className="demo-icon"><Icon icon="icon-phone icons" /><span>phone</span></div>
          <div className="demo-icon"><Icon icon="icon-call-end icons" /><span>call-end</span></div>
          <div className="demo-icon"><Icon icon="icon-call-in icons" /><span>call-in</span></div>
          <div className="demo-icon"><Icon icon="icon-call-out icons" /><span>call-out</span></div>
          <div className="demo-icon"><Icon icon="icon-map icons" /><span>map</span></div>
          <div className="demo-icon"><Icon icon="icon-location-pin icons" /><span>location-pin</span></div>
          <div className="demo-icon"><Icon icon="icon-direction icons" /><span>direction</span></div>
          <div className="demo-icon"><Icon icon="icon-directions icons" /><span>directions</span></div>
          <div className="demo-icon"><Icon icon="icon-compass icons" /><span>compass</span></div>
          <div className="demo-icon"><Icon icon="icon-layers icons" /><span>layers</span></div>
          <div className="demo-icon"><Icon icon="icon-menu icons" /><span>menu</span></div>
          <div className="demo-icon"><Icon icon="icon-list icons" /><span>list</span></div>
          <div className="demo-icon"><Icon icon="icon-options-vertical icons" /><span>options-vertical</span></div>
          <div className="demo-icon"><Icon icon="icon-options icons" /><span>options</span></div>
          <div className="demo-icon"><Icon icon="icon-arrow-down icons" /><span>arrow-down</span></div>
          <div className="demo-icon"><Icon icon="icon-arrow-left icons" /><span>arrow-left</span></div>
          <div className="demo-icon"><Icon icon="icon-arrow-right icons" /><span>arrow-right</span></div>
          <div className="demo-icon"><Icon icon="icon-arrow-up icons" /><span>arrow-up</span></div>
          <div className="demo-icon"><Icon icon="icon-arrow-up-circle icons" /><span>arrow-up-circle</span></div>
          <div className="demo-icon"><Icon icon="icon-arrow-left-circle icons" /><span>arrow-left-circle</span></div>
          <div className="demo-icon"><Icon icon="icon-arrow-right-circle icons" /><span>arrow-right-circle</span></div>
          <div className="demo-icon"><Icon icon="icon-arrow-down-circle icons" /><span>arrow-down-circle</span></div>
          <div className="demo-icon"><Icon icon="icon-check icons" /><span>check</span></div>
          <div className="demo-icon"><Icon icon="icon-clock icons" /><span>clock</span></div>
          <div className="demo-icon"><Icon icon="icon-plus icons" /><span>plus</span></div>
          <div className="demo-icon"><Icon icon="icon-minus icons" /><span>minus</span></div>
          <div className="demo-icon"><Icon icon="icon-close icons" /><span>close</span></div>
          <div className="demo-icon"><Icon icon="icon-exclamation icons" /><span>exclamation</span></div>
          <div className="demo-icon"><Icon icon="icon-organization icons" /><span>organization</span></div>
          <div className="demo-icon"><Icon icon="icon-trophy icons" /><span>trophy</span></div>
          <div className="demo-icon"><Icon icon="icon-screen-smartphone icons" /><span>screen-smartphone</span></div>
          <div className="demo-icon"><Icon icon="icon-screen-desktop icons" /><span>screen-desktop</span></div>
          <div className="demo-icon"><Icon icon="icon-plane icons" /><span>plane</span></div>
          <div className="demo-icon"><Icon icon="icon-notebook icons" /><span>notebook</span></div>
          <div className="demo-icon"><Icon icon="icon-mustache icons" /><span>mustache</span></div>
          <div className="demo-icon"><Icon icon="icon-mouse icons" /><span>mouse</span></div>
          <div className="demo-icon"><Icon icon="icon-magnet icons" /><span>magnet</span></div>
          <div className="demo-icon"><Icon icon="icon-energy icons" /><span>energy</span></div>
          <div className="demo-icon"><Icon icon="icon-disc icons" /><span>disc</span></div>
          <div className="demo-icon"><Icon icon="icon-cursor icons" /><span>cursor</span></div>
          <div className="demo-icon"><Icon icon="icon-cursor-move icons" /><span>cursor-move</span></div>
          <div className="demo-icon"><Icon icon="icon-crop icons" /><span>crop</span></div>
          <div className="demo-icon"><Icon icon="icon-chemistry icons" /><span>chemistry</span></div>
          <div className="demo-icon"><Icon icon="icon-speedometer icons" /><span>speedometer</span></div>
          <div className="demo-icon"><Icon icon="icon-shield icons" /><span>shield</span></div>
          <div className="demo-icon"><Icon icon="icon-screen-tablet icons" /><span>screen-tablet</span></div>
          <div className="demo-icon"><Icon icon="icon-magic-wand icons" /><span>magic-wand</span></div>
          <div className="demo-icon"><Icon icon="icon-hourglass icons" /><span>hourglass</span></div>
          <div className="demo-icon"><Icon icon="icon-graduation icons" /><span>graduation</span></div>
          <div className="demo-icon"><Icon icon="icon-ghost icons" /><span>ghost</span></div>
          <div className="demo-icon"><Icon icon="icon-game-controller icons" /><span>game-controller</span></div>
          <div className="demo-icon"><Icon icon="icon-fire icons" /><span>fire</span></div>
          <div className="demo-icon"><Icon icon="icon-eyeglass icons" /><span>eyeglass</span></div>
          <div className="demo-icon"><Icon icon="icon-envelope-open icons" /><span>envelope-open</span></div>
          <div className="demo-icon"><Icon icon="icon-envelope-letter icons" /><span>envelope-letter</span></div>
          <div className="demo-icon"><Icon icon="icon-bell icons" /><span>bell</span></div>
          <div className="demo-icon"><Icon icon="icon-badge icons" /><span>badge</span></div>
          <div className="demo-icon"><Icon icon="icon-anchor icons" /><span>anchor</span></div>
          <div className="demo-icon"><Icon icon="icon-wallet icons" /><span>wallet</span></div>
          <div className="demo-icon"><Icon icon="icon-vector icons" /><span>vector</span></div>
          <div className="demo-icon"><Icon icon="icon-speech icons" /><span>speech</span></div>
          <div className="demo-icon"><Icon icon="icon-puzzle icons" /><span>puzzle</span></div>
          <div className="demo-icon"><Icon icon="icon-printer icons" /><span>printer</span></div>
          <div className="demo-icon"><Icon icon="icon-present icons" /><span>present</span></div>
          <div className="demo-icon"><Icon icon="icon-playlist icons" /><span>playlist</span></div>
          <div className="demo-icon"><Icon icon="icon-pin icons" /><span>pin</span></div>
          <div className="demo-icon"><Icon icon="icon-picture icons" /><span>picture</span></div>
          <div className="demo-icon"><Icon icon="icon-handbag icons" /><span>handbag</span></div>
          <div className="demo-icon"><Icon icon="icon-globe-alt icons" /><span>globe-alt</span></div>
          <div className="demo-icon"><Icon icon="icon-globe icons" /><span>globe</span></div>
          <div className="demo-icon"><Icon icon="icon-folder-alt icons" /><span>folder-alt</span></div>
          <div className="demo-icon"><Icon icon="icon-folder icons" /><span>folder</span></div>
          <div className="demo-icon"><Icon icon="icon-film icons" /><span>film</span></div>
          <div className="demo-icon"><Icon icon="icon-feed icons" /><span>feed</span></div>
          <div className="demo-icon"><Icon icon="icon-drop icons" /><span>drop</span></div>
          <div className="demo-icon"><Icon icon="icon-drawer icons" /><span>drawer</span></div>
          <div className="demo-icon"><Icon icon="icon-docs icons" /><span>docs</span></div>
          <div className="demo-icon"><Icon icon="icon-doc icons" /><span>doc</span></div>
          <div className="demo-icon"><Icon icon="icon-diamond icons" /><span>diamond</span></div>
          <div className="demo-icon"><Icon icon="icon-cup icons" /><span>cup</span></div>
          <div className="demo-icon"><Icon icon="icon-calculator icons" /><span>calculator</span></div>
          <div className="demo-icon"><Icon icon="icon-bubbles icons" /><span>bubbles</span></div>
          <div className="demo-icon"><Icon icon="icon-briefcase icons" /><span>briefcase</span></div>
          <div className="demo-icon"><Icon icon="icon-book-open icons" /><span>book-open</span></div>
          <div className="demo-icon"><Icon icon="icon-basket-loaded icons" /><span>basket-loaded</span></div>
          <div className="demo-icon"><Icon icon="icon-basket icons" /><span>basket</span></div>
          <div className="demo-icon"><Icon icon="icon-bag icons" /><span>bag</span></div>
          <div className="demo-icon"><Icon icon="icon-action-undo icons" /><span>action-undo</span></div>
          <div className="demo-icon"><Icon icon="icon-action-redo icons" /><span>action-redo</span></div>
          <div className="demo-icon"><Icon icon="icon-wrench icons" /><span>wrench</span></div>
          <div className="demo-icon"><Icon icon="icon-umbrella icons" /><span>umbrella</span></div>
          <div className="demo-icon"><Icon icon="icon-trash icons" /><span>trash</span></div>
          <div className="demo-icon"><Icon icon="icon-tag icons" /><span>tag</span></div>
          <div className="demo-icon"><Icon icon="icon-support icons" /><span>support</span></div>
          <div className="demo-icon"><Icon icon="icon-frame icons" /><span>frame</span></div>
          <div className="demo-icon"><Icon icon="icon-size-fullscreen icons" /><span>size-fullscreen</span></div>
          <div className="demo-icon"><Icon icon="icon-size-actual icons" /><span>size-actual</span></div>
          <div className="demo-icon"><Icon icon="icon-shuffle icons" /><span>shuffle</span></div>
          <div className="demo-icon"><Icon icon="icon-share-alt icons" /><span>share-alt</span></div>
          <div className="demo-icon"><Icon icon="icon-share icons" /><span>share</span></div>
          <div className="demo-icon"><Icon icon="icon-rocket icons" /><span>rocket</span></div>
          <div className="demo-icon"><Icon icon="icon-question icons" /><span>question</span></div>
          <div className="demo-icon"><Icon icon="icon-pie-chart icons" /><span>pie-chart</span></div>
          <div className="demo-icon"><Icon icon="icon-pencil icons" /><span>pencil</span></div>
          <div className="demo-icon"><Icon icon="icon-note icons" /><span>note</span></div>
          <div className="demo-icon"><Icon icon="icon-loop icons" /><span>loop</span></div>
          <div className="demo-icon"><Icon icon="icon-home icons" /><span>home</span></div>
          <div className="demo-icon"><Icon icon="icon-grid icons" /><span>grid</span></div>
          <div className="demo-icon"><Icon icon="icon-graph icons" /><span>graph</span></div>
          <div className="demo-icon"><Icon icon="icon-microphone icons" /><span>microphone</span></div>
          <div className="demo-icon"><Icon icon="icon-music-tone-alt icons" /><span>music-tone-alt</span></div>
          <div className="demo-icon"><Icon icon="icon-music-tone icons" /><span>music-tone</span></div>
          <div className="demo-icon"><Icon icon="icon-earphones-alt icons" /><span>earphones-alt</span></div>
          <div className="demo-icon"><Icon icon="icon-earphones icons" /><span>earphones</span></div>
          <div className="demo-icon"><Icon icon="icon-equalizer icons" /><span>equalizer</span></div>
          <div className="demo-icon"><Icon icon="icon-like icons" /><span>like</span></div>
          <div className="demo-icon"><Icon icon="icon-dislike icons" /><span>dislike</span></div>
          <div className="demo-icon"><Icon icon="icon-control-start icons" /><span>control-start</span></div>
          <div className="demo-icon"><Icon icon="icon-control-rewind icons" /><span>control-rewind</span></div>
          <div className="demo-icon"><Icon icon="icon-control-play icons" /><span>control-play</span></div>
          <div className="demo-icon"><Icon icon="icon-control-pause icons" /><span>control-pause</span></div>
          <div className="demo-icon"><Icon icon="icon-control-forward icons" /><span>control-forward</span></div>
          <div className="demo-icon"><Icon icon="icon-control-end icons" /><span>control-end</span></div>
          <div className="demo-icon"><Icon icon="icon-volume-1 icons" /><span>volume-1</span></div>
          <div className="demo-icon"><Icon icon="icon-volume-2 icons" /><span>volume-2</span></div>
          <div className="demo-icon"><Icon icon="icon-volume-off icons" /><span>volume-off</span></div>
          <div className="demo-icon"><Icon icon="icon-calendar icons" /><span>calendar</span></div>
          <div className="demo-icon"><Icon icon="icon-bulb icons" /><span>bulb</span></div>
          <div className="demo-icon"><Icon icon="icon-chart icons" /><span>chart</span></div>
          <div className="demo-icon"><Icon icon="icon-ban icons" /><span>ban</span></div>
          <div className="demo-icon"><Icon icon="icon-bubble icons" /><span>bubble</span></div>
          <div className="demo-icon"><Icon icon="icon-camrecorder icons" /><span>camrecorder</span></div>
          <div className="demo-icon"><Icon icon="icon-camera icons" /><span>camera</span></div>
          <div className="demo-icon"><Icon icon="icon-cloud-download icons" /><span>cloud-download</span></div>
          <div className="demo-icon"><Icon icon="icon-cloud-upload icons" /><span>cloud-upload</span></div>
          <div className="demo-icon"><Icon icon="icon-envelope icons" /><span>envelope</span></div>
          <div className="demo-icon"><Icon icon="icon-eye icons" /><span>eye</span></div>
          <div className="demo-icon"><Icon icon="icon-flag icons" /><span>flag</span></div>
          <div className="demo-icon"><Icon icon="icon-heart icons" /><span>heart</span></div>
          <div className="demo-icon"><Icon icon="icon-info icons" /><span>info</span></div>
          <div className="demo-icon"><Icon icon="icon-key icons" /><span>key</span></div>
          <div className="demo-icon"><Icon icon="icon-link icons" /><span>link</span></div>
          <div className="demo-icon"><Icon icon="icon-lock icons" /><span>lock</span></div>
          <div className="demo-icon"><Icon icon="icon-lock-open icons" /><span>lock-open</span></div>
          <div className="demo-icon"><Icon icon="icon-magnifier icons" /><span>magnifier</span></div>
          <div className="demo-icon"><Icon icon="icon-magnifier-add icons" /><span>magnifier-add</span></div>
          <div className="demo-icon"><Icon icon="icon-magnifier-remove icons" /><span>magnifier-remove</span></div>
          <div className="demo-icon"><Icon icon="icon-paper-clip icons" /><span>paper-clip</span></div>
          <div className="demo-icon"><Icon icon="icon-paper-plane icons" /><span>paper-plane</span></div>
          <div className="demo-icon"><Icon icon="icon-power icons" /><span>power</span></div>
          <div className="demo-icon"><Icon icon="icon-refresh icons" /><span>refresh</span></div>
          <div className="demo-icon"><Icon icon="icon-reload icons" /><span>reload</span></div>
          <div className="demo-icon"><Icon icon="icon-settings icons" /><span>settings</span></div>
          <div className="demo-icon"><Icon icon="icon-star icons" /><span>star</span></div>
          <div className="demo-icon"><Icon icon="icon-symbol-female icons" /><span>symbol-female</span></div>
          <div className="demo-icon"><Icon icon="icon-symbol-male icons" /><span>symbol-male</span></div>
          <div className="demo-icon"><Icon icon="icon-target icons" /><span>target</span></div>
          <div className="demo-icon"><Icon icon="icon-credit-card icons" /><span>credit-card</span></div>
          <div className="demo-icon"><Icon icon="icon-paypal icons" /><span>paypal</span></div>
          <div className="demo-icon"><Icon icon="icon-social-tumblr icons" /><span>social-tumblr</span></div>
          <div className="demo-icon"><Icon icon="icon-social-twitter icons" /><span>social-twitter</span></div>
          <div className="demo-icon"><Icon icon="icon-social-facebook icons" /><span>social-facebook</span></div>
          <div className="demo-icon"><Icon icon="icon-social-instagram icons" /><span>social-instagram</span></div>
          <div className="demo-icon"><Icon icon="icon-social-linkedin icons" /><span>social-linkedin</span></div>
          <div className="demo-icon"><Icon icon="icon-social-pinterest icons" /><span>social-pinterest</span></div>
          <div className="demo-icon"><Icon icon="icon-social-github icons" /><span>social-github</span></div>
          <div className="demo-icon"><Icon icon="icon-social-google icons" /><span>social-google</span></div>
          <div className="demo-icon"><Icon icon="icon-social-reddit icons" /><span>social-reddit</span></div>
          <div className="demo-icon"><Icon icon="icon-social-skype icons" /><span>social-skype</span></div>
          <div className="demo-icon"><Icon icon="icon-social-dribbble icons" /><span>social-dribbble</span></div>
          <div className="demo-icon"><Icon icon="icon-social-behance icons" /><span>social-behance</span></div>
          <div className="demo-icon"><Icon icon="icon-social-foursqare icons" /><span>social-foursqare</span></div>
          <div className="demo-icon"><Icon icon="icon-social-soundcloud icons" /><span>social-soundcloud</span></div>
          <div className="demo-icon"><Icon icon="icon-social-spotify icons" /><span>social-spotify</span></div>
          <div className="demo-icon"><Icon icon="icon-social-stumbleupon icons" /><span>social-stumbleupon</span></div>
          <div className="demo-icon"><Icon icon="icon-social-youtube icons" /><span>social-youtube</span></div>
          <div className="demo-icon"><Icon icon="icon-social-dropbox icons" /><span>social-dropbox</span></div>
        </div>
      </div>
    )
  }
}
