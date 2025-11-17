import { stack } from "@datastructures/stack";
import { createButton, createInput } from "@datastructures/components";
import "./style.css";
let currentStack = stack();
const controlsEl = document.getElementById("controls");
const lengthDisplay = document.getElementById("lengthDisplay");
const stackContainer = document.getElementById("stackContainer");
const logContainer = document.getElementById("logContainer");
const updateDisplay = () => {
    const items = currentStack.print();
    const length = currentStack.length();
    lengthDisplay.textContent = String(length);
    if (items.length === 0) {
        stackContainer.innerHTML =
            '<div class="text-slate-400 italic py-12 text-center">Stack is empty</div>';
    }
    else {
        stackContainer.innerHTML = items
            .map((item, index) => `
        <div class="w-full max-w-md bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4 rounded-lg flex justify-between items-center animate-slide-in shadow-lg" style="animation-delay: ${index * 0.05}s">
          <span class="font-semibold text-lg">${item}</span>
          <span class="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">${index}</span>
        </div>
      `)
            .reverse()
            .join("");
    }
};
const addLog = (operation, value) => {
    const logEntry = document.createElement("div");
    logEntry.className =
        "p-2 font-mono text-sm text-slate-400 border-l-2 border-slate-600 pl-4 mb-2 animate-slide-in";
    const timestamp = new Date().toLocaleTimeString();
    logEntry.textContent = `[${timestamp}] ${operation}${value !== undefined ? `: ${value}` : ""}`;
    logContainer.insertBefore(logEntry, logContainer.firstChild);
    if (logContainer.children.length > 10) {
        logContainer.removeChild(logContainer.lastChild);
    }
};
const itemInput = createInput({
    placeholder: "Enter item to push...",
    onEnter: (value) => {
        if (!value.trim())
            return;
        currentStack = currentStack.add(value);
        addLog("Push", value);
        updateDisplay();
        itemInput.value = "";
        itemInput.focus();
    },
});
const pushBtn = createButton({
    text: "Push",
    onClick: () => {
        const value = itemInput.value.trim();
        if (!value)
            return;
        currentStack = currentStack.add(value);
        addLog("Push", value);
        updateDisplay();
        itemInput.value = "";
        itemInput.focus();
    },
});
const popBtn = createButton({
    text: "Pop",
    variant: "danger",
    onClick: () => {
        const items = currentStack.print();
        if (items.length === 0) {
            addLog("Pop failed - stack is empty");
            return;
        }
        const poppedValue = items[items.length - 1];
        currentStack = currentStack.remove();
        addLog("Pop", poppedValue);
        updateDisplay();
    },
});
const clearBtn = createButton({
    text: "Clear",
    variant: "secondary",
    onClick: () => {
        currentStack = stack();
        addLog("Clear stack");
        updateDisplay();
    },
});
const inputGroup = document.createElement("div");
inputGroup.className = "flex gap-2 flex-1 min-w-[250px]";
inputGroup.appendChild(itemInput);
inputGroup.appendChild(pushBtn);
controlsEl.appendChild(inputGroup);
controlsEl.appendChild(popBtn);
controlsEl.appendChild(clearBtn);
updateDisplay();
addLog("Stack initialized");
