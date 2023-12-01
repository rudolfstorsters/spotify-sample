import { useSelector } from "react-redux";
import './viewPage.css';
import { Link, useParams } from "react-router-dom"

import { SpotifyState, Results } from "../../core/app/spotify/spotifyReducer";

export default function DetailView() {

    const results: Results | undefined = useSelector((state: { spotify: SpotifyState }) => state.spotify.results)

    const { section, index } = useParams()

    const item = (results as any)?.[section ?? ''].items[index ?? 0]
    if (!item) {
        window.location.replace('/');
    }

    const totalfollowers = item.followers?.total

    const imageSrc = item.images?.[0]?.url ?? item?.album?.images?.[0]?.url

    return (
        <div className="BackgroundContainer">
            <div className="imageSize">
                <img
                    className='songImage'
                    src={imageSrc}
                    alt="" />
                <div className="TextContainer">
                    <div className="InnerTextContainer">
                        <h1 className="TitleStyle">
                            {item.name}
                        </h1>
                        <div>
                            {totalfollowers && <h3 className="DescriptionStyle">
                                Total followers: &nbsp;
                                {totalfollowers}
                            </h3>}
                            {item?.genres?.length && <h4>
                                Genres: {item?.genres}
                            </h4>}
                            {item?.album?.name && <h3>
                                {item?.album?.name}
                            </h3>}
                            {item?.artists?.length && <h3>
                                Artists: {item?.artists.map((artist: any) => artist.name)}
                            </h3>}
                            {item?.release_date && <h4>
                                Release date: {item?.release_date}
                            </h4>}
                        </div>
                    </div>
                </div>
            </div>
            <Link
                to={'/'}
                className="LinkStyle">
                HOME
            </Link>
        </div>

    )
}