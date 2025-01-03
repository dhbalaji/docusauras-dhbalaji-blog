"use strict";(self.webpackChunkblog2=self.webpackChunkblog2||[]).push([[2426],{59162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var s=n(53900),a=n(86070),o=n(20887);const i={title:"Angular 11 cli issues on ubuntu mate solved",tags:["frontend"],date:new Date("2021-05-09T15:49:01.000Z"),authors:["dhbalaji"]},r=void 0,l={authorsImageUrls:[void 0]},h=[{value:"What is your current setup?",id:"what-is-your-current-setup",level:2},{value:"What were the issues and the fixes",id:"what-were-the-issues-and-the-fixes",level:2},{value:"Final thoughts",id:"final-thoughts",level:2},{value:"How to prevent this issue from reoccurring",id:"how-to-prevent-this-issue-from-reoccurring",level:2}];function u(e){const t={h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"angular cli 11",src:n(95808).A+"",width:"1283",height:"818"})}),"\n",(0,a.jsx)(t.p,{children:"After many years, I decided to keep up with the developments at Angular. The dev setup was to run angular CLI but it won't work. Let's find out why"}),"\n",(0,a.jsx)(t.h2,{id:"what-is-your-current-setup",children:"What is your current setup?"}),"\n",(0,a.jsx)(t.p,{children:"Currently running the 20.10 version of ubuntu mate. The nodeJS was downloaded from the snap store and yarn from the apt-get."}),"\n",(0,a.jsx)(t.p,{children:"For writing code I use Webstorm"}),"\n",(0,a.jsx)(t.h2,{id:"what-were-the-issues-and-the-fixes",children:"What were the issues and the fixes"}),"\n",(0,a.jsx)(t.p,{children:"Creating a basic app would not happen automatically with CLI. The CLI app would crash."}),"\n",(0,a.jsx)(t.p,{children:"The cli had issues accessing the node from the snap location so I decided to uninstall the snap version of nodeJS and install it from the apt package manager."}),"\n",(0,a.jsx)(t.p,{children:"The apt package manager would not install npm along with nodeJS so I had to install npm separately."}),"\n",(0,a.jsx)(t.p,{children:"The Angular CLI would not work because the yarn was selected as a package installer. The yarn was installed through apt but I guess it was the wrong yarn version of yarn itself. I had to uninstall the yarn through apt remove."}),"\n",(0,a.jsx)(t.p,{children:"The yarn was installed through npm globally."}),"\n",(0,a.jsx)(t.p,{children:"At last, I was able to create an ng-app from CLI. The app asks you a couple of questions like whether to include the router, which type of CSS you want to support etc which is cool."}),"\n",(0,a.jsx)(t.p,{children:"The starting page in localhost is quite meaningful. It gives you links for cli documentation, learn angular, etc."}),"\n",(0,a.jsx)(t.p,{children:"The hello world which was supposed to take few minutes on my localhost took nearly an hour."}),"\n",(0,a.jsx)(t.h2,{id:"final-thoughts",children:"Final thoughts"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"If beginners are using Linux, then get familiar with permission related errors and how to fix that"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"If you are using sudo as a trial and error command, then get away from that habit"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Few things on Linux are not straightforward, you got to know how to solve the issues."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"how-to-prevent-this-issue-from-reoccurring",children:"How to prevent this issue from reoccurring"}),"\n",(0,a.jsx)(t.p,{children:"Keeping up with versions and development workflow changes can be daunting. There is a whole team of developers working to improve things and integrating the improvements to your knowledge and workflow is risky too."}),"\n",(0,a.jsx)(t.p,{children:"I request your team to maintain a stable scaffold that you can check out even in the middle of the night or in tough times like interviews and get the work done."}),"\n",(0,a.jsx)(t.p,{children:"Imagine sitting in a interview and troubleshooting the Angular or react CLI related issues is not a good idea."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},95808:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/angular-cli-11-57d94a6d9dd7c94815ed7d5f720e8451.webp"},20887:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(30758);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}},53900:e=>{e.exports=JSON.parse('{"permalink":"/blog/Angular-11-cli-issues-on-ubuntu-mate-solved","source":"@site/blog/Angular-11-cli-issues-on-ubuntu-mate-solved.md","title":"Angular 11 cli issues on ubuntu mate solved","description":"angular cli 11","date":"2021-05-09T15:49:01.000Z","tags":[{"inline":true,"label":"frontend","permalink":"/blog/tags/frontend"}],"readingTime":2.04,"hasTruncateMarker":true,"authors":[{"name":"D Balaji","title":"Lead Design Technologist","url":"https://github.com/dhbalaji","imageURL":"https://avatars.githubusercontent.com/u/3672491?v=4","key":"dhbalaji","page":null}],"frontMatter":{"title":"Angular 11 cli issues on ubuntu mate solved","tags":["frontend"],"date":"2021-05-09T15:49:01.000Z","authors":["dhbalaji"]},"unlisted":false,"prevItem":{"title":"Fitts law and CTA, how are they related in the context of UI design?","permalink":"/blog/Fitts-law-and-CTA-how-are-they-related"},"nextItem":{"title":"PWAs are webapps which learnt the strengths of their counterparts","permalink":"/blog/PWAs-websites-which-make-use-of-strengths-of-their-counter-parts"}}')}}]);