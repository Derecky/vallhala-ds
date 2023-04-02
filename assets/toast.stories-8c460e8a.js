var a=Object.defineProperty;var r=(t,o)=>a(t,"name",{value:o,configurable:!0});import{d as p,e as c,u as d,B as l}from"./index-936e25fe.js";import{j as n}from"./jsx-runtime-ce12df7a.js";import"./index-439cbaf1.js";import"./iframe-0946b9f3.js";import"./index-a703d8f1.js";const k={title:"Overlay/Toast",component:p,argTypes:{position:{options:["bottom-right","bottom-center","bottom-left","top-right","top-center","top-left"],control:{type:"inline-radio"}},type:{options:["primary","informative","positive","notice","negative"],control:{type:"select"}},background:{options:["on","off"],control:{type:"select"}}},parameters:{storySource:{source:`import { Button, Toast, ToastProps, ToastProvider, useToast } from "@devna-ds/react";\r
import { ComponentMeta, ComponentStory } from "@storybook/react";\r
\r
export default {\r
  title: "Overlay/Toast",\r
  component: Toast,\r
  argTypes: {\r
    position: {\r
      options: ['bottom-right', 'bottom-center', 'bottom-left', 'top-right', 'top-center', 'top-left'],\r
      control: { type: "inline-radio"}\r
    },\r
    type: {\r
      options: ["primary", "informative", "positive", "notice", "negative"],\r
      control: { type: "select" },\r
    },\r
    background: {\r
      options: ["on", "off"],\r
      control: { type: "select" },\r
    },\r
   \r
  },\r
  parameters: {\r
    docs: {\r
      source: {\r
        type: "code",\r
        code: \`\r
					const Trigger = () => {\r
						const { handleOpen } = useToast();\r
						return (\r
							<Button onClick={() => handleOpen({ type: "primary", background: "on", dismissible: true, content: "I'm a toast", position: "bottom-right"})}>\r
							Toast\r
						</Button>\r
						);\r
					};\r
					const YourComponent = () => (\r
						<ToastProvider>\r
							<Trigger />\r
						</ToastProvider>\r
					);\r
				\`,\r
      },\r
    },\r
  },\r
} as ComponentMeta<typeof Toast>;\r
\r
const Trigger = (props: ToastProps) => {\r
  const { handleOpen } = useToast();\r
  return <Button onClick={() => handleOpen(props)}>Toast</Button>;\r
};\r
\r
const Template: ComponentStory<typeof Trigger> = ({\r
  type,\r
  background,\r
  dismissible,\r
  content,\r
  position,\r
}) => {\r
  return (\r
		<ToastProvider>\r
			<Trigger\r
				type={type}\r
				background={background}\r
				dismissible={dismissible}\r
				content={content}\r
				position={position}\r
			/>\r
		</ToastProvider>\r
  );\r
};\r
\r
export const ToastStory = Template.bind({});\r
ToastStory.args = {\r
  type: "primary",\r
  background: "on",\r
  dismissible: true,\r
  content: "I'm a toast",\r
  position: 'bottom-right'\r
};`,locationsMap:{"toast-story":{startLoc:{col:49,line:51},endLoc:{col:1,line:69},startBody:{col:49,line:51},endBody:{col:1,line:69}}}},docs:{source:{type:"code",code:`
					const Trigger = () => {
						const { handleOpen } = useToast();
						return (
							<Button onClick={() => handleOpen({ type: "primary", background: "on", dismissible: true, content: "I'm a toast", position: "bottom-right"})}>
							Toast
						</Button>
						);
					};
					const YourComponent = () => (
						<ToastProvider>
							<Trigger />
						</ToastProvider>
					);
				`}}}},m=r(t=>{const{handleOpen:o}=d();return n(l,{onClick:()=>o(t),children:"Toast"})},"Trigger"),T=r(({type:t,background:o,dismissible:e,content:s,position:i})=>n(c,{children:n(m,{type:t,background:o,dismissible:e,content:s,position:i})}),"Template"),u=T.bind({});u.args={type:"primary",background:"on",dismissible:!0,content:"I'm a toast",position:"bottom-right"};const B=["ToastStory"];export{u as ToastStory,B as __namedExportsOrder,k as default};
//# sourceMappingURL=toast.stories-8c460e8a.js.map
