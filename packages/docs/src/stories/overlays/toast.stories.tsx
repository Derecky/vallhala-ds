import { Button, Toast, ToastProps, ToastProvider, useToast } from "@devna-ds/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Overlay/Toast",
  component: Toast,
  argTypes: {
    position: {
      options: ['bottom-right', 'bottom-center', 'bottom-left', 'top-right', 'top-center', 'top-left'],
      control: { type: "inline-radio"}
    },
    type: {
      options: ["primary", "informative", "positive", "notice", "negative"],
      control: { type: "select" },
    },
    background: {
      options: ["on", "off"],
      control: { type: "select" },
    },
   
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: `
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
				`,
      },
    },
  },
} as ComponentMeta<typeof Toast>;

const Trigger = (props: ToastProps) => {
  const { handleOpen } = useToast();
  return <Button onClick={() => handleOpen(props)}>Toast</Button>;
};

const Template: ComponentStory<typeof Trigger> = ({
  type,
  background,
  dismissible,
  content,
  position,
}) => {
  return (
		<ToastProvider>
			<Trigger
				type={type}
				background={background}
				dismissible={dismissible}
				content={content}
				position={position}
			/>
		</ToastProvider>
  );
};

export const ToastStory = Template.bind({});
ToastStory.args = {
  type: "primary",
  background: "on",
  dismissible: true,
  content: "I'm a toast",
  position: 'bottom-right'
};