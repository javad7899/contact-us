import Button from "@/components/ui/button";
import { TextField } from "@/components/ui/text-filed";

const ContactFrom = () => {
  return (
    <form className="mt-8 w-full flex items-end flex-col gap-6 px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full">
        <TextField
          label="ایمیل"
          placeholder="مثلا ali1234@gmail.com"
          type="text-input"
        />
        <TextField
          label="نام و نام خانوادگی"
          placeholder="مثلا حسین علیمردانی"
          type="text-input"
        />
      </div>
      <TextField label="موضوع" placeholder="موضوع" type="text-input" />
      <TextField
        label="پیام شما"
        placeholder="پیام خود را بنویسید..."
        type="textarea"
      />
      <Button label="ارسال پیام" size="large" />
    </form>
  );
};

export default ContactFrom;
