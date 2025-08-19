import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-[#00FFF0] dark:bg-[#00FFF0] border border-[#0000004D] text-black font-bold hover:bg-[#70FFF7] active:bg-[#00FFF0]",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "bg-transparent border border-[#0E9384] dark:border-button-primary text-primary font-bold hover:bg-[#00FFF01A] active:bg-[#080A0A]",
        secondary:
          "bg-[#1C1F20] border border-[#FFFFFF]/10 dark:border-[#FFFFFF1A]/10 text-[#00FFF0] dark:text-[#00FFF0] font-bold hover:bg-[#00FFF01A] active:bg-[#080A0A]",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "py-3 px-5 rounded-2xl text-[16px]",
        sm: "py-1 px-2 rounded-lg text-[10px]",
        lg: "py-2 px-3 rounded-xl text-[12px]",
        icon: "size-9",
      },
    },
    compoundVariants: [
      // Add shadows only for default and outline variants
      {
        variant: ["default", "outline"],
        size: "default",
        class: "shadow-[0_10px_8px_#00FFFF1A,0_4px_0px_#00B3B3] hover:shadow-[0_4px_8px_#00FFFF1A,0_2px_0px_#00B3B3] active:shadow-[0_2px_8px_#00FFFF1A,0_1px_0px_#00B3B3]"
      },
      {
        variant: ["default", "outline"],
        size: "sm",
        class: "shadow-[0_2px_4px_#00FFFF1A,0_1px_0px_#00B3B3] hover:shadow-[0_1px_4px_#00FFFF1A,0_1px_0px_#00B3B3] active:shadow-[0_1px_2px_#00FFFF1A,0_0px_0px_#00B3B3]"
      },
      {
        variant: ["default", "outline"],
        size: "lg",
        class: "shadow-[0_4px_4px_#00FFFF1A,0_2px_0px_#00B3B3] hover:shadow-[0_2px_4px_#00FFFF1A,0_1px_0px_#00B3B3] active:shadow-[0_2px_2px_#00FFFF1A,0_1px_0px_#00B3B3]"
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }