import{j as r}from"./jsx-runtime-OAISXtky.js";import{c as g}from"./clsx-B-dksMZM.js";import{T as h}from"./Text-Bb9stN4a.js";import{f as j}from"./index-B5ZI-g0m.js";import"./index-qVDZzPEr.js";const e=({children:y,onClick:B,variant:f="primary",fullWidth:v=!1,disabled:x,...b})=>r.jsx("button",{disabled:x,className:g("btn",`btn-${f}`,v&&"btn-fullWidth"),onClick:B,...b,children:r.jsx(h,{as:"span",color:"inherit",children:y})});e.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const _={title:"Components/Button",component:e,args:{onClick:j()}},t={args:{children:"Button"}},a={render:()=>r.jsxs("div",{style:{display:"inline-grid",gap:10},children:[r.jsx(e,{children:"Primary Button"}),r.jsx(e,{variant:"secondary",children:"Secondary Button"}),r.jsx(e,{variant:"tertiary",children:"Tertiary Button"})]})},n={render:()=>r.jsxs("div",{style:{display:"inline-grid",gap:10},children:[r.jsx(e,{disabled:!0,children:"Primary Button"}),r.jsx(e,{disabled:!0,variant:"secondary",children:"Secondary Button"}),r.jsx(e,{disabled:!0,variant:"tertiary",children:"Tertiary Button"})]})};var i,s,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var d,l,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
    </div>
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <Button disabled>Primary Button</Button>
      <Button disabled variant="secondary">
        Secondary Button
      </Button>
      <Button disabled variant="tertiary">
        Tertiary Button
      </Button>
    </div>
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const q=["Default","AllVariants","DisabledVariants"];export{a as AllVariants,t as Default,n as DisabledVariants,q as __namedExportsOrder,_ as default};
