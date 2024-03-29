import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Typography, Button, Table, Space } from 'antd';
import { Link } from 'react-router-dom'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
const { Paragraph } = Typography
import type { ColumnsType } from 'antd/es/table';
import { getAll } from "../../../api/product";

interface DataType {
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
    image: string
}

const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'index',
        key: 'index',
        render: index => <a>{index +1}</a>,
    },
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Đặc điểm',
        dataIndex: 'feature',
        key: 'feature',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Giá khuyến mãi',
        dataIndex: 'saleOffPrice',
        key: 'saleOffPrice',
    },
    {
        title: 'Ảnh sản phẩm',
        dataIndex: 'image',
        key: 'image',
        render: text => <img src={'image'} alt="" />
    },
    {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (              
            <Space size="middle">
            <a href="admin/product/${}/edit">Update</a>
            <a>Delete</a>
          </Space>
            
        ),
      },
];



const ProductAdminPage = () => {
    const [dataTable, setDataTable] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAll()
                setDataTable(data.data)
            } catch (err) {

            }
        }
        fetchData()
    }, [])
    return (
        <>
            <Breadcrumb>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    Điện thoại
                </Typography.Title>
                <Link to="/admin/product/add">
                    <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
                </Link>
            </Breadcrumb>
            <Table columns={columns} dataSource={dataTable} />
        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export default ProductAdminPage