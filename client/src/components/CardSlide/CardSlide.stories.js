import CardSlide from "./CardSlide";


export default {
  title: 'components/CardSlide',
  component: CardSlide,
};

const Template = (args) => (
<CardSlide {...args} />
);

export const Default = Template.bind({});