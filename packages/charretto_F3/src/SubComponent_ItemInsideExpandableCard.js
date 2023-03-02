import React from 'react'
import { Icon } from '@iconify/react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const FlexParent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;
const FlexListItem = styled.div`
display: flex;
padding-left:5px;
padding-bottom:25px;
padding-top:7px;
align-items:center;
font-family:Roboto;
font-style:normal;
font-weight:900;
font-size:14px;
line-height:16px;
align-items:center;
text-align:justify;
letter-spacing:0.02em;
color:#616161;
`;
const IconAsText = styled.text`
fon-family:Inter
fon-style:normal;
font-weight:900;
font-size:14px;
line-height:16px;
display:flex;
align-items:center;
text-align:justify;
letter-spacing:0.02em;
color:#616161;
`;
const TextListTitle = styled.text`
padding-left:5px;
color:#2D3748;
`;
const FlexIcons = styled.div`
display:flex;
margin:1%;
`;
const FlexIconCheck = styled.div`
color:#d9e2ef;
width:16px;
height:16px;
margin:2px;
`;
const FlexIconTrash = styled.div`
color:#d9e2ef;
width:16px;
height:16px;
margin:2px;
`;

export const SubComponentItemInsideExpandableCard = ({ title, icon, textIcon, ...props }) => {
    return (
        <FlexParent>
            <FlexListItem>
                <Icon icon={icon}/>
                {/**This one is for texts dispalyed as icons like numbering F1, F2.. */}
                <IconAsText>
                    {textIcon} 
                </IconAsText>
                <TextListTitle>
                    {title}
                </TextListTitle>
            </FlexListItem>

            {/* icons */}
            <FlexIcons>
                <FlexIconCheck>
                    <Icon icon="bx:bx-check" />
                </FlexIconCheck>
                <FlexIconTrash>
                    <Icon icon="bx:bx-trash" />
                </FlexIconTrash>
            </FlexIcons>
        </FlexParent>
    )
}

SubComponentItemInsideExpandableCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    textIcon: PropTypes.string.isRequired,
  };