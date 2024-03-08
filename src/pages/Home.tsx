import Intro from "../assets/videos/xlabs_intro.mp4";
import Thumbnail from "../assets/images/xlabs_thumbnail.png";

const Home: React.FC = (): React.JSX.Element => {
  return (
    <section className="min-h-dvh bg-black text-white">
      <div className="h-dvh w-full">
        <video
          src={Intro}
          autoPlay={true}
          loop={true}
          muted
          poster={Thumbnail}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Home;
