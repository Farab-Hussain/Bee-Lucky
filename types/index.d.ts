import { buttonVariants } from "@/components/ui/button";

declare module "@/types" {
  interface AuthButtonProps {
    text: string;
    type: "button" | "submit";
    loading?: boolean;
  }

  interface AuthInputProps {
    apiError?: string;
    errors?: string;
    name: string;
    placeholder?: string;
    type: "text" | "email" | "password";
    isRequired?: boolean;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    hookfn: ReturnType<typeof import("react-hook-form").useFormRegister>;
  }

  interface navButtonProps {
    text: string;
    handleClick?: () => void;
  }

  interface ProviderButtonProps {
    name: string;
    handleClick?: () => void;
    icon: string;
  }

  interface CustomBtnProps {
    Text: string;
    handleClick?: () => void;
    textStyles?: string;
    buttonStyles?: string;
    disabled?: {};
  }
}
