"use client";
import React, { useState } from "react";
import Link from "next/link";

const Shorten = ({ host }) => {
    const [url, setUrl] = useState("");
    const [shorturl, setShortUrl] = useState("");
    const [generated, setGenerated] = useState("");

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            url: url,
            shorturl: shorturl,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                alert(result.message);
                setUrl("");
                setShortUrl("");
                setGenerated(`${host}/${shorturl}`);
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="flex justify-center items-center px-4 container mx-auto">
            <div className="w-full max-w-md bg-purple-100 p-6 sm:p-8 my-12 sm:my-16 rounded-lg shadow-md overflow-hidden">
                <h1 className="font-bold text-xl text-center mb-4">
                    Generate your short URLs here
                </h1>
                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        className="w-full focus:outline-purple-500 rounded-md px-4 py-2"
                        placeholder="Enter your URL"
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                    />
                    <input
                        type="text"
                        className="w-full focus:outline-purple-500 rounded-md px-4 py-2"
                        placeholder="Enter your preferred short URL"
                        onChange={(e) => setShortUrl(e.target.value)}
                        value={shorturl}
                    />
                    <button
                        onClick={generate}
                        className="bg-purple-500 text-white shadow-lg px-6 py-2 rounded-lg font-bold mt-2 hover:bg-purple-600 transition"
                    >
                        Generate
                    </button>

                    {generated && (
                        <code className="block bg-white text-purple-700 rounded-md p-2 mt-3 text-center break-all">
                            <Link href={generated}>Your link is: {generated}</Link>
                        </code>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shorten;

