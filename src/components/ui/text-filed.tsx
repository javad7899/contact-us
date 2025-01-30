interface TextFieldProps {
  label: string;
  type: "text-input" | "textarea";
  placeholder?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  type,
  placeholder,
}) => {
  return (
    <div className="mb-4 w-full">
      <label className="block text-sm mb-1 text-[#0F0F0F]">{label}</label>
      {type === "text-input" ? (
        <input
          type={type === "text-input" ? "text" : "number"}
          className="w-full border border-[#F6F6F6] rounded-full bg-[#F6F6F6] py-2 px-3 focus:border-[#EF9241]"
          placeholder={placeholder}
        />
      ) : (
        <textarea
          rows={6}
          className="w-full border border-[#F6F6F6] rounded-2xl bg-[#F6F6F6] py-2 px-3 focus:border-[#EF9241]"
          placeholder={placeholder}
        ></textarea>
      )}
    </div>
  );
};
