"use client";
import { CharacterItem, BookItem } from "@/components/CharacterPageItems";
import CreateBookForm from "@/components/FormComponents/CreateBookForm";
import CreateCharacterForm from "@/components/FormComponents/CreateCharacterForm";
import NavBar from "@/components/NavBar/NavBar2";
import {
  CharacterContext,
  CharacterContextType,
} from "@/context/CharacterContext";
import { SpellBook, useMyCharactersQuery } from "@/gql/graphql";
import Magnifier from "@/svgs/Magnifier";
import Fuse from "fuse.js";
import Link from "next/link";
import { useContext, useState, useTransition } from "react";

export default function Characters() {
  const { data: charData, loading } = useMyCharactersQuery();
  const [bookFocus, setBookFocus] = useState<number | null>(null);
  const [charSearchPattern, setCharSearchPattern] = useState<string>("");
  const [bookSearchPattern, setBookSearchPattern] = useState<string>("");
  const { charId, setCharId } = useContext(
    CharacterContext
  ) as CharacterContextType;
  const [, startTransition] = useTransition();

  if (loading || !charData?.myCharacters) return null;

  const fuse = new Fuse(charData.myCharacters, { keys: ["name"] });
  const books = charId
    ? (charData.myCharacters.find((char) => char.id === charId)!
        .spellBooks as SpellBook[])
    : [];

  const bookFuse = new Fuse(books, { keys: ["name"] });

  return (
    <>
      <NavBar />
      <div className="h-screen w-screen flex ">
        <div className="left w-1/2 flex justify-between p-4">
          <div className="create/edit/delete character p-4 flex flex-col gap-8 place-items-center">
            <CreateCharacterForm />
            <header className="px-4 py-0 relative flex items-center w-full">
              <form className="appearance-none flex items-center flex-auto">
                <label>
                  <Magnifier />
                </label>
                <input
                  onChange={(e) =>
                    startTransition(() => setCharSearchPattern(e.target.value))
                  }
                  className="outline-none appearance-none w-full h-14 ml-3 mr-4 flex"
                  type="search"
                  placeholder="Search character"
                  spellCheck="false"
                  autoCapitalize="false"
                  autoCorrect="false"
                  autoComplete="off"
                />
              </form>
            </header>

            <div>
              <p>selected character</p>
              {charData!.myCharacters!.map((char) =>
                char.id === charId ? (
                  <CharacterItem
                    key={char.id}
                    selected={true}
                    onClick={() => console.log("urmom")}
                    text={char.name}
                  />
                ) : null
              )}
            </div>
            <div
              className="items-center rounded-xl p-2 
        hover:text-pink-600 grid grid-cols-2 w-48 gap-2 hover:cursor-pointer"
            >
              <div className="col-span-2 flex flex-col place-items-center justify-items-center">
                <span className="ms-3 text-xl">rename character</span>
              </div>
            </div>
            <div
              className="items-center rounded-xl p-2 
        hover:text-pink-600 grid grid-cols-2 w-48 gap-2 hover:cursor-pointer"
            >
              <div className="col-span-2 flex flex-col place-items-center justify-items-center">
                <span className="ms-3 text-xl">delete character</span>
              </div>
            </div>
          </div>
          <div className="characterlist grow overflow-auto border-r-2 border-dotted">
            <h2 className="text-3xl text-center">Your character&apos;s</h2>
            <ul className="pt-4 mt-4 space-y-2 font-medium flex flex-wrap gap-4">
              {charSearchPattern === ""
                ? charData?.myCharacters?.map((char) => (
                    <CharacterItem
                      selected={char.id === charId}
                      onClick={() =>
                        charId === char.id
                          ? setCharId(null)
                          : setCharId(char.id)
                      }
                      text={char.name}
                      key={char.id}
                    />
                  ))
                : fuse
                    .search(charSearchPattern)
                    .map(({ item }) => (
                      <CharacterItem
                        selected={item.id === charId}
                        onClick={() =>
                          charId === item.id
                            ? setCharId(null)
                            : setCharId(item.id)
                        }
                        text={item.name}
                        key={item.id}
                      />
                    ))}
            </ul>
          </div>
        </div>
        <div className="right w-1/2 flex justify-between p-4">
          <div className="booklist grow overflow-auto">
            <h2 className="text-3xl text-center">Selected character&apos;s books</h2>
            {charData?.myCharacters?.map((char) => (
              <ul
                className={`pt-4 mt-4 space-y-2 font-medium flex flex-wrap gap-4 ${charId === char.id ? "" : "hidden"}`}
                key={char.id}
              >
                {bookSearchPattern === ""
                  ? char.spellBooks?.map((book) => (
                      <BookItem
                        selected={bookFocus === book.id}
                        onClick={() => setBookFocus(book.id)}
                        text={book.name}
                        key={book.id}
                      />
                    ))
                  : bookFuse
                      .search(bookSearchPattern)
                      .map(({ item }) => (
                        <BookItem
                          selected={bookFocus === item.id}
                          onClick={() => setBookFocus(item.id)}
                          text={item.name}
                          key={item.id}
                        />
                      ))}
              </ul>
            ))}
          </div>
          <div className="create/edit/delete character p-4 flex flex-col gap-8 place-items-center">
            <CreateBookForm charId={charId} />
            <header className="px-4 py-0 relative flex items-center w-full">
              <form className="appearance-none flex items-center flex-auto">
                <label>
                  <Magnifier />
                </label>
                <input
                  onChange={(e) =>
                    startTransition(() => setBookSearchPattern(e.target.value))
                  }
                  className="outline-none appearance-none w-full h-14 ml-3 mr-4 flex"
                  type="search"
                  placeholder="Search book"
                  spellCheck="false"
                  autoCapitalize="false"
                  autoCorrect="false"
                  autoComplete="off"
                />
              </form>
            </header>

            <div>
              <p>selected book</p>
              {books.map((book) =>
                book.id === bookFocus ? (
                  <BookItem
                    key={book.id}
                    selected={false}
                    onClick={() => console.log("urmom")}
                    text={book.name}
                  />
                ) : null
              )}
            </div>
            <div
              className="items-center rounded-xl p-2 hover:shadow-sm hover:shadow-gray-400
        hover:text-indigo-600 grid grid-cols-2 w-48 gap-2 border border-gray-200"
            >
              <div className="col-span-2 flex flex-col place-items-center justify-items-center">
                <Link href={`/spells/book/${bookFocus}`}>
                  <span className="ms-3 text-xl">View/Edit book spells</span>
                </Link>
              </div>
            </div>
            <div
              className="items-center rounded-xl p-2 hover:shadow-sm hover:shadow-gray-400
        hover:text-indigo-600 grid grid-cols-2 w-48 gap-2 border border-gray-200"
            >
              <div className="col-span-2 flex flex-col place-items-center justify-items-center">
                <span className="ms-3 text-xl">Share book</span>
              </div>
            </div>
            <div
              className="items-center rounded-xl p-2 hover:shadow-sm hover:shadow-gray-400
        hover:text-indigo-600 grid grid-cols-2 w-48 gap-2 border border-gray-200"
            >
              <div className="col-span-2 flex flex-col place-items-center justify-items-center">
                <span className="ms-3 text-xl">Rename book</span>
              </div>
            </div>
            <div
              className="items-center rounded-xl p-2 hover:shadow-sm hover:shadow-gray-400
        hover:text-indigo-600 grid grid-cols-2 w-48 gap-2 border border-gray-200"
            >
              <div className="col-span-2 flex flex-col place-items-center justify-items-center">
                <span className="ms-3 text-xl">Delete book</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
