import styled from 'styled-components';

const NftCard = ({
  image,
  id,
  title,
  address,
  description,
  attributes,
  external_url,
  contractAddress,
}) => {
  return (
    <>
      <ImageCard>
        <Image key={id} src={image}></Image>
        <Content>
          Name: <Link href={external_url}>{title}</Link>
        </Content>
        <Content>
          Marketplace:
          <Link
            href={`https://testnets.opensea.io/assets/rinkeby/${address}/${id.substr(
              -1
            )}`}
          >
            Opensea
          </Link>
        </Content>
      </ImageCard>
    </>
  );
};

const ImageCard = styled.div`
  margin: 2rem;
  margin-left: auto;
  margin-right: auto;
  min-width: 80vw;
  max-width: 90vw;
  min-height: 65vh;

  top: 4%;
  left: 5%;
  background: #7728b5;
  border: black;
  border-radius: 30px;
`;

const Content = styled.p`
  color: white;
  margin-left: 3rem;
`;

const Image = styled.img`
  margin-left: 2.8rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  width: 250px;
  height: 250px;
  border-radius: 20px;
`;

const Link = styled.a`
  color: white;
  font-size: 1.5rem;
  margin-left: 2rem;
  text-decoration: none;
`;

export default NftCard;
