"use strict";(self.webpackChunkblog2=self.webpackChunkblog2||[]).push([[578],{35470:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>i});var r=t(33634),o=t(86070),a=t(20887);const s={title:"Why do we need React.forwardRef",tags:["frontend"],date:new Date("2022-02-07T10:59:36.000Z"),authors:["dhbalaji"]},c=void 0,d={authorsImageUrls:[void 0]},i=[{value:"Where is <code>React.forwardRef</code> used?",id:"where-is-reactforwardref-used",level:2},{value:"What is <code>React.forwardRef</code>?",id:"what-is-reactforwardref",level:2},{value:"Why do we need <code>React.forwardRef</code>?",id:"why-do-we-need-reactforwardref",level:2},{value:"What is the structure of the <code>ref</code>",id:"what-is-the-structure-of-the-ref",level:2},{value:"Why do we need refs?",id:"why-do-we-need-refs",level:2},{value:"Can we pass multiple refs to React.forwardRef?",id:"can-we-pass-multiple-refs-to-reactforwardref",level:2}];function l(e){const n={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"React forward ref",src:t(80521).A+"",width:"1530",height:"672"})}),"\n",(0,o.jsxs)(n.p,{children:["The best thing about React props is the ability to send different data structures from parent to child without any code configuration like ",(0,o.jsx)(n.code,{children:"@input"})," etc. But why do we need an extra construct ",(0,o.jsx)(n.code,{children:"React.forwardRef"})," for passing ref? let us find out."]}),"\n",(0,o.jsxs)(n.h2,{id:"where-is-reactforwardref-used",children:["Where is ",(0,o.jsx)(n.code,{children:"React.forwardRef"})," used?"]}),"\n",(0,o.jsxs)(n.p,{children:["It's used when we are passing ",(0,o.jsx)(n.code,{children:"ref"})," as a prop to functional components"]}),"\n",(0,o.jsxs)(n.h2,{id:"what-is-reactforwardref",children:["What is ",(0,o.jsx)(n.code,{children:"React.forwardRef"}),"?"]}),"\n",(0,o.jsx)(n.p,{children:"It is a way to create a component. At a high level, React forwardRef takes 2 arguments"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"props that are to be passed to the child component"}),"\n",(0,o.jsx)(n.li,{children:"ref that needs to be passed to the child component"}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"why-do-we-need-reactforwardref",children:["Why do we need ",(0,o.jsx)(n.code,{children:"React.forwardRef"}),"?"]}),"\n",(0,o.jsxs)(n.p,{children:["In functional components, we cannot instantiate the components. Instantiating components is a feature offered by class-based components in React. But we want to be able to use ",(0,o.jsx)(n.code,{children:"Ref"})," in functional components. The ability to instantiate functional components and assign the value to ",(0,o.jsx)(n.code,{children:"ref.current"})," is provided by ",(0,o.jsx)(n.code,{children:"React.forwardRef"})]}),"\n",(0,o.jsx)(n.p,{children:"If you are using class-based components, then we need not use React.forwardRef to accept ref as a prop."}),"\n",(0,o.jsxs)(n.h2,{id:"what-is-the-structure-of-the-ref",children:["What is the structure of the ",(0,o.jsx)(n.code,{children:"ref"})]}),"\n",(0,o.jsxs)(n.p,{children:["Let's understand who we create a ",(0,o.jsx)(n.code,{children:"ref"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Inside functional components, we use ",(0,o.jsx)(n.code,{children:"useRef"})," hook."]}),"\n",(0,o.jsxs)(n.li,{children:["Outside of functional components, we use ",(0,o.jsx)(n.code,{children:"React.createRef"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The ref object has the following structure"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"{\n    current: null\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When the component is instantiated, the element reference is stored in current. When the component is destroyed, the ",(0,o.jsx)(n.code,{children:"current"})," points to ",(0,o.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"To access the ref contents we can do"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const {value} = ref?.current;  \n"})}),"\n",(0,o.jsx)(n.h2,{id:"why-do-we-need-refs",children:"Why do we need refs?"}),"\n",(0,o.jsxs)(n.p,{children:["We need ref to do ",(0,o.jsx)(n.code,{children:"DOM"})," stuff like selection, querying, and animations. Instead of using ",(0,o.jsx)(n.code,{children:"document.getElementById"})," or any ",(0,o.jsx)(n.code,{children:"DOM"})," queries, we can use ",(0,o.jsx)(n.code,{children:"ref"})," which are reliable in React."]}),"\n",(0,o.jsx)(n.h2,{id:"can-we-pass-multiple-refs-to-reactforwardref",children:"Can we pass multiple refs to React.forwardRef?"}),"\n",(0,o.jsx)(n.p,{children:"We can pass through a callback function. The return of the callback function should contain the ref objects."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",metastring:"jsx",children:"const multiRef = () => ({\n    ref1: React.createRef<HTMLInputElement>(),\n    ref2: React.createRef<HTMLInputElement>()\n})\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},80521:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/react-forward-ref-a9465b4671df7a114299c0f3466a55ea.webp"},20887:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(30758);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}},33634:e=>{e.exports=JSON.parse('{"permalink":"/blog/Why-do-we-need-React-forwardRef","source":"@site/blog/Why-do-we-need-React-forwardRef.md","title":"Why do we need React.forwardRef","description":"React forward ref","date":"2022-02-07T10:59:36.000Z","tags":[{"inline":true,"label":"frontend","permalink":"/blog/tags/frontend"}],"readingTime":1.67,"hasTruncateMarker":true,"authors":[{"name":"D Balaji","title":"Lead Design Technologist","url":"https://github.com/dhbalaji","imageURL":"https://avatars.githubusercontent.com/u/3672491?v=4","key":"dhbalaji","page":null}],"frontMatter":{"title":"Why do we need React.forwardRef","tags":["frontend"],"date":"2022-02-07T10:59:36.000Z","authors":["dhbalaji"]},"unlisted":false,"prevItem":{"title":"How do you decide if you need a custom React hook","permalink":"/blog/How-do-you-decide-if-you-need-a-custom-hook"},"nextItem":{"title":"Finding inspiration for mid-level developers online","permalink":"/blog/Finding-inspiration-for-mid-level-developers-online"}}')}}]);