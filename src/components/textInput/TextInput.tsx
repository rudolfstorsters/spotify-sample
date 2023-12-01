import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { requestSearchSpotify } from "../../core/app/spotify/spotifyActions";

import './TextInput.css'

export const TextInput = () => {
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchTerm.length > 0) {
                dispatch(requestSearchSpotify(searchTerm));
            }
        }, 500)

        return () => clearTimeout(delayDebounceFn)
    }, [dispatch, searchTerm])

    const onClear = () => {
        setSearchTerm('');
    };
    return (
        <div className="InputMainContainer" >
            <input
                value={searchTerm}
                className="inputStyle"
                type="text"
                placeholder="  Search for music, artists & albums "
                onChange={(e) => setSearchTerm(e.target.value)}>
            </input>
            <CiSearch className="SearchIcon" />
            <MdClose onClick={onClear} className="CloseIcon" />
        </div>
    )
}
export default TextInput