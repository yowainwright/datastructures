export interface InputOptions {
  placeholder?: string
  value?: string
  onEnter?: (value: string) => void
  onChange?: (value: string) => void
}

export const createInput = (options: InputOptions = {}): HTMLInputElement => {
  const input = document.createElement("input")

  input.type = "text"
  input.placeholder = options.placeholder || ""
  input.value = options.value || ""
  input.autocomplete = "off"
  input.className =
    "flex-1 px-4 py-3 border-2 border-slate-600 bg-slate-900 text-slate-100 rounded-lg text-base outline-none focus:border-indigo-500 transition-colors"

  if (options.onChange) {
    input.addEventListener("input", (e) => {
      const target = e.target as HTMLInputElement
      options.onChange?.(target.value)
    })
  }

  if (options.onEnter) {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const target = e.target as HTMLInputElement
        options.onEnter?.(target.value)
      }
    })
  }

  return input
}
