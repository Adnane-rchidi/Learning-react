import { useState } from "react";

const Simple = () => {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      style={{ backgroundColor: active ? "green" : "gray" }}
    >
      Button
    </button>
  );
};

export default Simple;