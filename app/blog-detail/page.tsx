/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Album {
    idAlbum: string;
    strAlbum: string;
    strArtist: string;
    intYearReleased: string;
    strAlbumThumb: string;
    strDescriptionEN: string;
}

  const AlbumsPage: React.FC = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        const fetchdata = async () => {
            const res = await fetch('https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024');
            const data = await res.json();
          
            setAlbums(data.album || []);
        }

        //fetchdata();
    }, []);

    return (
        <>
        <div className="sidebar">
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>

        <div className="content">
            <div className="container mx-auto p-4">
                <h1 className="text-4xl mb-4">Albums</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {albums.map((album:Album) => (
                        <div key={album.idAlbum} className="bg-white shadow-md rounded-lg overflow-hidden">
                            {album.strAlbumThumb && (
                            <Image src={album.strAlbumThumb} alt={album.strAlbum} className="w-full h-48 object-cover" width={200} height={200} />
                            )}
                            <div className="p-4">
                                <h2 className="text-xl font-bold">{album.strAlbum}</h2>
                                <p className="text-gray-700">{album.strArtist}</p>
                                <p className="text-gray-500">Released: {album.intYearReleased}</p>
                                <p className="mt-2 text-gray-600">{album.strDescriptionEN}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default AlbumsPage;