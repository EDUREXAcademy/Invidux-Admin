import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";


interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  loading: boolean;
  btnColor?: string;
  textColor?: string;
  width?: string;
  children: React.ReactNode;
  disabled?: boolean
  success?: boolean;
  outlined?: boolean;
  fullWidth?: boolean;
  danger?: boolean;
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  success?: boolean;
  danger?: boolean;
  variant?: "dark" | "light" | 'outline';
}

export const Button = (props: IButton) => {
  const { children, fullWidth, disabled, success, danger, variant = "dark" } = props;
  return (
    <>
    <button
      type='button'
      disabled={disabled}
      {...props}
      className={clsx(
        "flex justify-center items-center gap-2 px-8 py-3 rounded-[8px] capitalize cursor-pointer transition-all",
        {
          "w-full": fullWidth === true,
          "bg-zinc-300 text-neutral-500 hover:bg-zinc-600 hover:text-white":
            variant === "light",
          "bg-zinc-300 hover:bg-zinc-600 hover:text-white hover:cursor-not-allowed":
            variant === "light" && disabled,
          "bg-[#090909] text-white hover:bg-[#3e3e3e] hover:text-white":
            variant === "dark",
          "bg-zinc-300 text-neutral-500 hover:bg-zinc-400 hover:cursor-not-allowed":
            variant === "dark" && disabled,
            "border border-black text-black hover:bg-[#3e3e3e] hover:text-white hover:border-white":
            variant === "outline",
          "bg-green-600  text-white hover:bg-white hover:text-black ":
            variant === "light" && success,
            "bg-red-500  text-white hover:bg-red-600 ":
            variant === "light" && danger,
        }
      )}
    >
      {children}
    </button>
    </>
  );
};

export const ForwardButton = (props: IButton) => {
  const { children, fullWidth, disabled, success, danger, variant = "dark" } = props;
  return (
    <button
      type='button'
      disabled={disabled}
      {...props}
      className={clsx(
        "flex justify-center items-center gap-2 px-8 py-3 rounded-[8px] capitalize cursor-pointer transition-all",
        {
          "w-full": fullWidth === true,
          "bg-zinc-300 text-neutral-500 hover:bg-zinc-600 hover:text-white":
            variant === "light",
          "bg-zinc-300 hover:bg-zinc-600 hover:text-white hover:cursor-not-allowed":
            variant === "light" && disabled,
          "bg-[#090909] text-white hover:bg-[#3e3e3e] hover:text-white":
            variant === "dark",
          "bg-zinc-300 text-neutral-500 hover:bg-zinc-400 hover:cursor-not-allowed":
            variant === "dark" && disabled,
            
          "bg-green-600  text-white hover:bg-white hover:text-black ":
            variant === "light" && success,
            "bg-red-500  text-white hover:bg-red-600 ":
            variant === "light" && danger,
        }
      )}
    >
      {children} <ArrowRight />
    </button>
  );
};

export const BackButton = (props: IButton) => {
  const { children, fullWidth, disabled, success, danger, variant = "dark" } = props;
  return (
    <button
      type='button'
      disabled={disabled}
      {...props}
      className={clsx(
        "flex justify-center items-center gap-2 px-8 py-3 rounded-[8px] capitalize cursor-pointer transition-all",
        {
          "w-full": fullWidth === true,
          "bg-zinc-300 text-neutral-500 hover:bg-zinc-600 hover:text-white":
            variant === "light",
          "bg-zinc-300 hover:bg-zinc-600 hover:text-white hover:cursor-not-allowed":
            variant === "light" && disabled,
          "bg-[#090909] text-white hover:bg-[#3e3e3e] hover:text-white":
            variant === "dark",
          "bg-zinc-300 text-neutral-500 hover:bg-zinc-400 hover:cursor-not-allowed":
            variant === "dark" && disabled,
            
          "bg-green-600  text-white hover:bg-white hover:text-black ":
            variant === "light" && success,
            "bg-red-500  text-white hover:bg-red-600 ":
            variant === "light" && danger,
        }
      )}
    >
      <ArrowLeft/> {children}
    </button>
  );
};


export const LoadingButton = ( props: LoadingButtonProps) => {
  const { children, success, outlined, loading = false, fullWidth, width, disabled, danger, textColor, btnColor = "bg-black"} = props;
  return (
    <button
      disabled = {disabled}
      type="submit"
      {...props}
      className={clsx(
        `py-4 rounded-lg outline-none border-none flex justify-center mx-auto hover:bg-secondary`,
        `${btnColor} ${textColor} ${width} ${loading && "bg-[#ccc]"} ${disabled && "bg-green-300 hover:cursor-not-allowed hover:bg-[#ccc]"} ${success && "bg-secondary hover:bg-white hover:text-black"} 
        ${outlined && "text-black bg-white hover:bg-secondary hover:text-white"} ${fullWidth && "w-full md:w-full"} ${danger && "bg-red-500"}`
      )}
    >
      {loading ? (
        <div className="flex items-center">
        
          <span className="text-slate-500 inline-block">Loading...</span>
        </div>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};