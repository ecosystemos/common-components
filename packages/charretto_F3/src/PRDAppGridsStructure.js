import {LeftSidebar} from './LeftSidebar'
import {
  Flex,
  Grid,
  GridItem,
  Button,
} from '@chakra-ui/react';
import {TitleDescriptionInputExpandableCard} from './TitleDescription_InputExpandableCard';
import {TitleDescriptionItemListExpandableCard} from './TitleDescription_ItemListExpandableCard';
import {RightSideAppCard} from './Right_Side_App_Card';
import {RightSideLinksCard} from './Right_Side_Links_Card';
import {HeaderWithA3dotsMenuIcon} from './HeaderWithA3dotsMenuIcon';
import {HeadNavBar} from './HeadNavBar'

//import {NoItemCards,CreateNoItemCard,UpdateNoItemCard} from './../../data/queries';
//import { useQuery,useMutation} from "@apollo/client";
//import {connect} from "reacr-redux";
import PropTypes from "prop-types";

export const PRDAppGridsStructure = ({ text, url }) => {
  //const {data, loading, error} = useQuery(NoItemCards);
  //const [addCard,{dataCreateResponse, loadingCreateResponse, errorCreateResponse}] = useMutation(CreateNoItemCard);
  //const [updateCard,{dataUpdateResponse, loadingUpdateResponse, errorUpdateResponse}] = useMutation(UpdateNoItemCard, {
  //   variables: {
  //     id: "cktwq4lnkebg70b08p988h3gd",
  //     content: "Vision update param",
  //   },
  // });
  
  // if(loading){
  //   return(<h1 loading />);
  // }
  // if(error){
  //   return(<h1 error />);
  // }

  const data = [
    {
      "title": "Vision updated",
      "description": "Where do we want out product to be in the future",
      "contentInputPlaceHolder": "Click here to start editing...",
      "content": "Vision content Updated",
      "order": 1
    },
    {
      "title": "Description",
      "description": "General Description of the application",
      "contentInputPlaceHolder": "Click here to start editing...",
      "content": null,
      "order": 2
    },
    {
      "title": "Purpose",
      "description": "What is the key use case, purpose or mission statment for this application from the users' perspective and from our perspective?",
      "contentInputPlaceHolder": "Click here to start editing...",
      "content": null,
      "order": 3
    },
    {
      "title": "User Problem",
      "description": "Pain point(s) or challenge(s) user(s) have in the markets and existing solutions. Why are we building this?",
      "contentInputPlaceHolder": "Click here to start editing...",
      "content": null,
      "order": 4
    },
    {
      "title": "User Value",
      "description": "How the propsed solution generates values for the user(s)?",
      "contentInputPlaceHolder": "Click here to start editing...",
      "content": null,
      "order": 5
    },
    {
      "title": "Assumptions & Decisions",
      "description": "Key bussiness logic, user experience an/or technical architeracture related assumptions & decisions concluded for this solution",
      "contentInputPlaceHolder": "Click here to start editing...",
      "content": null,
      "order": 6
    }
  ]
  
  return (
    <>
    <HeadNavBar />
    <Grid
      templateColumns="repeat(12, 1fr)"
    >
      <GridItem colSpan={1}>

        {/* Column 1 */}
        <Flex>
          <LeftSidebar 
          titleNavItem= 'PRD'
          iconNavItem= 'mdi:file-document-edit-outline'
          />
        </Flex>
      </GridItem>

      {/* Column 2 */}
      <GridItem
        h="70%"
        colSpan={8}
        overflowY="auto"
  css={{
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      //background: scrollbarColor,
      borderRadius: '24px',
    },
  }}
        mr="2%"

      >
        {/* <Button onSubmit={updateCard({ variables: { cardID: "cktwq4lnkebg70b08p988h3gd", content: "Vision update param"} })} /> */}
       
        <HeaderWithA3dotsMenuIcon title={" Product Requirements Document"} icon={"simple-line-icons:options-vertical"} />
        <Flex
          p="1%"
          flex={1}
          direction="column"
        >
          {createCard(data)}
          
          < TitleDescriptionItemListExpandableCard
            title={"Personas"}
            descripton={"Where do we want out product to be in the future"}
            placeholder={"Click here to add a feature"} />

         
          < TitleDescriptionItemListExpandableCard
            title={"Key Features"}
            descripton={"Where do we want out product to be in the future"}
            placeholder={"Click here to add a feature"} />

        </Flex>
      </GridItem>

      {/* Column 3 */}
      <GridItem colSpan={3}>
        <RightSideAppCard 
        cardTitle = 'Twitter App'
        productCodeText ='Product Code'
        productCode = 'T1'
        ownerTitle = 'Owner'
        ownerTitleName = 'Alhasan Mhd Ali'
        pRDStatusTitle = 'PRD Status'
        pRDStatusStage = 'Draft'
        designSystemTitle = 'Design System'
        designSystemVersion = 'SC v.2.0'
        lastUpdateTitle = 'Last Update'
        lastUpdateDate = '7/24/2021, 15:22:33'
        />
        <RightSideLinksCard 
           title= 'Document Outlines'
           titles= '["Vision","Personas","Description","Purpose","Key Features","User Problem","User Value","Assumptions & Decisions"]'
         />
      </GridItem>
    </Grid>
    </>
  )
}

PRDAppGridsStructure.propsTypes = {
  text: PropTypes.string,
};

function createCard (data){
  console.log(data.length);
  console.log(data[0].title);
  console.log("break");
  let cards = [];
  let i = 0;
  for(i; i < data.length;i++){
    cards.push(
    < TitleDescriptionInputExpandableCard
      title={data[i].title}
      descripton={data[i].description}
      placeholder={data[i].contentInputPlaceHolder}
      content={data[i].content}
    />
    );
  }
  return cards;
}
