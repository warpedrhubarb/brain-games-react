import React, { useState } from 'react';
import { Form } from "./Form";
import { calcData } from '../games/calc';
import { evenData } from '../games/even';
import { gcdData } from '../games/gcd';
import { primeData } from '../games/prime';
import { progressionData } from '../games/progression';
import { uniqueId } from 'lodash';
import {
  Tabs,
  Tab,
  TabBody,
  Window,
  WindowHeader,
  WindowContent,
} from 'react95';

const calcForm = Form(calcData);
const evenForm = Form(evenData);
const gcdForm = Form(gcdData);
const primeForm = Form(primeData);
const progressionForm = Form(progressionData);

export const TabsContent = () => {
  const [state, setState] = useState({
    activeTab: calcForm,
  });

  const handleChange = (e, value) => setState({
    activeTab: value,
  });

  const { activeTab } = state;
  return (
    <Window id="ani" style={{width: 380}} className="position-absolute">
      <WindowHeader>Welcome to the Brain Games!</WindowHeader>
      <WindowContent>
        <Tabs rows={2} value={activeTab} onChange={handleChange}>
          <Tab id={uniqueId()} value={calcForm}>Basic</Tab>
          <Tab id={uniqueId()} value={evenForm}>Even</Tab>
          <Tab id={uniqueId()} value={gcdForm}>GCD</Tab>
          <Tab id={uniqueId()} value={primeForm}>Prime</Tab>
          <Tab id={uniqueId()} value={progressionForm}>Missing</Tab>
        </Tabs>
        <TabBody className="">
          {activeTab}
        </TabBody>
      </WindowContent>
    </Window>
  );
};

TabsContent.story = {
  name: 'default'
};
