import{j as e}from"./jsx-runtime-OAISXtky.js";import{c as G}from"./clsx-B-dksMZM.js";import{T as H}from"./Text-Bb9stN4a.js";import{f as J}from"./index-B5ZI-g0m.js";import"./index-qVDZzPEr.js";const n=({children:r,onClick:t,variant:a="primary",fullWidth:A=!1,disabled:W,iconOnly:f,StartIcon:s,EndIcon:i,"aria-label":$,...F})=>{const B=s&&i?"multi":(s||i)&&f?"only":s&&r?"start":i&&r?"end":null;return e.jsxs("button",{disabled:W,className:G("btn",`btn-${a}`,B&&`btn-icon-${B}`,A&&"btn-fullWidth"),onClick:t,"aria-label":f?r:$,...F,children:[s,!f&&e.jsx(H,{as:"span",color:"inherit",children:r}),i]})};n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"string"},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},StartIcon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<T>",elements:[{name:"T"}]},description:""},EndIcon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<T>",elements:[{name:"T"}]},description:""}}};const o={inherit:"1em",default:"1rem"},y=({size:r="inherit",fill:t="currentColor",...a})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",height:o[r],width:o[r],fill:t,...a,children:e.jsx("path",{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})});y.__docgenInfo={description:"",methods:[],displayName:"IconChevronRight",props:{size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof iconSizeList)[number]"},description:"",defaultValue:{value:'"inherit"',computed:!1}},fill:{defaultValue:{value:'"currentColor"',computed:!1},required:!1}}};const P=({size:r="inherit",fill:t="currentColor",...a})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",height:o[r],width:o[r],fill:t,...a,children:e.jsx("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})});P.__docgenInfo={description:"",methods:[],displayName:"IconChevronLeft",props:{size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof iconSizeList)[number]"},description:"",defaultValue:{value:'"inherit"',computed:!1}},fill:{defaultValue:{value:'"currentColor"',computed:!1},required:!1}}};const g=({size:r="inherit",fill:t="currentColor",...a})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",height:o[r],width:o[r],fill:t,...a,children:e.jsx("path",{d:"M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm80 64c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16l-96 0z"})});g.__docgenInfo={description:"",methods:[],displayName:"IconCalendar",props:{size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof iconSizeList)[number]"},description:"",defaultValue:{value:'"inherit"',computed:!1}},fill:{defaultValue:{value:'"currentColor"',computed:!1},required:!1}}};const ee={title:"Components/Button",component:n,args:{onClick:J()}},c={args:{children:"Button"}},l={render:()=>e.jsxs("div",{style:{display:"inline-grid",gap:10},children:[e.jsx(n,{children:"Primary Button"}),e.jsx(n,{variant:"secondary",children:"Secondary Button"}),e.jsx(n,{variant:"tertiary",children:"Tertiary Button"})]})},d={render:()=>e.jsxs("div",{style:{display:"inline-grid",gap:10},children:[e.jsx(n,{disabled:!0,children:"Primary Button"}),e.jsx(n,{disabled:!0,variant:"secondary",children:"Secondary Button"}),e.jsx(n,{disabled:!0,variant:"tertiary",children:"Tertiary Button"})]})},u={args:{children:"Button",StartIcon:e.jsx(P,{})}},m={args:{children:"Button",EndIcon:e.jsx(y,{})}},p={args:{children:"Button",StartIcon:e.jsx(g,{}),EndIcon:e.jsx(y,{})}},h={args:{children:"Button",StartIcon:e.jsx(g,{}),iconOnly:!0}};var v,x,I;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...(I=(x=c.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var w,b,j;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "inline-grid",
    gap: 10
  }}>
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
    </div>
}`,...(j=(b=l.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var C,S,T;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var q,R,V;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: "Button",
    StartIcon: <IconChevronLeft />
  }
}`,...(V=(R=u.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var L,E,_;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: "Button",
    EndIcon: <IconChevronRight />
  }
}`,...(_=(E=m.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var z,N,k;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: "Button",
    StartIcon: <IconCalendar />,
    EndIcon: <IconChevronRight />
  }
}`,...(k=(N=p.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var D,M,O;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: "Button",
    StartIcon: <IconCalendar />,
    iconOnly: true
  }
}`,...(O=(M=h.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const re=["Default","AllVariants","DisabledVariants","StartIcon","EndIcon","BothIcons","IconOnly"];export{l as AllVariants,p as BothIcons,c as Default,d as DisabledVariants,m as EndIcon,h as IconOnly,u as StartIcon,re as __namedExportsOrder,ee as default};
