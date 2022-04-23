import React,{useEffect,useState} from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,Textarea,Badge
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  contact: Joi.number().integer().required(),
  message: Joi.string().required()
});

function Contact() {

   const [length,setLength] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(()=>{

  },[])
  let handleInputChange = (e) => {
    let inputValue = e.target.value
    console.log(inputValue.length)
    setLength((prev)=>{return inputValue.length})
  }
  return (
    <div
      className="sm:w-full sm:flex sm:justify-center mx-5 sm:mx-0"
      id="experience"
    >
      <div>
        <div className="sm:text-3xl text-xl font-bold underline underline-offset-4 mx-5 sm:mt-10 mt-5">
          Contact Me
        </div>

        <div className=" sm:w-96 mx-5 mt-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl
              isInvalid={errors.email?.message || errors.contact?.message || errors.message?.message}
            >
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input id="email" type="email" {...register("email")} />
              {!errors.email?.message ? (
                <FormHelperText>
                  We&apos;ll never share your email.
                </FormHelperText>
              ) : (
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              )}

              <FormLabel htmlFor="contact">Contact number</FormLabel>
              <Input id="contact" type="number" {...register("contact")} />
              {!errors.contact?.message ? (
                <FormHelperText>
                  We&apos;ll never share your contact number.
                </FormHelperText>
              ) : (
                <FormErrorMessage>{errors.contact?.message}</FormErrorMessage>
              )}

              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea maxlength="400" onChange={handleInputChange} {...register('message')} id="message" placeholder="Enter your message here..."/>
              {!errors.message?.message ? (
                <FormHelperText className="text-right">
<Badge>{length}/400</Badge>
                </FormHelperText>
              ) : (
                <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
              )}
            </FormControl>

            <div className="flex justify-center ">
              <Button
                className="mt-2"
                variant="outline"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
