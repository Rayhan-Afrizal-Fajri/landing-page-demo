export default function ThemeToggle({ theme, setTheme }) {
  const isAlt = theme === "alt";

  return (
    <label className="inline-flex items-center cursor-pointer text-accent1">
      {/* <span className="select-none text-sm font-medium">
        Brand
      </span> */}

      <input
        type="checkbox"
        className="sr-only peer"
        checked={isAlt}
        onChange={() => setTheme(isAlt ? "default" : "alt")}
      />

      <div className="
        relative mx-3 w-9 h-5
        bg-secondary 
        rounded-full 
        peer-focus:outline-none 
        peer-focus:ring-4 
        peer-checked:bg-secondary
        after:content-[''] 
        after:absolute 
        after:top-[2px] 
        after:left-[2px] 
        after:h-4 
        after:w-4 
        after:rounded-full 
        after:bg-[#ECECEC] 
        after:transition-all
        peer-checked:after:translate-x-4
      " />

      {/* <span className="select-none text-sm font-medium">
        Clean
      </span> */}
    </label>
  );
}
