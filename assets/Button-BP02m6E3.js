import{j as s}from"./jsx-runtime-OAISXtky.js";import{c}from"./clsx-B-dksMZM.js";import{T as d}from"./Text-Bb9stN4a.js";const f=({children:e,onClick:i,variant:l="primary",fullWidth:o=!1,disabled:m,iconOnly:r,StartIcon:a,EndIcon:t,"aria-label":u,...p})=>{const n=a&&t?"multi":(a||t)&&r?"only":a&&e?"start":t&&e?"end":null;return s.jsxs("button",{disabled:m,className:c("btn",`btn-${l}`,n&&`btn-icon-${n}`,o&&"btn-fullWidth"),onClick:i,"aria-label":r?e:u,...p,children:[a,!r&&s.jsx(d,{as:"span",variant:"caption",color:"inherit",children:e}),t]})};f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"string"},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},StartIcon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<T>",elements:[{name:"T"}]},description:""},EndIcon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement<T>",elements:[{name:"T"}]},description:""}}};export{f as B};
