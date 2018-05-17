## aframe-echo-component

An event-forwarding/-repeating/-translating/-delaying component for [A-Frame](https://aframe.io).

### Setup

#### vanilla javascript
Grab the [javascript files from the dist folder](https://github.com/markkorput/aframe-echo-component/tree/master/dist) and include them in your website.

#### npm

Install dependency via npm:
```
npm install aframe-echo-component
```

Register AFRAME component:
```javascript
var AFRAME = require('aframe');
var echoComp = require('aframe-echo-component').echo_component;
AFRAME.registerComponent('echo', echoComp);
```

### Usage - trigger delayed events

```html
<!-- this will trigger the event 'delayed-click' 250ms after the click event -->
<a-box echo="event: click; echo: delayed-click; delay:250;">
</a-box>
```

This can be useful in combination with the sound component for tweaking the timing of UI sounds;

```html
<a-plane id="someButton"
  echo__1="event: click; echo: clickSound1; delay:110;"
  sound__1="src: #clickPress; on: clickSound1"
  echo__2="event: click; echo: clickSound2; delay:535;"
  sound__2="src: #clickRelease; on: clickSound2"></a-plane>
```

### Usage - forward event to other object

```html
<a-plane id="someButton" echo="event: click; echo: moveUp; to: #theObject"></a-plane>

<a-sphere id="theObject">
  <a-animation begin="moveUp" attribute="position" from="0 0 0" to="0 0 1" dur="1000"></a-animation>
</a-sphere>
```
