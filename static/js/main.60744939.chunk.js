(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.cd2fd5e7.svg"},,function(e,t,n){},,function(e,t,n){e.exports=n(18)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(9),r=n.n(o),c=(n(16),n(1)),s=n(2),u=n(4),l=n(3),m=n(5),h=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={isLastNameVisible:!0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("isLastNameVisible"),t=JSON.parse(e);t||this.setState(function(){return{isLastNameVisible:t}})}},{key:"componentDidUpdate",value:function(e){e.isLastNameVisible!==this.state.isLastNameVisible&&localStorage.setItem("isLastNameVisible",this.state.isLastNameVisible)}},{key:"toggleLastName",value:function(){this.setState({isLastNameVisible:!this.state.isLastNameVisible})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"myname"},i.a.createElement("p",{className:"testo",style:{margin:"10px"}},i.a.createElement("span",{className:"space"},this.props.firstName),!this.state.isLastNameVisible&&this.props.lastName," ",i.a.createElement("button",{onClick:function(){return e.toggleLastName()}},"Toggle Last Name")))}}]),t}(a.Component),f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={count:0},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("count"),t=parseInt(e,10);isNaN(t)||this.setState(function(){return{count:t}})}},{key:"componentDidUpdate",value:function(e){e.count!==this.state.count&&localStorage.setItem("count",this.state.count)}},{key:"handleClick",value:function(){return this.setState(function(e){return{count:e.count+1}})}},{key:"resetCount",value:function(){return this.setState(function(e){return{count:e.count=0}})}},{key:"doubleTheNumber",value:function(){return this.setState(function(e){return{count:2*e.count}})}},{key:"halfTheNumber",value:function(){return this.setState(function(e){return{count:e.count/2}})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h1",null,this.state.count),i.a.createElement("button",{onClick:function(){return e.handleClick()}},"Change"),i.a.createElement("button",{onClick:function(){return e.resetCount()}},"Reset"),i.a.createElement("button",{onClick:function(){return e.doubleTheNumber()}},"Double it!"),i.a.createElement("button",{onClick:function(){return e.halfTheNumber()}},"Half it!"))}}]),t}(a.Component);var b=function(e){return i.a.createElement("ul",{className:"media"},i.a.createElement("li",null,i.a.createElement("a",{href:e.github,target:"_alt",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-github-square"}))))};var N=function(){return i.a.createElement("div",{className:"main"},i.a.createElement(h,{firstName:"Davide",lastName:"Naccarati"}),i.a.createElement(f,{className:"btn"}),i.a.createElement(b,{github:"https://github.com/Banjer71/my-react-notes"}))},v=(n(8),n(6)),d=n.n(v);n(17);var p=function(){return i.a.createElement("nav",null,i.a.createElement("div",{className:"main-logo"},i.a.createElement("img",{src:d.a,alt:"Logo"}),i.a.createElement("h1",{id:"logo",className:"logo-text"},"My React notes"),i.a.createElement("img",{src:d.a,alt:"Logo"})))},g=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null),i.a.createElement(N,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.60744939.chunk.js.map