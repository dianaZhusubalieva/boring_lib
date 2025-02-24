import React, { lazy, useState } from "react";

const Component1 = lazy(() => import("components/tabs/Component1"));
const Component2 = lazy(() => import("components/tabs/Component2"));

const tabs = [
  { label: "tab1", key: "tab1", component: Component1 },
  { label: "tab2", key: "tab2", component: Component2 },
];

const TabList = ({ activeTab, onTabChange }: any) => {
  return (
    <>
      {tabs.map(({ label, key }) => (
        <button
          key={key}
          style={{ background: key === activeTab ? "black" : "yellow" }}
          onClick={() => onTabChange(key)}
        >
          {label}
        </button>
      ))}
    </>
  );
};

const Tabs = () => {
  const [currentTabKey, setCurrentTabKey] = useState("tab1");
  const handleTabChange = (key: string) => {
    setCurrentTabKey(key);
  };

  const Component = tabs.find((tab) => tab.key === currentTabKey)?.component;
  return (
    <div>
      <div>
        <TabList activeTab={currentTabKey} onTabChange={handleTabChange} />
        {Component && React.createElement(Component)}
      </div>
    </div>
  );
};

export default Tabs;
