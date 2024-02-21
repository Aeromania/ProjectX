import { useNavigate } from "react-router-dom";
// @ts-expect-error "no type for image";
import astronaut from "../../assets/images/astronaut.svg";
import "./styles/main.scss";
import EncryptButton from "@/components/EncryptButton";

const NotFound: React.FC = (): React.JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="NotFound__container">
      <main className="NotFound__content">
        <div className="message">
          <strong className="strong__tag">404</strong>
          <p className="title p__tag">LOOKS LIKE YOU ARE LOST IN THE SPACE</p>
          <p className="message-text p__tag">
            The page you are looking for might be removed or is temporally
            unavailable
          </p>
          <EncryptButton
            title="Go Back"
            showIcon={false}
            onClick={() => navigate(-1)}
            className="text-lg hover:border-purple-800 hover:text-[#ffcb39] hover:shadow-md hover:shadow-slate-900 lg:px-20 lg:py-3 lg:text-xl xl:px-20"
            customAnimationColor="via-violet-400/100"
          />
        </div>
      </main>
      <div className="box-astronaut">
        <img
          className="astronaut__image"
          src={astronaut}
          alt="astronaut not found"
        />
      </div>
    </div>
  );
};

export default NotFound;
