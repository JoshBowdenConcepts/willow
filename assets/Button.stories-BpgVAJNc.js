import{j as r}from"./jsx-runtime-OAISXtky.js";import{c as f}from"./clsx-B-dksMZM.js";import{T as B}from"./Text-QdnF6kG2.js";import{f as v}from"./index-B5ZI-g0m.js";import"./index-qVDZzPEr.js";const e=({children:u,onClick:c,variant:m="primary",fullWidth:p=!1,...y})=>r.jsx("button",{className:f("btn",`btn-${m}`,p&&"btn-fullWidth"),onClick:c,...y,children:r.jsx(B,{as:"span",children:u})});e.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const b={component:e,args:{onClick:v()}},t={args:{children:"Button"}},a={render:()=>r.jsxs("div",{style:{display:"inline-grid",gap:10},children:[r.jsx(e,{children:"Primary Button"}),r.jsx(e,{variant:"secondary",children:"Secondary Button"}),r.jsx(e,{variant:"tertiary",children:"Tertiary Button"})]})};var n,s,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var i,l,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
    </div>
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const S=["Default","AllVariants"];export{a as AllVariants,t as Default,S as __namedExportsOrder,b as default};
