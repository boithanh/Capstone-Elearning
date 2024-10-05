import { Dropdown } from 'antd';
import React, { useEffect, useState } from 'react'
import useDebounce from '../../hooks/useDebounce';
import { khoaHocService } from '../../service/khoaHoc.service';
import { Link } from 'react-router-dom';

const WrapperSuggestCourse = ({ children }) => {
    const [items, setItems] = useState([]);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [value, setValue] = useState("");
    const debounceValue = useDebounce(value, 1000);
    const handleGetValueChildren = (valueChildrend) => {
        setValue(valueChildrend);
    }
    const cloneChildren = React.cloneElement(children, { setItems, setOpenDropdown, handleGetValueChildren });

    useEffect(() => {
        if (value) {
            khoaHocService.layKhoaHocTheoTen(value).then((res) => {
                // console.log(res);
                let newItems = res.data.slice(0, 4).map((item, index) => {
                    return {
                        key: index.toString(),
                        label: <Link to={`/chi-tiet?maKhoaHoc=${item?.maKhoaHoc}`} className='flex items-center space-x-10' onClick={() => {
                            setOpenDropdown(false);
                        }}>
                            <img src={item?.hinhAnh} alt="err" className='h-24 w-36' />
                            <div className='text-[#211C5B]'>
                                <h4 className='text-xl font-semibold'>{item?.tenKhoaHoc}</h4>
                                <p>{item?.luotXem} lượt xem</p>
                            </div>
                        </Link>
                    }
                })
                setItems(newItems);
                setOpenDropdown(true);
            }).catch((err) => {
                console.log(err);
                setOpenDropdown(false);
            })
        }
    }, [debounceValue]);


    return (
        <Dropdown
            menu={{
                items,
            }}
            open={openDropdown}>
            {cloneChildren}
        </Dropdown>
    )
}

export default WrapperSuggestCourse