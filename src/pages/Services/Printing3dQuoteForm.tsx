import { CustomInput } from "@/components/CustomInput";
import { useState, FormEvent, useEffect } from "react";
import FileUploadComponent from "./FileUploadComponent";
import SelectMenu from "./SelectMenu/SelectMenu";
import {
  FDMPrintSelectMenuOptions,
  SLAPrintSelectMenuOptions
} from "./constants";
import { RadioButtonGroup } from "@/components/RadioButtonGroup";
import { useNavigate } from "react-router-dom";
import { NavRoutes } from "@/components/constants";

const StudentRadioButtonOptions = {
  Yes: "Yes",
  No: "No"
} as const;

const PrintRadioButtonOptions = {
  FDM: "FDM",
  SLA: "SLA"
} as const;

export interface STLFile extends File {}

const Printing3dQuoteForm: React.FC = (): React.JSX.Element => {
  const MAX_CHAR_LENGTH = 3000;

  const numberRegex = new RegExp("^[1-9]\\d{9}$");

  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<number>();
  const [clientType, setClientType] = useState<string>(
    StudentRadioButtonOptions.No
  );
  const [printType, setPrintType] = useState<string>(
    PrintRadioButtonOptions.FDM
  );

  const [uploadedFiles, setUploadedFiles] = useState<STLFile[]>([]);
  const [message, setMessage] = useState<string>("");

  //@ts-expect-error "S"
  const [selectedMaterial, setSelectedMaterial] = useState<string | undefined>(
    undefined
  );

  const handleFormSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      "This feature will be live soon. Please explore other parts of our website in the meanwhile"
    );
    navigate("/" + NavRoutes.BLOGS);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setSelectedMaterial("");
  }, [printType]);

  return (
    <section className="flex min-h-dvh w-full justify-center text-white">
      <div className="flex w-[90%] flex-col gap-12 py-16 sm:w-[55%] lg:py-32 2xl:w-[40%]">
        <div className="flex flex-col gap-2">
          <h1 className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text py-2 text-center text-2xl font-bold capitalize text-transparent lg:text-4xl">
            From concept to creation <br /> Request a 3D printing quote today
          </h1>
          <p className="text-center text-sm text-[#CECECE]">
            You wil get a response with 24 hours.
          </p>
        </div>
        <form
          className="flex w-full flex-col gap-6"
          onSubmit={handleFormSubmission}
        >
          <CustomInput
            type="text"
            placeholder="Name/Company Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CustomInput
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            type="number"
            placeholder="Phone Number"
            required
            value={number}
            maxLength={10}
            onChange={(e) => {
              const inputValue = e.target.value;
              if (numberRegex.test(inputValue)) {
                e.target.setCustomValidity("");
                setNumber(parseInt(inputValue));
              } else {
                setNumber(parseInt(inputValue));
                e.target.setCustomValidity(
                  "Invalid phone number. Must be 10 digits"
                );
              }
            }}
          />
          {/* Student */}
          <div className="flex items-center gap-4">
            <label className="px-3 text-muted-foreground">
              Are you a student?
            </label>
            <RadioButtonGroup
              selectedValue={clientType}
              onValueChange={setClientType}
              options={StudentRadioButtonOptions}
            />
          </div>
          {/* Print */}
          <div className="flex items-center gap-4">
            <label className="px-3 text-muted-foreground">
              Which print do you want?
            </label>
            <RadioButtonGroup
              selectedValue={printType}
              onValueChange={setPrintType}
              options={PrintRadioButtonOptions}
            />
          </div>
          {/* Select material */}
          <SelectMenu
            options={
              printType === PrintRadioButtonOptions.FDM
                ? FDMPrintSelectMenuOptions
                : SLAPrintSelectMenuOptions
            }
            onValueChange={setSelectedMaterial}
          />
          {/* Upload files */}
          <FileUploadComponent
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
          />
          {/* Client Message */}
          <div className="block w-full">
            <textarea
              rows={5}
              maxLength={MAX_CHAR_LENGTH}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              className="w-full resize-none rounded-lg border border-neutral-700 bg-black p-3 text-white outline-none placeholder:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-input"
              aria-label="message"
              placeholder="Want us to know something..."
            ></textarea>
            <span className="mr-2 block text-end text-xs text-[#9CA3AF]">
              {`${message?.length}/${MAX_CHAR_LENGTH}`}
            </span>
          </div>
          <CustomInput
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center border text-center hover:font-medium active:scale-95"
          />
        </form>
      </div>
    </section>
  );
};

export default Printing3dQuoteForm;
