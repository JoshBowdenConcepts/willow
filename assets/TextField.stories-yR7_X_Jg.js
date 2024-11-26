import{j as e}from"./jsx-runtime-OAISXtky.js";import{r as j}from"./index-qVDZzPEr.js";import{c as l}from"./clsx-B-dksMZM.js";import{T as F}from"./Text-Bb9stN4a.js";import{f as v}from"./index-B5ZI-g0m.js";import{B}from"./Button-BP02m6E3.js";const s=({label:u,className:x,placeholder:g,labelClassName:f,onChange:a,...y})=>{const[T,b]=j.useState(""),h=n=>{b(n.target.value),a==null||a(n)};return e.jsxs("label",{className:l("txt-field-label",f),children:[e.jsx(F,{variant:"caption",children:u}),e.jsx("input",{value:T,onChange:h,className:l("txt-field",x),type:"text",placeholder:g,...y})]})};s.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Components/TextField",component:s,args:{onChange:v()}},t={args:{label:"Label",placeholder:"Placeholder"}},r={render:()=>e.jsxs("div",{style:{display:"inline-grid",gap:10,gridAutoFlow:"column",alignItems:"flex-start"},children:[e.jsx(s,{label:"Enter your email:"}),e.jsx(B,{variant:"primary",style:{marginTop:20},children:"Submit"})]})};var i,o,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "Placeholder"
  }
}`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "inline-grid",
    gap: 10,
    gridAutoFlow: "column",
    alignItems: "flex-start"
  }}>
      <TextField label="Enter your email:" />
      <Button variant="primary" style={{
      marginTop: 20
    }}>
        Submit
      </Button>
    </div>
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const w=["Default","TextFieldAndButton"];export{t as Default,r as TextFieldAndButton,w as __namedExportsOrder,q as default};
