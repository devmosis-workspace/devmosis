import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const pageList = [
  { path: "/", title: "Tx Playground" },
  { path: "/chains", title: "Add chains to Keplr" },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <Container>
      <LogoBox>
        <Image src="/badkids-2646.png" alt="logo" width={30} height={30} />
        <Logo>DEVMOS.IS</Logo>
      </LogoBox>

      <Menu>
        {pageList.map(({ path, title }) => {
          const isActive = pathname === path;

          return (
            <LinkButton key={path} href={path} isActive={isActive}>
              <LinkText>{title}</LinkText>
            </LinkButton>
          );
        })}
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 220px;
  background-color: #242731;
  z-index: 100;
  border-right: 1px solid rgba(228, 228, 228, 0.1);

  display: flex;
  flex-direction: column;

  padding: 0 20px;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const Logo = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-left: 8px;
`;

const Menu = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const LinkButton = styled(Link)<{isActive: boolean}>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 20px;
  border-radius: 12px;
  margin-bottom: 4px; 

  background-color: ${({ isActive }) => isActive ? "#6C5DD3" : "transparent"};
  color: ${({ isActive }) => isActive ? "#fff" : "#babac2"};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    color: #fff
  }
`;

const LinkText = styled.p`
  font-size: 14px;
  font-weight: 600;
`;
