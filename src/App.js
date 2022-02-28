import { useState } from "react";
const useTabs = (initTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
const content = [
  {
    tab: "Section1",
    content: "I'm Section1",
  },
  {
    tab: "Section2",
    content: "I'm Section2",
  },
];
const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
export default App;
