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
          Name: <a href={external_url}>{title}</a>
        </Content>
        <Content>
          GitHub:<a href={external_url}>Link</a>
        </Content>
        <Content>
          <a
            href={`https://testnets.opensea.io/assets/rinkeby/${address}/${id.substr(
              -1
            )}`}
          >
            test
          </a>
        </Content>
        {/* <Content>
          <a href={`https://etherscan.io/token/${address}`}>test</a>{' '}
        </Content>  */}
        {/* <Content>{nftSmartContact.slice(0, 20) + '....'}</Content> */}
        {/* <p>{description ? description.slice(0, 200) : ''}</p> */}
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

// const ContainerImg = styled.img`
//   width: 150px;
//   height: 150px;
//   border-radius: 20px;
// `;

export default NftCard;
