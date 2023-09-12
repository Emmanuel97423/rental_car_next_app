"use client";
import { useState } from "react";
import { ComponentSearchManufacturer } from "@/components";

const ComponentSearchBar = () => {
  const [manufacturer, setManufacturer] = useState<string>('');
    const handleSearch = () => {}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <ComponentSearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            />
        </div>
    </form>
  )
}
export default ComponentSearchBar;