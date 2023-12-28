'use client';

import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';

import { IImagePicker } from '@/types';

import styles from './ImagePicker.module.scss';

const ImagePicker: React.FC<IImagePicker> = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null,
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    inputRef.current?.click();
  };

  const handlePickedImageChange = ({
    currentTarget: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    const file = files ? files[0] : null;

    if (!file) {
      setPickedImage(null);

      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          id={name}
          name={name}
          type="file"
          accept="image/png image/jpeg"
          required
          ref={inputRef}
          onChange={handlePickedImageChange}
          className={styles.input}
        />
        <div className={styles.preview}>
          {pickedImage ? (
            <Image
              src={pickedImage as string}
              fill
              alt="Image selected by user"
            />
          ) : (
            <p>No Image selected!</p>
          )}
        </div>
        <button type="button" className={styles.button} onClick={clickHandler}>
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
