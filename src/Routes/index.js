import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages'
import ProjectPage from '../pages/Project/ProjectPage'

const MainRouter = () => {
    return (
        <Routes>
            <Route element={<HomePage/>} path={"/"}/>
            <Route element={<ProjectPage/>} path={"/project"} />
        </Routes>
    )
}

export default MainRouter