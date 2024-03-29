'use client'
import { CircularProgress } from "@nextui-org/react";
const Graphic = ({ xp }: { xp: string }) => {
    return (
        <CircularProgress
            aria-label="Loading..."
            size="lg"
            value={Number(xp)}
            color="secondary"
            maxValue={608}
            showValueLabel={true}
            formatOptions={{ notation: 'standard' }}
        />
    )
}
export default Graphic;