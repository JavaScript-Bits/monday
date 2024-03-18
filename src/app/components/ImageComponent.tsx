import Image from "next/image";

interface ImageComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width = 50,
  height = 50,
  className = "",
}) => (
  <Image src={src} alt={alt} width={width} height={height} className={className} />
);

export default ImageComponent;
