function TextareaField({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-[#5A524A] font-medium">
        {label}
      </label>

      <textarea
        className="border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8FA98A]"
        rows="4"
        {...props}
      />
    </div>
  )
}

export default TextareaField