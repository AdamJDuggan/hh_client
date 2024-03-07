import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export default {
  title: 'Navbar',
  component: NavbarComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatToolbarModule, MatButtonModule, MatIconModule],
    }),
  ],
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  component: NavbarComponent,
  props: { ...args },
});

export const Primary = Template.bind({});
Primary.args = {};
