import { Table, Popconfirm, Button } from 'antd';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Button type="link" href="./about">
        go to about
      </Button>
      <Button type="primary" danger onClick={click}>
        primary btn
      </Button>
    </div>
  );

  function click(e) {
    alert('click');
  }
}
