import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GoIcons from "react-icons/go";
import * as VscIcons from "react-icons/vsc";

export const dataNavBarLateral= [
    {
      title: 'Home',
      path: '/',
      icon: <FaIcons.FaHome/>,
      cName: 'nav-text',
      id: 0
    },
    {
      title: 'Lanzamientos',
      path: '/movie-new',
      icon: <GoIcons.GoRocket />,
      cName: 'nav-text',
      id: 1
    },
    {
      title: 'Populares',
      path: '/movie-popular',
      icon: <GoIcons.GoStar />,
      cName: 'nav-text',
      id: 2
    },
    {
      title: 'Buscar',
      path: '/search',
      icon: <VscIcons.VscSearch />,
      cName: 'nav-text',
      id: 3
    },
  


  ];