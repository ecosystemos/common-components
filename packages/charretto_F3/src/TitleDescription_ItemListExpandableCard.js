import React, { useState } from 'react'
import {
    Flex,
    Text,
    Divider,
    useDisclosure,
    Collapse,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import {SubComponentItemInsideExpandableCard} from './SubComponent_ItemInsideExpandableCard';

const FlexParent = styled.div`
box-shadow:0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
width:100%;
padding-top:4px;
padding-left:10px;
margin-top:2%;
flex-dir:column;
`;
const TextTitle = styled.text`
font-family:Lucida Sans;
font-style:normal;
font-weight:600;
font-size:20px;
lineH-hight:28px;
display:flex;
align-items:center;
color:#171923;
`;
const FlexParentInnerDiv = styled.div`
display:flex;
flex-dir:row;
justify-content:space-between;
`;
const TextDescripton = styled.text`
font-family:Lucida Sans Unicode;
font-style:normal;
font-weight:normal;
font-size:12px;
line-height:16px;
display:flex;
align-items:center;
letter-spacing:0.01em;
color:#718096;
`;
const FlexIcons = styled.div`
display:flex;
margin:1%;
`;
const FlexIconEdit = styled.div`
color:#d9e2ef;
width:16px;
height:16px;
margin:2px;
cursor:pointer;

`;
const FlexIconCheck = styled.div`
color:#d9e2ef;
width:16px;
height:16px;
margin:2px;
cursor:pointer;

`;
const FlexIconClose = styled.div`
color:#d9e2ef;
width:16px;
height:16px;
margin:2px;
cursor:pointer;
`;
const FlexAddFeatureButton = styled.div`
padding: 7px 5px 25px 0px;
align-items:center;
font-family:Roboto;
font-style:normal;
font-weight:900;
font-size:14px;
line-height:16px;
display:flex;
align-items:center;
text-align:justify;
letter-spacing:0.02em;
color:#CBD5E0;
cursor:pointer;
`;
const FlexAddFeatureItem = styled.div`
    padding:7px 0 25px 5px;
    align-items:center;
    font-family:Roboto;
    font-style:normal;
    font-weight:900;
    font-size:14px;
    line-height:16px;
    display:flex;
    align-items:center;
    text-align:justify;
    letter-spacing:0.02em;
    color:#CBD5E0;
    cursor:pointer;
`;

export const TitleDescriptionItemListExpandableCard = ({ title, descripton, placeholder, ...props }) => {
    const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false })
    const [diableTextArea, changeEditAbility] = useState(false)
  
    return (
        <FlexParent>
            <TextTitle>{title}</TextTitle>
            <FlexParentInnerDiv>
                <Flex>
                    <TextDescripton>{descripton}</TextDescripton>
                </Flex>
                <FlexIcons>
                    <Collapse in={!isOpen}>
                        <FlexIconEdit><Icon icon="bx:bxs-edit-alt" onClick={onToggle} /></FlexIconEdit>
                    </Collapse>
                    <Collapse in={isOpen}>
                        <Flex>
                            <FlexIconClose><Icon icon="bx:bx-x" onClick={onToggle}/></FlexIconClose>
                            <FlexIconCheck><Icon icon="bx:bx-check"/></FlexIconCheck>
                        </Flex>
                    </Collapse>
                </FlexIcons>
            </FlexParentInnerDiv>
            <Divider width="99%" orientation="horizontal" />
            <Collapse in={!isOpen}>
                <FlexAddFeatureButton onClick={onToggle}>
                    <Icon icon="bx:bx-plus-circle" />
                    <Text pl="5px"> Click here to add a feature</Text>
                </FlexAddFeatureButton>
            </Collapse>
            <Collapse in={isOpen}>
                <SubComponentItemInsideExpandableCard title={"Product Owner"} icon={"bx:bxs-square-rounded"} />
                <SubComponentItemInsideExpandableCard title={"Designer"} icon={"bx:bxs-square-rounded"} />
                <SubComponentItemInsideExpandableCard title={"Developer"} icon={"bx:bxs-square-rounded"} />
                <SubComponentItemInsideExpandableCard title={"Product Manager"} icon={"bx:bxs-square-rounded"} />

                <FlexAddFeatureItem>
                    <Icon icon="bx:bx-plus-circle" />
                    <Text pl="5px"> Add new Persona</Text>
                </FlexAddFeatureItem>
            </Collapse>
        </FlexParent>

    )
}

TitleDescriptionItemListExpandableCard.propTypes = {
    title: PropTypes.string.isRequired,
    descripton: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  };