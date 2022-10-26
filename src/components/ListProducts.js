import * as React from 'react';
import {Link, useNavigate} from "react-router-dom";

import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import {Button} from "@mui/material";



function ListProducts() {
    const navigate = useNavigate()

    const [state, setState] = useState({ListProducts:[]});
    const [number, setNumber] = useState(0)


    const getData = async () => {
        return await axios.get('http://localhost:3001/products')
    }

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:3001/products/${id}`)
        setNumber(number+1)
    }


    useEffect(() => {
        getData().then(res =>{
            setState({ListProducts:res.data})
        }).catch(err => console.log(err.message))
    },[number])
console.log(state)

    return (
        <div>
            <h1>Danh Sách Sản Phẩm</h1>
            <button><Link to="/create">Thêm mới sản phẩm</Link></button>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>STT</TableCell>
                        <TableCell >Tên Sản Phẩm</TableCell>
                        <TableCell align="right">Giá</TableCell>
                        <TableCell align="right">Tồn Kho</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.ListProducts.map((item,index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{index+1}</TableCell>
                            <TableCell scope="row">{item.name}</TableCell>
                            <TableCell align="right">{item.price}</TableCell>
                            <TableCell align="right">{item.stock}</TableCell>
                            <TableCell align="right"><Button onClick={() =>navigate('/detail',{state:item})} variant="contained">Detail</Button></TableCell>
                            <TableCell align="right"><Button onClick={() =>navigate('/edit',{state:item})} variant="contained">Edit</Button></TableCell>
                            <TableCell align="right"><Button onClick={()=>deleteData(item.id)} variant="contained" color="success">Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>

    );
}

export default ListProducts;
