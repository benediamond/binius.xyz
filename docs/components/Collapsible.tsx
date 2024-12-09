import * as React from 'react'
import Chevron from '../public/chevron.svg'

export default function Card({ children }: { children: React.ReactNode }) {
  const childrenArray = React.Children.toArray(children);
  const headerContent = childrenArray[0];
  const bodyContent = childrenArray.slice(1);

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="space-y-3 text-md">
      {headerContent}
      {isOpen && bodyContent}

      <div className="flex justify-center hover:cursor-pointer hover:bg-highlight py-3 transition-colors duration-300"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}>
        <img src={Chevron} className={`transition-transform duration-300 ${isOpen ? '-rotate-90' : 'rotate-90'}`} />
      </div>
    </div>
  );}
