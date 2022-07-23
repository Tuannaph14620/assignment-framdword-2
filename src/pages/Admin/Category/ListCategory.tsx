import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Typography, Button, Table, Popconfirm } from 'antd';
import { Link } from 'react-router-dom'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
const { Paragraph } = Typography
import type { ColumnsType } from 'antd/es/table';

import { listCate } from "../../../api/category";

interface DataType {
    id?: number
    name: string;
}
const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'index',
        key: 'index',
        render: index => <a>{index +1}</a>,
    },
    {
        title: 'Tên danh mục',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    
];



const ListCategoryPage = () => {
    const [dataTable, setDataTable] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await listCate()        
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
                    Categories
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

export default ListCategoryPage