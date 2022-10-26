import {Box, Button, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import axios from "axios";

function EditProduct() {
    const [product, setProduct] = useState({})

    const navigate = useNavigate()

    const {state} = useLocation()



    const handleChange =(e) => {
        setProduct({...product,[e.target.name]:e.target.value})
    }

    const editProduct = async () => {
        const id = state.id
        return await axios.put(`http://localhost:3001/products/${id}`,product)
    }

    const handleSubmit = () => {
        editProduct().then(res =>console.log(res)).catch(err => console.log(err.message));
        navigate('/')
    }

    return (
        <>
            <Grid container item>
                <Grid item xs></Grid>
                <Grid item xs={5}>
                    <Paper elevation={3} sx={{padding: 2, marginTop: 10}}>
                        <Box component='form' sx={{
                            '& .MuiTextField-root': {m: 1, width: '25ch'},
                        }} onSubmit={handleSubmit} >
                            <h2 style={{textAlign: 'center'}}>Create a new product</h2>
                            <div style={{textAlign: 'center'}}>
                                <FormControl
                                    onChange={handleChange}
                                    fullWidth sx={{m: 1}}
                                    item xs={5}


                                >
                                    <InputLabel
                                        htmlFor="outlined-adornment-amount">Tên sản phẩm</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                                        label="Amount"
                                        name='name'

                                    />
                                </FormControl>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <TextField

                                    onChange={handleChange}
                                    label='Giá'
                                    required
                                    type='text'
                                    maxRows={6}
                                    name="price"

                                />
                                <TextField

                                    onChange={handleChange}
                                    label='Tồn kho'
                                    required
                                    type='text'
                                    maxRows={6}
                                    name="stock"

                                />
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <FormControl
                                    fullWidth sx={{m: 1}}
                                    item xs={5}
                                    onChange={handleChange}


                                >
                                    <InputLabel
                                        htmlFor="outlined-adornment-amount">Mô tả</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                                        label="description"
                                        name='description'

                                    />
                                </FormControl>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <Button variant='contained' color='success'
                                        sx={{marginTop: 5, alignItems: 'center'}} type='submit'
                                >
                                    Submit
                                </Button>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <Button
                                    onClick={() => navigate('/')}
                                    variant='outlined'
                                    color='success'
                                    sx={{marginTop: 1, alignItems: 'center'}}
                                >
                                    Cancel

                                </Button>
                            </div>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs></Grid>
            </Grid>
        </>
    )
}

export default EditProduct;