import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatButtonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  kind: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  kind: 'secondary',
};
