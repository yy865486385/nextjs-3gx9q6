import { Button, Input } from 'antd';
import React from 'react';

type MyState = {
  btnText: string;
  inputVal?: string;
};
//class component
export default class HomePage extends React.Component<{}, MyState> {
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
