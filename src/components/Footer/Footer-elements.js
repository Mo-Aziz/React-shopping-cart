import styled from "styled-components";
import { Link } from "react-router-dom";
import { GrCoatCheck } from "react-icons/gr";
export const FooterContainer = styled.div`
  display: grid;
  background-color: #fff;
  padding: 4rem 0 2rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100vh;

`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #494645;
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 30px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

// input form
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and(max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
  border: 1px solid;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;

  &::placeholder {
    color: #242424;
  }

  @media screen and(max-width: 820px) {
    flex-direction: column;
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

// Footer Links Styling

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  display: flex;
 

  @media screen and(max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
   

  @media screen and(max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #494645;

  @media screen and(max-width:420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
color: #494645;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
 color: #494645;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(GrCoatCheck)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
color: #494645;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
color: #494645;
  font-size: 24px;
`;
