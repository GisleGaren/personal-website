import "./SneakPeek.module.css";

type SneakPeekProps = {
    imgUrl: string;
}

export const SneakPeek = ({ imgUrl} : SneakPeekProps) => {

    return(
        <div className="imageContainer">
            <img src={imgUrl} />
        </div>
    )
}