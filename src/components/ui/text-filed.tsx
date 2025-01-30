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
      <label className="block text-sm mb-1 text-[#0F0F0F] font-medium">
        {label}
      </label>
      {type === "text-input" ? (
        <input
          type="text"
          className="w-full border border-[#E0E0E0] rounded-full bg-[#F6F6F6] py-2 px-3 focus:border-[#EF9241] focus:outline-none transition-all duration-200 sm:text-base md:text-lg"
          placeholder={placeholder}
        />
      ) : (
        <textarea
          rows={4}
          className="w-full border border-[#E0E0E0] rounded-2xl bg-[#F6F6F6] py-2 px-3 focus:border-[#EF9241] focus:outline-none transition-all duration-200 sm:text-base md:text-lg"
          placeholder={placeholder}
        ></textarea>
      )}
    </div>
  );
};
