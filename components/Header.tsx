import Image from 'next/image';

const Header: React.FC = () => (
  <>
    <div
      style={{
        aspectRatio: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.10)',
        position: 'relative',
        margin: '0 auto',
      }}>
      <Image src="/images/logo.png" layout="fill" objectFit="contain" alt="" />
    </div>
    <h1>Welcome to this NextJS Course!</h1>
  </>
);

export default Header;
