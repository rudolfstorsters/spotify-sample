import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import './Card.css'

export const Card = () => {

    const results = useSelector((state: any) => state.spotify.results)
    //console.log(results)
    return (
        results && <div className="CardFix">
            <h1> {results?.artists?.items?.length === 0 && "No results for"} Artists</h1>
            {results?.artists?.items?.map((artist: any, index: number) => {
                return (
                    <Link
                        style={{ textDecoration: 'none' }}
                        to={`/view/artists/${index}`}>
                        <div className='Card'>
                            <img className="imgStyle" src={artist.images?.[0]?.url} alt='' />
                            <strong>{artist.name}</strong>
                        </div>
                    </Link>
                )
            })}
            <h1>{results?.albums?.items?.length === 0 && "No results for"} Albums</h1>
            {results?.albums?.items?.map((artist: any, index: number) => {
                return (
                    <Link
                        style={{ textDecoration: 'none' }}
                        to={`/view/albums/${index}`}>
                        <div className='Card'>
                            <img className="imgStyle" src={artist.images?.[0]?.url} alt='' />
                            <strong>{artist.name}</strong>
                        </div>
                    </Link>
                )
            })}
            <h1>{results?.tracks?.items?.length === 0 && "No results for"} Songs</h1>
            {results?.tracks?.items?.map((artist: any, index: number) => {
                return (
                    <Link
                        style={{ textDecoration: 'none', width: 'inherit' }}
                        to={`/view/tracks/${index}`}>
                        <div>
                            <div className='Card'>
                                <img
                                    className="imgStyle"
                                    src={artist.images?.[0]?.url ?? artist?.album?.images?.[0]?.url}
                                    alt='' />
                                <strong style={{ textDecoration: 'none', }}>{artist.name}</strong>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Card