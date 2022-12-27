import { PlaybackState } from '@scp/types';
import { FastAverageColor } from 'fast-average-color';
import { useEffect, useState } from 'react';

const useAverageColor = (
  image: HTMLImageElement | null,
  playState: PlaybackState,
): [string | null, boolean] => {
  const [color, setColor] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [newImage, setNewImage] = useState<HTMLImageElement | null>(null);

  const getImageColor = async () => {
    if (!newImage) return;

    new FastAverageColor().getColorAsync(newImage).then(c => {
      setColor(c.rgba);
      setIsDark(c.isDark);
    });
  };

  useEffect(() => {
    if (!image) return;

    const anonImage = new Image();
    setNewImage(anonImage);
    anonImage.crossOrigin = 'Anonymous';
    anonImage.addEventListener('load', getImageColor, false);
    anonImage.src = image.src;

    // eslint-disable-next-line consistent-return
    return () => {
      anonImage.removeEventListener('load', getImageColor, false);
    };
  }, [image, playState]);

  return [color, isDark];
};

export default useAverageColor;
