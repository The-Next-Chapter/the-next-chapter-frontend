const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {

  const baseStyles =
    "px-5 py-2 rounded-md font-medium transition inline-flex items-center justify-center"

  const variants = {
    primary: "bg-[#C9B38C] text-white hover:opacity-90",
    outline: "border border-[#C9B38C] text-[#5A524A] hover:bg-[#F3EEE8]"
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button