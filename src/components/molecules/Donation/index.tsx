import { useState } from "react";
import { FloatingButton, Vaki } from "../../atoms";

export default function Donation() {

  const [open, setOpen] = useState(false);

  return (
    <article>
      <FloatingButton
        icon={
          <img src="https://downloads.intercomcdn.com/i/o/518371/a591e3116446fefb49b83838/bb5df60431ec6e8db3e0f47618d7b32c.png" alt="" height={50}/>
        }
        color="var(--green)"
        onClick={() => setOpen(!open)}
      />
      {
        open &&
        <div style={{ position: 'fixed', bottom: 100, right: 100 }}>
          <Vaki style={{ border: 'none', borderRadius: 10 }}/>
        </div>
      }
    </article>
  )
}