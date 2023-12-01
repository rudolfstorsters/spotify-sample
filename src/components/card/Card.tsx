import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import './Card.css'
import { ResultItem } from "./ResultItem/ResultItem";

export const Card = () => {

    const results = useSelector((state: any) => state.spotify.results)
    return (
        results && <div className="CardFix">
            <h1> {results?.artists?.items?.length === 0 && "No results for"} Artists</h1>
            {results?.artists?.items?.map((artist: any, index: number) => {
                return (
                    <ResultItem
                        key={index + "albums"}
                        linkPath={`/view/artists/${index}`}
                        index={index}
                        name={artist.name}
                        imageUrl={artist.images?.[0]?.url}
                    />
                )
            })}
            <h1>{results?.albums?.items?.length === 0 && "No results for"} Albums</h1>
            {results?.albums?.items?.map((artist: any, index: number) => {
                return (
                    <ResultItem
                        key={index + "albums"}
                        linkPath={`/view/albums/${index}`}
                        index={index}
                        name={artist.name}
                        imageUrl={artist.images?.[0]?.url}
                    />
                )
            })}
            <h1>{results?.tracks?.items?.length === 0 && "No results for"} Songs</h1>
            {results?.tracks?.items?.map((artist: any, index: number) => {
                return (
                    <ResultItem
                        key={index + "songs"}
                        linkPath={`/view/tracks/${index}`}
                        index={index}
                        name={artist.name}
                        imageUrl={artist.images?.[0]?.url ?? artist?.album?.images?.[0]?.url}
                    />
                )
            })}
        </div>
    )
}

export default Card