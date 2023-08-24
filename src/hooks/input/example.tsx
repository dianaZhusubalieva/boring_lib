import React from "react";
import { useInput } from "hooks/input/input";

const Example = () => {
  const email = useInput("", { minLength: 3 });
  const password = useInput("", { checkEmpty: true, minLength: 3 });
  return (
    <div >
      <input
        onBlur={(e) => email.onBlur(e)}
        value={email.value}
        onChange={email.onChange}
      />
      <input
        onBlur={(e) => email.onBlur(e)}
        value={password.value}
        onChange={password.onChange}
      />
    </div>
  );
};

export default Example;
