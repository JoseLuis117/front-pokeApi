import { Progress } from "@nextui-org/react"
const Stats = ({value}:{value:number}) => {
    return (
        <Progress
            classNames={{
                base: "w-full",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
            }}
            aria-label="Loading..."
            value={70}
            maxValue={200}
        />
    )
}
export default Stats;