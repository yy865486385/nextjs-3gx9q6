import { Button } from 'antd';
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

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnText: 'btnText',
    };
  }

  handleClick() {
    alert(1);
    this.setState({
      btnText: 'newText',
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Next.js!</h1>
        <h2>{this.state.btnText}</h2>
        <Button type="link" href="./about/1">
          go to about
        </Button>
        <Button type="primary" onClick={() => this.handleClick()}>
          {this.state.btnText}
        </Button>
      </div>
    );
  }
}
