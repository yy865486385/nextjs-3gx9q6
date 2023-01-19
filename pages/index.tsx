import MainLayout from './components/MainLayout';
import HomeLayout from './components/HomeLayout';
import { useState } from 'react';
import type { ReactElement } from 'react'
// import NestedLayout from '../components/nested-layout'

export default function HomePage() {

  const [content,setContent] = useState(<div>test</div>);

  const menuItems = [
    {
      key: '1',
      icon: 'UploadOutlined',
      label: 'nav 1',
      children: [
        {
          key: '1.1',
          icon: '',
          label: 'nav 1.1',
        },
      ],
    },
    {
      key: '2',
      icon: 'UserOutlined',
      label: 'nav 2',
    },
    {
      key: '3',
      icon: 'VideoCameraOutlined',
      label: 'nav 3',
    },
  ]

  return (
    <div>
      <HomeLayout 
      content={content}
      menuItems={menuItems} 
      onClick={(e)=>handleClcik(e)}
       />
    </div>
  );

  //click menu change the content
  function handleClcik(e){
    console.log(e)
    setContent(<div>{e.key}</div>)
  }
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}
