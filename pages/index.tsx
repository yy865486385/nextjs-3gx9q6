import { Button, Input } from 'antd';
import { type } from 'os';
import React, { useState } from 'react';

// export default function HomePage() {
//   const [btnText, setbtnText] = useState('btnText');

//   function handleClick() {
//     alert(1);
//     setbtnText('new btnText');
//   }

//   return (
//     <div>
//       <h1>Welcome to Next.js!</h1>
//       <h2>{btnText}</h2>
//       <Button type="link" href="./about/1">
//         go to about
//       </Button>
//       <Button type="primary" onClick={() => handleClick()}>
//         {btnText}
//       </Button>
//     </div>
//   );
// }

type MyState = {
  btnText: string;
  inputVal?: string;
};

export default class HomePage extends React.Component<{}, MyState> {
  inputVal: string = null;

  constructor(props) {
    super(props);
    this.state = { btnText: 'btnText', inputVal: null };
  }

  render() {
    const { btnText, inputVal } = this.state;
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
          onChange={(e) => this.handleInputChange(e)}
        ></Input>
        <Button type="primary" onClick={() => this.handleClick()}>
          {btnText}
        </Button>
      </div>
    );
  }

  handleInputChange(e): void {
    this.setState({
      inputVal: e.target.value,
    });
  }

  handleClick() {
    const inputVal = this.state.inputVal;
    this.setState({
      btnText: inputVal,
    });
  }
}
