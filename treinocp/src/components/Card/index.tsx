type CardProps = {
    Nome: string;
    Rm: number;
    Img: string;
    Githubi: string;
    Linkdni: string;

}

const Card = ({Nome, Rm, Img, Githubi, Linkdni} : CardProps) => {

    return(
        <div className="card">

            <div className="cardImagem">
                <img src={Img} />
            </div>

            <div className="cardInfos">
                <div className="textos">
                    <h1>{Nome}</h1>
                    <h1>{Rm}</h1>
                </div>

                <div className="redeS">
                    <img src="https://e1.pxfuel.com/desktop-wallpaper/374/818/desktop-wallpaper-emo-hello-kitty-kuromi-pfp-cute-emo-pfp-thumbnail.jpg"/>
                    <a href={Githubi}></a>

                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcreatecore.tumblr.com%2Fpost%2F677201963816992768%2Fkuromi-icons-for-xyz-shenanigans-likerb-if&psig=AOvVaw0CnZbexLvQuL5__P5hlKXO&ust=1709927746094000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIiTsLH34oQDFQAAAAAdAAAAABAI"/>
                    <a href={Linkdni}></a>
                </div>

            </div>

        </div>
    )
}

export default Card;