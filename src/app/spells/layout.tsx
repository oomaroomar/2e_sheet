"use client"

import { FilterProvider } from "@/context/FilterContext";
import {DescriptionListProvider} from '@/context/DescriptionListContext'
import { apolloClient } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";


export default function SpellsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
  <ApolloProvider client={apolloClient}>
  <FilterProvider>
  <DescriptionListProvider>
    <div className="h-screen overflow-hidden">
      {children}
    </div>
  </DescriptionListProvider>
  </FilterProvider>
  </ApolloProvider>
  );
}


{/* <div className="h-screen overflow-hidden">
      <Navbar setGodModalState={() => setGodModalState(!showSearchModal)} setSpecModalState={() => setSpecModalState(!showSearchModal)}  setSearchModalState={() => setSearchModalState(!showSearchModal)}/>
      <div className="w-full h-full grid grid-cols-7 p-2">
        <div className="col-span-4 h-dvh ">
        <div className="h-full overflow-auto p-2 pl-20 pr-10 align-self-end lg:grid grid-cols-1" >
          <SpellDescriptionList />
        </div>
        </div>
        <div className={`${[showGodModal, showSearchModal, showSpecModal].every(b => b===false) ? '' : 'blur-sm'} col-span-3 overflow-auto`}>
          {children}
        </div>
      </div>
      <SearchModal setModalState={(ns: boolean) => setSearchModalState(ns)} showModal={showSearchModal} key={'search'} />
      <SpecModal schools={schools} setModalState={setSpecModalState} showModal={showSpecModal}  />
      <SpecModal schools={gods} setModalState={setGodModalState} showModal={showGodModal}  />
      </div> */}
