import Intro from "../../assets/videos/xlabs_intro.mp4";
import Thumbnail from "../../assets/images/xlabs_thumbnail.png";
import ServiceDescriptionPage from "@/components/ServiceDescriptionPage";
import { useState, useEffect } from "react";
import { HomePageImageTrailPropsArray } from "./constants";

const Home: React.FC = (): React.JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((previousIndex) =>
        previousIndex < HomePageImageTrailPropsArray.length - 1
          ? previousIndex + 1
          : 0
      );
    }, 5 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section className="h-fit w-full bg-black text-white">
        <video
          src={Intro}
          autoPlay={true}
          loop={true}
          muted
          poster={Thumbnail}
          className="h-full w-full"
        />
      </section>
      <div className="h-dvh">
        <ServiceDescriptionPage
          title={HomePageImageTrailPropsArray[activeIndex].title}
          images={HomePageImageTrailPropsArray[activeIndex].images}
          content={HomePageImageTrailPropsArray[activeIndex].content}
          hideCommonTitle={
            HomePageImageTrailPropsArray[activeIndex].hideCommonTitle
          }
          showButtonIcon={
            HomePageImageTrailPropsArray[activeIndex].showButtonIcon
          }
          buttonTitle={HomePageImageTrailPropsArray[activeIndex].buttonTitle}
          navigateTo={HomePageImageTrailPropsArray[activeIndex].navigateTo}
          SecondButtonTitle={
            HomePageImageTrailPropsArray[activeIndex].SecondButtonTitle
          }
          showSecondButtonIcon={
            HomePageImageTrailPropsArray[activeIndex].showSecondButtonIcon
          }
          secondButtonNavigateTo={
            HomePageImageTrailPropsArray[activeIndex].secondButtonNavigateTo
          }
          containerClassName="h-dvh"
          className="justify-center"
        />
      </div>
    </>
  );
};

export default Home;
