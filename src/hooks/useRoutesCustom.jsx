import React from 'react'
import { useRoutes } from 'react-router-dom'
import PageNotFound from '../components/PageNotFound/PageNotFound'
import { path } from '../common/path'
import HomePage from '../pages/HomePage/HomePage'
import ListKhoaHoc from '../pages/ListKhoaHoc/ListKhoaHoc'
import DanhMucKhoaHoc from '../pages/DanhMucKhoaHoc/DanhMucKhoaHoc'
import TimKiemKhoaHoc from '../pages/TimKiemKhoaHoc/TimKiemKhoaHoc'

const useRoutesCustom = () => {
    const routes = useRoutes([
        {
            path: path.homPage,
            element: <HomePage />,
            children: [
                {
                    index: true,
                    element: <ListKhoaHoc />
                },
                {
                    path: path.danhMucKhoaHoc,
                    element: <DanhMucKhoaHoc />
                },
                {
                    path: path.timKiemKhoaHoc,
                    element: <TimKiemKhoaHoc />
                }
            ]
        },
        {
            path: path.pageNotFound,
            element: <PageNotFound />

        }
    ])
    return routes

}

export default useRoutesCustom