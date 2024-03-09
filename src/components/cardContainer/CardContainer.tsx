import Card from "../card/Card"
import { PokemonsDataType } from "@/lib/types";
const CardContainer = ({data}:{data:any[]})=>{
    return(
        <div className="grid justify-items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((data,index)=>(
                <Card key={index} data={data}></Card>
            ))}
        </div>
    )
}
export default CardContainer;