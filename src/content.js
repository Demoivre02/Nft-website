import React from "react";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ImageIcon from '@mui/icons-material/Image';
import ListAltIcon from '@mui/icons-material/ListAlt';

 function icon1(){
    return(
      <>
        <FolderOpenIcon style={{color: "#FF8C21", fontSize:"5rem"}} fontSize="large"></FolderOpenIcon>
      </>
    )
  }
  function icon2(){
    return(
      <>
        <CreateNewFolderIcon style={{color: "#FF8C21", fontSize:"5rem"}} fontSize="large"></CreateNewFolderIcon>
      </>
    )
  }
 function icon3(){
    return(
      <>
        <ImageIcon  style={{color: "#FF8C21", fontSize:"5rem"}} fontSize="large"></ImageIcon>
      </>
    )
  }
  function icon4(){
    return(
      <>
        <ListAltIcon style={{color: "#FF8C21", fontSize:"5rem"}} fontSize="large"></ListAltIcon>
      </>
    )
  }

  const contArray=[
    {
        key:1,
        icon:icon1(),
        heading:"Set up your wallet"
    },
    {
        key:2,
        icon:icon2(),
        heading:"Create your collection"
    },
    {
        key:3,
        icon:icon3(),
        heading:" Add yout NFTs"
    },
    {
        key:4,
        icon:icon4(),
        heading:"List them for sale"
    }
  ]
  export default contArray

  

  