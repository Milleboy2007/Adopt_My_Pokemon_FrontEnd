import { Outlet, useOutletContext } from 'react-router-dom'
import './ProfileLayout.css'
import HeaderUser from '../../components/General/HeaderUser'
import Footer from '../../components/General/Footer'

function ProfileLayout(){
    const { user } = useOutletContext();
    let pokemons = user?.pokemons ?? [];
    
    return(
        <div className='profil-layout'> 
            <HeaderUser user={user}/>
            <main>
                <Outlet context={{user, pokemons}}/>
            </main>
        </div>
    )
}

export default ProfileLayout