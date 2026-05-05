import { Outlet, useLoaderData } from 'react-router-dom'
import Header from '../../components/General/Header'
import Footer from '../../components/General/Footer'
import './MainLayout.css'

function MainLayout(){

    const {user} = useLoaderData()

    return(
        <div className='main-layout'>
            <Header user={user}/>
            <main>
                <Outlet context={{user}}/>
            </main>
            <Footer/>
        </div>
        )
} 

export default MainLayout