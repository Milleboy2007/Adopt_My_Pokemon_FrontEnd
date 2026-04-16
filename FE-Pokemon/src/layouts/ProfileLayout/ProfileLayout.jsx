import { Outlet } from 'react-router-dom'
import './ProfileLayout.css'
import HeaderUser from '../../components/General/HeaderUser'

function ProfileLayout({user, pokemons}){
    return(
    <div>
        <HeaderUser user={user}/>
        <main>
            <Outlet context={{user, pokemons}}/>
        </main>
    </div>
    )
    
} export default ProfileLayout