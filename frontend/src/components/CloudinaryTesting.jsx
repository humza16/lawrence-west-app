import React from 'react';
import { Cloudinary } from "@cloudinary/url-gen";

const CloudinaryTesting = () => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'demo'
        }
    });
    return (
        <div>CloudinaryTesting</div>
    )
}

export default CloudinaryTesting