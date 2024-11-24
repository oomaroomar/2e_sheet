import {
  AoEs,
  CastingTimes,
  components,
  dmgToTextConverter,
  Ranges,
  SavingThrows,
  Sources,
} from "@/lib/types";
import { useContext, useEffect, useRef, useState } from "react";
import { FilterContext, FilterContextType } from "@/context/FilterContext";
import FilterButton, { ExistingFilters } from "./FilterButton";
import FilterButtonWithSpecialNeeds from "./FilterButtonWithSpecialNeeds";
import Burger from "@/svgs/Burger";
import LeftMenu from "./LeftMenu";
import FilterIcon from "@/svgs/FilterIcon";
import {BorderedNavBarBtn, NavBarBtn} from "./NavBarBtn";

interface NavBarProps {
  setSearchModalState: () => void;
  setSpecModalState: () => void;
  children: React.ReactNode;
  castingClass?: "Cleric" | "Wizard"
}

export default function Navbar({
  setSearchModalState,
  setSpecModalState,
  children,
  castingClass
}: NavBarProps) {
  const filters = useContext(FilterContext) as FilterContextType;

  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [showAoe, toggleAoe] = useState<boolean>(false);
  const [showCT, toggleCT] = useState<boolean>(false);
  const [showComponents, toggleComponents] = useState<boolean>(false);
  const [showDmg, toggleDmg] = useState<boolean>(false);
  const [showRange, toggleRange] = useState<boolean>(false);
  const [showST, toggleST] = useState<boolean>(false);
  const [showSource, toggleSource] = useState<boolean>(false);
  const [showLeftMenu, toggleLeftMenu] = useState<boolean>(false);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const checkClickOutside = (e: MouseEvent) => {
      if (showLeftMenu && !ref?.current?.contains(e.target as Node)) {
        toggleLeftMenu(false);
      }
    };
    document.addEventListener("mousedown", checkClickOutside);
    return () => {
      document.removeEventListener("mousedown", checkClickOutside);
    };
  }, [showLeftMenu, toggleLeftMenu]);

  return (
    <>
      <div
        ref={ref}
        className={`${showLeftMenu ? "" : "-translate-x-64 opacity-0"} z-50 transition-all absolute h-screen w-64 bg-white opacity-95 text-xl shadow-lg gap-4`}
      >
        <LeftMenu />
      </div>{" "}
      <div className="hidden py-2 z-40 w-full lg:block">
        <div
// border-pink-600/40 p-2
          className={`w-full flex flex-row gap-2 ${showFilters ? "" : ""} `}
        >
          <div
            onClick={() => toggleLeftMenu(!showLeftMenu)}
            className="flex pl-3 place-items-center justify-center hover:cursor-pointer"
          >
            <Burger h="24px" />
          </div>
          <BorderedNavBarBtn
            text="Quick search..."
            text2="Ctrl + K"
            onClick={setSearchModalState}
          />
          {!castingClass ? '' : <NavBarBtn text={castingClass === 'Cleric' ? 'Diety' : 'Specialization'} onClick={setSpecModalState} />
          }
          
          {children}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="hidden lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm p-1 hover:ring-slate-300"
          >
            <FilterIcon h="34px" />
          </button>

          <NavBarBtn text="Reset filters" onClick={filters.resetFilters} />
          <div className="ml-auto flex gap-2"></div>
        </div>
        <div
          className={`${showFilters ? "grid" : "-translate-y-32 opacity-0 absolute"} grid-cols-2 transition-all border-b border-slate-900/10 w-full z-30`}
        >
          <div className={`flex flex-row justify-center gap-2 p-2`}>
            <FilterButton
              name="AoE"
              options={AoEs}
              show={showAoe}
              toggle={toggleAoe}
              update={filters.uAoes}
            />
            <FilterButton
              name={"Casting Time"}
              options={CastingTimes}
              show={showCT}
              toggle={toggleCT}
              update={filters.uCastingTimes}
            />
            <FilterButton
              name={"Components"}
              options={components}
              show={showComponents}
              toggle={toggleComponents}
              update={filters.uComponents as (s: string) => void}
            />
            <FilterButtonWithSpecialNeeds
              show={showDmg}
              toggle={toggleDmg}
              update={filters.sDamaging}
            />
            <FilterButton
              name={"Range"}
              options={Ranges}
              show={showRange}
              toggle={toggleRange}
              update={filters.uRanges}
            />
            <FilterButton
              name={"Saving Throw"}
              options={SavingThrows}
              show={showST}
              toggle={toggleST}
              update={filters.uSavingThrows}
            />
            <FilterButton
              name={"Source"}
              options={Sources}
              show={showSource}
              toggle={toggleSource}
              update={filters.uSources}
            />
          </div>
          <div className={`flex flex-row justify-start gap-2 p-2`}>
            <ExistingFilters
              last={filters.aoes[filters.aoes.length - 1]}
              show={filters.aoes.length !== 0}
              name="AoE"
              category={filters.aoes}
              reset={() => filters.sAoes([])}
            />
            <ExistingFilters
              last={filters.castingTimes[filters.castingTimes.length - 1]}
              show={filters.castingTimes.length !== 0}
              name="Casting Time"
              category={filters.castingTimes}
              reset={() => filters.sCastingTimes([])}
            />
            <ExistingFilters
              last={filters.components[filters.components.length - 1]}
              show={filters.components.length !== 0}
              name="Components"
              category={filters.components}
              reset={() => filters.sComponents([])}
            />
            <button
              className={`${filters.damaging !== 0 ? "flex" : "hidden"} text-[12px] place-items-center p-2 py-0 rounded-full border border-slate-200 bg-slate-100`}
              onClick={() => filters.sDamaging(0)}
            >
              {dmgToTextConverter(filters.damaging)}
            </button>
            <ExistingFilters
              last={filters.ranges[filters.ranges.length - 1]}
              show={filters.ranges.length !== 0}
              name="Range"
              category={filters.ranges}
              reset={() => filters.sRanges([])}
            />
            <ExistingFilters
              last={filters.savingThrows[filters.savingThrows.length - 1]}
              show={filters.savingThrows.length !== 0}
              name="Saving Throw"
              category={filters.savingThrows}
              reset={() => filters.sSavingThrows([])}
            />
            <ExistingFilters
              last={filters.sources[filters.sources.length - 1]}
              show={filters.sources.length !== 0}
              name="Source"
              category={filters.sources}
              reset={() => filters.sSources([])}
            />
          </div>
        </div>
      </div>
    </>
  );
}
