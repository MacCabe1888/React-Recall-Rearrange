(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e){e.exports=[{id:1,image:"./assets/images/gary.jpg",clicked:!1},{id:2,image:"./assets/images/grandma.jpg",clicked:!1},{id:3,image:"./assets/images/larry.jpg",clicked:!1},{id:4,image:"./assets/images/mama-krabs.jpg",clicked:!1},{id:5,image:"./assets/images/mr-krabs.jpg",clicked:!1},{id:6,image:"./assets/images/mrs-puff.jpg",clicked:!1},{id:7,image:"./assets/images/patrick.jpg",clicked:!1},{id:8,image:"./assets/images/pearl.jpg",clicked:!1},{id:9,image:"./assets/images/plankton.jpg",clicked:!1},{id:10,image:"./assets/images/sandy.jpg",clicked:!1},{id:11,image:"./assets/images/spongebob.jpg",clicked:!1},{id:12,image:"./assets/images/squidward.jpg",clicked:!1}]},function(e,a,t){e.exports=t(23)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(8),i=t.n(r),s=(t(16),t(6)),o=t(1),l=t(2),u=t(4),m=t(3),g=t(5),h=(t(17),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={guess:"",animating:!1},t.renderText=function(){switch(t.state.guess){case"new":return"You chose wisely!";case"repeat":return"Uh oh! Repeat guess!";default:return"Click on an image to begin!"}},t}return Object(g.a)(a,e),Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,a){var t=e.score,n=e.highScore,c={animating:!0};c.guess=0===t&&0===n?"":0===t&&n>0?"repeat":"new",t===this.props.score&&this.state.guess===c.guess||this.setState(c)}},{key:"render",value:function(){var e=this;return c.a.createElement("li",{className:this.state.animating?this.state.guess:"",onAnimationEnd:function(){return e.setState({animating:!1})}},this.renderText())}}]),a}(n.Component));t(18);var d=function(e){return c.a.createElement("nav",{className:"bar"},c.a.createElement("ul",null,c.a.createElement("li",{className:"logo"},c.a.createElement("a",{href:"/"},"React, Recall, Rearrange!")),c.a.createElement(h,{score:e.score,highScore:e.highScore}),c.a.createElement("li",null,"Round ",e.currentRound," | Score: ",e.score," | High Score: ",e.highScore)))};t(19);var f=function(e){return c.a.createElement("div",{"aria-label":"clickable",onClick:function(){return e.handleClick(e.id)},style:{backgroundImage:'url("'.concat(e.image,'")')},className:"clickable".concat(e.shake?" shake":"")})};t(20);var p=function(e){return c.a.createElement("main",{className:"container"},e.children)};t(21);var k=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"bottom"},c.a.createElement("img",{alt:"react",src:"assets/images/logo.svg"}),"React, Recall, Rearrange!",c.a.createElement("img",{alt:"react",src:"assets/images/logo.svg"})))};t(22);var v=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"React, Recall, Rearrange!"),c.a.createElement("h2",null,"Click on an image to earn a point, but don't click on any image more than once in the same round!"))},b=t(9),E=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={round:1,choices:b,score:0,highScore:0},t.shuffleArr=function(e){for(var a=e.length-1;a>0;){var t=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[t],e[t]=n,a--}return e},t.handleClick=function(e){var a=!0,n=t.state.choices.map(function(t){var n=Object(s.a)({},t);return n.id!==e||n.clicked||(n.clicked=!0,a=!1),n});a?t.handleRepeat(n):t.handleNew(n)},t.handleRepeat=function(e){t.setState({round:1,choices:t.resetChoices(e),score:0})},t.handleNew=function(e){var a=t.state,n=a.score,c=a.highScore;n+=1,c=Math.max(n,c);var r=!0;e.map(function(e){return e.clicked||(r=!1),r}),t.setState({round:r?t.state.round+1:t.state.round,choices:r?t.resetChoices(e):t.shuffleArr(e),score:n,highScore:c})},t.resetChoices=function(e){var a=e.map(function(e){return Object(s.a)({},e,{clicked:!1})});return t.shuffleArr(a)},t}return Object(g.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({choices:this.shuffleArr(this.state.choices)})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{style:{backgroundImage:"url(./assets/images/spongebob-floral-background.png)",backgroundRepeat:"repeat-x",backgroundSize:"cover"}},c.a.createElement(d,{currentRound:this.state.round,score:this.state.score,highScore:this.state.highScore}),c.a.createElement(v,null),c.a.createElement(p,null,this.state.choices.map(function(a){return c.a.createElement(f,{key:a.id,id:a.id,shake:!e.state.score&&e.state.highScore,handleClick:e.handleClick,image:a.image})})),c.a.createElement(k,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.fa47bee6.chunk.js.map