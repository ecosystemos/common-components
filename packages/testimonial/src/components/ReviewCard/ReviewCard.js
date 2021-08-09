import React, { Component } from 'react'
import { Box, Text, Heading, Center, Container } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";

import UserImg from '.././../user.jpg';
import { boxShadow } from 'styled-system';

const ReviewCards = gql`
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




//styles 




const BlockQuotes = styled.blockquote`






    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    line-height: 30px;
    position: relative;
    color: #383838;

   &::before{
    display: block;
    padding-left: 10px;
    content: '\\201C';
    font-size: 70px;
    position: absolute;
    left: 15%;
    top: 88%;
    color: #EEF4F6;


   }

   &::after {
    content: '\\201D';
    font-family: Roboto;
    position:absolute;
    float: right;
    font-size: 70px;
    line-height: 1;
    right: 37%;
    bottom: -107.9%;
    color: #EEF4F6; 

    
    
}
`;



const TextBoxStyle = {
  position: "relative",
  width: "768px",
  height: "384px",
  left: "0px",
  top: "84px",
 // marginTop: "50px",
  //padding: "25px 50px 25px 50px",
  // maxW="m" ,
  borderWidth: "1px",
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 20px 40px -2px rgba(34, 44, 47, 0.15)",
  flex: "none",
  order: "1",
  flexGrow: "0",
  textAlign: "-webkit-center",
  top: "-28%",
  zIndex: "-1",
};




const ExternalBox = {
  borderWidth: "1px",
  borderRadius: "8px",
  position: "relative",
  width: "768px",
  height: "507px",
  paddingTop: "4.6%",

};

const ImageStyle = {
  border: "8px solid #ffffff",
  borderRadius: "100px",
  boxSizing: "border-box",
  alt: "UserProfileImg",
  boxShadow: "0px 20px 40px -2px rgba(34, 44, 47, 0.15)",
  position: "relative",
  top: "-14.5%",
  left: "40%",
  width: "128px",
  height: "128px",
  /* Inside Auto Layout */
  flex: "none",
  order: "0",
  flexGrow: "0",
  margin: "0px 10px",


};



const DescriptionStyle = {
  width: "490px",
  height: "150px",
  position: "static",
  //left: "11.5%",
 // top: "18.5%",
 
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "20px",
  lineHeight: "30px",
  textAlign: "center",
  color: "#222C2F",
  paddingTop: "16%",

  
};


const FooterTextBox = {
  position: "static",
    bottom: "50%",
    left: "25%",
    paddingTop:"18.5%",
};



const NameStyle = {
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "24px",
  letterSpacing: "0.02em",
  textAlign: "center",
  color: "#3D4D51",
  flex: "none",
  order: "1",
  flexGrow: "0",
  margin: "8px 0px",

  position: "static",
width: "136px",
height: "24px",
left: "27.5px",
top: "0px",
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
  flex: "none",
  order: "1",
  flexGrow: "0",
  margin: "8px 0px",

};


export default function ReviewCard({ description, fname, title, lname, avatarSrc }) {
  const { data, loading, error } = useQuery(ReviewCards);
  if (loading) {
    return (<h1 loading />);
  }
  if (error) {
    return (<h1 error />);
  }
  return (
    <Box style={ExternalBox}>
          <Image src={UserImg} style={ImageStyle}></Image> 
      <Box style={TextBoxStyle}>
        <BlockQuotes>
          <Text style={DescriptionStyle}>{data.reviewCards[0].review}</Text>
         </BlockQuotes> 
        <Box style={FooterTextBox}>
          <Text style={NameStyle}>{data.reviewCards[0].fname} {data.reviewCards[0].lName}</Text>
          <Text style={TitleStyle}>{data.reviewCards[0].title}</Text>
        </Box>
      </Box>
   </Box>
  )
}