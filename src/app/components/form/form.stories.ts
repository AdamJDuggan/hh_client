import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { FormComponent } from './form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import '../../../styles.scss';

export default {
  title: 'Form',
  component: FormComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<FormComponent> = (args: FormComponent) => ({
  component: FormComponent,
});

export const Primary = Template.bind({});
Primary.args = {};
