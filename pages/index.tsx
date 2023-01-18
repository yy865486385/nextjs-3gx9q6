import { Button, Input } from 'antd';
import React, { useState } from 'react';

//function component
export default function HomePage() {
  const [btnText, setBtnText] = useState('btnText');
  const [inputVal, setInputVal] = useState(null);

  function handleClick() {
    setBtnText(inputVal);
  }

  function handleInputChange(e) {
    setInputVal(e.target.value);
  }

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Button type="link" href="./about/1">
        go to about
      </Button>
      <br />
      <Input
        placeholder="input new button text"
        value={inputVal}
        onChange={(e) => handleInputChange(e)}
      ></Input>
      <Button type="primary" onClick={() => handleClick()}>
        {btnText}
      </Button>
    </div>
  );
}
