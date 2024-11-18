import{j as t}from"./jsx-runtime-OAISXtky.js";import{c as f}from"./clsx-B-dksMZM.js";import{T as B}from"./Text-QdnF6kG2.js";import{f as v}from"./index-B5ZI-g0m.js";import"./index-qVDZzPEr.js";const r=({children:u,onClick:c,variant:m="primary",fullWidth:p=!1,...y})=>t.jsx("button",{className:f("btn",`btn-${m}`,p&&"btn-fullWidth"),onClick:c,...y,children:t.jsx(B,{as:"span",children:u})});r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const b={title:"Components/Button",component:r,args:{onClick:v()}},e={args:{children:"Button"}},a={render:()=>t.jsxs("div",{style:{display:"inline-grid",gap:10},children:[t.jsx(r,{children:"Primary Button"}),t.jsx(r,{variant:"secondary",children:"Secondary Button"}),t.jsx(r,{variant:"tertiary",children:"Tertiary Button"})]})};var n,o,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,l,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
    </div>
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const S=["Default","AllVariants"];export{a as AllVariants,e as Default,S as __namedExportsOrder,b as default};
