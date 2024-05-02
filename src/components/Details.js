
const Details = ({id, fullname, dob, math, liter, eng}) => {
    
    return (
        <div className="information">
            <ul>
                <li>Mã sinh viên: {id}</li>
                <li>Họ tên: {fullname}</li>
                <li>Ngày sinh: {dob}</li>
            </ul>
            <table>
                <tr>
                    <th>Điểm toán</th>
                    <th>Điểm văn</th>
                    <th>Điểm anh</th>
                    <th>Tổng điểm</th>
                </tr>
                <tr>
                    <td>{math}</td>
                    <td>{liter}</td>
                    <td>{eng}</td>
                    <td>
                        {math + liter + eng}
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Details;