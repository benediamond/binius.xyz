import * as React from 'react'

export default function Card({ children }: { children: React.ReactNode }) {
  const childrenArray = React.Children.toArray(children);
  const headerContent = childrenArray[0];
  const bodyContent = childrenArray.slice(1);

  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="space-y-3 text-md"
      onClick={() => {
        setToggle((toggle) => !toggle);
      }}
    >
      {headerContent}
      {toggle ? bodyContent : "Click to see more..."}
    </div>
  );}
