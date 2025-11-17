export type ButtonVariant = "primary" | "secondary" | "danger"

export interface ButtonOptions {
  text: string
  onClick: () => void
  variant?: ButtonVariant
  disabled?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-400",
  secondary: "bg-slate-600 text-white hover:bg-slate-500 disabled:bg-slate-400",
  danger: "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-400",
}

export const createButton = (options: ButtonOptions): HTMLButtonElement => {
  const button = document.createElement("button")
  const variant = options.variant || "primary"

  button.textContent = options.text
  button.disabled = options.disabled || false
  button.className = `px-6 py-3 rounded-lg font-semibold transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]}`

  button.addEventListener("click", options.onClick)

  return button
}
