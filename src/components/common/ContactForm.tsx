import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-[3rem]">
      <h5 className="text-[1.6rem] leading-[2.6rem] font-medium tracking-[0.1px]">
        Contact Form
      </h5>

      <div className="grid grid-cols-2 gap-x-[3rem] gap-y-[1.6rem]">
        <Input
          type="text"
          placeholder="First name"
          className="h-[4rem] bg-white"
        />

        <Input
          type="text"
          placeholder="Last name"
          className="h-[4rem] bg-white"
        />

        <Input type="text" placeholder="Email" className="h-[4rem] bg-white" />

        <Input
          type="text"
          placeholder="Phone number"
          className="h-[4rem] bg-white"
        />

        <div className="col-span-2">
          <Textarea
            placeholder="Type your message here."
            className="rounded-[.8rem] bg-white"
          />
        </div>

        <div className="col-span-2">
          <Button>Send a message</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
