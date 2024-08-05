import { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { ICONS } from "@app/utils/constants/icons";

interface GridProps {
    className?: string;
    image: string;
    place: string;
    name: string;
}

const Grid = ({className, image, place, name}: GridProps) => {
    return (
        <div className={className}>
            <div>
                <Image 
                src={image} 
                alt={"image"}
                width={450}
                height={450}

                className="rounded-xl"
                />
                <div className="flex flex-col gap-1 -mt-20 px-4 text-primary-foreground">
                    <p className="text-4xl font-semibold">
                        {name}
                    </p>
                    <div className="flex gap-1">
                        <ICONS.place />
                        <p className="-mt-1">{place}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Grid;