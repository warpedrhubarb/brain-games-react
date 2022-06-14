import React, { useState, useEffect } from 'react';
import { startCalc } from '../games/calc';
import { startEven } from '../games/even';
import { startGcd } from '../games/gcd';
import { startPrime } from '../games/prime';
import { startProgression } from '../games/progression';
import { uniqueId } from 'lodash';
import {
  Tabs,
  Tab,
  TabBody,
  Window,
  WindowHeader,
  WindowContent,
} from 'react95';

const calc = startCalc();
const even = startEven();
const gcd = startGcd();
const prime = startPrime();
const progression = startProgression();

export const TabsContent = () => {
  const [state, setState] = useState({
    activeTab: calc,
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
          <Tab value={calc}>Basic</Tab>
          <Tab value={even}>Even</Tab>
          <Tab value={gcd}>GCD</Tab>
          <Tab value={prime}>Prime</Tab>
          <Tab value={progression}>Missing</Tab>
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
