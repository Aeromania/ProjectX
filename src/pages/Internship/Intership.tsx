import { useState, useRef, ChangeEvent, useEffect } from "react";
import InternshipCard, { TInternshipCardProps } from "./InternshipCard";
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const Intership: React.FC = (): React.JSX.Element => {
  const internshipInfoArray: TInternshipCardProps[] = [
    {
      title: "Product Manager",
      duration: "6 months",
      location: "Bangalore",
      stipend: "10k/month",
      summary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur.",
      workPolicy: "WFH"
    },
    {
      title: "Software Development Manager",
      duration: "6 months",
      location: "Bangalore",
      stipend: "10k/month",
      summary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur.",
      workPolicy: "WFO"
    },
    {
      title: "Sales Development Manager",
      duration: "6 months",
      location: "Bangalore",
      stipend: "10k/month",
      summary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur.",
      workPolicy: "Hybrid"
    },
    {
      title: "Human Resource Development Manager",
      duration: "6 months",
      location: "Bangalore",
      stipend: "10k/month",
      summary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur.",
      workPolicy: "Hybrid"
    },
    {
      title: "Product Development Manager",
      duration: "6 months",
      location: "Bangalore",
      stipend: "10k/month",
      summary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur.",
      workPolicy: "Hybrid"
    },
    {
      title: "Product Development Manager",
      duration: "6 months",
      location: "Bangalore",
      stipend: "10k/month",
      summary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur.",
      workPolicy: "Hybrid"
    }
  ];

  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const searchBox = useRef<HTMLInputElement>(null);
  const searchBarContainer = useRef<HTMLDivElement>(null);
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const [filteredInternshipInfo, setFilteredInternshipInfo] = useState<
    TInternshipCardProps[]
  >([]);
  const [internshipInfo, setInternshipInfo] =
    useState<TInternshipCardProps[]>(internshipInfoArray);

  useEffect(() => {
    const toggleSearchBarVisibility = (event: MouseEvent) => {
      if (
        searchBarContainer.current &&
        !searchBarContainer.current?.contains(event.target as Node) &&
        searchBarValue.length < 1
      ) {
        setShowSearchBox(false);
      }
    };

    document.addEventListener("mousedown", toggleSearchBarVisibility);

    return () =>
      document.removeEventListener("mousedown", toggleSearchBarVisibility);
  }, []);

  const filterInternship = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchBarValue(e.target.value);
    if (e.target.value.trim().length > 0) {
      const filteredInternshipPosts = internshipInfo.filter((internship) =>
        internship.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredInternshipInfo(filteredInternshipPosts);
    } else {
      setFilteredInternshipInfo([]);
    }
  };

  return (
    <section className="flex min-h-dvh w-full flex-col items-center bg-[#090D1F]">
      <div className="py-28 lg:w-[80%] 2xl:w-[65%]">
        <div className="mb-8 flex items-center justify-between text-white">
          <h3 className="font-sans text-xl font-medium">All Internships</h3>
          <div
            className="relative flex items-center gap-1"
            ref={searchBarContainer}
          >
            <input
              type="text"
              className={twMerge(
                "w-0 rounded-sm px-1 text-black outline-none transition-all duration-300 ease-in-out",
                showSearchBox
                  ? "w-[100px] bg-white focus:ring-2 focus:ring-sky-500 sm:w-[200px]"
                  : "pointer-events-none border-0 bg-transparent"
              )}
              placeholder="Search..."
              ref={searchBox}
              onChange={filterInternship}
              value={searchBarValue}
            />
            {showSearchBox ? (
              <IoMdClose
                className="left-2 top-1 cursor-pointer text-2xl text-white"
                onClick={() => {
                  setShowSearchBox(false);
                  searchBox.current?.blur();
                  setSearchBarValue("");
                }}
              />
            ) : (
              <IoIosSearch
                className={twMerge(
                  "left-2 top-1 cursor-pointer text-2xl text-white"
                )}
                onClick={() => {
                  setShowSearchBox(true);
                  searchBox.current?.focus();
                }}
              />
            )}
          </div>
        </div>
        <div
          className={twMerge(
            "grid w-full grid-cols-3 gap-6",
            searchBarValue.length > 0 && filteredInternshipInfo.length < 1
              ? "grid-cols-1 place-items-center"
              : ""
          )}
        >
          {searchBarValue.length > 0 ? (
            filteredInternshipInfo.length > 0 ? (
              filteredInternshipInfo.map((filteredInfo) => (
                <div className="h-fit rounded-lg border border-input p-6">
                  <InternshipCard
                    title={filteredInfo.title}
                    duration={filteredInfo.duration}
                    location={filteredInfo.location}
                    stipend={filteredInfo.stipend}
                    summary={filteredInfo.summary}
                    workPolicy={filteredInfo.workPolicy}
                    key={filteredInfo.title}
                  />
                </div>
              ))
            ) : (
              <div className="mt-32 flex w-full items-center justify-center text-white">
                <h1 className="text-lg">
                  Internship for that role does not exists!
                </h1>
              </div>
            )
          ) : (
            internshipInfo.map((info) => (
              <div className="h-fit rounded-lg border border-input p-6">
                <InternshipCard
                  title={info.title}
                  duration={info.duration}
                  location={info.location}
                  stipend={info.stipend}
                  summary={info.summary}
                  workPolicy={info.workPolicy}
                  key={info.title}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Intership;
