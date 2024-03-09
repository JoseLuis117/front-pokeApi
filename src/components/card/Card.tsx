import Image from "next/image";
import "./style.css"
import { PokemonDataType } from "@/lib/types";
import TextGradient from "../textGradient";
const Card = ({ data }: { data: any }) => {
    return (
        <div className="card hover:cursor-pointer">
            <div className="content">
                <div className="back">
                    <div className="back-content">
                        <strong>{data.name}</strong>
                    </div>
                </div>
                <div className="front p-2 flex flex-col items-center justify-between gap-2">
                    <TextGradient fontSize="md" position="center" text={data.name.toUpperCase()} typeText="p"/>
                    <div className="img">
                        <Image width={100} height={100} src={data.sprites.other.dream_world.front_default} alt={data.name}></Image>
                    </div>

                    <div className="front-content">

                        <div className="description">

                            <div className="title">
                                <p className="title">
                                    <strong>Spaguetti Bolognese</strong>
                                </p>
                                <svg fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style={{ mixBlendMode: "normal" }} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset="0" strokeDasharray="" strokeMiterlimit="10" strokeLinejoin="miter" strokeLinecap="butt" strokeWidth="1" stroke="none" fillRule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path></g></g></svg>
                            </div>
                            <p className="card-footer">
                                30 Mins &nbsp; | &nbsp; 1 Serving
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card