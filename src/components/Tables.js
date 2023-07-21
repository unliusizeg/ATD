import React, { useState } from 'react' 
import { Button, Dropdown, Modal, Space, Table, Tag,  MenuProps  } from 'antd';

const Tables = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
const columns = [
  {
    title: 'Ürün Bilgileri',
    dataIndex: 'image',
    key: 'image',
    render: (text) => (
      <div>
        <div className='container'>
        <img  className='img1' src='ht/zeka-oyunlari.s3-eu-west-1.amazonaws.com/s88hac2fdf444b1f0a29f097683c1ad4d4ff2041ff17.?1486040575' alt='img' />
        <p>Prof. Larue Walsh IV</p>
        <p>Stok Kodu:78954621deneme</p>
        </div>
        <div>
          
        </div>
      </div>
    )
  },
  {
    title: 'Barkod',
    dataIndex: 'age',
    key: 'age',
    render: () => <Button  color='' onClick={ showModal}>
    Barkodu Göster
   </Button>

  },
  {
    title: 'Kategori',
    dataIndex: 'category',
    key: 'category',
  },
  {

    title: 'Marka',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'Fiyat',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Stok',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: 'Durum',
    dataIndex: 'status1',
    key: 'status1',
    render: () =>  <Tag color="blue"> Revizyon Bekliyor</Tag>
  },


  {
    title: 'Yönet ',
    key: 'action',
    render: (_, record) => (
      <Button type='primary'  ghost onClick={showModal}>
       Yönet
      </Button>
    ),
  }
];
const data = [
  { 
    key: '1',
    name: 'John Brown',
    category: 'Yüzücü Mayosu',
    brand: 'Lowe Inc',
    model:'sed',
    price: 	50001,
    stock: 95,
    status:'',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    category: 'Yüzücü Mayosu',
    brand: 'Lowe Inc',
    model:'sed',
    price : 1883.79,
    stock: 55,
    status: '',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    category: 'Yüzücü Mayosu',
    brand: 'Lowe Inc',
    model:'sed',
    price: 1550.65,
    stock: 67,
    status:'',
    tags: ['cool', 'teacher'],
  },
  
];



const columns2 = [
  {
    key: '1',
    title: 'Renk',
   render:() => <>90E</>
  
},
   

 {
    key: '2',
    title: "Barkodlar",
    render: () => <p>1234567</p>
  },
  
]

const modalColumns = [
  {
    key: '1',
    title: 'Renk',
    render:() => <>asdasd</>
  },
  {
    key: '2',
    title: "Barkodlar",
  },
  
]

  return (
    <div>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Table style={{width : "500px"}} columns={columns2} dataSource={modalColumns} />
      </Modal>
      <Table columns={columns} dataSource={data} />;
    </div>
  )
}

export default Tables