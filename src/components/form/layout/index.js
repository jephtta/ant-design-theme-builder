import React from 'react';
import { Form, Input, Button, Radio } from 'antd';
const FormItem = Form.Item;

class FormLayoutDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }
  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }
  render() {
    const { formLayout } = this.state;
    const formItemLayout = formLayout === 'horizontal' ? {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    } : null;
    const buttonItemLayout = formLayout === 'horizontal' ? {
      wrapperCol: { span: 14, offset: 4 },
    } : null;
    return (
      <div>
        <Form layout={formLayout}>
          <FormItem
            label="Form Layout"
            {...formItemLayout}
          >
            <Radio.Group defaultValue="horizontal" onChange={this.handleFormLayoutChange}>
              <Radio.Button value="horizontal">Horizontal</Radio.Button>
              <Radio.Button value="vertical">Vertical</Radio.Button>
              <Radio.Button value="inline">Inline</Radio.Button>
            </Radio.Group>
          </FormItem>
          <FormItem
            label="Field A"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem
            label="Field B"
            {...formItemLayout}
          >
            <Input placeholder="input placeholder" />
          </FormItem>
          <FormItem {...buttonItemLayout}>
            <Button type="primary" size="large">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default function DemoComponent_form_layout() {
return(<FormLayoutDemo />);
};

export const demo = <DemoComponent_form_layout key="DemoComponent_form_layout" />;
