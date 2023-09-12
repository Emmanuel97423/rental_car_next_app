import { MouseEventHandler } from "react";

export interface ComponentCustomButtonProps {
    title: string;
    btnType?:"button" | "submit";
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>

}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer:(manufacturer:string)=>void;
}