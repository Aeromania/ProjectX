import { FormEvent, useState } from "react";
import { CustomInput } from "./CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor: React.FC<{ buttonTitle: string }> = ({
  buttonTitle
}): React.JSX.Element => {
  // <-- useState variables -->
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [content, setContent] = useState<string>("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [{ script: "sub" }, { script: "super" }],
      [{ font: [] }],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      [{ direction: "rtl" }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image", "video"],
      ["clean"]
    ]
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "script",
    "font",
    "align",
    "color",
    "background",
    "direction",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "Video"
  ];

  const submitBlog = (e: FormEvent) => {
    e.preventDefault();
    const blogData = new FormData();
    blogData.set("title", title);
    blogData.set("summary", summary);
    if (thumbnail) {
      blogData.set("thumbnail", thumbnail);
    }
    blogData.set("Content", content);
  };

  return (
    <form
      className="flex w-full flex-col items-center justify-center px-4 py-6 text-white"
      onSubmit={submitBlog}
    >
      <CustomInput
        type="title"
        placeholder={"Title"}
        onChange={(ev) => setTitle(ev.target.value)}
        value={title}
      />
      <CustomInput
        type="summary"
        placeholder={"Summary"}
        onChange={(ev) => setSummary(ev.target.value)}
        value={summary}
      />
      <CustomInput
        type="file"
        accept="image/jpg image/jpeg image/png image/webp"
        onChange={(ev) => setThumbnail(ev.target.files?.[0] || null)}
        name="thumbnail"
      />
      <ReactQuill
        className="mt-6 w-full text-white"
        modules={modules}
        formats={formats}
        theme="snow"
        onChange={(value) => setContent(value)}
        value={content}
      />
      <input
        type="submit"
        value={buttonTitle}
        className="mt-4 w-full cursor-pointer rounded-md bg-slate-300 py-4 font-medium text-slate-700 transition-colors duration-300 ease-in-out hover:bg-slate-400 active:bg-slate-500"
      />
    </form>
  );
};

export default TextEditor;
