import * as React from "react";
import "./VerificationForm.css";
import Box from "@mui/material/Box";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

import { useForm } from "react-hook-form";

const URL = "https://payproglobal.com/";

export const VerificationForm = () => {
  const {
    handleSubmit,
    formState: { isValid, errors },
    control,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      url: "",
    },
  });

  const sendRequest = (data) => {
    fetch(data.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: data.email}),
    })
      .then((data) => {
        console.log(data);
        window.location.href = URL;
      })
      .catch((error) => {
        console.error(error);
        window.location.href = URL;
      });
  };

  return (
    <>
      {control && (
        <form onSubmit={handleSubmit(sendRequest)}>
          <Box className="validation">
            <p className="get-started">
              Let’s get started with this simple verification.
            </p>
            <Input
              control={control}
              label="Email verification"
              name="email"
              placeholder="example@mail.com"
              pattern={{
                value: /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                message: "Looks like it’s not an email. Check it.",
              }}
            />
            <Input
              control={control}
              label="Verification URL"
              name="url"
              placeholder="https://"
              validate={{
                security: (value) => /^https:\/\//.test(value),
                validity: (value) => /^(http(s):\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(value),
              }}
              errorMessage={
                errors.url && errors.url.type === "security"
                  ? "What about security bro?"
                  : "Url is not valid"
              }
            />
          </Box>
          <Button name="Move forward" disabled={!isValid} type="submit" />
        </form>
      )}
    </>
  );
};
