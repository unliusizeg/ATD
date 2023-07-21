import React from 'react';
import { Button, Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
        İnstagram
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.snapchat.com/tr-TR">
        SnapChat
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">
        Youtube
      </a>
    ),
  },
];
const Header = () => (
  <Space direction="vertical">
      <Link to={"/header"}>
        Tabloya git
      </Link>
      
  </Space>
);
export default Header