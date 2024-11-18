import{j as t}from"./jsx-runtime-OAISXtky.js";import{c as V}from"./clsx-B-dksMZM.js";import"./index-qVDZzPEr.js";const c=e=>Object.fromEntries(e.split(";").map(a=>a.trim()).filter(Boolean).map(a=>{const[l,n]=a.split(":").map(r=>r.trim());return l&&n?[l,n]:[]}).filter(Boolean)),k=({padding:e,margin:a})=>{const[l=100,n=l,r=l,i=n]=e??[100],B=e?`
    padding-top: var(--spacing-${l});
    padding-right: var(--spacing-${n});
    padding-bottom: var(--spacing-${r});
    padding-left: var(--spacing-${i});
  `:"",[o=100,d=o,_=o,E=d]=a??[100],R=a?`
    margin-top: var(--spacing-${o});
    margin-right: var(--spacing-${d});
    margin-bottom: var(--spacing-${_});
    margin-left: var(--spacing-${E});
  `:"";return{...c(B),...c(R)}},p=({children:e,className:a,padding:l=[500],margin:n,...r})=>{console.log("padding",n);const i=k({padding:l,margin:n});return console.log(i),t.jsx("article",{style:i,className:V("container",a),...r,children:e})};p.__docgenInfo={description:"",methods:[],displayName:"Container",props:{padding:{required:!1,tsType:{name:"union",raw:"[T] | [T, T] | [T, T, T] | [T, T, T, T]",elements:[{name:"tuple",raw:"[T]",elements:[{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]}]},{name:"tuple",raw:"[T, T]",elements:[{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]},{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]}]},{name:"tuple",raw:"[T, T, T]",elements:[{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]},{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]},{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]}]},{name:"tuple",raw:"[T, T, T, T]",elements:[{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]},{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]},{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]},{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]}]}]},description:"",defaultValue:{value:"[500]",computed:!1}},margin:{required:!1,tsType:{name:"union",raw:"[T] | [T, T] | [T, T, T] | [T, T, T, T]",elements:[{name:"tuple",raw:"[T]",elements:[{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]}]},{name:"tuple",raw:"[T, T]",elements:[{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]},{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]}]},{name:"tuple",raw:"[T, T, T]",elements:[{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]},{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]},{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]}]},{name:"tuple",raw:"[T, T, T, T]",elements:[{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]},{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]},{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]},{name:"union",raw:`| 100
| 200
| 300
| 400
| 500
| 600
| 700
| 800
| 900
| 1000
| 1100
| 1200`,elements:[{name:"literal",value:"100"},{name:"literal",value:"200"},{name:"literal",value:"300"},{name:"literal",value:"400"},{name:"literal",value:"500"},{name:"literal",value:"600"},{name:"literal",value:"700"},{name:"literal",value:"800"},{name:"literal",value:"900"},{name:"literal",value:"1000"},{name:"literal",value:"1100"},{name:"literal",value:"1200"}]}]}]},description:""}}};const M={title:"Components/Container",component:p,decorators:[e=>t.jsx("div",{style:{display:"inline-grid",gap:10,padding:50,background:"#222222"},children:t.jsx(e,{})})]},m={args:{children:"Container Content"}},u={render:()=>t.jsx("div",{style:{display:"inline-grid",gap:10},children:t.jsx(p,{children:"Container Content"})})},v={args:{children:"Container Content",padding:[100,200,300,400]}},s={args:{children:"Container Content",margin:[100,200,300,400]}};var g,T,w;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "Container Content"
  }
}`,...(w=(T=m.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var C,y,f;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <Container>Container Content</Container>
    </div>
}`,...(f=(y=u.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,x,S;v.parameters={...v.parameters,docs:{...(h=v.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Container Content",
    padding: [100, 200, 300, 400]
  }
}`,...(S=(x=v.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var j,$,b;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Container Content",
    margin: [100, 200, 300, 400]
  }
}`,...(b=($=s.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const N=["Default","AllVariants","ContainerPadding","ContainerMargin"];export{u as AllVariants,s as ContainerMargin,v as ContainerPadding,m as Default,N as __namedExportsOrder,M as default};
