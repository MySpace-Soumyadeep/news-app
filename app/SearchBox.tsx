'use client';

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchBox() {
    const [inputValue, setInputValue] = useState("")
    const router = useRouter();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!inputValue) return;

        router.push(`/search?term=${inputValue}`);
    }
    return (
        <form
            className="max-w-6xl mx-auto flex justify-between items-center px-5"
            onSubmit={handleSearch}
        >
            <input
                type="text"
                placeholder="Search Keywords..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400"
            />
            <button
                type="submit"
                disabled={!inputValue}
                className="text-orange-400 disabled:text-gray-400"
            >Search</button>
        </form>
    )
}

export default SearchBox