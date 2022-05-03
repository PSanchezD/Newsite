import Nav from './navbar'
import Sidebar from './sidebar'
import HomePage from '../Page/homePage'
import Footer from './Footer'


function Main (){
    return (
        <>
            <div>
                <Nav/>
                <div className='content'>
                    <Sidebar/>
                    <HomePage/>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default Main 