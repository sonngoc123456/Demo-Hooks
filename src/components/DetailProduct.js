import {useLocation,Link} from "react-router-dom";


function DetailProduct() {
    const {state} = useLocation()
    return (
        <di>
            <h1>Chi tiết sản phẩm</h1>
            <p>Tên sản phẩm : {state.name}</p>
            <p>Giá : {state.price}</p>
            <p>Tồn Kho : {state.stock}</p>
            <p>Mô tả : {state.description}</p>
            <button><Link to='/'>Danh sách sản phẩm</Link></button>
        </di>
    )
}

export default DetailProduct;