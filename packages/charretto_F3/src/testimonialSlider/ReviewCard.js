import React, { Component } from 'react'
import { Box, Text, Heading, Center, Container } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
//import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";

import UserImg from '../assets/images/user.jpg';
//import { boxShadow } from 'styled-system';

import PropTypes from 'prop-types';

/* const ReviewCards = gql`
query ReviewCard {
    reviewCards {
      lName
      fname
      title
      review
      profilePicture{id}
    }
  }
  `
 */
//styles 

const BlockQuotes = styled.blockquote`
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    position: relative;
    color: #383838;
    padding-top: 51px;

   &::before{
    display: block;
    content: '\\201C';
    font-size: 70px;
    position: absolute;
    left: -42px;
    top: 53px;
    color: #EEF4F6;
    padding-left: 4px;
   }

   &::after {
    content: '\\201D';
    font-family: Roboto;
    position:absolute;
    float: right;
    font-size: 70px;
    color: #EEF4F6;  
    right:-20px;
    bottom: -48px;   
}
`;



const TextBoxStyle = {
  margin: "75px",
  padding: "25px 50px",
  textAlign: "-webkit-center",
  borderWidth: "1px",
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: "hsl(0deg 0% 100%)",
  boxShadow: "0px 20px 40px -2px rgba(34, 44, 47, 0.15)",
};




const SliderContainer = {
  borderWidth: "1px",
  borderRadius: "8px",
  width: "768px",
  height: "507px",
  paddingTop: "4.6%",
  zIndex: "-1",
  backgroundColor: "rgb(212 223 227 / 27%)",
};



const ImageStyle = {
  border: "8px solid #ffffff",
  borderRadius: "100px",
  boxSizing: "border-box",
  alt: "UserProfileImg",
  boxShadow: "0px 20px 40px -2px rgba(34, 44, 47, 0.15)",
  width: "128px",
  height: "128px",
  position: "absolute",
  width: "128px",
  height: "128px",
  marginTop: "-56px",
};



const DescriptionStyle = {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "20px",
  lineHeight: "30px",
  textAlign: "center",
  color: "#222C2F",
};


const FooterTextBox = {
  paddingTop: "0.5%",
};



const NameStyle = {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "24px",
  letterSpacing: "0.02em",
  textAlign: "center",
  color: "#3D4D51",
  margin: "8px 0px",
};
const TitleStyle = {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "normal",
  textAlign: "center",
  color: "#5A6D72",
  letterSpacing: "0.02em",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "8px 0px",

};


export const ReviewCard = ({ description, fname, title, lname, avatarSrc,...props}) => {
/*   const { data, loading, error } = useQuery(ReviewCards);
  if (loading) {
    return (<h1 loading />);
  }
  if (error) {
    return (<h1 error />);
  } */
  return (
      <Box style={TextBoxStyle}>
        <Center >
          <Image src={UserImg} style={ImageStyle}></Image>
        </Center>
        <BlockQuotes>
          <Text style={DescriptionStyle}>{description}</Text>
        </BlockQuotes>
        <Box style={FooterTextBox}>
          <Text style={NameStyle}>{fname} {lname}</Text>
          <Text style={TitleStyle}>{title}</Text>
        </Box>
      </Box>
  )
};

ReviewCard.propTypes = {
    description: PropTypes.string.isRequired,
    fname: PropTypes.string.isRequired,
    lname: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

/* ReviewCard.defaultProps = {
    description: "Default des",
    fname: "Default fname",
    lname: "Default lname",
    title: "Default title",
  }; */