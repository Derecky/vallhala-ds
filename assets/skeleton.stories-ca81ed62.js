var l=Object.defineProperty;var r=(o,i)=>l(o,"name",{value:i,configurable:!0});import{S as t}from"./index-936e25fe.js";import{a as n,F as a,j as e}from"./jsx-runtime-ce12df7a.js";import"./index-439cbaf1.js";import"./iframe-0946b9f3.js";import"./index-a703d8f1.js";const u={parameters:{storySource:{source:`import type { Meta, StoryObj } from '@storybook/react'\r
import { Skeleton, SkeletonProps, Text } from '@devna-ds/react'\r
import { FunctionComponent } from 'react'\r
\r
export default {\r
	title: 'Feedback/Skeleton',\r
	component: Skeleton,\r
	args: {\r
		height: 20,\r
		width: 200,\r
		radius: 'standard'\r
	},\r
	argTypes: {\r
		height: { type: 'number'},\r
		width: { type: 'number'},\r
		radius: {\r
      control: { type: null },\r
		}\r
  },\r
} as Meta<SkeletonProps>\r
\r
export const Primary: StoryObj<SkeletonProps> = {\r
	name: 'Line',\r
}\r
\r
export const Circle: StoryObj<SkeletonProps> = {\r
	args: {\r
		radius: 'full',\r
		width: 75,\r
		height: 75,\r
	}\r
}\r
\r
export const Retangle: StoryObj<SkeletonProps> = {\r
	args: {\r
		radius: 'standard',\r
		height: 100,\r
		width: 400,\r
	}\r
}\r
\r
export const Compound: FunctionComponent = () => {\r
	return (\r
		<>\r
			<div style={{ display: 'flex', gap: 12, maxWidth: 300}}>\r
				<Skeleton width={75} height={75} radius='full'/>\r
				<div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between', }}>\r
					<Skeleton height={18}/>\r
					<Skeleton height={18}/>\r
					<Skeleton height={18}/>\r
				</div>\r
			</div>\r
			<div style={{ display: 'flex', gap: 12, flexDirection: 'column', marginTop: 12, maxWidth: 300}}>\r
				<Skeleton height={100}/>\r
				<Skeleton />\r
				<Skeleton />\r
				<Skeleton />\r
			</div>\r
		</>\r
	)\r
}\r
\r
\r
`,locationsMap:{compound:{startLoc:{col:43,line:42},endLoc:{col:1,line:61},startBody:{col:43,line:42},endBody:{col:1,line:61}}}}},title:"Feedback/Skeleton",component:t,args:{height:20,width:200,radius:"standard"},argTypes:{height:{type:"number"},width:{type:"number"},radius:{control:{type:null}}}},g={name:"Line"},y={args:{radius:"full",width:75,height:75}},x={args:{radius:"standard",height:100,width:400}},f=r(()=>n(a,{children:[n("div",{style:{display:"flex",gap:12,maxWidth:300},children:[e(t,{width:75,height:75,radius:"full"}),n("div",{style:{display:"flex",flexDirection:"column",flex:1,justifyContent:"space-between"},children:[e(t,{height:18}),e(t,{height:18}),e(t,{height:18})]})]}),n("div",{style:{display:"flex",gap:12,flexDirection:"column",marginTop:12,maxWidth:300},children:[e(t,{height:100}),e(t,{}),e(t,{}),e(t,{})]})]}),"Compound"),S=["Primary","Circle","Retangle","Compound"];export{y as Circle,f as Compound,g as Primary,x as Retangle,S as __namedExportsOrder,u as default};
//# sourceMappingURL=skeleton.stories-ca81ed62.js.map
