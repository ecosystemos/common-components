import React, { useState } from 'react'
import {
  Flex,
  Text,
  Divider,
  Textarea,
  useDisclosure,
  Collapse,
  Button,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import styled from "styled-components";
import PropTypes from 'prop-types';


const FlexParent = styled.div`
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
width:100%;
padding-top:4px;
padding-left:10px;
margin-top:2%;
flex-dir:column;
`;
const FlexInnerDiv = styled.div`
width:99%;
flex-dir:column;
`;
const FlexDescription = styled.div`
display:flex;
flex-dir:row;
justify-content:space-between;
`;
const TextTitle = styled.text`
font-family: Inter;
font-style: normal;
font-weight: 900;
font-size: 20px;
line-height: 28px;
display:flex;
align-items:center;
color:#171923;
margin: 0px 8px;
`;
const TextDescription = styled.text`
font-family:Lucida Sans Unicode;
font-style:normal;
font-weight:normal;
font-size:12px;
line-height:16px;
display:flex;
align-items:center;
letter-spacing:0.01em;
color:#718096;
margin: 0px 8px;
`;
const FlexIcons = styled.div`
margin:1%;
`;
const FlexIconEdit = styled.div`
color:#CBD5E0;
width:16px;
height:16px;
cursor:pointer;
`;
const FlexIconTrash = styled.div`
color:#CBD5E0;
width:16px;
height:16px;
cursor:pointer;
`;
const FlexIconClose = styled.div`
color:#CBD5E0;
width:16px;
height:16px;
cursor:pointer;
`;
const FlexTextArea = styled.div`
flex-dir:column;
`;
const FlexInnerTextArea = styled.div`
padding:5px 0px 5px 0px;
`;
const TextAreaPlaceHolder = styled.text`
font-family:Lucida Sans;
font-style:normal;
font-weight=:normal;
font-size:14px;
line-height:20px;
display:flex;
align-items:center;
text-align:justify;
letter-spacing:0.02em;
color:#CBD5E0;
cursor:pointer;
padding:5px;
padding-bottom:15px;
`;
const TextareaStyles = styled.div`
font-family:Lucida Sans;
font-style:normal;
font-weight:normal:
font-size:14px;
line-height:20px;
display:flex;
align-items:center;
text-align:justify;
letter-spacing:0.02em;
color:#2D3748;
background: #F7FAFC;
border: 1px solid #EDF2F7;
box-sizing: border-box;
box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.06);
padding:0 0 0 10px;
margin: 4px 0px;
`;

export const TitleDescriptionInputExpandableCard = ({ title, descripton, placeholder, content, ...props }) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false })
  const [diableTextArea, changeEditAbility] = useState(false)
  return (
    <FlexParent>
      <FlexInnerDiv>
        <TextTitle>
          {title}
        </TextTitle>
        <FlexDescription>
          {/**description div */}
          <Flex>
            <TextDescription>
              {descripton}
            </TextDescription>
          </Flex>
          <FlexIcons>
            <Collapse in={!isOpen}>
              <FlexIconEdit>
                <Icon icon="bx:bxs-edit-alt" onClick={onToggle}/>
              </FlexIconEdit>
            </Collapse>
            <Collapse in={isOpen}>
              <Flex>
                <FlexIconTrash>
                  <Icon icon="bx:bx-x" onClick={onToggle} />
                </FlexIconTrash>
                <FlexIconClose>
                  <Icon icon="bx:bx-check" onClick={() => changeEditAbility(!diableTextArea)} />
                </FlexIconClose>
              </Flex>
            </Collapse>
          </FlexIcons>
        </FlexDescription>
        <Divider orientation="horizontal" />
        <FlexTextArea>
          <Collapse in={!isOpen}>
            <TextAreaPlaceHolder onClick={onToggle}>
              {placeholder}
            </TextAreaPlaceHolder>
          </Collapse>
          <Collapse dir="column" in={isOpen}>
            <FlexInnerTextArea>
              <TextareaStyles>
                <Textarea
                  disabled={diableTextArea}
                  placeholder={placeholder}
                  variant="unstyled"
                  resize="none"
                >
                   {content}
                </Textarea>
              </TextareaStyles>
            </FlexInnerTextArea>
          </Collapse>
        </FlexTextArea>
      </FlexInnerDiv>
    </FlexParent>
  )
}

TitleDescriptionInputExpandableCard.propTypes = {
  title: PropTypes.string.isRequired,
  descripton: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};