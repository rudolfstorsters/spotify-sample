import Card from '../card/Card';
import { Audio } from 'react-loader-spinner'
import TextInput from "../textInput/TextInput";
import './MainContainer.css'
import { useSelector } from "react-redux"

export const MainContainer = () => {
    const isLoading = useSelector((state: any) => state.spotify.isLoading)
    return (
        <>
            <div className='MainContainer'>
                <TextInput />
                <div className='LoadingIndStyle'>
                    {isLoading && <Audio />}
                </div>
                <Card />
            </div>
        </>
    )
}
export default MainContainer