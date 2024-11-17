import{j as n}from"./jsx-runtime-OAISXtky.js";import{T as v}from"./Text-QdnF6kG2.js";import{f as B}from"./index-B5ZI-g0m.js";import"./index-qVDZzPEr.js";function f(r){var a,e,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r)){var l=r.length;for(a=0;a<l;a++)r[a]&&(e=f(r[a]))&&(t&&(t+=" "),t+=e)}else for(e in r)r[e]&&(t&&(t+=" "),t+=e);return t}function g(){for(var r,a,e=0,t="",l=arguments.length;e<l;e++)(r=arguments[e])&&(a=f(r))&&(t&&(t+=" "),t+=a);return t}const o=({children:r,onClick:a,variant:e="primary",fullWidth:t=!1})=>n.jsx("button",{className:g("btn",`btn-${e}`,t&&"btn-fullWidth"),onClick:a,children:n.jsx(v,{as:"span",children:r})});o.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const T={component:o,args:{onClick:B()}},s={args:{children:"Button"}},i={render:()=>n.jsxs("div",{style:{display:"inline-grid",gap:10},children:[n.jsx(o,{children:"Primary Button"}),n.jsx(o,{variant:"secondary",children:"Secondary Button"}),n.jsx(o,{variant:"tertiary",children:"Tertiary Button"})]})};var u,d,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,y;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
    </div>
}`,...(y=(p=i.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const A=["Default","AllVariants"];export{i as AllVariants,s as Default,A as __namedExportsOrder,T as default};
