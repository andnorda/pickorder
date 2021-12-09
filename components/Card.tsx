import Image from "next/image";

const Card = ({
  name,
  image_uris,
  card_faces,
}: {
  name: string;
  image_uris: any;
  card_faces: any;
}) => (
  <Image
    src={image_uris?.normal ?? card_faces[0]?.image_uris?.normal}
    width={146 * 1.4}
    height={204 * 1.4}
    alt={name}
  />
);

export default Card;
