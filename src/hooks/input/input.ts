import { ChangeEvent, useCallback, useEffect, useState } from "react";

interface Validation {
  checkEmpty?: boolean;
  minLength?: number;
}

type KeyValueObj = { [key: string]: any };

export const useInput = (initialValue: any, validations: Validation) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState<boolean>(false);

  const valid = useValidation(value, validations);
  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const onBlur = (e: any) => setDirty(true);

  return { onChange, value, onBlur, ...valid };
};

export const useValidation = (value: any, validations: any) => {
  const [error, setError] = useState<boolean>(false);

  const [helperText, setHelperText] = useState<string>("");

  const checkLength = (validation: string) => {
    if (value.length < validations[validation]) setError(true);
    setHelperText(`Длина должна быть ${validations.minLength}`);
    return "";
  };

  const checkEmpty = () => {
    if (!value.length) {
      setError(true);
      setHelperText("Обязательное поле");
    }
    return "";
  };

  useEffect(() => {
    for (const validation in validations) {
      const validationObj: KeyValueObj = {
        ["minLength"]: checkLength(validation),
        ["checkEmpty"]: checkEmpty(),
      };

       validationObj[validation];
    }
  }, [value]);

  // return { isEmpty, minLengthError };
  return { error, helperText };
};
