import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box',
    cursor: 'grab' // Add grab cursor for draggable items
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const MediaCard = () => {

    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(prevFiles => [
                ...prevFiles,
                ...acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            ]);
        }
    });
    {
        files.map((file, index) => {
            console.log("file path", file);
        })
    }
    const thumbs = files.map((file, index) => (

        <div
            style={thumb}
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={(e) => handleDrop(e, index)}
        >
            <div style={thumbInner}>
                <img
                    src={file.preview || ''}
                    style={img}
                    alt={`preview-${index}`}
                    id={`image-dropzone-${index}`}
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('index', index.toString());
        e.target.style.opacity = '0.4';
    };

    const handleDragOver = (e, index) => {
        e.preventDefault();
        const draggedOverIndex = index;
        const draggedIndex = parseInt(e.dataTransfer.getData('index'));

        if (draggedIndex !== draggedOverIndex) {
            // Swap the positions of the dragged and dragged-over items
            const newFiles = [...files];
            [newFiles[draggedIndex], newFiles[draggedOverIndex]] = [newFiles[draggedOverIndex], newFiles[draggedIndex]];
            setFiles(newFiles);
        }
    };

    const handleDrop = (e, index) => {
        e.target.style.opacity = '1';
        e.preventDefault();
    };

    useEffect(() => {
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <section className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside style={thumbsContainer}>
                {thumbs}
            </aside>
        </section>
    );
};

export default MediaCard;
