(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,a,t){},13:function(e,a,t){e.exports=t(21)},18:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),s=t.n(r),c=(t(18),t(2)),o=t(3),i=t(5),m=t(4),p=t(6),u=t(12),d=t.n(u),h=(t(10),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.name,this.props.data.occupation,this.props.data.description,this.props.data.address.city,this.props.data.resumedownload;var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))}return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"Hi! I'm Benny."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social",style:{color:"#525252"}},e))),l.a.createElement("div",null,l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"fa fa-chevron-down"})))))}}]),t}(n.Component)),E=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e)),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){this.props.data.name;var e="images/"+this.props.data.image,a=this.props.data.bio,t=(this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email);this.props.data.resumedownload,this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))}if(this.props.data)this.props.data.social.map((function(e){return l.a.createElement("span",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("div",{className:"row"},l.a.createElement("img",{className:"profile-pic",src:e,alt:"Profile Pic"}))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,a),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"six columns"},l.a.createElement("div",{className:"download"},l.a.createElement("span",null,l.a.createElement("a",{href:"mailto:".concat(t),className:"button",style:{width:"200px",textAlign:"left"}},l.a.createElement("i",{className:"icon fa fa-envelope"}),"Contact Me"))))))))}}]),t}(n.Component),b=(n.Component,function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e,a){var t="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item",style:3===a?{clear:"both"}:{}},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,title:e.title,target:"_blank"},l.a.createElement("img",{alt:e.title,src:t}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",{style:{position:"absolute",top:"15px",left:"15px",fontSize:"30px"}},e.title),l.a.createElement("div",{style:{position:"absolute",bottom:"15px",right:"15px"}},e.category.map((function(e){return l.a.createElement("p",{style:{textAlign:"right",fontSize:"20px",margin:"5px"}},e)}))))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"})))))}));return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed "},l.a.createElement("h1",null,"Check Out Some of My Projects"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-thirds s-bgrid-thirds cf"},e))))}}]),t}(n.Component)),v=t(7),N=t(8),y=function(){var e=Object(n.useState)(!1),a=Object(v.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)(!1),c=Object(v.a)(s,2),o=c[0],i=c[1],m=Object(n.useRef)(null);return Object(n.useEffect)((function(){window.innerWidth<480&&i(!0),N.a.show(m.current)}),[]),l.a.createElement(l.a.Fragment,null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"chatbot-wrapper"},l.a.createElement("div",{className:"chatbot-header"},l.a.createElement("button",{className:"mobile-close-chat-btn",onClick:function(){r(!1)}},l.a.createElement("i",{class:"backIcon fa fa-chevron-left"})," Exit Chat")),l.a.createElement("iframe",{className:"chatbot",src:"https://chat-with-bennybot.herokuapp.com/",title:"BennyBot"},l.a.createElement("head",null,l.a.createElement("base",{target:"_top"}))))):null,l.a.createElement("button",{ref:m,"data-tip":!0,"data-for":"chatTip",className:"show-chat-btn",onClick:function(){r(!t)},style:{display:o&&t?"none":"block"}},t?"Close Chat":l.a.createElement("i",{className:"show-chat-icon fa fa-comments"})),l.a.createElement(N.a,{id:"chatTip",place:"top",effect:"solid",multiline:!0,disable:o,delayHide:1e3},"Chat with",l.a.createElement("br",null),"BennyBot"))},j=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},n}return Object(o.a)(t,[{key:"getResumeData",value:function(){d.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData();p.a.initialize("UA-190435445-1"),p.a.pageview("/homepage")}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{data:this.state.resumeData.main}),l.a.createElement(f,{data:this.state.resumeData.main}),l.a.createElement(b,{data:this.state.resumeData.portfolio}),l.a.createElement(E,{data:this.state.resumeData.main}),l.a.createElement(y,null))}}]),t}(n.Component);s.a.render(l.a.createElement(j,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.4c592964.chunk.js.map