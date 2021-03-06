import React from 'react';
import { Steps } from 'antd';
const Step = Steps.Step;

export default function DemoComponent_steps_progress_dot() {
return(
  <Steps progressDot current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
);
};

export const demo = <DemoComponent_steps_progress_dot key="DemoComponent_steps_progress_dot" />;
