import React, { Component } from 'react'
import { Box, Text, Heading, Center, Container } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { useQuery,gql } from "@apollo/client";
import styled from "styled-components";

import UserImg from '.././../user.jpg';

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

const BoxStyle = {
    marginTop:"50px",
    paddingTop:"50px",
    padding:"25px 50px 25px 50px",
    // maxW="m" ,
    borderWidth:"1px",
    borderRadius:"lg",
    overflow:"hidden",
    backgroundColor:"hsl(0deg 0% 100%)",
};

const ImageStyle = {
    border:"7px solid #ffffff",
    borderRadius:"100px",
    boxSize:"150px",
    alt:"UserProfileImg",
    boxShadow:"0 0 50px hsl(180deg 3% 94%)",
    position:"absolute",
    top:"0px",
    width:"100px !important",
    height:"100px",
};
const DescriptionStyle = {
    textAlign:"center",
    paddingTop:"50px",
};
const NameStyle = {
    textAlign:"center",
    fontWeight:"extrabold",
    paddingTop:"25px",
};
const TitleStyle = {
    textAlign:"center",
    paddingTop:"10px",
    color:"#9ca2ad",
};


export default function ReviewCard({ description, fname, title, lname, avatarSrc}) {
  const {data, loading, error} = useQuery(ReviewCards);
  if(loading){
    return(<h1 loading />);
  }
  if(error){
    return(<h1 error />);
  }
    return (
        <Center >
                <Box  style={BoxStyle}>
                    <Center >
                        <Image src={UserImg} style={ImageStyle}></Image>
                    </Center>
                    <Text style={DescriptionStyle}>{data.reviewCards[0].review}</Text>
                    <Text style={NameStyle}>{data.reviewCards[0].lName} {data.reviewCards[0].fname}</Text>
                    <Text style={TitleStyle}>{data.reviewCards[0].title}</Text>
                </Box>
        </Center>
    )
  }