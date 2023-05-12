import { ChangeEvent, useCallback, useEffect, useState } from "react";

interface Validation {
  isEmpty?: boolean;
  minLength?: number;
}

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
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [minLengthError, setMinLengthError] = useState<boolean>(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLengthError":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
      }
    }
  }, [value]);

  return { isEmpty, minLengthError };
};
