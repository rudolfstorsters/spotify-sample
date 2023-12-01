import { Link } from "react-router-dom"

interface ResultItemProps {
    index: number;
    imageUrl: string;
    name: string;
    linkPath: string;
}

export const ResultItem = (props: ResultItemProps) => {
    return (
        <Link
            style={{ textDecoration: 'none', width: 'inherit' }}
            to={props.linkPath}>
            <div>
                <div className='Card'>
                    <img
                        className="imgStyle"
                        src={props.imageUrl}
                        alt='' />
                    <strong style={{ textDecoration: 'none', }}>{props.name}</strong>
                </div>
            </div>
        </Link>
    )
}