import React from "react";
import PageClient from "./pageClient"

import photos from "@/components/gallery/photos";
import fetchFiles, { transformResponse } from "../../src/components/fetchFiles"
import Gallery from "@/components/gallery/Gallery";


async function Page() {



    // const files = await fetchFiles("image")
    // const photos = transformResponse(files);
    console.log(photos)



    return (
        <>
            <div
                className="flex flex-col">
                <div className="w-1/2 absolute right-0">

                    <Gallery
                        photos={photos} />
                </div>

                <PageClient photos={photos} />

            </div>

        </>
    )
}

export default Page