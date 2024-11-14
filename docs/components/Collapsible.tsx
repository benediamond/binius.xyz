import * as React from 'react'

export default function Card({ children }: { children: React.ReactNode }) {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className="space-y-3 text-md"
      onClick={() => {
        setToggle((toggle) => !toggle);
      }}
    >
      {toggle ? children : "See more..."}
    </div>
  );}
