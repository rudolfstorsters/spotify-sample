import MainContainer from "../mainContainer/MainContainer"
import './MainPage.css'

export const MainPage = () => {
    return (
        
        <div className="MainPage">
            <div style={{
                flexDirection: "column"
            }}>
                <MainContainer />      
            </div>
        </div>
    )
}
export default MainPage